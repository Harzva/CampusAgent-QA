# RAG Agent

RAG QA with an agent layer that can call tools.

## What This Stage Adds

- Agent chat endpoint at `/api/agent/chat`.
- `AgentService` with tool-callable helpers.
- Frontend mode switching between RAG and Agent.
- A retrieval tool that lets the agent access RAG context.

## Key Code

```text
backend/src/main/java/com/example/rag/service/AgentService.java
backend/src/main/java/com/example/rag/controller/AgentChatController.java
frontend/src/App.vue
```

## Run

```bash
cp .env.example .env
docker compose up -d --build
```

Open `http://localhost:3000`.

