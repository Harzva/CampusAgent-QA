# Comparison Guide

Use this repository as a method-by-method tutorial. The key idea is to compare adjacent stages first, then compare any two stages directly.

## Local Diff

PowerShell:

```powershell
.\tools\compare-versions.ps1 -From rag_qa -To hyper_memory
```

Shell:

```bash
./tools/compare-versions.sh rag_qa hyper_memory
```

## Suggested Comparisons

| From | To | What to inspect |
| --- | --- | --- |
| `rag_qa` | `rag_agent` | `AgentService`, `AgentChatController`, frontend mode routing. |
| `rag_agent` | `llm_wiki` | `LLMWikiService`, wiki upload endpoint, wiki chat endpoint. |
| `llm_wiki` | `gbrain` | `GBrainService`, skill endpoint, skill execution path. |
| `gbrain` | `hierarchy_memory` | `HierarchyMemoryService`, hierarchy upload/chat endpoints. |
| `hierarchy_memory` | `hyper_memory` | `HyperMemoryService`, hyper upload/chat endpoints. |

## What Counts As A Key Change

- A new controller endpoint.
- A new service with a new memory or agent behavior.
- A frontend endpoint/mode switch.
- A Docker/runtime configuration change.
- A data persistence change.

