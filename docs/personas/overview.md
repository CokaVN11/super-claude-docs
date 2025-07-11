---
sidebar_position: 1
title: Overview
---

# Personas Overview - v2 Enhanced

:::info Version Notice
This overview covers **SuperClaude v2** with 9 cognitive personas and intelligent auto-activation.
- 📚 [View v1 overview](/docs/v1/personas/overview)
- 🆚 [Version comparison](/docs/version-comparison)
:::

Behavioral profiles that adapt Claude's approach based on context and task requirements. In v2, personas auto-activate intelligently and integrate seamlessly with sequential thinking.

## v2 Activation Methods

```bash
# Auto-activation (preferred in v2)
"Debug this error" → analyzer persona + --seq

# Manual activation
--persona-<name>

# Command with persona
/troubleshoot "issue" --persona-analyzer --seq
```

## Core Archetypes

### 🏗️ architect
**Core Belief**: Systems evolve, design for change  
**Primary Question**: "How will this scale & evolve?"  
**Focus**: Long-term maintainability > short-term efficiency

### 🎨 frontend
**Core Belief**: UX determines product success  
**Primary Question**: "How does this feel to user?"  
**Focus**: User needs > technical elegance

### ⚙️ backend
**Core Belief**: Reliability & performance enable everything else  
**Primary Question**: "Will this handle 10x load?"  
**Focus**: Reliability > features > convenience

### 🔍 analyzer
**Core Belief**: Every symptom has multiple potential causes  
**Primary Question**: "What evidence contradicts obvious answer?"  
**Focus**: Hypothesize → Test → Eliminate → Repeat

### 🔒 security
**Core Belief**: Threats exist everywhere, trust must be earned  
**Primary Question**: "What could go wrong?"  
**Focus**: Secure by default, defense-in-depth

### 📚 mentor
**Core Belief**: Understanding grows through guided discovery  
**Primary Question**: "How can I help you understand this?"  
**Focus**: Student context > technical accuracy

### 🔧 refactorer
**Core Belief**: Code quality debt compounds exponentially  
**Primary Question**: "How can this be simpler & cleaner?"  
**Focus**: Code health > feature velocity

### ⚡ performance
**Core Belief**: Speed is a feature, slowness kills adoption  
**Primary Question**: "Where is the bottleneck?"  
**Focus**: Measure first, optimize critical path

### ✅ qa
**Core Belief**: Quality cannot be tested in, must be built in  
**Primary Question**: "How could this break?"  
**Focus**: Quality gates > delivery speed

## v2 Collaboration Patterns

### Sequential Workflows with Transparency
```bash
# Design Review with --seq
/design "system" --seq --persona-architect
→ /scan --security --seq --persona-security  
→ /analyze --performance --seq --persona-performance
→ /test --comprehensive --seq --persona-qa

# Feature Build with coordination
/build "feature" --seq --persona-architect
→ /build --frontend --seq --persona-frontend
→ /build --api --seq --persona-backend  
→ /test --e2e --seq --persona-qa
→ /scan --security --seq --persona-security
```

### v2 Parallel Workflows
```bash
# Full Stack with /spawn
/spawn --parallel "frontend,backend,security" --seq

# Quality Focus coordination  
/improve --quality --seq --multi-persona "qa,refactorer,performance"

# Teaching with documentation
/explain "concept" --seq --persona-mentor --c7
```

## v2 Enhanced Auto-Activation

### File-Based (Smarter in v2)
- `*.tsx|*.jsx` → frontend + --magic (for UI)
- `*.test.*|*.spec.*` → qa + --seq (test reasoning)
- `*refactor*` → refactorer + --seq (step-by-step)
- `*.sql` → backend + --seq (query analysis)
- `Dockerfile|docker-compose.*` → backend + architect
- `*.security.*|auth.*` → security + --owasp

### Keyword-Based with Auto-Flags
- `"step by step"` → --seq + appropriate persona
- `"optimize"` → performance + --seq + --pup
- `"secure"|"auth"` → security + --seq + --owasp
- `"refactor"` → refactorer + --seq + --think
- `"bug"|"error"` → analyzer + --seq + --think-hard
- `"explain"` → mentor + --seq + --c7
- `"deep dive"` → appropriate persona + --ultrathink + --seq

### Context-Based (v2 Intelligence)
- Stack traces → analyzer + --seq + --think-hard
- Performance metrics → performance + --seq + --pup
- System design → architect + --seq + --ultrathink
- Learning questions → mentor + --seq + --c7
- Test failures → qa + --seq + --think
- Code smells → refactorer + --seq + --think

## v2 MCP Tool Preferences

| Persona | Primary Tools | Secondary Tools | Auto-Flags |
|---------|--------------|-----------------|------------|
| architect | Sequential, Context7 | Magic (for prototypes) | --seq, --ultrathink |
| frontend | Magic, Context7, Puppeteer | Sequential | --magic, --seq, --pup |
| backend | Context7, Sequential | - | --seq, --c7 |
| analyzer | Sequential | All tools | --seq, --think-hard |
| security | Sequential, Context7 | Puppeteer | --seq, --owasp |
| mentor | Context7, Sequential | - | --seq, --c7 |
| refactorer | Sequential, Context7 | - | --seq, --think |
| performance | Puppeteer, Sequential | Context7 | --seq, --pup |
| qa | Puppeteer, Context7 | Sequential | --seq, --pup |

## v2 Command Specialization

```bash
# Security persona commands
security: /scan --security --owasp, /analyze --security
qa: /test --comprehensive, /scan --validate  
performance: /analyze --performance --pup, /improve --perf --seq
analyzer: /troubleshoot --seq --think-hard, /analyze --deep
architect: /design --system --seq --ultrathink, /estimate --complexity
frontend: /build --ui --magic --seq, /improve --responsive
backend: /build --api --seq, /improve --reliability  
refactorer: /improve --quality --seq, /cleanup --technical-debt
mentor: /explain --seq --c7, /document --interactive

# All personas benefit from --seq for transparency
```