---
sidebar_position: 1
title: Overview
---

# Personas Overview

Behavioral profiles that adapt Claude's approach based on context and task requirements.

## Activation

```bash
/persona:<name>
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

## Collaboration Patterns

### Sequential Workflows
```yaml
Design Review: architect→security→performance→qa
Feature Build: architect→frontend/backend→qa→security
Analysis: analyzer→refactorer→performance→qa
```

### Parallel Workflows
```yaml
Full Stack: frontend & backend & security
Quality Focus: qa & refactorer & performance
Teaching: mentor & analyzer
```

## Auto-Activation

### File-Based
- `*.tsx|*.jsx` → frontend
- `*.test.*` → qa
- `*refactor*` → refactorer
- `*.sql` → backend
- `Dockerfile` → backend/architect

### Keyword-Based
- `optimize` → performance
- `secure|auth` → security
- `refactor` → refactorer
- `bug|error` → analyzer
- `explain` → mentor

### Context-Based
- Error messages → analyzer
- Performance issues → performance
- Architecture decisions → architect
- Learning requests → mentor
- Bug reports → qa
- Code review → refactorer

## MCP Tool Preferences

| Persona | Primary Tools | Secondary Tools |
|---------|--------------|-----------------|
| architect | Sequential, Context7 | - |
| frontend | Magic, Context7, Puppeteer | Sequential |
| backend | Context7, Sequential | - |
| analyzer | Sequential | All tools |
| security | Sequential, Context7 | Puppeteer |
| mentor | Context7, Sequential | - |
| refactorer | Sequential, Context7 | - |
| performance | Puppeteer, Sequential | Context7 |
| qa | Puppeteer, Context7 | Sequential |

## Command Specialization

```yaml
security: /user:scan --security
qa: /user:test, /user:scan --validate
performance: /user:analyze --profile, /user:improve --perf
analyzer: /user:analyze, /user:troubleshoot, /user:explain
architect: /user:design --api --ddd, /user:estimate
frontend: /user:build --react, /user:explain
backend: /user:build --api
refactorer: /user:improve --quality, /user:cleanup --code
mentor: /user:explain --depth, /user:document
```