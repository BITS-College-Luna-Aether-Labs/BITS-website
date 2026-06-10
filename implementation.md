# BITS College Frontend — Deployment Plan
**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion  
**Target:** Docker on Ubuntu Server (22.04 LTS)  
**Prepared for:** Production deployment of `bits-Home-page`

---

## 1. What This Application Is

This is the **BITS College public website** — a purely static/SSR-rendered marketing
frontend for an Ethiopian higher-education institution. It serves 21 pre-built pages
(home + 20 dynamic slugs) with no user accounts, no session state, and no database.

| Property | Detail |
|---|---|
| Framework | Next.js 15 (App Router, `output: "standalone"`) |
| Language | TypeScript 5.7, React 19 |
| Styling | Tailwind CSS 3 + Framer Motion 11 |
| Runtime port | **3333** |
| Database | **None required** |
| External services | Google Fonts (build-time only), YouTube embeds, `applications.bitscollege.edu.et` (form target) |
| Internal APIs | `/api/pdf` — serves two local accreditation PDFs from `public/images/` |
| Assets | ~27 MB of images, WebP, MP4 clips, PDFs in `public/images/` |

### Pages Generated at Build Time

```
/                           → Home (5 sections)
/who-we-are                 → About (tabbed, with PDF viewer)
/facilities                 → Facilities carousel
/partners-and-clients       → Partner logos
/faculty                    → 16 faculty profiles
/undergraduate-program      → Program overview
/graduate-program           → MSc IT Management
/research                   → Research areas
/software-engineering       → SE department
/information-technology-and-systems → ITS department
/undergrad-admission        → Admission requirements
/graduate-admission         → Graduate requirements
/scholarship-aid            → Scholarship info
/tuition                    → Tuition table (ETB)
/student-support            → Student services
/short-trainings            → Professional trainings
/college-news               → News listing (16 events)
/inauguration               → Event page
/student-appreciation-night → Event page
/workshop                   → Event page
/college-day                → Event page
/bootcamp                   → Summer bootcamp
/scholarship-recipients     → 2023/24 recipients
```

### Known Gaps Before Deploying

| Issue | Impact | Fix |
|---|---|---|
| `src/app/api/pdf/route.ts` is **not included** in the zip | The `/api/pdf` endpoint 404s at runtime | Add the missing route file (see Section 5) |
| Google Fonts fetched at **build time** — needs internet access | Build fails on an air-gapped server | Ensure outbound HTTPS from the build host |
| `bun.lock` present alongside `package-lock.json` | Dockerfile uses `npm` (correct), but CI tooling may pick up Bun | Commit only `package-lock.json` |
| Theme is in-memory only (no persistence) | Users lose dark-mode preference on refresh | Acceptable for a public info site; document if needed |
| `unsafe-inline` in CSP | Required by Next.js RSC hydration scripts | Known tradeoff; cannot be removed without breaking Next.js |

---

## 2. Server Sizing Recommendation

| Tier | vCPU | RAM | Disk | Use case |
|---|---|---|---|---|
| **Minimum** | 2 | 2 GB | 20 GB | Low traffic (<500 req/day) |
| **Recommended** | 2 | 4 GB | 40 GB | Normal production |
| **Comfortable** | 4 | 8 GB | 80 GB | High traffic + build CI on same box |

**OS:** Ubuntu 22.04 LTS  
**Reason:** The Next.js standalone Node server is lightweight (~70–100 MB RSS at idle).
The bulk of sizing requirement is the Docker build cache and the static assets.

---

## 3. Architecture Overview

```
Internet
    │  443/80
    ▼
┌──────────────────────────────────┐
│  Nginx (Docker)                  │  ← Reverse proxy, SSL termination,
│  Port 80 + 443                   │    static-asset caching, gzip
└────────────────┬─────────────────┘
                 │  http://app:3333
                 ▼
┌──────────────────────────────────┐
│  Next.js App (Docker)            │  ← Standalone Node server
│  Port 3333 (internal only)       │    Serves HTML, API, SSR
└──────────────────────────────────┘
         (Docker network: bits_net)
```

No database container is needed. No Redis/cache layer is needed at this scale.
If traffic grows beyond ~5,000 RPD, add a Cloudflare CDN layer in front.

---

## 4. Fixed & Production-Ready Dockerfile

The included `Dockerfile` is close but has two issues:
1. Dev dependencies are installed in the `deps` stage (wastes space)  
2. The runner stage `public` copy comes **before** the `nextjs` user exists (causes chown warnings)

Use this corrected version:

```dockerfile
# ─── Stage 1: Install dependencies ───────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
# Install production + dev deps needed for the build step
RUN npm ci --frozen-lockfile

# ─── Stage 2: Build ───────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ─── Stage 3: Lean production image ──────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3333
ENV HOSTNAME=0.0.0.0

# Create a non-root system user
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Public assets (served by Next.js standalone or Nginx)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Standalone server bundle
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static    ./.next/static

USER nextjs
EXPOSE 3333

# Standalone output entrypoint
CMD ["node", "server.js"]
```

**Key differences from the original:**
- `npm ci --frozen-lockfile` instead of `npm install` → reproducible, exact installs
- `--chown=nextjs:nodejs` applied to `public/` copy → no permission warnings
- `ENV HOSTNAME=0.0.0.0` moved inside runner → the app binds to all interfaces

---

## 5. The Missing PDF API Route

Add this file to your project at `src/app/api/pdf/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const ALLOWED_FILES = new Set([
  "graduate_accreditation.pdf",
  "undergraduate_accreditation.pdf",
]);

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get("file");

  if (!file || !ALLOWED_FILES.has(file)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    "About-Who we are",
    file
  );

  try {
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file}"`,
        "Cache-Control": "public, max-age=3600",
        "X-Frame-Options": "SAMEORIGIN",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
```

---

## 6. Docker Compose Setup

Create `docker-compose.yml` in the project root:

```yaml
version: "3.9"

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: bits_app
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - NEXT_TELEMETRY_DISABLED=1
      - PORT=3333
    expose:
      - "3333"          # Internal only — Nginx connects here
    networks:
      - bits_net
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3333/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 20s

  nginx:
    image: nginx:1.27-alpine
    container_name: bits_nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./certbot/www:/var/www/certbot:ro
      - ./certbot/conf:/etc/letsencrypt:ro
    networks:
      - bits_net
    depends_on:
      - app

  certbot:
    image: certbot/certbot:latest
    container_name: bits_certbot
    volumes:
      - ./certbot/www:/var/www/certbot
      - ./certbot/conf:/etc/letsencrypt
    entrypoint: >
      sh -c "trap exit TERM; while :; do
        certbot renew --quiet --webroot -w /var/www/certbot;
        sleep 12h & wait $${!};
      done"

networks:
  bits_net:
    driver: bridge
```

---

## 7. Nginx Configuration

### `nginx/nginx.conf`

```nginx
user  nginx;
worker_processes  auto;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
    access_log /var/log/nginx/access.log main;

    sendfile        on;
    tcp_nopush      on;
    keepalive_timeout 65;
    server_tokens   off;          # Hide Nginx version

    # Gzip
    gzip on;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_proxied    any;
    gzip_types      text/plain text/css text/javascript application/javascript
                    application/json application/xml image/svg+xml;

    include /etc/nginx/conf.d/*.conf;
}
```

### `nginx/conf.d/bits.conf`

Replace `yourdomain.com` with your actual domain (e.g. `www.bitscollege.edu.et`):

```nginx
# ─── HTTP → HTTPS redirect ────────────────────────────────────────────────────
server {
    listen 80;
    server_name yourdomain.com;

    # Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

# ─── HTTPS (main site) ────────────────────────────────────────────────────────
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate     /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    # ── Security headers (supplement what Next.js sets internally) ──
    add_header X-Robots-Tag "index, follow" always;
    add_header X-DNS-Prefetch-Control on always;

    # ── Static assets — cache for 1 year ────────────────────────────
    location /_next/static/ {
        proxy_pass http://app:3333/_next/static/;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
        proxy_http_version 1.1;
        proxy_set_header   Connection "";
    }

    # ── Public images & media — cache for 7 days ─────────────────────
    location /images/ {
        proxy_pass http://app:3333/images/;
        add_header Cache-Control "public, max-age=604800";
        proxy_http_version 1.1;
        proxy_set_header   Connection "";
    }

    # ── PDF API endpoint ──────────────────────────────────────────────
    location /api/pdf {
        proxy_pass         http://app:3333/api/pdf;
        proxy_http_version 1.1;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Connection "";
    }

    # ── Everything else → Next.js ─────────────────────────────────────
    location / {
        proxy_pass         http://app:3333;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade           $http_upgrade;
        proxy_set_header   Connection        "upgrade";
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;

        # Security headers not already set by Next.js
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    }
}
```

---

## 8. Environment Variables

This project has **no secrets**. The only runtime environment variables are:

| Variable | Value | Set in |
|---|---|---|
| `NODE_ENV` | `production` | Dockerfile & docker-compose.yml |
| `NEXT_TELEMETRY_DISABLED` | `1` | Dockerfile & docker-compose.yml |
| `PORT` | `3333` | Dockerfile |
| `HOSTNAME` | `0.0.0.0` | Dockerfile |

If you later add analytics, email forms, or a CMS, create a `.env.production` file and
**never** commit it. The `.dockerignore` already excludes `.env*` files.

**Do not** create a `.env` file for this project as-is — there is nothing to put in it.

---

## 9. Step-by-Step Deployment Guide

### Step 1 — Prepare the Ubuntu Server

```bash
# Update and install Docker + Compose
sudo apt update && sudo apt upgrade -y
sudo apt install -y ca-certificates curl gnupg

curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add your user to the docker group (avoids needing sudo)
sudo usermod -aG docker $USER
newgrp docker
```

### Step 2 — Upload the Project

```bash
# On your local machine
zip -r bits-deploy.zip . \
  --exclude "node_modules/*" \
  --exclude ".next/*" \
  --exclude ".git/*"

scp bits-deploy.zip user@YOUR_SERVER_IP:/opt/bits/

# On the server
sudo mkdir -p /opt/bits
cd /opt/bits
unzip bits-deploy.zip
```

### Step 3 — Add the Missing PDF API Route

Create the file `src/app/api/pdf/route.ts` with the content from Section 5 above.

### Step 4 — Create Nginx Config Directories

```bash
cd /opt/bits
mkdir -p nginx/conf.d certbot/www certbot/conf
```

Create `nginx/nginx.conf` and `nginx/conf.d/bits.conf` from Section 7.
At this point, comment out the SSL lines and certificate references — we need HTTP first
to obtain the certificate.

### Step 5 — Start Services (HTTP only first)

Temporarily use an HTTP-only Nginx config for the ACME challenge:

```nginx
# nginx/conf.d/bits.conf (temporary HTTP-only version)
server {
    listen 80;
    server_name yourdomain.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://app:3333;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

```bash
docker compose up -d
# Verify the app is responding
curl -I http://localhost:3333
```

### Step 6 — Obtain SSL Certificate

```bash
docker compose run --rm certbot certonly \
  --webroot \
  -w /var/www/certbot \
  -d yourdomain.com \
  --email your@email.com \
  --agree-tos \
  --no-eff-email
```

### Step 7 — Switch to Full HTTPS Config

Replace `nginx/conf.d/bits.conf` with the full HTTPS version from Section 7.

```bash
docker compose restart nginx
# Verify HTTPS
curl -I https://yourdomain.com
```

### Step 8 — Verify Everything

```bash
# App health
curl -s http://localhost:3333/   | head -5

# HTTPS redirect
curl -I http://yourdomain.com

# HTTPS works
curl -I https://yourdomain.com

# Static assets cached correctly
curl -I https://yourdomain.com/_next/static/chunks/main.js

# PDF API
curl -I "https://yourdomain.com/api/pdf?file=undergraduate_accreditation.pdf"

# All 3 Docker containers running
docker compose ps

# App logs
docker compose logs app --tail=50
```

### Step 9 — Set Up Auto-Renewal (Already in docker-compose.yml)

The `certbot` service in `docker-compose.yml` runs `certbot renew` every 12 hours.
No cron job needed. Verify it is working:

```bash
docker compose logs certbot --tail=20
```

---

## 10. Security Checklist

### What Next.js Already Handles (Built into `next.config.ts`)

- ✅ `Content-Security-Policy` — restrictive policy, tightened in production
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: SAMEORIGIN`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy` (camera, mic, geo all disabled)
- ✅ `Strict-Transport-Security` (HSTS, production only)
- ✅ `upgrade-insecure-requests` (production)
- ✅ No `dangerouslySetInnerHTML` on user input
- ✅ External links use `rel="noopener noreferrer"`
- ✅ PDF API uses allowlist (only 2 hardcoded files permitted)
- ✅ No secrets in client bundle

### What You Add with This Setup

- ✅ SSL/TLS with auto-renewal via Certbot
- ✅ Non-root container user (`nextjs:nodejs`, UID 1001)
- ✅ App port 3333 not exposed to the internet (internal Docker network only)
- ✅ Nginx `server_tokens off` (hides version number)
- ✅ Gzip compression enabled

### Additional Hardening Steps (Recommended)

```bash
# 1. UFW firewall — only ports 22, 80, 443 open
sudo ufw default deny incoming
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# 2. Fail2ban (brute-force SSH protection)
sudo apt install -y fail2ban
sudo systemctl enable --now fail2ban

# 3. Disable root SSH login
sudo sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sudo systemctl restart ssh

# 4. Automatic OS security updates
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

### Rate Limiting (Add to Nginx if Needed)

Add this to `nginx/nginx.conf` inside the `http {}` block:

```nginx
limit_req_zone $binary_remote_addr zone=api:10m rate=20r/s;
limit_req_zone $binary_remote_addr zone=main:10m rate=60r/s;
```

Then in `bits.conf` `location /api/ {}`:
```nginx
limit_req zone=api burst=40 nodelay;
```

---

## 11. Google Fonts — Build-Time Network Requirement

The app imports `Open_Sans`, `Roboto_Slab`, and `Playfair_Display` via `next/font/google`.
Next.js downloads and self-hosts these fonts **during the `npm run build` step**.
The build container needs outbound HTTPS (port 443) to `fonts.googleapis.com`
and `fonts.gstatic.com`.

**If your build server blocks outbound HTTP:**

Option A — Build locally, then copy the `.next/standalone` output to the server.  
Option B — Add the following to `Dockerfile` before `RUN npm run build`:

```dockerfile
ENV NEXT_FONT_GOOGLE_MOCKED_RESPONSES=1
```

This uses cached font stubs and skips the network call. Fonts will still render correctly
because they are included in the bundle.

---

## 12. Media Assets Note

The `public/images/News & Events/` directory contains **5 MP4 video files**
totalling approximately 10 MB. These are served directly by Next.js/Nginx.

For production with moderate traffic, consider:
- Moving MP4s to an object store (e.g., AWS S3, Cloudflare R2) and updating the `src`
  attributes in `NewsEventsContent.tsx` and the news detail components
- Adding `proxy_cache` to Nginx for `/images/` if the server has limited bandwidth

For low/medium traffic (<1,000 video plays/day), serving them from the container is fine.

---

## 13. Updating the Deployment

```bash
cd /opt/bits

# Pull new code
git pull   # or re-upload the zip

# Rebuild and restart with zero downtime
docker compose build app
docker compose up -d --no-deps app

# Verify
docker compose ps
docker compose logs app --tail=20
```

---

## 14. Monitoring (Optional but Recommended)

```bash
# Simple container health check
watch -n 5 'docker compose ps && docker stats --no-stream'

# Nginx access log
docker compose logs nginx -f

# App error log
docker compose logs app -f
```

For a proper monitoring stack, add Uptime Kuma (lightweight, Docker-friendly):

```yaml
# Add to docker-compose.yml services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: bits_uptime
    restart: unless-stopped
    volumes:
      - ./uptime-data:/app/data
    ports:
      - "3001:3001"
    networks:
      - bits_net
```

Then configure it to monitor `http://app:3333` internally.

---

## 15. Quick Reference

| Task | Command |
|---|---|
| Start all services | `docker compose up -d` |
| Stop all services | `docker compose down` |
| Rebuild app image | `docker compose build app` |
| View app logs | `docker compose logs app -f` |
| View Nginx logs | `docker compose logs nginx -f` |
| Restart Nginx | `docker compose restart nginx` |
| Shell into app | `docker compose exec app sh` |
| Renew cert manually | `docker compose run --rm certbot renew` |
| Check cert expiry | `docker compose exec certbot certbot certificates` |
| Check running containers | `docker compose ps` |

---

*Document prepared from full source analysis of `bits-Home-page` — Next.js 15, App Router, standalone output, port 3333.*