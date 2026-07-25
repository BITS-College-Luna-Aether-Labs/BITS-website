# Deployment

Production deployment of the BITS College frontend with Docker, Nginx, and Let's Encrypt.

| | |
|---|---|
| **Runtime port** | `3333` (internal) |
| **Images** | Bun (`oven/bun:1`) |
| **Author** | [NathenaelTamirat](https://github.com/NathenaelTamirat) |

---

## 1. What you are deploying

A public Next.js site with:

- Pre-rendered / SSR pages (no database)
- Static assets under `public/` (images, MP4, PDFs)
- Two APIs: `/api/pdf`, `/api/error`

```
Internet → Nginx :80/:443 → bits_app :3333
           Certbot renew loop (webroot)
```

---

## 2. Prerequisites

| Item | Notes |
|---|---|
| Host | Ubuntu 22.04 LTS recommended |
| Docker + Compose plugin | Required |
| Domain DNS | A/AAAA pointing at the server |
| Outbound HTTPS | Fonts are self-hosted; still useful for base image pulls |

**Sizing (guidance)**

| Tier | vCPU | RAM | Disk |
|---|---|---|---|
| Minimum | 2 | 2 GB | 20 GB |
| Recommended | 2 | 4 GB | 40 GB |

---

## 3. Critical build note — standalone output

The `Dockerfile` copies:

```
.next/standalone
.next/static
public/
```

Next only emits `.next/standalone` when `next.config.ts` includes:

```ts
const nextConfig: NextConfig = {
  output: "standalone",
  // ...existing config
};
```

**Verify this is present before `docker compose build`.** Without it, the runner stage fails or misses `server.js`.

---

## 4. Included Docker assets

| File | Role |
|---|---|
| `Dockerfile` | Multi-stage: `bun install` → `bun run build` → Bun runner as user `nextjs` |
| `docker-compose.yml` | Services: `app`, `nginx`, `certbot` on `bits_net` |
| `nginx/nginx.conf` | Gzip, logging, includes `conf.d` |
| `nginx/conf.d/bits.conf` | HTTP→HTTPS, SSL, proxy to `app:3333`, cache hints |

Replace `yourdomain.com` in `nginx/conf.d/bits.conf` with the real hostname (e.g. `www.bitscollege.edu.et`).

---

## 5. Environment

No application secrets are required.

| Variable | Typical value |
|---|---|
| `NODE_ENV` | `production` |
| `NEXT_TELEMETRY_DISABLED` | `1` |
| `PORT` | `3333` |
| `HOSTNAME` | `0.0.0.0` (Dockerfile) |

Do not commit `.env*` files. `.dockerignore` already excludes them.

---

## 6. Deploy steps (summary)

### 6.1 Server prep

Install Docker Engine + Compose; add deploy user to `docker` group; open UFW ports `22`, `80`, `443`.

### 6.2 Ship the code

```bash
git clone <repo-url> /opt/bits
cd /opt/bits
```

Ensure `output: "standalone"` is configured (Section 3).

### 6.3 First boot (HTTP for ACME)

Temporarily serve HTTP-only Nginx that proxies to `app` and exposes `/.well-known/acme-challenge/`, then:

```bash
docker compose up -d
docker compose run --rm certbot certonly \
  --webroot -w /var/www/certbot \
  -d yourdomain.com \
  --email your@email.com \
  --agree-tos --no-eff-email
```

Restore full HTTPS `bits.conf`, restart Nginx.

### 6.4 Verify

```bash
curl -I https://yourdomain.com
curl -I "https://yourdomain.com/api/pdf?file=undergraduate_accreditation.pdf"
docker compose ps
docker compose logs app --tail=50
```

Certbot renews every 12 hours via the compose entrypoint.

---

## 7. Update cycle

```bash
cd /opt/bits
git pull
docker compose build app
docker compose up -d --no-deps app
docker compose logs app --tail=20
```

---

## 8. Local production-like run (without Docker)

```bash
bun install
bun run build
bun run start   # http://localhost:3333
```

Dev:

```bash
bun run dev          # clears .next, port 3333
bun run dev:clean    # same
```

---

## 9. Nginx caching (current config)

| Location | Behavior |
|---|---|
| `/_next/static/` | Long-lived cache (`immutable`, 1y) |
| `/images/` | ~7 day cache (Nginx); Next also sets long cache via headers() |
| `/api/pdf` | Proxied (app sets `max-age=3600`) |
| `/` | Proxied to Next |

---

## 10. Media note

`public/images/News-Events/` includes multiple MP4 files. For low/medium traffic, serving from the container is fine. For heavier video traffic, consider object storage + CDN and update `videoSrc` in `NewsEventsContent`.

---

## 11. Operations cheat sheet

| Task | Command |
|---|---|
| Start | `docker compose up -d` |
| Stop | `docker compose down` |
| Rebuild app | `docker compose build app` |
| App logs | `docker compose logs app -f` |
| Nginx logs | `docker compose logs nginx -f` |
| Manual renew | `docker compose run --rm certbot renew` |

---

## 12. Related docs

- [ARCHITECTURE.md](./ARCHITECTURE.md) — runtime composition
- [SECURITY.md](./SECURITY.md) — CSP / headers / PDF allowlist
- [TECHNICAL_DOCUMENTATION.md](./TECHNICAL_DOCUMENTATION.md) — route & API reference

---

*Deployment guide by **NathenaelTamirat** · July 2026*
