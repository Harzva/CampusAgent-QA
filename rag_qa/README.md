# RAG QA

Base campus knowledge QA with document upload, vector retrieval, and LLM-backed answers.

## What This Stage Adds

- Upload knowledge files to MinIO.
- Store document metadata in MySQL.
- Store embeddings in Milvus.
- Ask questions through `/api/chat`.
- Serve the Vue frontend through nginx with `/api` proxying.

## Key Code

```text
backend/src/main/java/com/example/rag/service/RagService.java
backend/src/main/java/com/example/rag/service/DocumentService.java
backend/src/main/java/com/example/rag/controller/ChatController.java
backend/src/main/java/com/example/rag/controller/FileController.java
frontend/src/App.vue
```

## Run

```bash
cp .env.example .env
docker compose up -d --build
```

Open `http://localhost:3000`.

