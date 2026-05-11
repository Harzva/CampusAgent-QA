param(
  [Parameter(Mandatory = $true)]
  [ValidateSet("rag_qa", "rag_agent", "llm_wiki", "gbrain", "hierarchy_memory", "hyper_memory")]
  [string]$From,

  [Parameter(Mandatory = $true)]
  [ValidateSet("rag_qa", "rag_agent", "llm_wiki", "gbrain", "hierarchy_memory", "hyper_memory")]
  [string]$To
)

$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$fromPath = Join-Path $root $From
$toPath = Join-Path $root $To

Write-Host "Comparing $From -> $To"
Write-Host ""
git diff --no-index --stat $fromPath $toPath
Write-Host ""
Write-Host "Detailed diff:"
git diff --no-index $fromPath $toPath

