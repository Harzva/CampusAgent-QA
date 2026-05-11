# Operations Guide

Each folder is a standalone Docker Compose project. Pick exactly one stage to run unless you change ports in that stage's `.env`.

```bash
cd hyper_memory
cp .env.example .env
docker compose up -d --build
```

Open:

- Frontend: `http://localhost:3000`
- Backend health: `http://localhost:8080/actuator/health`

## Port Conflicts

All stages default to the same ports. To run multiple stages at once, set different values in each folder's `.env`.

```text
FRONTEND_PORT=3001
BACKEND_PORT=8081
REDIS_PORT=6380
```

Database, MinIO, and Milvus ports also need to be adjusted if those services are exposed on the host.

## Comparison Workflow

```powershell
.\tools\compare-versions.ps1 -From rag_qa -To gbrain
```

The script runs `git diff --no-index` between two local folders, so it works even without separate branches.

