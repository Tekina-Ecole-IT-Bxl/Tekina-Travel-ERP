# Travel-ERP

A no-nonsense travel-agency ERP that actually does its damn job.

##  What’s inside ?

| Piece          | Tech                              | Why we give a damn                                           |
|----------------|-----------------------------------|--------------------------------------------------------------|
| ERP API        | Node 20+ · Express · MongoDB       | Fast CRUD for users, bookings & invoices                    |
| Accounting Svc | Node 20+ · NestJS · PostgreSQL     | Real double-entry, no spreadsheet sorcery                   |
| CMS            | Strapi v5                         | Blog & marketing pages, headless AF                         |
| Web Front      | React 18 · Vite                   | One SPA to rule them all                                    |
| Glue           | RabbitMQ · UUIDv4 events          | Keeps Mongo & Postgres in sync without tears                |
| Ops            | Docker · Helm · Argo CD · Prom+Grafana | Runs on a Linode LKE cluster—ship it and chill        |

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

### Folder Tree Structure

```txt
travel-erp/
├─ apps/                                # Every runnable services / SPA
│  ├─ erp-api/                          # Express + mongo core
│  │  ├─ src/
│  │  │  ├─ controllers/
│  │  │  ├─ models/
│  │  │  ├─ routes/
│  │  │  ├─ services/
│  │  │  └─ index.js
│  │  ├─ tests/                         # Test with Jest/Mocha  unit & integration
│  │  ├─ Dockerfile
│  │  └─ helm/                          # Helm 
│  │     ├─ Chart.yaml
│  │     ├─ values.yaml
│  │     └─ templates/
│  │        ├─ deployment.yaml
│  │        └─ service.yaml
│  │
│  ├─ accounting-svc/                   # Node + TypeORM + PostrgreSQL
│  │  ├─ src/                           # Code base for accounting micro service (isolation)
│  │  │  ├─ modules/
│  │  │  ├─ migrations/
│  │  │  └─ main.js
│  │  ├─ tests/
│  │  ├─ Dockerfile
│  │  └─ helm/
│  │     └─ … (same layout as above)
│  │
│  ├─ cms/                            # Strapi project
│  │  ├─ config/
│  │  ├─ src/
│  │  ├─ public/
│  │  ├─ Dockerfile
│  │  └─ helm/
│  │
│  └─ web/                            # React 18 SPA
│     ├─ public/
│     ├─ src/
│     │  ├─ components/
│     │  ├─ pages/
│     │  ├─ hooks/
│     │  └─ main.jsx
│     ├─ vite.config.js
│     ├─ Dockerfile                   # only if hosted in-cluster
│     └─ netlify.toml                 # only if hosted on Netlify
│
├─ packages/                          # shared JS libs
│  ├─ common-utils/
│  │  ├─ src/index.js
│  │  └─ package.json
│  ├─ auth-sdk/
│  │  ├─ src/
│  │  └─ package.json
│  └─ ui-kit/
│     ├─ src/components/
│     ├─ storybook/
│     └─ package.json
│
├─ infra/                             # infra as code still looking what is best infra
│  ├─ terraform/                      
│  │  ├─ main.tf
│  │  └─ variables.tf
│  ├─ k8s-bases/
│  │  ├─ base/namespace.yaml
│  │  └─ overlays/
│  │     ├─ dev/
│  │     └─ prod/
│  ├─ helmfile.yaml
│  └─ argo/
│     ├─ erp-api.yaml
│     ├─ accounting-svc.yaml
│     └─ cms.yaml
│
├─ scripts/                           # helper cli for Dockers
│  ├─ dev-up.sh
│  ├─ seed-db.js
│  └─ backup.sh
│
├─ docs/                          
│  ├─ architecture.md                 # human docs
│  ├─ adr/
│  │  ├─ ADR-001-dual-db.md
│  │  └─ ADR-002-auth.md
│  └─ runbooks/
│     ├─ deploy.md
│     └─ on-call.md
│
├─ .github/                           # CI / CD Automation
│  ├─ workflows/
│  │  ├─ ci-backend.yml
│  │  ├─ ci-frontend.yml
│  │  └─ cd-argocd.yml
│  └─ ISSUE_TEMPLATE/
│
├─ docker-compose.yml                 # local stack
└─ .tool-versions                     # pin node version, yarn version etc...
```



#### License

MIT. Use it, fork it, just don’t blame us when you break stuff.
