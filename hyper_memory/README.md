# Hyper Memory

Final stage of the collection. It adds the HyperMemory aggregation layer on top of the RAG, Agent, LLM Wiki, GBrain, and Hierarchy Memory stages.

## What This Stage Adds

- Hyper upload endpoint at `/api/hyper/upload`.
- Hyper chat endpoint at `/api/hyper/chat`.
- `HyperMemoryService` as the final memory aggregation layer.
- Frontend routing for Hyper Memory mode.

## Key Code

```text
backend/src/main/java/com/example/rag/service/HyperMemoryService.java
backend/src/main/java/com/example/rag/controller/HyperFileController.java
backend/src/main/java/com/example/rag/controller/HyperChatController.java
frontend/src/App.vue
```

## Run

```bash
cp .env.example .env
docker compose up -d --build
```

Open `http://localhost:3000`.

