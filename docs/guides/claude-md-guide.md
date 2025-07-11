---
sidebar_position: 1
title: CLAUDE.md Configuration Guide
---

# Understanding CLAUDE.md - v2 Core Configuration

:::info Version Notice
This guide covers **SuperClaude v2** configuration with modular YAML and sequential thinking.
- 📚 [View v1 guide](/docs/v1/guides/claude-md-guide)
- 🆚 [Version comparison](/docs/version-comparison)
:::

CLAUDE.md is the heart of SuperClaude v2 - it defines how Claude thinks, responds, and works with enhanced transparency and modular architecture. Think of it as Claude's personality settings and operational parameters with sequential reasoning capabilities.

## v2 Core Philosophy

The core philosophy shapes every interaction with enhanced transparency:

```yaml
Philosophy: Code>docs | Simple→complex | Security first | Sequential reasoning
Communication: Concise + --seq transparency | Step-by-step when needed
Architecture: Modular YAML + @include system | 19 specialized commands
```

### What This Means in Practice

**Code > Docs**
```
❌ Without: "Let me create extensive documentation for this feature..."
✅ With: *Creates working code immediately, docs only if asked*
```

**Simple → Complex**
```
❌ Without: "Here's a comprehensive solution with all edge cases..."
✅ With: "Here's the minimal working version. Need more features?"
```

**Security First**
```
❌ Without: "This works but might have some security issues..."
✅ With: "Using parameterized queries to prevent SQL injection"
```

**Sequential Reasoning (v2 New)**
```bash
❌ Without: "Here's the solution" [no reasoning shown]
✅ With --seq: 
# Step 1: Analyzing the problem...
# Step 2: Evaluating approaches...
# Step 3: Implementing solution...
```

## v2 Communication Style

SuperClaude v2 uses symbols and concise formats with optional transparency:

```yaml
Communication: Concise format | Symbols: →|&:» | Bullets>prose | --seq for steps
```

### Example Conversations

**Standard Claude:**
```
"I'll help you build a React component. First, I need to understand what 
you're trying to achieve. Then I'll create the component structure, followed 
by implementing the functionality, and finally adding the styling..."
```

**SuperClaude v2 (Concise):**
```
Building React component:
• Structure → Logic → Styling
• Using TypeScript & Vite
```

**SuperClaude v2 (Sequential):**
```bash
/build "React component" --seq

# Step 1: Analyzing requirements...
#   → Interactive component needed
#   → TypeScript for type safety
#   → Vite for fast dev
#
# Step 2: Creating component structure...
#   → Props interface definition
#   → Component function signature
#   → JSX structure
#
# Step 3: Implementing logic...
# Step 4: Adding styling...
```

## v2 Workflow Pattern

The workflow ensures systematic task completion with sequential transparency:

```yaml
Workflow: TodoRead()→TodoWrite(3+)→Execute --seq | Update immediate | Show progress
```

### Real v2 Example

```bash
User: Help me refactor this authentication system

# v2 with sequential planning
/improve "auth system" --seq --think

# Sequential workflow:
# Step 1: Creating task breakdown...
TodoWrite: 
1. Analyze current auth implementation --seq
2. Identify security vulnerabilities --seq --think
3. Refactor to use JWT tokens --seq --tdd
4. Add rate limiting --seq
5. Update tests --seq --coverage

# Step 2: Starting execution...
[Marks #1 as in_progress]

/analyze "auth system" --seq --security
# → Step 1: Reviewing current implementation...
# → Step 2: Checking security patterns...
# → Step 3: Identifying vulnerabilities...
```

## v2 Enhanced Thinking Modes

Different complexity levels for different tasks, now with sequential transparency:

### Basic Mode (Default)
```bash
User: Fix this typo in config.js
SuperClaude: [Edits file directly] Fixed typo: 'confg' → 'config'
```

### Think Mode (--think)
```bash
User: /troubleshoot "app slow" --think

Analyzing performance issues:
• Database queries: N+1 detected
• Component renders: Unnecessary re-renders
• API patterns: Sequential calls found
[Provides specific findings and solutions]
```

### Think + Sequential Mode (--think --seq)
```bash
User: /troubleshoot "app slow" --think --seq

# Sequential performance analysis:
# Step 1: Profiling application...
#   → Load time: 3.2s
#   → Database queries: 47 total
#   → Component renders: 156 per route
#
# Step 2: Identifying bottlenecks...
#   → N+1 query in user dashboard
#   → Unnecessary re-renders in ProductList
#   → Sequential API calls instead of parallel
#
# Step 3: Planning optimizations...
[Detailed implementation plan]
```

### Think Hard Mode (--think-hard + --seq)
```bash
User: /design "microservices decision" --think-hard --seq

# Sequential architectural analysis:
# Step 1: Assessing current system...
#   → Monolithic Django app
#   → 50K users, growing 20%/month
#   → Team: 8 developers
#
# Step 2: Evaluating trade-offs...
#   → Complexity vs scalability
#   → Team expertise vs learning curve
#   → Operational overhead vs benefits
#
# Step 3: Technology evaluation...
# Step 4: Migration strategy...
# Step 5: Risk assessment...
```

### UltraThink Mode (--ultrathink + --seq)
```bash
User: /design "real-time data pipeline" --ultrathink --seq

# Ultra-deep sequential analysis:
# Step 1: Current state analysis...
#   → Batch processing: 4-hour delay
#   → Peak load: 10M events/hour
#   → SLA requirement: <100ms latency
#
# Step 2: Technology deep-dive...
#   → Kafka vs Pulsar vs Kinesis comparison
#   → Latency benchmarks
#   → Cost analysis per million events
#   → Operational complexity scoring
#
# Step 3: Architecture design...
#   → Event sourcing patterns
#   → CQRS implementation
#   → Fault tolerance strategies
#
# Step 4: Migration planning...
#   → 6-phase rollout strategy
#   → Risk mitigation at each phase
#   → Rollback procedures
#
# Step 5: Cost projections...
# Step 6: Team readiness assessment...
```

## Token Economy in Action

### Before SuperClaude
```
"I'll help you create a user registration form. First, let me explain 
what we'll be doing. We'll create a React component that handles user 
input for registration. This will include fields for username, email, 
and password. We'll also need to implement validation to ensure..."
[150+ tokens]
```

### With SuperClaude
```
Creating registration form:
• React + react-hook-form
• Fields: username, email, password
• Validation: zod schema
[30 tokens]
```

## v2 UltraCompressed Mode

Activated automatically when context > 70% or manually with --uc, now works with --seq:

### Normal Response
```
I've analyzed your authentication system and found several issues:
1. Passwords are stored in plain text
2. No rate limiting on login attempts
3. Sessions don't expire
4. Missing CSRF protection
```

### UltraCompressed Response (--uc)
```
Auth issues:
• Plaintext passwords → bcrypt
• No rate limit → express-rate-limit
• No session expiry → 24h TTL
• Missing CSRF → csurf middleware
```

### UltraCompressed + Sequential (--uc --seq)
```bash
/scan --security "auth" --uc --seq

# Compressed sequential audit:
# →1:scan →2:vulns →3:fixes →4:test
Issues: plaintext→bcrypt | no-limit→rate-limit | no-expire→TTL | no-csrf→csurf
```

## Code Economy Examples

### Variable Naming
```javascript
// ❌ Without Code Economy
const userAuthenticationToken = generateAuthenticationToken(userData);
const isUserAuthenticated = checkAuthenticationStatus(userAuthenticationToken);

// ✅ With Code Economy
const token = genToken(user);
const isAuth = checkAuth(token);
```

### Function Patterns
```javascript
// ❌ Verbose
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

// ✅ Code Economy
const calcTotal = items => 
  items.reduce((sum, {price, qty}) => sum + price * qty, 0);
```

## Auto-Activation Examples

### File-Based Activation
```
Opening ProfileCard.tsx → Activates frontend persona
Opening auth.test.js → Activates qa persona
Opening db/schema.sql → Activates backend persona
```

### Keyword-Based Activation
```
"Fix this bug" → Activates analyzer persona
"Make it faster" → Activates performance persona
"Is this secure?" → Activates security persona
```

### Context-Based Activation
```
TypeError in console → Traces error automatically
"Module not found" → Checks dependencies
Permission denied → Reviews security settings
```

## Cost Optimization in Practice

### Simple Task
```
User: Format this JSON file
Model: sonnet (cheapest)
Action: Direct formatting, no analysis needed
```

### Complex Task
```
User: Analyze our API performance bottlenecks
Model: sonnet-4
Action: Multi-file analysis, performance profiling
```

### Critical Task
```
User: Design our payment processing architecture
Model: opus-4
Action: Security-critical system design with compliance
```

## v2 Practical Conversation Starters

### Quick Fix
```bash
/troubleshoot "login button not working"
# Auto-activates analyzer + --seq if needed
```

### Feature Development
```bash
/build "dashboard with user metrics" --seq --think --persona-frontend
# Sequential UI development with transparency
```

### System Design
```bash
/design "scalable notification system" --seq --ultrathink --persona-architect
# Deep architectural analysis with step-by-step reasoning
```

### Performance Optimization
```bash
/analyze --performance "app takes 5s, need <2s" --seq --think --pup
# Sequential optimization with browser profiling
```

### Code Review
```bash
/review "payment module" --seq --think --persona-refactorer
# Step-by-step code quality analysis
```

### Security Audit
```bash
/scan --security --owasp --seq --think-hard
# Sequential OWASP security scan with detailed analysis
```

## v2 Pro Tips

1. **Embrace sequential thinking**
   ```bash
   "step by step" → Auto-activates --seq
   "show your thinking" → Auto-activates --seq --think
   "deep dive" → Auto-activates --seq --ultrathink
   ```

2. **Combine commands with personas and flags**
   ```bash
   /scan --security --owasp --seq --persona-security
   /build "API" --seq --tdd --persona-backend --c7
   ```

3. **Let v2's enhanced auto-activation work**
   ```bash
   "debug this error" → analyzer + --seq + --think-hard
   "optimize performance" → performance + --seq + --pup
   Opening *.tsx file → frontend + --magic
   ```

4. **Use symbols and v2 command shortcuts**
   ```bash
   /build "auth → jwt → refresh tokens" --seq
   /design "React + TS + Vite app" --seq --ultrathink
   ```

5. **Be specific for better results**
   ```bash
   ❌ "Make it better"
   ✅ /improve --performance "reduce load from 3s to <1s" --seq
   ```

6. **Leverage modular YAML architecture**
   ```yaml
   # Use @include for reusable configs
   @include shared/superclaude-core.yml#Core_Philosophy
   @include commands/shared/universal-constants.yml#Universal_Legend
   ```

## v2 Common Patterns

### Debug Flow with Sequential Transparency
```bash
1. Error appears
2. Analyzer persona auto-activates with --seq
3. Sequential thinking traces root cause step-by-step
4. Fix implemented with reasoning shown
5. Tests added with coverage validation
```

### Feature Flow with v2 Commands
```bash
1. /design "feature" --seq --persona-architect
2. /build "backend" --seq --tdd --persona-backend
3. /build "frontend" --seq --magic --persona-frontend  
4. /test --e2e --seq --pup --persona-qa
5. /scan --security --seq --persona-security
```

### Optimization Flow with Sequential Analysis
```bash
1. /analyze --performance --seq --pup --persona-performance
2. Sequential bottleneck identification with --seq
3. /improve --performance --seq with step-by-step fixes
4. /test --performance --seq for measurement validation
```

### v2 Learning Flow
```bash
1. /explain "concept" --seq --c7 --persona-mentor
2. Sequential explanation with documentation
3. /build "practice project" --seq --think
4. Step-by-step guided implementation
```

## v2 Modular Architecture Benefits

```yaml
# v2's @include system enables:
Reusability: Shared configs across commands
Maintainability: Single source of truth  
Scalability: Easy to add new commands
Consistency: Unified behavior patterns
Transparency: --seq shows decision process
```

Remember: CLAUDE.md v2 is about making Claude work the way developers think - fast, efficient, focused on results, but with the option for complete transparency through sequential reasoning when needed! 🚀