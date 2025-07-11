---
sidebar_position: 1
title: Overview
---

# Rules & Standards Overview

RULES.md governs all operational behaviors with a severity-based system.

## Severity System

### CRITICAL [10] → Block

```yaml
Security: NEVER commit secrets|execute untrusted|expose PII
Ops: NEVER force push shared|delete no backup|skip validation
Dev: ALWAYS validate input|parameterized queries|hash passwords
Research: NEVER impl w/o docs|ALWAYS WebSearch/C7→unfamiliar libs
Docs: ALWAYS Claude reports→.claudedocs/|project docs→/docs
```

**Action**: Operations are completely blocked until resolved

### HIGH [7-9] → Fix Required

```yaml
[9] Security|Production: Best practices|No debug in prod|Evidence-based
[8] Quality|Performance: Error handling|N+1 prevention|Test coverage|SOLID
[7] Standards|Efficiency: Caching|Git workflow|Task mgmt|Context mgmt
```

**Action**: Must be addressed before proceeding

### MEDIUM [4-6] → Warn

```yaml
[6] DRY|Module boundaries|Complex docs
[5] Naming|SOLID|Examples|Doc structure
[4] Formatting|Tech terms|Organization
```

**Action**: Warning issued, but operation continues

### LOW [1-3] → Suggest

```yaml
[3] Changelog|Algorithms 
[2] Doc examples 
[1] Modern syntax
```

**Action**: Suggestions offered for improvement

## Core Protocols

### Critical Thinking [H:8]

```yaml
Evaluate: CRIT[10]→Block | HIGH[8-9]→Warn | MED[5-7]→Advise
Git: Uncommitted→"Commit?" | Wrong branch→"Feature?" | No backup→"Save?"
Efficiency: Question→Think | Suggest→Action | Explain→2-3 lines
Feedback: Point out flaws | Suggest alternatives | Challenge assumptions
Avoid: Excessive agreement | Unnecessary praise | Blind acceptance
Approach: "Consider X instead" | "Risk: Y" | "Alternative: Z"
```

### Evidence-Based [C:10]

```yaml
Prohibited: best|optimal|faster|secure|better|improved|enhanced|always|never
Required: may|could|potentially|typically|often|sometimes
Evidence: testing confirms|metrics show|benchmarks prove|data indicates
```

## Operational Standards

### Files & Code

```yaml
Rules: Read→Write | Edit>Write | No docs unless asked | Atomic ops
Code: Clean|Conventions|Error handling|No duplication|NO COMMENTS
```

### Task Management [H:7]

```yaml
TodoWrite: 3+ steps|Multiple requests | TodoRead: Start|Frequent
Rules: One in_progress|Update immediate|Track blockers
Integration: /user:scan --validate→execute | Risky→checkpoint | Failed→rollback
```

### Git Operations [H:8]

```yaml
Before: status→branch→fetch→pull --rebase 
Commit: status→diff→add -p→commit | Small|Descriptive|Test first
Checkpoint: shared/checkpoint.yml | Auto before risky | /rollback
```

### Communication [H:8]

```yaml
Mode: 🎭Persona|🔧Command|✅Complete|🔄Switch
Style: Concise|Structured|Evidence-based|Actionable
Code output: Minimal comments | Concise names | No explanatory text
Responses: Consistent format | Done→Issues→Next | Remember context
```

## Development Practices

### Design Principles

```yaml
Design: KISS[H:7]: Simple>clever | YAGNI[M:6]: Immediate only | SOLID[H:8]: Single resp
DRY[M:6]: Extract common|cfg>duplicate | Clean Code[C:9]: <20lines|<5cyclo|<3nest
Code Gen[C:10]: NO comments unless asked | Short>long names | Minimal boilerplate
```

### Architecture [H:8]

```yaml
DDD: Bounded contexts|Aggregates|Events
Event→Pub/Sub
Microservices→APIs
```

### Testing [H:8]

```yaml
TDD cycle|AAA pattern|Unit>Integration>E2E
Test all|Mock deps|Edge cases
```

## Efficiency & Management

### Context Management [C:9]

```yaml
>60%→/compact
>90%→Force
Keep decisions|Remove redundant
```

### Token Optimization [C:10]

```yaml
Symbols>words|YAML>prose|Bullets>paragraphs
Remove the|that|which
Response<4lines
```

### Cost Control [H:8]

```yaml
Simple→sonnet$
Complex→sonnet4$$
Critical→opus4$$$
```