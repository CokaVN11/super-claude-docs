---
sidebar_position: 1
title: CLAUDE.md Configuration Guide
---

# Understanding CLAUDE.md - Your Core Configuration

CLAUDE.md is the heart of SuperClaude - it defines how Claude thinks, responds, and works. Think of it as Claude's personality settings and operational parameters rolled into one.

## Core Philosophy

The core philosophy shapes every interaction:

```yaml
Philosophy: Code>docs | Simple→complex | Security first
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

## Communication Style

SuperClaude uses symbols and concise formats:

```yaml
Communication: Concise format | Symbols: →|&:» | Bullets>prose
```

### Example Conversations

**Standard Claude:**
```
"I'll help you build a React component. First, I need to understand what 
you're trying to achieve. Then I'll create the component structure, followed 
by implementing the functionality, and finally adding the styling..."
```

**SuperClaude:**
```
Building React component:
• Structure → Logic → Styling
• Using TypeScript & Vite
```

## Workflow Pattern

The workflow ensures systematic task completion:

```yaml
Workflow: TodoRead()→TodoWrite(3+)→Execute | Update immediate
```

### Real Example

```
User: Help me refactor this authentication system

SuperClaude:
[Creates todo list]
1. Analyze current auth implementation
2. Identify security vulnerabilities  
3. Refactor to use JWT tokens
4. Add rate limiting
5. Update tests

[Marks #1 as in_progress]
Analyzing auth system...
```

## Thinking Modes

Different complexity levels for different tasks:

### Basic Mode (Default)
```
User: Fix this typo in config.js
SuperClaude: [Edits file directly] Fixed typo: 'confg' → 'config'
```

### Think Mode (--think)
```
User: Why is my app slow? --think
SuperClaude: 
Analyzing performance issues:
• Checking database queries for N+1 problems
• Reviewing component re-renders
• Examining API call patterns
[Provides specific findings and solutions]
```

### Think Hard Mode (--think-hard)
```
User: Should we use microservices? --think-hard
SuperClaude:
[Deep architectural analysis considering:]
• Current system complexity
• Team size and expertise
• Scaling requirements
• Operational overhead
• Cost implications
[Provides detailed recommendation with trade-offs]
```

### UltraThink Mode (--ultrathink)
```
User: Redesign our data pipeline for real-time processing --ultrathink
SuperClaude:
[Comprehensive analysis including:]
• Current bottlenecks analysis
• Technology evaluation (Kafka vs Pulsar vs Kinesis)
• Migration strategy
• Cost projections
• Risk assessment
• Phased implementation plan
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

## UltraCompressed Mode

Activated automatically when context > 70% or manually with --uc:

### Normal Response
```
I've analyzed your authentication system and found several issues:
1. Passwords are stored in plain text
2. No rate limiting on login attempts
3. Sessions don't expire
4. Missing CSRF protection
```

### UltraCompressed Response
```
Auth issues:
• Plaintext passwords → bcrypt
• No rate limit → express-rate-limit
• No session expiry → 24h TTL
• Missing CSRF → csurf middleware
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

## Practical Conversation Starters

### Quick Fix
```
Fix the login button not working
```

### Feature Development
```
/persona:frontend
Build a dashboard with user metrics --think
```

### System Design
```
/persona:architect
Design a scalable notification system --think-hard
```

### Performance Optimization
```
/persona:performance
App takes 5s to load, need < 2s --think
```

### Code Review
```
/persona:refactorer
Review and improve this payment module
```

## Pro Tips

1. **Use natural language for thinking modes**
   ```
   "Think about why this might be failing" → Activates think mode
   "Think hard about our architecture" → Activates think-hard mode
   ```

2. **Combine personas with flags**
   ```
   /persona:security
   /user:analyze --security --think
   ```

3. **Let auto-activation work**
   ```
   Just mention "bug" or "error" → analyzer activates
   Open a .tsx file → frontend activates
   ```

4. **Use symbols in your requests**
   ```
   "auth → jwt → refresh tokens"
   "React + TS + Vite"
   ```

5. **Be specific for better results**
   ```
   ❌ "Make it better"
   ✅ "Reduce load time from 3s to <1s"
   ```

## Common Patterns

### Debug Flow
```
1. Error appears
2. Analyzer persona auto-activates
3. Sequential thinking traces root cause
4. Fix implemented
5. Tests added
```

### Feature Flow
```
1. /persona:architect → Design
2. /persona:frontend or backend → Build
3. /persona:qa → Test
4. /persona:security → Audit
```

### Optimization Flow
```
1. /persona:performance → Profile
2. Identify bottlenecks
3. Implement fixes
4. Measure improvements
```

Remember: CLAUDE.md is about making Claude work the way developers think - fast, efficient, and focused on results rather than explanations.