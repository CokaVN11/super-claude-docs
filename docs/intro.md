---
sidebar_position: 1
title: Introduction
---

# SuperClaude v2 Documentation

:::info Version Notice
This documentation covers **SuperClaude v2** with enhanced features and modular architecture. 
- 📚 [View v1 documentation](/docs/v1/intro)
- 🆚 [Version comparison](/docs/version-comparison)
:::

Welcome to SuperClaude v2 - a configuration framework that transforms Claude Code into a specialized development partner through intelligent automation and modular design.

## What's New in v2?

### 🚀 Major Enhancements

| Feature | v1 | v2 |
|---------|----|----|
| **Commands** | Basic set | 19 specialized commands |
| **Personas** | 6 profiles | 9 cognitive personas with auto-activation |
| **MCP Servers** | Limited | 4 integrated servers (Context7, Sequential, Magic, Puppeteer) |
| **Thinking Modes** | `--think` | `--think`, `--think-hard`, `--ultrathink` |
| **Architecture** | Single file | Modular YAML with @include system |
| **Token Savings** | Basic | UltraCompressed mode (70% reduction) |

## Core Features

### 🎯 19 Specialized Commands
```bash
# Development
/build --react --tdd --seq         # Build with sequential thinking
/test --unit --coverage --think    # Test with analysis
/dev-setup --ci --monitor          # Environment setup

# Analysis & Improvement  
/analyze --arch --ultrathink       # Deep architecture analysis
/troubleshoot --prod --seq         # Step-by-step debugging
/improve --performance --uc        # Optimize with compression

# Operations
/deploy --canary --monitor         # Smart deployment
/scan --security --owasp           # Security audit
```

### 🧠 9 Cognitive Personas

Auto-activating specialized mindsets:

```bash
# Manual activation
/analyze --persona-architect       # Systems thinking
/build --persona-frontend          # UI/UX focus

# Auto-activation examples
"fix API performance issue"        # → Backend persona
"debug TypeError in component"     # → Analyzer persona  
"improve code readability"         # → Refactorer persona
```

### 🔌 MCP Integration

Four powerful servers at your command:

```bash
# Context7 - Documentation lookup
/explain "React hooks" --c7

# Sequential - Step-by-step reasoning
/troubleshoot "memory leak" --seq --think-hard

# Magic - UI component generation
/build "data visualization dashboard" --magic

# Puppeteer - Browser automation
/test "user flow" --e2e --pup

# Or enable all
/analyze --all-mcp
```

### ⚡ Token Optimization Examples

```bash
# Standard response
/explain "microservices architecture"

# UltraCompressed - 70% token savings
/explain "microservices architecture" --uc

# Combine with deep thinking
/design "payment system" --uc --ultrathink --seq
```

## Real-World Use Cases

### 🐛 Debug Production Issue with Sequential Thinking
```bash
/troubleshoot "API returns 500 errors intermittently" --prod --seq --think-hard

# SuperClaude will:
# 1. Analyze symptoms systematically
# 2. Form hypotheses step-by-step  
# 3. Suggest diagnostic commands
# 4. Guide through resolution
# 5. Recommend preventive measures
```

### 🏗️ Architecture Review with Deep Analysis
```bash
/analyze --arch --ultrathink --c7 --persona-architect

# Combines:
# - Architecture persona expertise
# - Maximum thinking depth (32K tokens)
# - Documentation cross-reference
# - Systematic evaluation
```

### 🚀 Build Feature with TDD
```bash
/build "user authentication system" --api --tdd --seq --think

# Process:
# 1. Design API endpoints first
# 2. Write tests before code
# 3. Implement step-by-step
# 4. Validate each component
# 5. Integration testing
```

## Quick Start Guide

### 1. Basic Usage
```bash
# Natural language - auto-activation handles the rest
"help me optimize this React component"

# Structured command
/improve --performance --react
```

### 2. Enhanced Analysis
```bash
# Add thinking modes
/analyze --code --think        # Standard analysis (~4K tokens)
/analyze --code --think-hard   # Deep analysis (~10K tokens)  
/analyze --code --ultrathink   # Maximum depth (~32K tokens)
```

### 3. Efficient Development
```bash
# Combine features for power usage
/build "REST API" --tdd --seq --uc --persona-backend
#       ↓          ↓     ↓     ↓    ↓
#    Project      TDD  Steps  Save  Expert
```

## Documentation Structure

### 📚 Comprehensive Guides
- [Getting Started](./getting-started) - Quick onboarding with examples
- [Commands Guide](./guides/commands-guide) - All 19 commands detailed
- [Personas Guide](./guides/personas-md-guide) - Cognitive profiles explained
- [MCP Integration](./guides/mcp-md-guide) - Server capabilities
- [Best Practices](./guides/best-practices) - Pro tips & workflows

### 🔧 Reference
- [Command Quick Reference](./reference/commands-quick-ref) - Cheat sheet
- [Version Comparison](./version-comparison) - v1 vs v2
- [Core Configuration](./core-config/claude-md) - Technical details

## Legend

| Symbol | Meaning | | Flag | Purpose |
|--------|---------|---|------|---------|
| → | leads to | | --seq | Sequential thinking |
| & | and/with | | --c7 | Context7 docs |
| ⚡ | optimized | | --uc | UltraCompressed |
| 🧠 | thinking | | --think | Analysis mode |
| 🔧 | technical | | --plan | Preview only |

---

Ready to supercharge your development? Continue to [Getting Started](./getting-started) →