# Version Matrix

| Stage | Folder | New backend pieces | New frontend pieces | Main learning point |
| --- | --- | --- | --- | --- |
| 1 | `rag_qa` | `ChatController`, `FileController`, `RagService`, `DocumentService` | Upload and chat panels | Minimal RAG flow. |
| 2 | `rag_agent` | `AgentChatController`, `AgentService` | Mode switch to agent endpoint | Agent tool calling around RAG. |
| 3 | `llm_wiki` | `LLMWikiService`, `LLMWikiChatController`, `WikiFileController` | Wiki upload and chat endpoints | Memory as generated wiki pages. |
| 4 | `gbrain` | `GBrainService`, `GBrainChatController`, `GBrainSkillController` | GBrain mode | Skills layered over wiki memory. |
| 5 | `hierarchy_memory` | `HierarchyMemoryService`, hierarchy chat/upload controllers | Hierarchy mode | Layered memory over wiki plus conversation context. |
| 6 | `hyper_memory` | `HyperMemoryService`, hyper chat/upload controllers | Hyper mode | Final aggregation memory layer. |

## Reading Order

1. Start with `rag_qa/backend/src/main/java/com/example/rag/service/RagService.java`.
2. Compare `rag_agent` against `rag_qa` to see the agent layer.
3. Compare `llm_wiki` against `rag_agent` to see wiki memory.
4. Compare `gbrain` against `llm_wiki` to see skill registration.
5. Compare `hierarchy_memory` against `gbrain` to see conversation memory.
6. Compare `hyper_memory` against `hierarchy_memory` to see the final system layer.

