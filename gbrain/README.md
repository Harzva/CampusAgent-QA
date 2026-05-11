# GBrain

Adds a skill-oriented layer over LLM Wiki memory.

## What This Stage Adds

- GBrain chat endpoint at `/api/gbrain/chat`.
- Skill list endpoint at `/api/gbrain/skills`.
- Run-all endpoint at `/api/gbrain/skills/run-all`.
- `GBrainService` as the first skill orchestration layer.

## Key Code

```text
backend/src/main/java/com/example/rag/service/GBrainService.java
backend/src/main/java/com/example/rag/controller/GBrainChatController.java
backend/src/main/java/com/example/rag/controller/GBrainSkillController.java
frontend/src/App.vue
```

## Run

```bash
cp .env.example .env
docker compose up -d --build
```

Open `http://localhost:3000`.

