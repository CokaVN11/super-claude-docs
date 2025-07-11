---
sidebar_position: 7
title: SuperClaude v2 Commands Guide
---

# Mastering SuperClaude v2 Commands

:::info Version 2 Enhanced
This guide covers all **19 commands** in SuperClaude v2 with extensive `--seq` and `--think` examples. [View v1 guide](/docs/v1/guides/commands-guide)
:::

SuperClaude v2 provides 19 specialized commands that cover the entire development lifecycle. Each command supports universal flags including the powerful `--seq` for sequential thinking.

## Command Structure

All commands follow this pattern:
```bash
/command [flags] [arguments]
```

## Universal Flags (Available on ALL Commands)

### 🧠 Thinking Modes
```bash
--think          # Standard analysis (~4K tokens)
--think-hard     # Deep analysis (~10K tokens)  
--ultrathink     # Maximum analysis (~32K tokens)
--seq            # Sequential step-by-step reasoning
```

### ⚡ Optimization
```bash
--plan           # Preview execution plan
--uc             # UltraCompressed mode (70% token savings)
--introspect     # Show AI reasoning process
```

### 🔌 MCP Servers
```bash
--c7             # Context7 documentation lookup
--seq            # Sequential thinking server
--magic          # Magic UI component builder
--pup            # Puppeteer browser automation
--all-mcp        # Enable all MCP servers
--no-mcp         # Disable all MCP servers
```

### 🎭 Personas
```bash
--persona-architect    # Systems thinking
--persona-frontend     # UI/UX focus
--persona-backend      # API & reliability
--persona-analyzer     # Debugging expert
--persona-security     # Security mindset
--persona-mentor       # Teaching mode
--persona-refactorer   # Code quality
--persona-performance  # Speed optimization
--persona-qa          # Testing focus
```

## Development Commands

### 🔨 /build - Universal Project Builder

**Purpose**: Build anything from components to full applications with intelligent scaffolding

**Key Flags**:
```bash
--init           # Initialize new project
--feature        # Add specific feature
--react          # React with best practices
--api            # RESTful/GraphQL API
--fullstack      # Complete application
--tdd            # Test-driven development
--component      # Reusable components
```

**Examples with --seq and --think**:

```bash
# Build React app with sequential reasoning
/build --react --seq --think
"e-commerce product catalog"

# Sequential process:
# Step 1: Analyzing requirements...
# Step 2: Designing component hierarchy...
# Step 3: Setting up project structure...
# Step 4: Implementing core components...
# Step 5: Adding state management...
# Step 6: Creating test suite...

# Build API with deep thinking
/build --api --seq --think-hard
"payment processing service"

# Sequential steps:
# → Design API endpoints
# → Implement security layers
# → Add payment gateway integration
# → Create error handling
# → Generate API documentation
```

**Real-world TDD example**:
```bash
/build --feature "user notifications" --tdd --seq --persona-backend

# TDD sequence:
# 1. Write failing tests for notification service
# 2. Implement notification models
# 3. Create notification API endpoints
# 4. Add real-time WebSocket support
# 5. Implement email/SMS providers
# 6. All tests passing ✓
```

### 🧪 /test - Comprehensive Testing Framework

**Purpose**: Create and run tests at all levels with intelligent test generation

**Key Flags**:
```bash
--unit           # Unit tests
--integration    # Integration tests
--e2e            # End-to-end tests
--coverage       # Coverage analysis
--performance    # Performance tests
--security       # Security tests
--generate       # Auto-generate tests
```

**Examples with --seq and --think**:

```bash
# Generate comprehensive test suite
/test --generate --seq --think
"shopping cart functionality"

# Sequential test generation:
# → Analyze code structure
# → Identify test scenarios
# → Generate unit tests
# → Create integration tests
# → Add edge cases
# → Verify coverage

# E2E testing with browser automation
/test --e2e --seq --pup --think-hard
"user checkout flow"

# Process:
# Step 1: Map user journey
# Step 2: Write Puppeteer scripts
# Step 3: Test happy path
# Step 4: Test error scenarios
# Step 5: Performance validation
```

### 🛠️ /dev-setup - Development Environment Configuration

**Purpose**: Configure complete development environments with best practices

**Key Flags**:
```bash
--install        # Install dependencies
--ci             # CI/CD pipeline setup
--docker         # Docker configuration
--env            # Environment variables
--hooks          # Git hooks
--monitoring     # Monitoring setup
```

**Examples with sequential setup**:

```bash
# Complete DevOps setup
/dev-setup --ci --docker --monitoring --seq --think-hard

# Sequential configuration:
# → Analyze project requirements
# → Setup Docker containers
# → Configure CI/CD pipeline
# → Add monitoring tools
# → Create deployment scripts
# → Document setup process
```

## Analysis & Improvement Commands

### 🔍 /analyze - Multi-dimensional Analysis

**Purpose**: Deep analysis of code, architecture, performance, and security

**Key Flags**:
```bash
--code           # Code quality analysis
--architecture   # System design review
--performance    # Performance profiling
--security       # Security analysis
--dependencies   # Dependency audit
--complexity     # Complexity metrics
```

**Advanced examples with --seq**:

```bash
# Architecture analysis with sequential thinking
/analyze --architecture --seq --ultrathink

# Deep sequential analysis:
# Step 1: Map system components
# Step 2: Analyze dependencies
# Step 3: Identify coupling issues
# Step 4: Evaluate scalability
# Step 5: Suggest improvements
# Step 6: Create refactoring plan

# Performance bottleneck investigation
/analyze --performance --seq --think-hard --c7
"API response time over 2 seconds"

# Investigation sequence:
# → Profile request lifecycle
# → Analyze database queries
# → Check N+1 problems
# → Review caching strategy
# → Memory usage analysis
# → Generate optimization report
```

### 📋 /review - AI-Powered Code Review

**Purpose**: Comprehensive code review with actionable feedback

**Key Flags**:
```bash
--pr             # Pull request review
--security       # Security-focused review
--performance    # Performance review
--standards      # Coding standards
--suggest        # Improvement suggestions
```

**Review examples with thinking modes**:

```bash
# Pull request review with sequential analysis
/review --pr --seq --think --persona-architect

# Review process:
# → Check architecture alignment
# → Review code patterns
# → Validate test coverage
# → Security considerations
# → Performance implications
# → Detailed feedback

# Security-focused review
/review --security --seq --think-hard --owasp

# Security review steps:
# Step 1: Input validation check
# Step 2: Authentication review
# Step 3: Authorization audit
# Step 4: Data exposure analysis
# Step 5: OWASP compliance
```

### 🔧 /troubleshoot - Professional Debugging

**Purpose**: Systematic debugging and root cause analysis

**Key Flags**:
```bash
--investigate    # Deep investigation mode
--prod           # Production debugging
--logs           # Log analysis
--trace          # Stack trace analysis
--five-whys      # Root cause analysis
--reproduce      # Reproduction steps
```

**Complex debugging with --seq**:

```bash
# Production issue investigation
/troubleshoot --prod --seq --think-hard
"Memory leak causing server crashes"

# Sequential debugging:
# Step 1: Analyze memory patterns
# Step 2: Identify leak sources
# Step 3: Trace object references
# Step 4: Find retention paths
# Step 5: Implement fixes
# Step 6: Verify resolution

# Intermittent bug hunting
/troubleshoot --investigate --seq --ultrathink
"Random data corruption in distributed system"

# Investigation sequence:
# → Collect failure patterns
# → Analyze timing conditions
# → Check race conditions
# → Review transaction logs
# → Identify root cause
# → Design prevention strategy
```

### ⚡ /improve - Evidence-Based Optimization

**Purpose**: Systematic code and performance improvements

**Key Flags**:
```bash
--quality        # Code quality improvements
--performance    # Performance optimization
--refactor       # Code refactoring
--modernize      # Update to modern patterns
--iterate        # Iterative improvement
--threshold      # Quality threshold
```

**Optimization examples**:

```bash
# Performance optimization with sequential steps
/improve --performance --seq --think-hard --uc
"Database queries taking 5+ seconds"

# Optimization sequence:
# → Profile query execution
# → Analyze query plans
# → Add strategic indexes
# → Implement query caching
# → Batch operations
# → Measure improvements

# Code modernization
/improve --modernize --seq --think --persona-refactorer
"Legacy jQuery codebase to React"

# Modernization steps:
# Step 1: Analyze current structure
# Step 2: Plan migration phases
# Step 3: Create React components
# Step 4: Migrate state management
# Step 5: Update build process
# Step 6: Deprecate legacy code
```

### 📚 /explain - Technical Documentation Generator

**Purpose**: Generate clear technical explanations and documentation

**Key Flags**:
```bash
--depth          # Explanation depth (novice/intermediate/expert)
--visual         # Include diagrams
--examples       # Code examples
--interactive    # Interactive tutorials
--api            # API documentation
```

**Documentation with sequential explanation**:

```bash
# Complex concept explanation
/explain "microservices architecture" --seq --think --visual

# Explanation sequence:
# → Define core concepts
# → Explain principles
# → Show architecture diagram
# → Discuss benefits/drawbacks
# → Provide real examples
# → Best practices guide

# API documentation with examples
/explain --api --seq --examples --c7
"GraphQL schema design"

# Documentation steps:
# Step 1: Schema overview
# Step 2: Type definitions
# Step 3: Query examples
# Step 4: Mutation patterns
# Step 5: Error handling
# Step 6: Best practices
```

## Operations Commands

### 🚀 /deploy - Intelligent Deployment Management

**Purpose**: Safe, automated deployment with rollback capabilities

**Key Flags**:
```bash
--env            # Target environment
--canary         # Canary deployment
--blue-green     # Blue-green deployment
--rollback       # Rollback capability
--validate       # Pre-deployment validation
--monitor        # Post-deployment monitoring
```

**Deployment examples with sequential process**:

```bash
# Production deployment with safety checks
/deploy --env prod --canary --seq --think-hard

# Deployment sequence:
# → Validate build artifacts
# → Run pre-deployment tests
# → Deploy to canary (5%)
# → Monitor metrics
# → Gradual rollout (25%, 50%, 100%)
# → Post-deployment validation

# Blue-green deployment
/deploy --blue-green --seq --monitor --think
"critical payment service update"

# Process:
# Step 1: Prepare green environment
# Step 2: Deploy to green
# Step 3: Run smoke tests
# Step 4: Switch traffic
# Step 5: Monitor both environments
# Step 6: Decommission blue
```

### 🔄 /migrate - Database and Code Migration

**Purpose**: Safe migration of databases, APIs, and codebases

**Key Flags**:
```bash
--database       # Database migrations
--api            # API version migration
--data           # Data migration
--validate       # Migration validation
--rollback       # Rollback plan
--zero-downtime  # Zero-downtime migration
```

**Migration examples**:

```bash
# Database migration with sequential validation
/migrate --database --zero-downtime --seq --think-hard
"PostgreSQL schema update for multi-tenancy"

# Migration sequence:
# → Analyze current schema
# → Design migration strategy
# → Create migration scripts
# → Test on staging
# → Execute with validation
# → Verify data integrity

# API version migration
/migrate --api --seq --think
"v1 to v2 with breaking changes"

# Steps:
# Step 1: Map API differences
# Step 2: Create compatibility layer
# Step 3: Implement versioning
# Step 4: Migration guides
# Step 5: Deprecation timeline
```

### 🔒 /scan - Security and Compliance Scanning

**Purpose**: Comprehensive security auditing and vulnerability scanning

**Key Flags**:
```bash
--security       # Security vulnerabilities
--owasp          # OWASP Top 10
--dependencies   # Dependency vulnerabilities
--secrets        # Secret detection
--compliance     # Compliance check
--pentest        # Penetration testing
```

**Security scanning examples**:

```bash
# Comprehensive security audit
/scan --security --owasp --seq --ultrathink

# Scanning sequence:
# → Code vulnerability scan
# → Dependency audit
# → OWASP compliance check
# → Secret detection
# → Access control review
# → Generate security report

# Pre-deployment security check
/scan --pentest --seq --think-hard --persona-security
"e-commerce platform before launch"

# Penetration test sequence:
# Step 1: Attack surface mapping
# Step 2: Vulnerability scanning
# Step 3: Exploit attempts
# Step 4: Privilege escalation tests
# Step 5: Data exfiltration tests
# Step 6: Remediation plan
```

### 📊 /estimate - Project Estimation with Risk Analysis

**Purpose**: Accurate project estimation with risk factors

**Key Flags**:
```bash
--scope          # Scope definition
--breakdown      # Task breakdown
--risks          # Risk analysis
--team           # Team size consideration
--buffer         # Buffer calculation
--monte-carlo    # Statistical analysis
```

**Estimation examples**:

```bash
# Feature estimation with risk analysis
/estimate "implement real-time chat" --seq --think --risks

# Estimation sequence:
# → Break down into tasks
# → Estimate each component
# → Identify dependencies
# → Analyze risks
# → Calculate buffers
# → Provide range (optimistic/realistic/pessimistic)

# Project estimation with Monte Carlo
/estimate --scope project --monte-carlo --seq --think-hard
"mobile app MVP development"

# Analysis steps:
# Step 1: Define all features
# Step 2: Historical data analysis
# Step 3: Risk identification
# Step 4: Monte Carlo simulation
# Step 5: Confidence intervals
# Step 6: Resource planning
```

### 🧹 /cleanup - Project Maintenance and Optimization

**Purpose**: Clean up code, dependencies, and project structure

**Key Flags**:
```bash
--unused         # Remove unused code
--dependencies   # Clean dependencies
--logs           # Clean log files
--cache          # Clear caches
--optimize       # Optimize assets
--audit          # Audit before cleanup
```

**Cleanup examples**:

```bash
# Comprehensive project cleanup
/cleanup --unused --dependencies --seq --think

# Cleanup sequence:
# → Audit current state
# → Identify unused code
# → Find obsolete dependencies
# → Remove safely
# → Optimize remaining code
# → Update documentation

# Production cleanup with safety
/cleanup --audit --seq --think-hard --plan
"remove 2 years of technical debt"

# Safe cleanup process:
# Step 1: Full audit report
# Step 2: Impact analysis
# Step 3: Backup critical parts
# Step 4: Incremental cleanup
# Step 5: Validation testing
# Step 6: Performance comparison
```

### 📝 /git - Git Workflow Automation

**Purpose**: Streamline Git operations and enforce best practices

**Key Flags**:
```bash
--commit         # Smart commits
--pr             # Pull request creation
--branch         # Branch management
--merge          # Merge strategies
--rebase         # Rebase workflows
--bisect         # Bug hunting
```

**Git workflow examples**:

```bash
# Intelligent commit with sequential analysis
/git --commit --seq --think

# Commit sequence:
# → Analyze changes
# → Group related changes
# → Generate commit message
# → Run pre-commit checks
# → Create atomic commits
# → Update documentation

# Complex merge resolution
/git --merge --conflict --seq --think-hard
"feature branch with 50+ conflicts"

# Resolution process:
# Step 1: Analyze conflict patterns
# Step 2: Understand both changes
# Step 3: Resolve systematically
# Step 4: Test merged code
# Step 5: Verify functionality
```

## Design & Architecture Commands

### 🏗️ /design - Professional System Design

**Purpose**: Create comprehensive system designs and architectures

**Key Flags**:
```bash
--architecture   # System architecture
--api            # API design
--database       # Database design
--microservices  # Microservices design
--ddd            # Domain-driven design
--patterns       # Design patterns
```

**Design examples with sequential thinking**:

```bash
# Microservices architecture design
/design --microservices --ddd --seq --ultrathink
"online banking platform"

# Design sequence:
# → Domain analysis
# → Boundary identification
# → Service decomposition
# → API gateway design
# → Event-driven communication
# → Deployment architecture

# API design with best practices
/design --api --rest --seq --think-hard --c7
"multi-tenant SaaS platform"

# API design steps:
# Step 1: Resource modeling
# Step 2: Endpoint design
# Step 3: Authentication strategy
# Step 4: Rate limiting
# Step 5: Versioning approach
# Step 6: OpenAPI specification
```

## Workflow Commands

### 🚦 /spawn - Parallel Task Execution

**Purpose**: Spawn focused agents for parallel task execution

**Key Flags**:
```bash
--task           # Define specific task
--parallel       # Parallel execution
--coordinate     # Coordinate agents
--merge          # Merge results
--timeout        # Execution timeout
```

**Parallel execution examples**:

```bash
# Parallel feature development
/spawn --parallel --seq --think
- --task "frontend components"
- --task "API endpoints"  
- --task "database schema"
- --task "test suite"

# Coordination sequence:
# → Spawn specialized agents
# → Execute tasks in parallel
# → Monitor progress
# → Coordinate dependencies
# → Merge results
# → Integration testing

# Parallel debugging
/spawn --parallel --coordinate --seq
"investigate performance issues across services"

# Parallel investigation:
# Agent 1: Database analysis
# Agent 2: API profiling
# Agent 3: Frontend metrics
# Agent 4: Infrastructure review
# → Correlate findings
# → Identify root cause
```

### 📖 /document - Multi-format Documentation

**Purpose**: Generate comprehensive documentation in various formats

**Key Flags**:
```bash
--api            # API documentation
--user           # User documentation  
--technical      # Technical docs
--architecture   # Architecture docs
--readme         # README generation
--interactive    # Interactive docs
```

**Documentation examples**:

```bash
# Comprehensive API documentation
/document --api --interactive --seq --think
"GraphQL API with 50+ endpoints"

# Documentation sequence:
# → Extract schema
# → Document types
# → Example queries
# → Authentication guide
# → Rate limiting docs
# → Interactive playground

# Architecture documentation
/document --architecture --visual --seq --think-hard

# Process:
# Step 1: System overview
# Step 2: Component diagrams
# Step 3: Data flow
# Step 4: Deployment view
# Step 5: Decision records
# Step 6: Evolution roadmap
```

### 📥 /load - Context Loading and Analysis

**Purpose**: Load and analyze project context intelligently

**Key Flags**:
```bash
--depth          # Analysis depth
--patterns       # Pattern recognition
--context        # Context preservation
--index          # Create searchable index
--cache          # Cache analysis
```

**Context loading examples**:

```bash
# Deep project analysis
/load --depth deep --patterns --seq --think-hard

# Loading sequence:
# → Scan project structure
# → Identify frameworks
# → Analyze patterns
# → Map dependencies
# → Index codebase
# → Generate insights

# Pattern recognition
/load --patterns --seq --think
"identify architectural patterns"

# Analysis steps:
# Step 1: Code structure analysis
# Step 2: Pattern detection
# Step 3: Anti-pattern identification
# Step 4: Best practice alignment
# Step 5: Recommendations
```

### ✅ /task - Advanced Task Management

**Purpose**: Sophisticated task management with AI-driven breakdown

**Key Flags**:
```bash
--create         # Create tasks
--breakdown      # Break into subtasks
--estimate       # Time estimation
--dependencies   # Task dependencies
--kanban         # Kanban board
--sprint         # Sprint planning
```

**Task management examples**:

```bash
# Complex feature breakdown
/task --create --breakdown --seq --think
"implement user dashboard with real-time updates"

# Task breakdown sequence:
# → Analyze requirements
# → Create epic
# → Break into stories
# → Define subtasks
# → Estimate effort
# → Set dependencies
# → Create timeline

# Sprint planning
/task --sprint --estimate --seq --think-hard
"2-week sprint for payment integration"

# Planning sequence:
# Step 1: Velocity analysis
# Step 2: Story prioritization
# Step 3: Capacity planning
# Step 4: Risk assessment
# Step 5: Sprint backlog
# Step 6: Daily plan
```

## Best Practices for Command Usage

### 1. Start Simple, Add Complexity
```bash
# Start with basic command
/analyze

# Add thinking for complex issues
/analyze --think

# Add sequential for step-by-step
/analyze --seq --think

# Maximum analysis
/analyze --seq --ultrathink --all-mcp
```

### 2. Combine Commands for Workflows
```bash
# Complete feature workflow
/design → /build → /test → /review → /deploy

# Debugging workflow
/troubleshoot → /analyze → /improve → /test
```

### 3. Use Personas for Expertise
```bash
# Security-focused development
/build --api --seq --persona-security

# Performance-critical component
/build --component --seq --persona-performance
```

### 4. Leverage MCP Servers
```bash
# Documentation-driven development
/build "OAuth implementation" --seq --c7

# Visual component building
/build "dashboard" --magic --seq

# Automated testing
/test --e2e --pup --seq
```

## Command Cheat Sheet

### Quick Reference
| Command | Primary Use | Best With |
|---------|------------|-----------|
| `/build` | Create code | `--tdd --seq` |
| `/test` | Testing | `--coverage --think` |
| `/analyze` | Code review | `--arch --ultrathink` |
| `/troubleshoot` | Debug | `--seq --think-hard` |
| `/improve` | Optimize | `--perf --seq` |
| `/deploy` | Deployment | `--canary --monitor` |
| `/design` | Architecture | `--seq --ultrathink` |

### Power Combinations
- **Full Analysis**: `/analyze --all --seq --ultrathink --all-mcp`
- **Safe Deploy**: `/deploy --plan --validate --canary --monitor`
- **Deep Debug**: `/troubleshoot --prod --seq --ultrathink`
- **Quality Build**: `/build --tdd --seq --think --persona-backend`

---

Ready to master SuperClaude v2 commands? Start with any command and add `--seq` to see the AI's thinking process! 🚀