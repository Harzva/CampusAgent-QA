# Hierarchy Memory

Adds layered memory behavior by combining wiki memory and conversation history.

## What This Stage Adds

- Hierarchy upload endpoint at `/api/hierarchy/upload`.
- Hierarchy chat endpoint at `/api/hierarchy/chat`.
- `HierarchyMemoryService` for layered memory output.
- Frontend routing for Hierarchy Memory mode.

## Key Code

```text
backend/src/main/java/com/example/rag/service/HierarchyMemoryService.java
backend/src/main/java/com/example/rag/controller/HierarchyFileController.java
backend/src/main/java/com/example/rag/controller/HierarchyChatController.java
frontend/src/App.vue
```

## Run

```bash
cp .env.example .env
docker compose up -d --build
```

Open `http://localhost:3000`.

