# Travel-ERP

A no-nonsense travel-agency ERP that actually does its damn job.

##  What’s inside ?

Piece |	Tech |	Why we give a damn
ERP API	Node 22 · Express · MongoDB	Fast CRUD for users, bookings & invoices
Accounting Svc	Node 22 · NestJS · PostgreSQL	Real double-entry, no spreadsheet sorcery
CMS	Strapi v5	Blog & marketing pages, headless AF
Web Front	React 18 · Vite	One SPA to rule them all
Glue	RabbitMQ · UUIDv4 events	Keeps Mongo & Postgres in sync without tears
Ops	Docker · Helm · Argo CD · Prom+Grafana	Runs on a Linode LKE cluster—ship it and chill

## Local dev (quick & dirty)
```bash
git clone git@github.com:your-org/travel-erp.git
cd travel-erp
docker compose up -d      # mongo, postgres, rabbit, all apps
```

Visit:
	•	http://localhost:3000 — ERP API
	•	http://localhost:3100 — Accounting API
	•	http://localhost:1337/admin — Strapi
	•	http://localhost:5173 — React front

### Branch dance

```bash
feature/*  → PR → dev   (auto-deploys to dev namespace)
dev        → main       (tag, build, prod deploy)
hotfix/*   → main       (straight to prod, because fires)
```

#### License

MIT. Use it, fork it, just don’t blame us when you break stuff.
