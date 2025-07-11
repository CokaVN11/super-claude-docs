---
sidebar_position: 1
title: Commands Quick Reference
---

# SuperClaude Commands Quick Reference

## All Commands at a Glance

| Command | Purpose | Common Usage |
|---------|---------|--------------|
| `/user:analyze` | Multi-dimensional analysis | `--code --profile --security` |
| `/user:build` | Build projects/features | `--react --api --fullstack` |
| `/user:cleanup` | Project maintenance | `--code --deps --all` |
| `/user:deploy` | Deploy applications | `--env prod --rollback` |
| `/user:design` | System architecture | `--api --ddd --graphql` |
| `/user:dev-setup` | Environment setup | `--install --ci --hooks` |
| `/user:document` | Generate documentation | `--api --user --readme` |
| `/user:estimate` | Time/complexity estimates | `--detailed --worst-case` |
| `/user:explain` | Explain code/concepts | `--depth expert --examples` |
| `/user:git` | Git operations | `--commit --checkpoint --sync` |
| `/user:improve` | Enhance code/performance | `--quality --performance` |
| `/user:load` | Load project context | `--depth deep` |
| `/user:migrate` | Database/code migration | `--dry-run --rollback` |
| `/user:scan` | Security/validation | `--security --owasp --validate` |
| `/user:spawn` | Create focused agent | `--task "specific goal"` |
| `/user:test` | Testing framework | `--coverage --e2e --watch` |
| `/user:troubleshoot` | Debug issues | `--investigate --fix --prod` |

## Universal Flags (Work with ALL Commands)

### Thinking Depth
- `--think` - Standard analysis (~4K tokens)
- `--think-hard` - Deep analysis (~10K tokens)
- `--ultrathink` - Critical analysis (~32K tokens)

### Execution Control
- `--plan` - Preview before executing
- `--uc` / `--ultracompressed` - 70% token reduction

### MCP Tools
- `--c7` / `--no-c7` - Context7 documentation
- `--seq` / `--no-seq` - Sequential thinking
- `--magic` / `--no-magic` - UI generation
- `--pup` / `--no-pup` - Browser automation
- `--all-mcp` - Enable all tools
- `--no-mcp` - Native tools only

## Common Workflows

### 🚀 Quick Start New Project
```bash
/user:load
/user:dev-setup --install
/user:build --init --react
/user:test --coverage
```

### 🐛 Debug Production Issue
```bash
/user:troubleshoot --prod --investigate
/user:git --checkpoint
/user:troubleshoot --fix
/user:deploy --env prod
```

### 🏗️ Design New Feature
```bash
/user:analyze --architecture
/user:design --api --ddd
/user:build --feature --tdd
/user:test --e2e
```

### 🔒 Security Audit
```bash
/user:scan --security --owasp
/user:improve --quality
/user:scan --validate
```

### ⚡ Performance Optimization
```bash
/user:analyze --profile
/user:improve --performance --iterate
/user:test --performance
```

## Command Categories

### Development (3)
- `build` - Create projects/features
- `dev-setup` - Configure environment
- `test` - Run/create tests

### Analysis (4)
- `analyze` - Code/architecture analysis
- `troubleshoot` - Debug issues
- `improve` - Enhance code
- `explain` - Detailed explanations

### Operations (6)
- `deploy` - Application deployment
- `migrate` - Database migrations
- `scan` - Security audits
- `estimate` - Time predictions
- `cleanup` - Maintenance
- `git` - Version control

### Design (1)
- `design` - System architecture

### Workflow (2)
- `spawn` - Focused agents
- `document` - Documentation

### System (1)
- `load` - Project context

## Flag Combinations That Work

### Power Combos
```bash
# Deep security analysis
/user:scan --security --owasp --seq --think-hard

# Full-stack with UI
/user:build --fullstack --magic --pup

# Production debugging
/user:troubleshoot --prod --emergency --ultrathink

# Performance optimization
/user:improve --performance --iterate --threshold 95
```

### Token-Efficient
```bash
# Compressed analysis
/user:analyze --code --uc --no-mcp

# Quick build
/user:build --feature --uc

# Fast deployment
/user:deploy --env prod --uc
```

## Emergency Commands

### 🚨 Production Down
```bash
/user:troubleshoot --prod --emergency --ultrathink
```

### 🔄 Rollback Deployment
```bash
/user:deploy --rollback
/user:git --rollback
```

### 🛡️ Security Breach
```bash
/user:scan --security --emergency
/user:git --checkpoint
/user:improve --security
```

## Tips

1. **Always start with**: `/user:load`
2. **Before risky ops**: `/user:git --checkpoint`
3. **Validate before deploy**: `/user:scan --validate`
4. **Use --plan to preview**: See what will happen
5. **Chain naturally**: analyze → design → build → test → deploy

## One-Liner Examples

```bash
# "Make it fast"
/user:analyze --profile && /user:improve --performance

# "Fix the bug"
/user:troubleshoot --investigate --fix

# "Build login"
/user:build --feature "user authentication"

# "Is it secure?"
/user:scan --security --owasp

# "Deploy safely"
/user:test && /user:scan --validate && /user:deploy --env prod
```