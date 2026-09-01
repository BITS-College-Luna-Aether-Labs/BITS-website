# BITS College Home Page — Deployment Documentation

*Project A. This document is self-contained — you should be able to deploy this project by following it top to bottom without reading anything else. Every claim in here was checked against the actual source code, not assumed.*

---

## 1. Project Deployment Overview

### What this project is

This is the **public marketing website** for BITS College — built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS**. It has no database of its own. It runs on **Bun** (not plain Node.js) as its JavaScript runtime, both in development and in the production Docker image.

### Architecture, as it actually exists in the code

```
                         Browser
                            │
                            ▼
                  nginx (port 80/443)
                  ── TLS termination
                  ── static asset caching
                            │
                            ▼
              Next.js server (Bun, port 3333)
              ── Server Components render pages
              ── src/middleware.ts sets CSP headers
              ── 3 internal API routes:
                    /api/pdf     (serves 2 whitelisted PDFs from /public)
                    /api/error   (receives client-side error reports, logs them)
                    /api/cms     (proxies paginated post lists to the browser)
                            │
                            │  server-side HTTPS fetch (not a browser request)
                            ▼
              BITS-CMS API — a SEPARATE project, SEPARATE server
              (https://api.bitscollege.edu.et — see its own deployment doc)
```

**Important architectural fact:** this project and the CMS are **two independent deployments on two different servers**, talking to each other only over the public internet via HTTPS. There is no shared filesystem, no shared Docker network, no shared database. If you're looking for the database, there isn't one here — all dynamic content (News & Events posts) lives entirely in the CMS project.

### How the pieces actually communicate

1. **Browser → nginx → Next.js server:** every normal page request. nginx terminates TLS and proxies to the Next.js container on port 3333.
2. **Next.js server → CMS (server-side only):** the `/college-news` and `/college-news/[slug]` pages, and the sitemap, call functions in `src/lib/cms.ts` which `fetch()` the CMS's public API directly from the Next.js **server** (not the browser) at build/request time, using the `CMS_API_URL` environment variable. This is a plain HTTPS server-to-server call — CORS does not apply here because CORS is a browser-enforced mechanism.
3. **Browser → CMS (client-side, for two things only):**
   - **Images/video** referenced in a post are rendered as `<img src="https://api.bitscollege.edu.et/api/media/123">` — the *browser* loads these directly from the CMS's domain. This is why the CMS must have CORS/CSP configured to allow it (see Section 5).
   - **Pagination clicks** on `/college-news` call this project's *own* `/api/cms` route (same-origin, no CORS needed at all), which internally re-fetches from the CMS server-side and returns simplified JSON to the browser. This was a deliberate design choice: the browser never talks to the CMS's JSON API directly, only to images.
4. **No authentication happens on this project.** There's no login, no user accounts, no sessions here — that's entirely inside the CMS. This site is 100% public-read.

### Production deployment flow (the short version)

1. Code is built into a self-contained Node/Bun server bundle (`.next/standalone`) inside a Docker image.
2. That image runs as a container (`app`) on port 3333, **not exposed directly to the internet**.
3. An `nginx` container in front of it terminates TLS and reverse-proxies all traffic to `app`.
4. A `certbot` container automatically renews the Let's Encrypt SSL certificate.
5. All three containers are orchestrated by `docker-compose.yml` and run on **one server** — the YegaraHost VPS.

---

## 2. Required Deployment Environment

### Server specification
Per the project's own `DOCS/DEPLOYMENT.md`, which I've cross-checked against the Dockerfile and confirmed is reasonable for a Next.js SSR site with no database:

| Tier | vCPU | RAM | Disk |
|---|---|---|---|
| Minimum | 2 | 2 GB | 20 GB |
| Recommended | 2 | 4 GB | 40 GB |

There is no database here, so this server only needs to run the Next.js app + nginx + certbot — it's lighter than the CMS server.

### Operating system
**Ubuntu 22.04 LTS** is what the project's docs assume and what these instructions are written for. Any recent Debian/Ubuntu works; commands below use `apt` and `ufw`.

### Runtime versions
- **Bun 1.x** — this is not optional or interchangeable with plain Node.js for the Docker build. The `Dockerfile` uses the `oven/bun:1` base image and runs `bun install` / `bun run build` / `bun server.js`. If you don't have Docker available and are running this outside a container, you need Bun installed directly (not just Node) because `package.json`'s scripts and `bun.lock` are Bun-specific.
- **Docker Engine** + **Docker Compose plugin** (the `docker compose` subcommand, not the old standalone `docker-compose` binary — the compose file uses `version: "3.9"` syntax compatible with the plugin).
- **Node.js is not required on the host** — everything runs inside the Bun-based Docker image.

### Required dependencies (from `package.json`)
Production dependencies: `next` (15.x), `react`/`react-dom` (19.x), `dompurify` (sanitizes CMS-sourced HTML before rendering), `framer-motion`, `lucide-react`. All are installed automatically by `bun install` inside the Docker build — you never install these manually.

### Required external services
- **The BITS-CMS API**, reachable over HTTPS at whatever URL you set `CMS_API_URL` to. This project cannot show News & Events content without it, though the rest of the site (all the static marketing pages) works fine even if the CMS is completely down — see Section 6 and 7 for what "down" looks like.
- **A domain name** with DNS you control (for `www.bitscollege.edu.et` or whatever hostname you're using).
- **Let's Encrypt** (via certbot) for the SSL certificate — free, no account needed beyond an email address for renewal notices.

### Required environment variables

| Variable | Required? | Purpose | Where it's read |
|---|---|---|---|
| `NODE_ENV` | Yes, set to `production` | Enables production optimizations, disables dev-only CSP rules (`'unsafe-eval'`) | `next.config.ts`, `src/middleware.ts` |
| `NEXT_TELEMETRY_DISABLED` | Recommended, set to `1` | Stops Next.js from phoning home usage stats | build time |
| `PORT` | Yes, `3333` | Port the Next.js server listens on inside the container | Dockerfile, `docker-compose.yml` |
| `HOSTNAME` | Yes, `0.0.0.0` | Makes the server listen on all interfaces inside the container, not just `localhost` — without this, nginx can't reach it | Dockerfile |
| `CMS_API_URL` | Yes | Full base URL of the CMS API, e.g. `https://api.bitscollege.edu.et`. **This is not documented in the project's own `DOCS/DEPLOYMENT.md`** — that file predates the CMS integration and only lists `NODE_ENV`/`NEXT_TELEMETRY_DISABLED`/`PORT`/`HOSTNAME`. I confirmed by reading `src/lib/cms.ts` and `docker-compose.yml` that `CMS_API_URL` is real and required; the docs are just stale. Don't skip it. | `src/lib/cms.ts` |

There are **no secrets** in this project — no API keys, no passwords, nothing sensitive. Everything above is safe to put directly in `docker-compose.yml` or a plain `.env` file without special vault/secrets-manager handling.

---

## 3. Server Preparation

Do these once, the first time you set up the server.

### 3.1 Update the system and install basic tools
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git ufw
```
**Why:** you want a patched OS before opening any ports to the internet, and `curl`/`git` are needed for the steps below.

### 3.2 Install Docker Engine and the Compose plugin
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```
Then **log out and back in** (or run `newgrp docker`) — group membership changes don't apply to your current shell session.

**Why:** Docker isolates the app from the host OS (so a bug in the Next.js app can't touch the rest of the server) and makes the deployment reproducible — the exact same image runs the same way every time, regardless of what else is on the server.

**Verify:**
```bash
docker --version
docker compose version
```
Both commands must succeed before continuing.

### 3.3 Configure the firewall
```bash
sudo ufw allow 22/tcp    # SSH — do this FIRST or you'll lock yourself out
sudo ufw allow 80/tcp    # HTTP (needed for the Let's Encrypt challenge and HTTP→HTTPS redirect)
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```
**Why:** by default a fresh server has no firewall, meaning every port a process happens to open is reachable from the internet. This locks it down to exactly the three ports this project needs. Port 3333 (the app itself) is deliberately **not** opened — nginx is the only thing that should ever talk to it, and that happens over Docker's internal network, not the public internet.

**Verify:**
```bash
sudo ufw status
```
You should see exactly `22`, `80`, `443` listed as `ALLOW`.

### 3.4 Create a directory for the project
```bash
sudo mkdir -p /opt/bits-home
sudo chown $USER:$USER /opt/bits-home
```
**Why:** `/opt` is the conventional Linux location for self-contained third-party applications (as opposed to `/var/www`, which is more of an Apache/PHP convention, or your home directory, which isn't appropriate for something meant to run as a service). Owning it as your deploy user (instead of root) means you don't need `sudo` for every git pull and docker command later.

### 3.5 Point DNS at this server
In your domain registrar / DNS provider, create an **A record** (and **AAAA** if you have an IPv6 address) for your chosen hostname (e.g. `www.bitscollege.edu.et`) pointing at this server's public IP address.

**Why:** SSL certificate issuance (Section 4.6) requires the domain to already resolve to this server — Let's Encrypt verifies you control the domain by making an HTTP request to it.

**Verify** (after DNS propagates, which can take a few minutes to a few hours):
```bash
dig +short www.bitscollege.edu.et
```
This should print this server's IP address.

---

## 4. Application Deployment Steps

### 4.1 Get the source code
```bash
cd /opt/bits-home
git clone <your-repo-url> .
```
(Or `scp`/upload the code if you're not using git — either way it needs to end up in `/opt/bits-home`.)

### 4.2 `output: "standalone"` — already configured

The `Dockerfile` copies `.next/standalone` out of the build stage:
```dockerfile
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
```
Next.js only produces that folder if `next.config.ts` opts into it — and `next.config.ts` already does: `output: "standalone"` is set on line 7. **There is nothing to add or edit here.** This section only explains what the setting does: `next build` emits a self-contained server bundle (`.next/standalone`) containing the compiled app, its production dependencies, and a `server.js` entrypoint — exactly what the Dockerfile copies and runs. If that line is ever removed, the `COPY` step (or, depending on Docker version, the runtime entrypoint) breaks — see the Troubleshooting section.

### 4.3 Confirm the nginx config's domain

`nginx/conf.d/bits.conf` ships already configured for the real production hostname — both `server_name` directives read `www.bitscollege.edu.et` — so there is **no placeholder left to replace**. If you are deploying under a different hostname, update that file to match your actual domain before requesting the certificate in Section 4.6.

```bash
grep -n "server_name" nginx/conf.d/bits.conf   # should show www.bitscollege.edu.et
```
Whatever hostname you settle on here must exactly match the domain you request the certificate for in Section 4.6.

### 4.4 Set environment variables
Create a `.env` file in `/opt/bits-home` (this is read automatically by `docker compose` if present):
```bash
cat > .env << 'EOF'
CMS_API_URL=https://api.bitscollege.edu.et
EOF
```
The other variables (`NODE_ENV`, `PORT`, `HOSTNAME`, `NEXT_TELEMETRY_DISABLED`) are already hardcoded into `docker-compose.yml` and the `Dockerfile` — you don't need to set them yourself, but you can override `CMS_API_URL` here if the CMS is on a different URL for a staging environment, for example.

**No `.env` file is committed to git** (`.dockerignore` and `.gitignore` both exclude it) — this is correct and expected; you create it fresh on each server.

### 4.5 First boot — HTTP only (required for the SSL certificate step)
You cannot request an HTTPS certificate before nginx is running and reachable over plain HTTP, so bring everything up first in its normal configuration — the compose file's nginx config already handles both the ACME challenge path and the redirect, so this is actually just:
```bash
docker compose up -d --build
```
**What this does:** builds the `app` image (this is where the `output: "standalone"` config from Section 4.2 gets used — if it's ever removed, this step fails here), starts `app`, `nginx`, and `certbot`. At this point, `https://www.bitscollege.edu.et` will **fail** (no certificate exists yet) but `http://www.bitscollege.edu.et` will redirect to https and also fail — that's expected until the next step.

**Why build and start together:** `docker compose up -d --build` rebuilds the image if the Dockerfile or source changed, then starts containers in the background (`-d` = detached, so it doesn't block your terminal).

### 4.6 Request the SSL certificate
```bash
docker compose run --rm certbot certonly \
  --webroot -w /var/www/certbot \
  -d www.bitscollege.edu.et \
  --email you@bitscollege.edu.et \
  --agree-tos --no-eff-email
```
**What this does:** certbot places a verification file under `/var/www/certbot`, which nginx serves at `/.well-known/acme-challenge/` (already configured in `bits.conf`). Let's Encrypt fetches that file over HTTP to confirm you control the domain, then issues a certificate, saved into the `certbot/conf` volume that nginx also mounts.

**Why `--rm`:** this container's only job is to run once and exit; `--rm` cleans it up immediately instead of leaving a stopped container behind.

### 4.7 Restart nginx to pick up the new certificate
```bash
docker compose restart nginx
```
nginx reads certificate files at startup, so it needs restarting after they first appear.

### 4.8 Verify
```bash
curl -I https://www.bitscollege.edu.et
```
You should get `HTTP/2 200`. If you get a certificate error, double-check Section 4.3 and 4.6 used the exact same domain name.

### On background services, migrations, and process management
This project has **no background workers, no database, and no migrations** — there's nothing to run beyond the single `app` container. "Process management" here means Docker's own restart policy: `docker-compose.yml` sets `restart: unless-stopped` on every service, so if the container crashes or the server reboots, Docker restarts it automatically. There's no separate PM2/systemd layer needed because Docker is already doing that job.

---

## 5. Production Configuration

### Environment configuration
Production mode is controlled entirely by `NODE_ENV=production`, already baked into `docker-compose.yml` and the `Dockerfile`'s `ENV` instructions. This affects two things directly visible in the code:
- `next.config.ts` / `src/middleware.ts` use `isDev = process.env.NODE_ENV !== "production"` to decide whether to allow `'unsafe-eval'` in the Content-Security-Policy (dev-only, for hot reload) and whether to send the `Strict-Transport-Security` header (production-only).

### Database configuration
Not applicable — this project has no database.

### API configuration
The three internal API routes (`/api/pdf`, `/api/error`, `/api/cms`) require no configuration — they have no environment variables of their own and no external dependencies beyond `CMS_API_URL` for `/api/cms`.

### CORS configuration
This project does not need to configure CORS for incoming requests, because it has no browser-facing API that other origins would call. The only cross-origin concern runs the other direction — this site's *browser* loading images from the CMS's domain — which is governed by **Content-Security-Policy**, not CORS, and is already handled in `src/middleware.ts`'s `img-src`/`media-src`/`connect-src` directives, which explicitly allowlist `https://api.bitscollege.edu.et`. **If you ever change the CMS's domain, you must update this file** or images will silently fail to load (blocked by the browser, not a network error — check the browser console, not server logs, if this happens).

### Authentication configuration
Not applicable — there is no login on this project.

### File storage configuration
Static files (images, PDFs, videos referenced by the marketing pages) live in `public/` and are baked directly into the Docker image at build time — there's no runtime file upload or external storage bucket. The `/api/pdf` route deliberately only serves two specific whitelisted filenames (`graduate_accreditation.pdf`, `undergraduate_accreditation.pdf`) rather than any arbitrary file from disk — this is a safe design already in the code, not something you need to configure.

### External service configuration
The only external service is the CMS, configured via the single `CMS_API_URL` variable covered above.

### Production build configuration
`bun run build` (invoked automatically inside the Docker build) runs `next build`, which uses the `output: "standalone"` setting (already in `next.config.ts`, Section 4.2) to produce the lean `.next/standalone` server bundle the Dockerfile expects.

---

## 6. Testing After Deployment

### Confirm the application is running
```bash
docker compose ps
```
All three services (`app`, `nginx`, `certbot`) should show `Up` / `running` (`certbot` will show as running its renewal loop, not "healthy" — it has no healthcheck, that's normal).

```bash
docker compose exec app wget -qO- http://localhost:3333/
```
This confirms the Next.js server itself is responding *inside* the container, independent of nginx — useful for narrowing down whether a problem is in the app or in nginx/DNS/SSL.

### Test frontend functionality
Open `https://www.bitscollege.edu.et` in a real browser (not just `curl`) and check:
- The homepage loads with images and styling intact.
- Open DevTools → Console: there should be **zero** CSP violation errors. If you see `Refused to load the image... violates the following Content Security Policy directive` for a CMS image, see Section 7.
- Navigate to `/college-news` — this is the page that depends on the CMS being reachable. If the CMS is up, you should see real posts. If the CMS is down, you should see a friendly "temporarily unavailable" message, **not a crashed page** — if you see a Next.js error page instead, that's a bug worth investigating (the code is supposed to catch this).

### Test backend APIs (this project's own routes)
```bash
curl -I "https://www.bitscollege.edu.et/api/pdf?file=undergraduate_accreditation.pdf"
# expect: HTTP/2 200, Content-Type: application/pdf

curl -I "https://www.bitscollege.edu.et/api/pdf?file=not_a_real_file.pdf"
# expect: HTTP/2 404 (confirms the whitelist is working)

curl "https://www.bitscollege.edu.et/api/cms?page=1&limit=3"
# expect: JSON with a "posts" array — this confirms the CMS connection works end-to-end
```

### Test database connectivity
Not applicable — no database in this project.

### Test authentication
Not applicable — no authentication in this project.

### Test file uploads
Not applicable — this project doesn't accept uploads (uploads happen in the CMS, a separate project).

### Check logs
```bash
docker compose logs app --tail=100 -f     # -f follows in real time, Ctrl+C to stop
docker compose logs nginx --tail=100
```
Look for stack traces or repeated errors in `app`'s logs, and 4xx/5xx status codes in `nginx`'s access log.

### Check server health
```bash
docker compose exec app wget -qO- http://localhost:3333/    # app healthcheck target
htop            # if installed — check CPU/RAM headroom
df -h           # disk space
```
The `app` container has a Docker-level healthcheck already configured in `docker-compose.yml` (`wget http://localhost:3333/` every 30s) — `docker compose ps` will show `(healthy)` once it's passed a few checks after startup.

---

## 7. Troubleshooting Guide

### Build failures

**Symptom:** `docker compose build` fails with something like `COPY failed: file not found` mentioning `.next/standalone`.
**Cause:** `output: "standalone"` is missing from `next.config.ts`. In the current repository this should not happen — the setting is already present (Section 4.2) — so this points to a local edit or a checkout from before the setting was added, not a normal deployment risk on the current codebase.
**Solution:** confirm `output: "standalone"` is present in `next.config.ts`, restore it if your local checkout removed it, then re-run `docker compose up -d --build`.

**Symptom:** build fails during `bun install` with a lockfile mismatch error.
**Cause:** `package.json` was edited without updating `bun.lock`, and the Dockerfile uses `bun install --frozen-lockfile` (which refuses to auto-update the lockfile).
**Solution:** run `bun install` locally (not in Docker) to regenerate `bun.lock`, commit it, then rebuild.

### Missing environment variables

**Symptom:** `/college-news` always shows the "temporarily unavailable" error, even though the CMS is confirmed up.
**Cause:** `CMS_API_URL` isn't set, or points to the wrong host (remember: it defaults to `http://localhost:3000` in `src/lib/cms.ts` if unset, which doesn't exist inside this container).
**Solution:** check `docker compose exec app env | grep CMS_API_URL` — if it's missing or wrong, fix your `.env` file and run `docker compose up -d` again (no rebuild needed for env var changes, just a restart).

### Database connection errors
Not applicable to this project.

### CORS errors
This project doesn't receive cross-origin requests, so you shouldn't see server-side CORS errors here. If you see a browser console error mentioning CORS related to `api.bitscollege.edu.et`, that's actually a CMS-side configuration issue (its `CORS_ORIGIN` env var) — see that project's deployment doc.

### API connection failures (to the CMS)
**Symptom:** `/api/cms` returns `502` with `"The news service is temporarily unavailable."`
**Cause:** the CMS server is down, unreachable, or `CMS_API_URL` is misconfigured.
**Solution:**
```bash
docker compose exec app wget -qO- https://api.bitscollege.edu.et/api/health
```
If this fails from inside the container, it's a network/DNS/CMS-availability issue, not a bug in this project — check the CMS server directly.

### Port conflicts
**Symptom:** `docker compose up` fails with `port is already allocated` for 80 or 443.
**Cause:** something else on the server (a previous Apache/nginx install, another Docker Compose project) is already using that port.
**Solution:** `sudo lsof -i :80` / `sudo lsof -i :443` to find the culprit, then stop it (`sudo systemctl stop nginx` if it's a host-level nginx, for example) — you can only have one thing bound to each port.

### Docker/container issues

**Symptom:** `app` container keeps restarting (`docker compose ps` shows it cycling).
**Cause:** usually a startup crash — check `docker compose logs app` for the actual error immediately after a restart.
**Solution:** depends on the error; the common ones are a malformed `CMS_API_URL`, or a missing server entrypoint if `output: "standalone"` was removed from `next.config.ts` (see the build-failure entry above).

### Permission errors
**Symptom:** `Permission denied` when running `docker` commands.
**Cause:** your user isn't in the `docker` group, or the group change hasn't taken effect in the current shell.
**Solution:** `sudo usermod -aG docker $USER`, then fully log out and back in (not just `newgrp` in some cases — if in doubt, reconnect via SSH).

### SSL problems

**Symptom:** `certbot` fails with a challenge validation error.
**Cause:** almost always DNS — the domain doesn't yet point at this server, or you're testing before DNS has propagated.
**Solution:** re-run `dig +short www.bitscollege.edu.et` and confirm it matches this server's IP before retrying certbot.

**Symptom:** browser shows "certificate name mismatch."
**Cause:** the domain in `nginx/conf.d/bits.conf` doesn't match the domain you actually requested the certificate for.
**Solution:** these two must be identical strings — re-check Section 4.3 and 4.6.

### Domain issues
**Symptom:** `curl` from your own machine works, but the site doesn't load for others.
**Cause:** DNS propagation delay, or you edited DNS very recently.
**Solution:** wait and re-check with `dig`; propagation can take up to 24-48 hours in rare cases, though usually much faster.

### Application crashes
See "Docker/container issues" above — `docker compose logs app` is always the first place to look. Because `restart: unless-stopped` is set, a crashing app will keep restarting rather than staying down, which limits downtime but can mask the underlying problem if you don't check logs.

### Memory problems
**Symptom:** the container gets killed (check `docker compose logs app` for an abrupt stop with no error, or `dmesg | grep -i kill` on the host for an OOM-killer message).
**Cause:** the server doesn't have enough RAM for the traffic/build load — Next.js builds in particular are memory-hungry.
**Solution:** upgrade to the "Recommended" tier (4 GB RAM) from Section 2 if you're on the minimum 2 GB tier and see this during builds.

---

## 8. Updating and Redeploying

### Deploying new changes
```bash
cd /opt/bits-home
git pull
docker compose up -d --build
```
`--build` forces Docker to rebuild the image from the current source before restarting — without it, `up -d` would just restart the *old* image, no changes.

### Pulling updates safely
Before pulling, check `git status` for any local uncommitted changes (there shouldn't be any on a production server — all changes should go through git, not be edited directly on the server). If there are local edits you didn't expect, investigate before overwriting them with `git pull`.

### Rebuilding
`docker compose build app` rebuilds just the app image without restarting anything yet, if you want to build and verify before cutting over:
```bash
docker compose build app
docker compose up -d app
```

### Restarting services
```bash
docker compose restart app      # just the Next.js app
docker compose restart nginx    # just nginx (e.g. after an nginx.conf edit)
docker compose restart          # everything
```

### Avoiding downtime
This setup, as written, has a **brief gap** during `docker compose up -d --build`: the old container stops before the new one is confirmed healthy. For a low-traffic institutional site this is normally a few seconds and acceptable. If zero-downtime deploys become important later, that would require adding a second `app` container and a load-balancing step in nginx (blue/green) — **this is not currently implemented** and would be a deliberate future enhancement, not something you're missing today.

### Handling failed deployments
If `docker compose up -d --build` fails or the new container is unhealthy:
```bash
docker compose logs app --tail=100     # find the error first
git log --oneline -5                   # find the previous working commit
git checkout <previous-commit-hash>
docker compose up -d --build           # rebuild the known-good version
```
Because everything is driven by git + Docker, "rollback" is always just "check out the old code and rebuild" — there's no separate release-artifact system to manage.

---

## 9. Production Maintenance

### Viewing logs
```bash
docker compose logs app -f              # live tail
docker compose logs app --since 1h      # last hour
docker compose logs nginx --tail=200
```

### Restarting services
Covered in Section 8 — same commands apply for routine maintenance restarts (e.g. after a server reboot, though `restart: unless-stopped` handles that automatically).

### Monitoring the application
There's no monitoring/alerting system built into this project currently. At minimum, periodically check:
```bash
docker compose ps                        # all containers healthy?
docker stats --no-stream                 # quick CPU/RAM snapshot
```
For anything beyond manual checks, you'd need to add an external uptime monitor (e.g. a service that pings `https://www.bitscollege.edu.et` and alerts you on failure) — not part of the current setup.

### Updating dependencies
```bash
bun update            # run locally, not on the server
git diff bun.lock      # review what changed
git add package.json bun.lock
git commit -m "chore: update dependencies"
git push
```
Then redeploy per Section 8. Test locally (`bun run dev`, `bun run build`) before pushing — don't update dependencies directly on the production server.

### Backups
There is genuinely nothing to back up here beyond the git repository itself (no database, no user-uploaded files, no persistent volumes other than the Let's Encrypt certificate directory, which regenerates automatically via certbot if lost). Make sure your git remote (GitHub/GitLab/etc.) is your source of truth and isn't only on this one server.

### Basic security maintenance
```bash
sudo apt update && sudo apt upgrade -y     # OS security patches, run periodically
docker compose pull                        # pull latest nginx/certbot base image updates
docker compose up -d                       # apply them
```
Also periodically re-check `sudo ufw status` to confirm nothing has opened ports you didn't intend, and keep an eye on certbot's renewal (it's automatic every 12 hours per the compose entrypoint, but worth confirming with `docker compose logs certbot` occasionally that renewals are actually succeeding, not silently failing).