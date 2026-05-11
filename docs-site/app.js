const versions = [
  {
    id: "rag_qa",
    name: "RAG QA",
    summary: "Base document upload, vector retrieval, and model answer generation.",
    paths: [
      "backend/src/main/java/com/example/rag/service/RagService.java",
      "backend/src/main/java/com/example/rag/service/DocumentService.java",
      "backend/src/main/java/com/example/rag/controller/ChatController.java",
      "frontend/src/App.vue"
    ],
    features: ["Document upload", "Milvus vector search", "LLM answer generation"]
  },
  {
    id: "rag_agent",
    name: "RAG Agent",
    summary: "Adds an agent endpoint and tool-callable helpers.",
    paths: [
      "backend/src/main/java/com/example/rag/service/AgentService.java",
      "backend/src/main/java/com/example/rag/controller/AgentChatController.java"
    ],
    features: ["Agent endpoint", "Tool calling", "FAQ/time/retrieval tools"]
  },
  {
    id: "llm_wiki",
    name: "LLM Wiki",
    summary: "Adds wiki-style memory built from uploaded documents.",
    paths: [
      "backend/src/main/java/com/example/rag/service/LLMWikiService.java",
      "backend/src/main/java/com/example/rag/controller/WikiFileController.java",
      "backend/src/main/java/com/example/rag/controller/LLMWikiChatController.java"
    ],
    features: ["Wiki ingestion", "Wiki chat endpoint", "Document memory pages"]
  },
  {
    id: "gbrain",
    name: "GBrain",
    summary: "Adds a first skill layer over wiki memory.",
    paths: [
      "backend/src/main/java/com/example/rag/service/GBrainService.java",
      "backend/src/main/java/com/example/rag/controller/GBrainSkillController.java",
      "backend/src/main/java/com/example/rag/controller/GBrainChatController.java"
    ],
    features: ["Skill registry", "Run-all skill endpoint", "GBrain chat mode"]
  },
  {
    id: "hierarchy_memory",
    name: "Hierarchy Memory",
    summary: "Adds layered memory over wiki content and conversation history.",
    paths: [
      "backend/src/main/java/com/example/rag/service/HierarchyMemoryService.java",
      "backend/src/main/java/com/example/rag/controller/HierarchyFileController.java",
      "backend/src/main/java/com/example/rag/controller/HierarchyChatController.java"
    ],
    features: ["Hierarchy ingestion", "Conversation memory", "Layered query output"]
  },
  {
    id: "hyper_memory",
    name: "HyperMemory",
    summary: "Adds the final hyper memory aggregation layer.",
    paths: [
      "backend/src/main/java/com/example/rag/service/HyperMemoryService.java",
      "backend/src/main/java/com/example/rag/controller/HyperFileController.java",
      "backend/src/main/java/com/example/rag/controller/HyperChatController.java"
    ],
    features: ["Hyper ingestion", "Hyper chat mode", "Final memory layer"]
  }
];

const from = document.querySelector("#from");
const to = document.querySelector("#to");
const delta = document.querySelector("#delta");
const paths = document.querySelector("#paths");
const timeline = document.querySelector("#timeline");

for (const version of versions) {
  from.add(new Option(version.name, version.id));
  to.add(new Option(version.name, version.id));
}

from.value = "rag_qa";
to.value = "hyper_memory";

function selectedRange() {
  const start = versions.findIndex((item) => item.id === from.value);
  const end = versions.findIndex((item) => item.id === to.value);
  const lo = Math.min(start, end);
  const hi = Math.max(start, end);
  return versions.slice(lo, hi + 1);
}

function render() {
  const range = selectedRange();
  const added = range.slice(1);

  delta.innerHTML = added.length
    ? added
        .map(
          (version) => `
            <div class="delta-item">
              <span class="tag">${version.name}</span>
              <strong>${version.summary}</strong>
              <ul>${version.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
            </div>
          `
        )
        .join("")
    : "<p>No delta. Select two different stages.</p>";

  const uniquePaths = [...new Set(added.flatMap((version) => version.paths))];
  paths.innerHTML = uniquePaths.length
    ? uniquePaths.map((path) => `<li><code>${path}</code></li>`).join("")
    : "<li>Select a target version after the source version.</li>";

  timeline.innerHTML = versions
    .map(
      (version, index) => `
        <div class="step">
          <strong>${index + 1}. ${version.name}</strong>
          <span>${version.summary}</span>
        </div>
      `
    )
    .join("");
}

from.addEventListener("change", render);
to.addEventListener("change", render);
render();

