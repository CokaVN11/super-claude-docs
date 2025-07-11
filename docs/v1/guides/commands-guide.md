---
sidebar_position: 7
title: SuperClaude Commands Guide
---

# Mastering SuperClaude Commands

SuperClaude provides 18 powerful commands that streamline your development workflow. Each command is designed for specific tasks and can be enhanced with flags for deeper analysis and specialized behavior.

## Command Structure

All commands follow this pattern:
```bash
/user:<command> [flags]
```

## Universal Flags

These flags work with ALL commands:

### Thinking Modes
```bash
--think          # Standard analysis (multi-file, ~4K tokens)
--think-hard     # Deep analysis (architecture level, ~10K tokens)  
--ultrathink     # Critical analysis (system-wide, ~32K tokens)
```

### Planning & Documentation
```bash
--plan           # Show execution plan before running
--uc             # UltraCompressed mode (~70% token reduction)
```

### MCP Server Control
```bash
--c7/--no-c7     # Context7 docs lookup
--seq/--no-seq   # Sequential thinking
--magic/--no-magic # Magic UI builder
--pup/--no-pup   # Puppeteer browser
--all-mcp        # Enable all MCP servers
--no-mcp         # Native tools only
```

## Development Commands

### 🔨 /user:build - Universal Project Builder

**Purpose**: Build anything from components to full applications

**Key Flags**:
```bash
--init           # Initialize new project
--feature        # Add specific feature
--react          # React project with best practices
--api            # RESTful API with Express
--fullstack      # Complete full-stack app
--tdd            # Test-driven development
--watch          # Live development mode
```

**Examples**:

```bash
# New React project
/user:build --init --react
→ Creates: Vite + React + TypeScript + Testing setup

# Add authentication feature
/user:build --feature "user authentication with JWT"
→ Adds: Auth endpoints, JWT logic, middleware

# Full-stack app with TDD
/user:build --fullstack --tdd
→ Creates: React frontend + Express backend + tests
```

**Real Scenario**:
```
User: /user:build --react --magic
Building a dashboard for analytics

SuperClaude:
Creating React dashboard...
✓ Project structure with Vite
✓ TypeScript configuration
✓ Component architecture
[Magic activated] Generating dashboard components:
- MetricsCard
- ChartContainer
- DataTable
✓ Responsive layout
✓ Dark mode support
```

### 🧪 /user:test - Comprehensive Testing

**Purpose**: Create and run tests at all levels

**Key Flags**:
```bash
--unit           # Unit tests only
--integration    # Integration tests
--e2e            # End-to-end tests
--coverage       # Generate coverage report
--watch          # Watch mode
--fix            # Fix failing tests
```

**Examples**:
```bash
# Full test suite with coverage
/user:test --coverage
→ Runs all tests, generates coverage report

# Watch mode for TDD
/user:test --unit --watch
→ Re-runs tests on file changes

# E2E testing with Puppeteer
/user:test --e2e --pup
→ Browser-based testing
```

### 🛠️ /user:dev-setup - Environment Configuration

**Purpose**: Set up development environment and CI/CD

**Key Flags**:
```bash
--install        # Install dependencies
--ci             # CI/CD pipeline setup
--hooks          # Git hooks
--monitor        # Monitoring setup
--docker         # Docker configuration
```

**Example Workflow**:
```bash
# Complete dev environment
/user:dev-setup --install --ci --hooks
→ Package installation
→ GitHub Actions workflow
→ Pre-commit hooks
→ ESLint + Prettier
```

## Analysis & Improvement Commands

### 🔍 /user:analyze - Multi-Dimensional Analysis

**Purpose**: Deep analysis of code, architecture, performance, and security

**Key Flags**:
```bash
--code           # Code quality analysis
--architecture   # System design review
--profile        # Performance profiling
--security       # Security audit
--complexity     # Complexity metrics
--deps           # Dependency analysis
```

**Examples**:

```bash
# Full codebase analysis
/user:analyze --code --think
→ Code quality report
→ Complexity metrics
→ Improvement suggestions

# Performance deep dive
/user:analyze --profile --seq
→ Bottleneck identification
→ Memory usage patterns
→ Optimization opportunities

# Architecture review
/user:analyze --architecture --think-hard
→ System design evaluation
→ Coupling analysis
→ Scalability assessment
```

**Real Usage**:
```
User: /user:analyze --profile
App feels slow, not sure why

SuperClaude:
Profiling application performance...

⚠️ Performance Issues Found:
1. N+1 queries in /api/users (320ms)
2. Unoptimized images (1.2MB average)
3. Synchronous API calls in component
4. Missing database indexes

📊 Metrics:
- Initial load: 4.2s
- Time to interactive: 5.8s
- Bundle size: 2.4MB

🎯 Quick wins:
1. Add eager loading: -300ms
2. Image optimization: -1s
3. Parallel API calls: -500ms
```

### 🐛 /user:troubleshoot - Debug & Fix Issues

**Purpose**: Systematic debugging and problem resolution

**Key Flags**:
```bash
--investigate    # Deep investigation mode
--fix            # Apply fixes
--five-whys      # Root cause analysis
--prod           # Production-specific
--emergency      # Crisis mode
```

**Investigation Flow**:
```bash
# Step 1: Investigate
/user:troubleshoot --investigate
→ Gathers evidence
→ Forms hypotheses
→ Tests theories

# Step 2: Fix
/user:troubleshoot --fix
→ Implements solution
→ Adds tests
→ Verifies fix
```

**Production Emergency**:
```
User: /user:troubleshoot --prod --emergency
Database connections maxing out!

SuperClaude:
🚨 Emergency Mode Activated

Immediate actions:
1. Checking connection pool: 100/100 used
2. Active queries: 847 (!)
3. Found: Connection leak in auth middleware

Quick fix:
```javascript
// Add to auth.js line 45:
finally {
  await connection.release();
}
```
Deploy this NOW.

Long-term fix after crisis:
- Implement connection pooling
- Add monitoring alerts
- Review all middleware
```

### ⚡ /user:improve - Code Enhancement

**Purpose**: Improve code quality, performance, and maintainability

**Key Flags**:
```bash
--quality        # Code quality improvements
--performance    # Performance optimization
--refactor       # Refactoring suggestions
--iterate        # Iterative improvements
--threshold <n>  # Target metric threshold
```

**Examples**:
```bash
# Improve code quality
/user:improve --quality
→ Reduces complexity
→ Improves naming
→ Adds error handling

# Performance optimization
/user:improve --performance --threshold 90
→ Optimizes until 90% performance score
→ Implements caching
→ Reduces bundle size
```

### 📚 /user:explain - Deep Explanations

**Purpose**: Explain code, concepts, or decisions

**Key Flags**:
```bash
--depth <level>  # beginner/intermediate/expert
--visual         # Include diagrams
--examples       # Real-world examples
--compare        # Compare approaches
```

**Usage**:
```bash
# Explain complex code
/user:explain --depth intermediate
"How does this authentication middleware work?"

# Compare approaches
/user:explain --compare
"REST vs GraphQL for our use case"
```

## Operations Commands

### 🚀 /user:deploy - Deployment Management

**Purpose**: Deploy applications safely

**Key Flags**:
```bash
--env <env>      # Target environment
--rollback       # Rollback deployment
--canary         # Canary deployment
--dry-run        # Preview only
```

**Deployment Flow**:
```bash
# Stage first
/user:deploy --env staging --plan
→ Shows deployment plan
→ Runs pre-flight checks

# Production with safety
/user:deploy --env prod --canary
→ Deploys to 10% of servers
→ Monitors metrics
→ Auto-rollback if issues
```

### 🔒 /user:scan - Security & Validation

**Purpose**: Security audits and code validation

**Key Flags**:
```bash
--security       # Security audit
--owasp          # OWASP compliance
--deps           # Dependency vulnerabilities
--validate       # Code validation
```

**Security Workflow**:
```bash
# Full security audit
/user:scan --security --owasp
→ Checks for vulnerabilities
→ OWASP Top 10 compliance
→ Generates security report

# Pre-deployment validation
/user:scan --validate
→ Linting
→ Type checking
→ Test coverage
→ Security basics
```

### 🧹 /user:cleanup - Project Maintenance

**Purpose**: Clean and organize projects

**Key Flags**:
```bash
--code           # Code cleanup
--files          # File organization
--deps           # Dependency cleanup
--git            # Git cleanup
--all            # Everything
--dry-run        # Preview changes
```

**Safe Cleanup**:
```bash
# Always preview first
/user:cleanup --all --dry-run
→ Shows what will be cleaned

# Then execute
/user:cleanup --all
→ Removes unused code
→ Organizes files
→ Updates dependencies
→ Cleans git history
```

### 📝 /user:git - Git Workflow Management

**Purpose**: Comprehensive git operations

**Key Flags**:
```bash
--status         # Enhanced status
--commit         # Smart commit
--checkpoint     # Create checkpoint
--rollback       # Rollback to checkpoint
--sync           # Sync with remote
```

**Advanced Git Flow**:
```bash
# Before risky operation
/user:git --checkpoint
→ Creates safe restore point

# Smart commit
/user:git --commit
→ Stages intelligently
→ Generates commit message
→ Runs pre-commit checks

# If things go wrong
/user:git --rollback
→ Restores to checkpoint
```

## Design & Architecture Commands

### 🏗️ /user:design - System Design

**Purpose**: Design APIs, systems, and architectures

**Key Flags**:
```bash
--api            # API design
--ddd            # Domain-driven design
--prd            # Product requirements
--openapi        # OpenAPI spec
--graphql        # GraphQL schema
```

**Design Workflows**:
```bash
# API design with DDD
/user:design --api --ddd
→ Identifies bounded contexts
→ Designs aggregates
→ Creates API endpoints
→ Generates OpenAPI spec

# Full system design
/user:design --prd --think-hard
→ Analyzes requirements
→ Proposes architecture
→ Identifies risks
→ Creates implementation plan
```

## Workflow Commands

### 🤖 /user:spawn - Focused Agent

**Purpose**: Create specialized agent for specific task

```bash
/user:spawn --task "optimize database queries"
→ Creates focused agent
→ Analyzes all queries
→ Optimizes systematically
→ Reports improvements
```

### 📖 /user:document - Documentation

**Purpose**: Generate documentation

**Key Flags**:
```bash
--api            # API documentation
--user           # User guides
--readme         # README files
--inline         # Code comments
```

## System Commands

### 📂 /user:load - Load Project Context

**Purpose**: Load project into context

**Key Flags**:
```bash
--depth shallow  # Main files only
--depth medium   # Include tests
--depth deep     # Everything relevant
```

## Power Workflows

### Complete Feature Development
```bash
# 1. Load and analyze
/user:load --depth deep
/user:analyze --architecture

# 2. Design
/user:design --api --ddd

# 3. Build with TDD
/user:build --feature --tdd

# 4. Test thoroughly
/user:test --coverage

# 5. Security check
/user:scan --security

# 6. Deploy
/user:deploy --env staging
```

### Emergency Production Fix
```bash
# 1. Investigate
/user:troubleshoot --prod --investigate --ultrathink

# 2. Create checkpoint
/user:git --checkpoint

# 3. Fix issue
/user:troubleshoot --fix

# 4. Validate
/user:scan --validate
/user:test

# 5. Deploy fix
/user:deploy --env prod --emergency
```

### Performance Optimization
```bash
# 1. Profile
/user:analyze --profile --seq

# 2. Improve iteratively
/user:improve --performance --iterate --threshold 95

# 3. Validate improvements
/user:test --performance
/user:analyze --profile
```

## Best Practices

1. **Start with load**: Always load context first
2. **Use --plan for risky operations**: Preview before executing
3. **Chain commands naturally**: Analysis → Design → Build → Test
4. **Checkpoint before big changes**: Use git checkpoints
5. **Validate before deploy**: Always scan --validate
6. **Use appropriate thinking depth**: Don't --ultrathink for simple tasks
7. **Let MCP tools auto-activate**: They usually pick correctly

## Quick Reference Card

| Task | Command Sequence |
|------|-----------------|
| New feature | `load → analyze → design → build --tdd → test` |
| Fix bug | `troubleshoot --investigate → fix → test` |
| Optimize | `analyze --profile → improve --performance` |
| Deploy | `test → scan --validate → deploy --env` |
| Emergency | `troubleshoot --prod --emergency → fix → deploy` |
| Refactor | `analyze --code → improve --quality → test` |
| Security | `scan --security --owasp → improve → scan --validate` |

Remember: Commands are designed to work together. Use them in natural sequences for best results.