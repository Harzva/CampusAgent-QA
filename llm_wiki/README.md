# LLM Wiki

Adds wiki-style memory on top of the RAG and Agent baseline.

## What This Stage Adds

- Wiki upload endpoint at `/api/wiki/upload`.
- Wiki chat endpoint at `/api/wiki/chat`.
- `LLMWikiService` for in-memory wiki page generation.
- Frontend routing for LLM Wiki mode.

## Key Code

```text
backend/src/main/java/com/example/rag/service/LLMWikiService.java
backend/src/main/java/com/example/rag/controller/WikiFileController.java
backend/src/main/java/com/example/rag/controller/LLMWikiChatController.java
frontend/src/App.vue
```

## Run

```bash
cp .env.example .env
docker compose up -d --build
```

Open `http://localhost:3000`.

