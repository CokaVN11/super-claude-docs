---
sidebar_position: 1
title: Commands Quick Reference
---

# SuperClaude v2 Commands Quick Reference

:::info Version Notice
This reference covers **SuperClaude v2** with 19 specialized commands.
- 📚 [View v1 reference](/docs/v1/reference/commands-quick-ref)
- 🆚 [Version comparison](/docs/version-comparison)
:::

## All 19 Commands at a Glance

| Command | Purpose | Common Usage with v2 Features |
|---------|---------|-------------------------------|
| `/analyze` | Multi-dimensional analysis | `--arch --seq --ultrathink` |
| `/build` | Build projects/features | `--react --tdd --seq` |
| `/cleanup` | Project maintenance | `--unused --dependencies --seq` |
| `/deploy` | Deploy applications | `--canary --monitor --seq` |
| `/design` | System architecture | `--microservices --seq --ultrathink` |
| `/dev-setup` | Environment setup | `--ci --docker --seq` |
| `/document` | Generate documentation | `--api --interactive --seq` |
| `/estimate` | Time/complexity estimates | `--breakdown --risks --seq` |
| `/explain` | Explain code/concepts | `--visual --seq --c7` |
| `/git` | Git operations | `--commit --pr --seq` |
| `/improve` | Enhance code/performance | `--performance --seq --uc` |
| `/load` | Load project context | `--depth deep --patterns --seq` |
| `/migrate` | Database/code migration | `--zero-downtime --seq` |
| `/review` | Code review | `--pr --security --seq` |
| `/scan` | Security/validation | `--owasp --seq --think-hard` |
| `/spawn` | Parallel task execution | `--parallel --coordinate --seq` |
| `/task` | Task management | `--breakdown --estimate --seq` |
| `/test` | Testing framework | `--coverage --e2e --seq` |
| `/troubleshoot` | Debug issues | `--prod --seq --think-hard` |

## Universal Flags (Work with ALL Commands) 🚀

### 🧠 Thinking Modes
- `--think` - Standard analysis (~4K tokens)
- `--think-hard` - Deep analysis (~10K tokens)
- `--ultrathink` - Critical analysis (~32K tokens)
- `--seq` - **Sequential step-by-step reasoning** ⭐ NEW

### ⚡ Optimization
- `--plan` - Preview before executing
- `--uc` / `--ultracompressed` - 70% token reduction
- `--introspect` - Show AI reasoning process

### 🔌 MCP Servers
- `--c7` / `--no-c7` - Context7 documentation
- `--seq` / `--no-seq` - Sequential thinking
- `--magic` / `--no-magic` - UI generation
- `--pup` / `--no-pup` - Browser automation
- `--all-mcp` - Enable all tools
- `--no-mcp` - Native tools only

### 🎭 Personas (Auto-activating)
- `--persona-architect` - Systems thinking
- `--persona-frontend` - UI/UX focus
- `--persona-backend` - API & reliability
- `--persona-analyzer` - Debugging expert
- `--persona-security` - Security mindset
- `--persona-mentor` - Teaching mode
- `--persona-refactorer` - Code quality
- `--persona-performance` - Speed optimization
- `--persona-qa` - Testing focus

## Common v2 Workflows with --seq

### 🚀 Quick Start New Project
```bash
# Sequential project initialization
/load --seq
/dev-setup --install --seq --think
/build --init --react --tdd --seq
/test --coverage --seq

# Watch reasoning at each step!
```

### 🐛 Debug Production Issue with Sequential Analysis
```bash
# Step-by-step investigation
/troubleshoot --prod --seq --think-hard
# → Symptom analysis
# → Data collection
# → Root cause identification
# → Solution implementation

/git --commit --seq
/deploy --canary --monitor --seq
```

### 🏗️ Design New Feature with Deep Thinking
```bash
# Comprehensive design process
/analyze --architecture --seq --ultrathink
/design --api --ddd --seq --c7
/build --feature --tdd --seq --persona-backend
/test --e2e --seq --pup
```

### 🔒 Security Audit with OWASP
```bash
# Sequential security scanning
/scan --security --owasp --seq --think-hard
# → Attack surface mapping
# → Vulnerability scanning
# → Risk assessment
# → Remediation plan

/improve --security --seq
/scan --validate --seq
```

### ⚡ Performance Optimization Journey
```bash
# Step-by-step optimization
/analyze --performance --seq --think
# → Profile current state
# → Identify bottlenecks
# → Optimization strategy
# → Implementation
# → Validation

/improve --performance --seq --uc
/test --performance --seq
```

## Command Categories (v2 Enhanced)

### Development (3)
- `build` - Create with TDD, components, APIs
- `dev-setup` - CI/CD, Docker, monitoring
- `test` - Unit, integration, E2E, performance

### Analysis & Review (5)
- `analyze` - Code, architecture, performance
- `troubleshoot` - Debug with sequential reasoning
- `improve` - Quality, performance, refactoring
- `explain` - Visual diagrams, examples
- `review` - PR, security, standards ⭐ NEW

### Operations (6)
- `deploy` - Canary, blue-green, monitoring
- `migrate` - Zero-downtime, validation
- `scan` - Security, OWASP, compliance
- `estimate` - Monte Carlo, risk analysis
- `cleanup` - Dependencies, unused code
- `git` - Smart commits, PR creation

### Design & Architecture (1)
- `design` - Microservices, DDD, patterns

### Workflow & Productivity (3)
- `spawn` - Parallel execution ⭐ NEW
- `document` - Interactive, API docs
- `task` - Breakdown, Kanban ⭐ NEW

### System (1)
- `load` - Context, patterns, indexing

## Power Combinations 💪

### Maximum Analysis
```bash
# Architecture deep dive
/analyze --arch --seq --ultrathink --c7 --persona-architect

# Security investigation
/scan --security --owasp --seq --think-hard --persona-security

# Performance hunt
/troubleshoot --performance --seq --ultrathink --uc
```

### Efficient Development
```bash
# Fast feature build
/build --feature --tdd --seq --uc

# Quick deployment
/deploy --canary --seq --plan

# Rapid debugging
/troubleshoot --seq --think --uc
```

### Real-world Scenarios
```bash
# "Memory leak in production"
/troubleshoot "OOM errors after 2 hours" --prod --seq --think-hard

# "Build OAuth integration"
/build "OAuth2 with Google" --api --seq --c7 --persona-backend

# "Optimize database queries"
/improve --performance "slow queries" --seq --think --uc
```

## Emergency Commands 🚨

### Production Down
```bash
/troubleshoot --prod --emergency --seq --ultrathink
# Sequential crisis response with maximum analysis
```

### Rollback Deployment
```bash
/deploy --rollback --seq
/git --revert --seq
# Step-by-step rollback with validation
```

### Security Breach
```bash
/scan --security --emergency --seq --think-hard
/spawn --parallel --task "patch vulnerabilities"
# Parallel security response
```

## v2 Pro Tips 🎯

1. **Always use --seq for complex tasks**: See the thinking process
2. **Combine thinking modes**: `--seq --think-hard` for thorough analysis
3. **Token optimization**: Add `--uc` to any command for efficiency
4. **Auto-activation works**: Natural language triggers personas
5. **Power combo**: `--seq --ultrathink --all-mcp` for maximum capability

## Quick Examples with --seq

```bash
# "Make it fast"
/analyze --performance --seq && /improve --performance --seq --uc

# "Fix the bug step by step"
/troubleshoot --investigate --seq --think

# "Build login with reasoning"
/build "user authentication" --tdd --seq --persona-backend

# "Is it secure? Show me how you check"
/scan --security --owasp --seq --think-hard

# "Deploy safely with validation"
/test --seq && /scan --validate --seq && /deploy --canary --monitor --seq
```

## Sequential Thinking Examples

### Without --seq (Direct Answer)
```bash
/fix "login error"
→ Here's the fix: [code]
```

### With --seq (Step-by-Step)
```bash
/fix "login error" --seq
→ Step 1: Analyzing error pattern...
→ Step 2: Checking authentication flow...
→ Step 3: Found issue in token validation...
→ Step 4: Implementing fix...
→ Step 5: Adding tests...
→ Result: [code with explanation]
```

---

Ready to leverage all 19 v2 commands? Add `--seq` to see SuperClaude's reasoning! 🚀