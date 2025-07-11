---
sidebar_position: 2
title: Getting Started
---

# Getting Started with SuperClaude v2

:::tip Version Info
This guide covers **SuperClaude v2** with enhanced features. [View v1 guide](/docs/v1/getting-started) | [Version comparison](/docs/version-comparison)
:::

Welcome to SuperClaude v2! This guide showcases real-world scenarios with the new `--seq` (sequential thinking) and `--think` modes.

## Quick Start by Scenario

### 🆕 First Time Using SuperClaude v2

```bash
# 1. Natural language - let auto-activation work
"analyze this codebase and suggest improvements"

# 2. Add sequential thinking for step-by-step analysis
/load --seq
/analyze --code --seq --think

# 3. Watch SuperClaude reason through the analysis
# → Loading project structure...
# → Identifying key components...
# → Analyzing patterns...
# → Generating recommendations...
```

### 🐛 Debug Complex Issues with Sequential Thinking

The `--seq` flag enables step-by-step reasoning, perfect for tricky bugs:

```bash
# Example 1: Memory leak investigation
/troubleshoot "app crashes after 2 hours with OOM error" --seq --think-hard

# SuperClaude will:
# Step 1: Analyze memory allocation patterns
# Step 2: Identify potential leak sources
# Step 3: Trace object lifecycle
# Step 4: Pinpoint retention issues
# Step 5: Provide fix with verification

# Example 2: Race condition debugging
/troubleshoot "random data corruption in concurrent writes" --seq --ultrathink

# Sequential process:
# → Analyze concurrent access patterns
# → Map execution timelines
# → Identify race windows
# → Design synchronization solution
# → Implement with tests
```

### 🏗️ Architecture Design with Deep Thinking

Combine thinking modes for comprehensive design:

```bash
# Example 1: Microservices design
/design "e-commerce platform" --microservices --seq --think-hard

# Sequential design process:
# Step 1: Domain analysis and boundaries
# Step 2: Service identification
# Step 3: API contract design
# Step 4: Data flow mapping
# Step 5: Implementation roadmap

# Example 2: System migration planning
/design "migrate monolith to microservices" --seq --ultrathink --c7

# With documentation lookup:
# → Analyze current architecture
# → Research best practices (Context7)
# → Design transition strategy
# → Create migration phases
# → Risk assessment & mitigation
```

### ⚡ Performance Optimization with Analysis

Use thinking modes to understand performance issues:

```bash
# Example 1: API optimization
/analyze --profile --seq --think
"API endpoint takes 3 seconds to respond"

# Sequential analysis:
# → Profile request lifecycle
# → Identify bottlenecks
# → Analyze database queries
# → Check caching opportunities
# → Recommend optimizations

# Example 2: Frontend performance
/improve --performance --seq --uc --persona-frontend
"React app has 5-second initial load"

# Process with compression:
# → Analyze bundle size
# → Check render performance
# → Identify optimization points
# → Implement improvements
# → Verify with metrics
```

### 🔒 Security Audit with Systematic Thinking

Security requires methodical analysis:

```bash
# Example 1: Authentication review
/scan --security --seq --think-hard --persona-security

# Sequential security scan:
# Step 1: Authentication flow analysis
# Step 2: Session management review
# Step 3: Token security check
# Step 4: Vulnerability assessment
# Step 5: Remediation plan

# Example 2: OWASP compliance
/scan --owasp --seq --ultrathink
"prepare for security certification"

# Comprehensive process:
# → Map OWASP requirements
# → Scan each category
# → Document findings
# → Prioritize fixes
# → Implementation guide
```

## Advanced Use Cases with --seq and --think

### 📊 Data Pipeline Debugging

```bash
/troubleshoot "ETL pipeline dropping 10% of records" --seq --think-hard

# Sequential investigation:
# → Trace data flow stages
# → Analyze transformation logic
# → Check error handling
# → Identify drop points
# → Implement monitoring
```

### 🎯 API Design with Best Practices

```bash
/design "REST API for payment processing" --api --seq --think --c7

# Step-by-step design:
# → Research payment API patterns (Context7)
# → Design resource structure
# → Define endpoints & methods
# → Plan error handling
# → Security considerations
# → Generate OpenAPI spec
```

### 🔧 Refactoring Legacy Code

```bash
/improve --quality --seq --think --persona-refactorer
"modernize 5-year-old JavaScript codebase"

# Systematic refactoring:
# → Analyze code patterns
# → Identify improvement areas
# → Plan refactoring phases
# → Maintain backwards compatibility
# → Implement with tests
```

### 🚀 CI/CD Pipeline Setup

```bash
/dev-setup --ci --seq --think
"implement blue-green deployment"

# Sequential implementation:
# → Analyze current deployment
# → Design pipeline stages
# → Implement infrastructure
# → Configure automation
# → Add monitoring & rollback
```

### 📱 Mobile App Performance

```bash
/analyze --profile --seq --think-hard
"React Native app stutters during scroll"

# Performance analysis:
# → Profile render cycles
# → Analyze component updates
# → Check list optimizations
# → Memory usage patterns
# → Optimization strategy
```

## Thinking Mode Comparison

### When to Use Each Mode

| Mode | Use Case | Token Usage | Example |
|------|----------|-------------|---------|
| No flag | Simple tasks | Minimal | `"fix typo"` |
| `--think` | Standard analysis | ~4K tokens | `/analyze --code --think` |
| `--think-hard` | Complex problems | ~10K tokens | `/troubleshoot --prod --think-hard` |
| `--ultrathink` | Critical decisions | ~32K tokens | `/design --architecture --ultrathink` |

### Sequential Thinking Benefits

```bash
# Without --seq: Direct solution
/fix "login error"
→ Here's the fix: [code]

# With --seq: Explained reasoning
/fix "login error" --seq
→ Step 1: Analyzing error pattern...
→ Step 2: Checking auth flow...
→ Step 3: Found issue in token validation...
→ Step 4: Implementing fix...
→ Step 5: Adding tests...
```

## Power User Combinations

### 🎭 Persona + Sequential + Thinking

```bash
# Backend API optimization
/improve --performance --seq --think-hard --persona-backend

# Security-focused refactoring
/improve --quality --seq --think --persona-security

# Frontend debugging
/troubleshoot --seq --think --persona-frontend --magic
```

### 🔌 MCP + Sequential Analysis

```bash
# Documentation-driven development
/build "implement OAuth2" --seq --c7 --think

# UI component research and build
/build "data viz dashboard" --seq --magic --think-hard

# Browser testing automation
/test "checkout flow" --e2e --seq --pup
```

### ⚡ Token Optimization Strategies

```bash
# Maximum efficiency for simple tasks
/explain "what is REST" --uc

# Balanced approach for complex tasks
/analyze --architecture --uc --seq --think

# Deep analysis with compression
/troubleshoot --prod --uc --seq --ultrathink
```

## Real-World Workflows

### Complete Feature Development

```bash
# 1. Design phase
/design "user notifications system" --seq --think-hard

# 2. Implementation with TDD
/build --feature "notifications" --tdd --seq --persona-backend

# 3. Frontend integration
/build --frontend "notification UI" --magic --seq --persona-frontend

# 4. Testing
/test --e2e --seq --pup

# 5. Performance check
/analyze --profile --seq --think

# 6. Deployment
/deploy --canary --seq --monitor
```

### Production Incident Response

```bash
# 1. Emergency triage
/troubleshoot --prod --emergency --seq

# 2. Root cause analysis
/analyze --logs --seq --think-hard

# 3. Implement fix
/fix --hotfix --seq

# 4. Post-mortem
/document --incident --seq --think
```

## Best Practices for v2

### 1. Let Sequential Thinking Guide You
```bash
# Good: Let SuperClaude show its reasoning
/troubleshoot "complex issue" --seq --think

# Less optimal: Jumping to solutions
/fix "complex issue"
```

### 2. Match Thinking Depth to Complexity
```bash
# Simple bug: Light thinking
/fix "typo in variable name" --think

# Architecture decision: Deep thinking
/design "multi-tenant system" --ultrathink --seq
```

### 3. Combine Features for Power
```bash
# Maximum capability
/analyze --architecture --seq --ultrathink --c7 --persona-architect
```

### 4. Use Natural Language First
```bash
# Start simple
"help me optimize this database query"

# Add flags if needed
/improve --performance --seq --think
```

## Quick Reference Card

### Essential Flags
- `--seq` - Step-by-step reasoning
- `--think` - Standard analysis (~4K)
- `--think-hard` - Deep analysis (~10K)
- `--ultrathink` - Maximum depth (~32K)
- `--uc` - UltraCompressed (70% savings)

### Power Combinations
- Debug: `--seq --think-hard`
- Design: `--seq --ultrathink --c7`
- Optimize: `--seq --think --uc`
- Security: `--seq --think-hard --owasp`

### Auto-Activation Keywords
- "step by step" → Activates sequential
- "think through" → Activates thinking mode
- "analyze deeply" → Activates think-hard
- "comprehensive" → Activates ultrathink

## Your First Week Roadmap

**Day 1**: Try sequential thinking
```bash
/load --seq
/analyze --code --seq --think
```

**Day 2**: Explore thinking depths
```bash
/troubleshoot "your bug" --think
/troubleshoot "complex bug" --think-hard
```

**Day 3**: Combine with personas
```bash
/build --feature "new feature" --seq --persona-backend
```

**Day 4**: Use MCP servers
```bash
/explain "React hooks" --seq --c7
/build "UI component" --magic --think
```

**Day 5**: Master token optimization
```bash
/analyze --architecture --uc --seq --ultrathink
```

**Weekend**: Build something awesome!
```bash
/design "your idea" --seq --think-hard
/build --init --tdd --seq
```

---

Ready to experience the power of sequential thinking? Start with any task and add `--seq` to see SuperClaude's reasoning process! 🚀