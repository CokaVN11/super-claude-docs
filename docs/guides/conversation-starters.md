---
sidebar_position: 5
title: Conversation Starter Guide
---

# Mastering SuperClaude Conversations

Starting conversations effectively with SuperClaude sets the tone for the entire interaction. This guide shows you how to structure requests for maximum efficiency and best results.

## The Anatomy of a Great Request

### 1. Context → Intent → Specifics

```
❌ Poor: "Fix my code"
✅ Good: "Login failing with 401 error after adding JWT auth"
🌟 Best: "Login returns 401 on valid credentials. Using Express + JWT. Token generation works but validation fails."
```

### 2. Include Constraints

```
❌ Vague: "Make it faster"
✅ Clear: "Reduce API response time from 2s to under 500ms"
🌟 Specific: "API takes 2s, need <500ms. Can't change database, budget for Redis"
```

## Conversation Patterns by Task Type

### 🐛 Debugging Pattern

**Structure**: Problem → Evidence → What You've Tried

```
User: Login throws "Cannot read property 'id' of undefined" in auth middleware. 
Happens only for Google OAuth users, not email logins. 
Tried checking user object - it exists but missing profile data.

SuperClaude:
[Analyzer persona activates]
Investigating OAuth-specific issue...
• Comparing email vs OAuth user objects
• Checking middleware execution order
Found: OAuth users created without profile relation
Fix: Eager load profile in OAuth callback
```

### 🏗️ Building Pattern

**Structure**: What → Why → Constraints

```
User: Build a notification system
- Real-time updates for web and mobile
- Must handle 10K concurrent users  
- Using existing PostgreSQL, can add Redis

SuperClaude:
/persona:architect
Designing notification system...

Architecture:
• Redis Pub/Sub for real-time
• PostgreSQL for persistence
• Socket.io for web clients
• FCM for mobile push

[Creates implementation plan with phases]
```

### 🔍 Learning Pattern

**Structure**: Current Understanding → Goal → Specific Questions

```
User: I understand basic React but struggling with Context API.
Want to manage user auth state globally.
When should I use Context vs Redux?

SuperClaude:
/persona:mentor
Let's clarify Context API step by step!

Context is perfect for your auth use case:
• Simpler than Redux for cross-cutting concerns
• Built into React (no extra dependency)
• Great for auth, themes, user preferences

Here's your auth context:
[Provides complete example with explanations]
```

### ⚡ Optimization Pattern

**Structure**: Current Metrics → Target → Constraints

```
User: Homepage loads in 4.5s, need under 2s
- Lighthouse score: 35
- Can't change backend API
- React SPA with Material-UI

SuperClaude:
/persona:performance
Analyzing performance bottlenecks...

Quick wins:
1. Code split routes: -1.2s
2. Lazy load images: -0.8s  
3. Optimize bundle: -0.7s
4. Preconnect to API: -0.3s

Total improvement: 4.5s → 1.5s
[Provides specific implementation]
```

## Power Combinations

### 🚀 The Full Stack Feature

```
User: Add user dashboard with charts showing activity metrics

Flow:
1. /persona:architect
   "Design dashboard architecture"
   → Component structure, data flow

2. /persona:backend  
   "Create metrics API endpoints"
   → Efficient queries, caching

3. /persona:frontend
   "Build dashboard UI with Chart.js"
   → Responsive components

4. /persona:qa
   "Test dashboard thoroughly"
   → Unit, integration, E2E tests
```

### 🔒 The Security Audit

```
User: /user:scan --security --think
Review our payment processing for vulnerabilities

SuperClaude executes:
1. Sequential analysis of payment flow
2. Check against OWASP guidelines
3. Test for common vulnerabilities
4. Generate security report
5. Provide remediation steps
```

### 📚 The Learning Journey

```
User: Help me master TypeScript coming from JavaScript

Progressive conversation:
1. "Explain TypeScript basics" 
   → Mentor provides foundations

2. "Convert this JS file to TS"
   → Practical application

3. "Why these type errors?"
   → Debugging together

4. "Best practices for our React app?"
   → Architecture guidance
```

## Effective Flag Usage

### Thinking Modes

```bash
# Natural language triggers
"Think about why this fails" → --think activated
"Think hard about our architecture" → --think-hard activated

# Explicit flags  
/user:analyze --code --think
/user:design --api --think-hard
/user:refactor --ultrathink
```

### MCP Control

```bash
# Force specific tools
"Explain React hooks" --c7  # Force documentation lookup
"Debug memory leak" --seq   # Force sequential analysis
"Need a data table" --magic # Force UI generation

# Disable for speed
"Format this JSON" --no-mcp # Native tools only
```

### Combined Operations

```bash
# Security analysis with deep thinking
/persona:security
/user:analyze --security --think-hard

# Performance optimization with profiling
/persona:performance  
/user:improve --performance --profile --seq

# Full stack feature with all tools
/user:build --fullstack --all-mcp
```

## Real Conversation Flows

### Flow 1: The Bug Hunt

```
User: Users report data disappearing randomly

SuperClaude: [Analyzer activates]
Investigating data loss issue...
Need more info:
• When: During save? On refresh? After time?
• Which data: All? Specific fields?
• Frequency: Always? Sometimes?

User: Happens on refresh, only form data, about 50% of time

SuperClaude: Checking for common causes...
• localStorage cleared? No
• Session timeout? No  
• State management issue? Checking...

Found: Race condition in save/redirect
Fix: Await save completion before navigation

User: That fixed it! How do I prevent this pattern?

SuperClaude: [Switches to mentor]
Let's understand race conditions...
[Explains with examples and prevention strategies]
```

### Flow 2: The Feature Build

```
User: /persona:frontend
Create an admin panel for user management

SuperClaude: Building admin panel...
Features needed:
• User list with search/filter
• Role management  
• Activity logs
• Bulk actions
Correct?

User: Yes, plus user impersonation for support

SuperClaude: Adding impersonation...
Security considerations:
• Audit trail required
• Admin-only access
• Session isolation
[Builds complete panel with all features]

User: Looks great! Now make it mobile-friendly

SuperClaude: Optimizing for mobile...
[Adjusts layouts, adds touch gestures]

User: Perfect. Add tests?

SuperClaude: [QA persona activates]
Creating comprehensive test suite...
[Adds unit, integration, and E2E tests]
```

### Flow 3: The Performance Crisis

```
User: URGENT: API crashing under load, Black Friday tomorrow!

SuperClaude: [Emergency mode]
Immediate triage:
1. Current load? 500 req/s
2. Crash point? ~400 req/s  
3. Error type? "Too many connections"

Quick fix for tomorrow:
• Increase connection pool: 20→100
• Add Redis cache for hot queries
• Enable query result caching
• Add rate limiting: 100 req/s per IP

Deploying now keeps you running.

After Black Friday, let's:
• Add read replicas
• Implement connection pooling
• Optimize slow queries

User: Deployed! It's holding at 800 req/s!

SuperClaude: Great! Monitoring...
Post-crisis improvements ready when you are.
```

## Conversation Starters for Common Scenarios

### Starting a New Project
```
/persona:architect
I need a [type] application that [core purpose].
Tech stack: [preferences or constraints]
Must handle: [key requirements]
Timeline: [deadline]
```

### Debugging Production Issues
```
/persona:analyzer  
Production issue: [symptom]
Started: [when]
Affects: [scope]
Logs show: [errors]
--think
```

### Learning New Technology
```
/persona:mentor
I know [current skills] and want to learn [new tech].
Goal: [what you want to build]
Struggling with: [specific concepts]
```

### Code Review Request
```
/persona:refactorer
Review this [component/module/PR]:
Concerns: [performance/security/maintainability]
Context: [what it does]
--think
```

### Performance Optimization
```
/persona:performance
Current: [metrics]
Target: [goals]  
Constraints: [limitations]
--profile --think
```

## Pro Tips for Great Conversations

### 1. Be Specific About Success
```
❌ "Make it better"
✅ "Reduce memory usage by 50%"
```

### 2. Include Your Constraints
```
❌ "Speed up the database"
✅ "Speed up queries, can't change schema, have $100/month budget"
```

### 3. Share What You've Tried
```
❌ "It's broken"
✅ "Tried X and Y, error persists. Suspect Z might be the cause"
```

### 4. Use Natural Flow
```
Start broad → Get specific → Iterate
"Build auth" → "Add 2FA" → "Use SMS for 2FA"
```

### 5. Leverage Context Memory
```
First: "Using React with TypeScript"
Later: Just say "add a modal" (context remembered)
```

### 6. Combine Features Naturally
```
"Build a secure API" automatically activates:
→ Architect for design
→ Backend for implementation  
→ Security for audit
```

### 7. Don't Over-Specify
```
❌ "/persona:frontend /user:build --react --magic --think-hard"
✅ "Build a React dashboard" (tools auto-activate)
```

## Quick Reference Card

### Task → Best Starter

| Task | Optimal Starter |
|------|----------------|
| **Debug** | "X fails with error Y when Z" |
| **Build** | "Create X that does Y with constraints Z" |
| **Learn** | "I understand X, struggling with Y, goal is Z" |
| **Optimize** | "Current: Xms, Target: Yms, Can't change Z" |
| **Secure** | "/user:scan --security" or "Audit X for vulnerabilities" |
| **Refactor** | "This code is complex because X, simplify while preserving Y" |
| **Design** | "System for X users doing Y with constraints Z" |

### Mood → Persona

| Need | Use |
|------|-----|
| **Big picture** | /persona:architect |
| **User-focused** | /persona:frontend |
| **Reliability** | /persona:backend |
| **Find bugs** | /persona:analyzer |
| **Security** | /persona:security |
| **Learn** | /persona:mentor |
| **Clean code** | /persona:refactorer |
| **Speed** | /persona:performance |
| **Quality** | /persona:qa |

Remember: The best conversations with SuperClaude feel natural. Start with what you need, be clear about constraints, and let the system's intelligence guide the interaction. The more specific you are about your goals, the better SuperClaude can help achieve them.