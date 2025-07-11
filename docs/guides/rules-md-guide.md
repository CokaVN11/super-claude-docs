---
sidebar_position: 2
title: RULES.md Standards Guide
---

# Understanding RULES.md - v2 Operational Standards & Best Practices

:::info Version Notice
This guide covers **SuperClaude v2** with enhanced rules, sequential thinking, and modular YAML.
- 📚 [View v1 guide](/docs/v1/guides/rules-md-guide)
- 🆚 [Version comparison](/docs/version-comparison)
:::

RULES.md enforces quality standards and operational behaviors through a severity-based system. Think of it as Claude's quality control system that ensures consistent, secure, and efficient operations - now with transparent reasoning through `--seq`!

## The Severity System

Understanding severity levels is crucial - they determine whether Claude blocks, warns, or suggests.

### CRITICAL [10] → Block

These stop Claude completely until resolved:

#### Security Example
```
User: Store this API key in the code: sk-1234567890
SuperClaude: ❌ BLOCKED: Cannot commit secrets to code
Alternative: Use environment variables:
• Create .env file (add to .gitignore)
• Access via process.env.API_KEY
```

#### Research Example with v2 Sequential
```bash
User: Add Stripe payment integration

# ❌ v1 approach (blocked)
SuperClaude: [Without checking docs] Here's how Stripe works...
❌ BLOCKED: Must verify with official docs first

# ✅ v2 approach with --seq
/build "Stripe integration" --seq --c7 --think

# Sequential process:
# Step 1: Resolving Stripe library...
#   → C7: Found stripe-node v12.1.0
# Step 2: Fetching payment flow docs...
#   → C7: Retrieved checkout session guide
# Step 3: Analyzing integration patterns...
#   → Best practice: Server-side session creation
# Step 4: Implementing with official patterns...
✅ Following Stripe v3 documented approach
```

### HIGH [7-9] → Fix Required

Must be addressed but doesn't block completely:

#### Quality Example [8]
```javascript
// ❌ Poor error handling
try {
  processPayment(amount);
} catch (e) {
  console.log("error");
}

// ✅ HIGH standard enforced
try {
  await processPayment(amount);
} catch (error) {
  logger.error('Payment processing failed', {
    error: error.message,
    amount,
    userId: user.id,
    timestamp: new Date().toISOString()
  });
  throw new PaymentError('Transaction failed', { cause: error });
}
```

#### Git Workflow Example [8] with v2 Sequential
```bash
# ❌ Without rules
git add .
git commit -m "stuff"
git push --force

# ✅ v2 with sequential git workflow
/git --commit --seq --think

# Sequential git process:
# Step 1: Checking repository status...
#   → Modified: 5 files in auth module
# Step 2: Reviewing changes...
#   → auth.service.ts: JWT implementation
#   → auth.controller.ts: Login endpoints
# Step 3: Analyzing commit scope...
#   → Feature: Authentication system
# Step 4: Staging relevant files...
#   → Using git add -p for selective staging
# Step 5: Creating semantic commit...

git commit -m "feat: add user authentication with JWT

- Implement login/logout endpoints
- Add JWT token generation
- Include refresh token logic

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"
git push origin feature/auth
```

### MEDIUM [4-6] → Warn

Issues warnings but continues:

#### DRY Principle Example [6]
```javascript
// ⚠️ Warning: Code duplication detected
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function checkEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// SuperClaude suggests:
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validateEmail = email => EMAIL_REGEX.test(email);
```

### LOW [1-3] → Suggest

Gentle suggestions for improvement:

```javascript
// 💡 Suggestion: Use modern syntax
var name = "John";           // Could use const
name = name + " Doe";        // Could use template literal

// Suggested:
const firstName = "John";
const fullName = `${firstName} Doe`;
```

## Core Protocols in Action

### Critical Thinking [H:8] with v2 Sequential

SuperClaude challenges assumptions and provides alternatives with transparent reasoning:

```bash
User: We should use MongoDB for everything

# v2 with sequential critical analysis
/analyze --db-choice --seq --think --persona-architect

# Sequential evaluation:
# Step 1: Analyzing data relationships...
#   → User ↔ Orders: One-to-many
#   → Order ↔ Items: Many-to-many
#   → Conclusion: Highly relational
#
# Step 2: Evaluating requirements...
#   → ACID needed: Yes (payments)
#   → Complex queries: Yes (reporting)
#   → Schema flexibility: Limited need
#
# Step 3: Comparing options...
#   → MongoDB: Good for documents
#   → PostgreSQL: Better for relations
#   → Hybrid: Best of both worlds

Consider these factors:
• Relational data? → PostgreSQL might be better
• Need ACID? → Traditional RDBMS recommended  
• Truly document-based? → MongoDB fits
Risk: Using NoSQL for relational data causes complexity
Alternative: Hybrid approach - PostgreSQL + Redis cache
```

### Evidence-Based Responses [C:10]

No unsubstantiated claims:

```
❌ "This is the best solution"
❌ "This is always faster"
❌ "This is more secure"

✅ "Benchmarks show 40% improvement"
✅ "Testing confirms sub-100ms response"
✅ "OWASP recommends this approach"
```

## Task Management Examples with v2 Sequential

### Complex Feature Implementation
```bash
User: Add real-time notifications to our app

# v2 with sequential task breakdown
/task "real-time notifications" --breakdown --seq --think

# Sequential task planning:
# Step 1: Analyzing requirements...
#   → Real-time updates needed
#   → Bi-directional communication
#   → Reconnection handling required
#
# Step 2: Evaluating technologies...
#   → WebSocket: Full duplex, complex
#   → SSE: One-way, simpler
#   → Polling: Inefficient for real-time
#
# Step 3: Creating task breakdown...

SuperClaude creates todos:
1. Research WebSocket vs SSE vs Polling --seq
2. Design notification architecture --seq --think
3. Implement WebSocket server --seq
4. Create client-side connection manager --seq
5. Add notification UI components --magic --seq
6. Implement retry logic --seq --think-hard
7. Add tests for real-time features --seq

[Updates immediately with sequential progress]
✅ Research complete: Using Socket.io (Step 1-3 done)
🔄 Designing architecture... (Step 1: Entity mapping...)
```

### Parallel Operations
```javascript
// ❌ Sequential (slow)
const user = await fetchUser(id);
const posts = await fetchPosts(id);
const comments = await fetchComments(id);

// ✅ Parallel (fast)
const [user, posts, comments] = await Promise.all([
  fetchUser(id),
  fetchPosts(id),
  fetchComments(id)
]);
```

## Git Operations Examples

### Before Commit Workflow
```bash
# SuperClaude always runs:
git status                    # See what's changed
git diff                      # Review changes
git diff --staged            # Review staged changes

# Interactive staging
git add -p                   # Review each change

# Meaningful commit
git commit -m "fix: resolve memory leak in user service

- Clear event listeners on component unmount
- Add cleanup in useEffect hooks
- Reduce heap usage by 60%"
```

### Checkpoint System
```
User: About to refactor the entire auth system

SuperClaude:
Creating checkpoint before risky operation...
✅ Checkpoint created: refactor-auth-start
Proceed with refactor. Use '/rollback' if needed.
```

## Communication Standards with v2 Features

### Concise Responses with Sequential Mode
```bash
# ❌ Long explanation (v1 style):
"I'll help you fix this bug. First, I need to understand what's 
happening. Then I'll analyze the code to find the root cause. 
After that, I'll implement a solution and test it..."

# ✅ v2 Concise without --seq:
/troubleshoot "bug" --think
→ Found: Race condition in auth
→ Fix: Add mutex lock
→ Test: Concurrent login test

# ✅ v2 Detailed with --seq:
/troubleshoot "bug" --seq --think
# Step 1: Reproducing issue...
# Step 2: Tracing error source...
# Step 3: Implementing fix...
# Step 4: Adding regression test...
```

### Constructive Pushback with v2 Analysis
```bash
User: Let's put all business logic in the frontend

# v2 with sequential security analysis
/analyze --security --seq --think --persona-security

# Sequential risk assessment:
# Step 1: Identifying security implications...
#   → Business rules exposed in browser
#   → Can be modified by users
#   → No server-side validation
#
# Step 2: Evaluating attack vectors...
#   → Price manipulation
#   → Permission bypass
#   → Data tampering
#
# Step 3: Proposing secure alternative...

Security risk: Exposing business rules client-side
Consider:
• API validates all operations
• Frontend handles UI logic only
• Shared validation schemas (zod)
Alternative: Backend services + thin client
```

## Error Recovery Examples

### Command Failure
```bash
$ npm install
❌ Error: EACCES permission denied

SuperClaude:
Permission issue detected. Try:
1. sudo npm install (not recommended)
2. Fix npm permissions: npm config set prefix ~/.npm
3. Use nvm for Node version management
Recommended: Option 3 for long-term solution
```

### File Not Found
```
Error: Cannot find LoginForm.tsx

SuperClaude:
Searching for similar files...
Found: components/auth/Login.tsx
Found: forms/UserLogin.tsx
Did you mean one of these?
```

## Smart Defaults & Context Awareness

### Learning User Patterns
```
# First time
User: Run tests
SuperClaude: Checking package.json... Found: npm test

# Later in session
User: Run tests
SuperClaude: [Remembers] Running: npm test

# Detects pattern
User uses 'npm test' → 'npm run test:watch' → 'npm run test:coverage'
SuperClaude: Notice you often run coverage after tests. 
Create alias 'test-full'?
```

### Project Context
```javascript
// SuperClaude detects React project with TypeScript
// Automatically uses:
- TypeScript interfaces over PropTypes
- .tsx extension for components  
- React.FC type for functional components
- Proper event handler types
```

## Security Standards Examples

### Input Validation
```javascript
// ❌ Vulnerable
app.get('/user/:id', (req, res) => {
  db.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
});

// ✅ Secure (enforced by rules)
app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  db.query('SELECT * FROM users WHERE id = ?', [id]);
});
```

### Secret Detection
```
# Patterns that trigger blocks:
- API_KEY=sk-1234567890
- password: "hardcoded"
- AWS_SECRET_ACCESS_KEY in code
- Private keys in commits
```

## Development Practice Examples

### Clean Code Standards
```javascript
// ❌ Violates standards
function d(u,p,e,a,b,c) {
  if(u && p) {
    // 50 lines of nested code
  }
}

// ✅ Follows standards
function authenticateUser(username, password) {
  validateCredentials(username, password);
  const user = await findUser(username);
  const isValid = await verifyPassword(password, user.hash);
  return generateToken(user);
}

// Functions < 20 lines
// Cyclomatic complexity < 5
// Nesting < 3 levels
```

### SOLID Principles
```javascript
// ❌ Violates Single Responsibility
class User {
  constructor(data) { this.data = data; }
  save() { /* database logic */ }
  sendEmail() { /* email logic */ }
  validate() { /* validation logic */ }
}

// ✅ Follows SOLID
class User {
  constructor(data) { this.data = data; }
}

class UserRepository {
  save(user) { /* database logic */ }
}

class EmailService {
  sendWelcome(user) { /* email logic */ }
}

class UserValidator {
  validate(user) { /* validation logic */ }
}
```

## Efficiency Rules

### Token Optimization
```yaml
# Document structure enforcement
❌ Long format:
Introduction:
This document describes how to use our API...

Overview:
Our API provides various endpoints...

✅ Optimized:
# API Reference
Base URL: https://api.example.com

## Auth
POST /login - Get token
GET /user - Get profile
```

### Context Management
```
# When context > 60%
SuperClaude: Switching to compact mode
• Shorter responses
• Symbols > words
• Essential info only

# When context > 90%
SuperClaude: ⚠️ Context critical
Ultra-compressed activated
Legend: cfg=configuration impl=implementation
```

## Real-World Scenarios

### Production Issue
```
User: Site is down! 500 errors everywhere!

SuperClaude [HIGH:9 Emergency Protocol]:
1. Check server status ✓
2. Review recent deployments
3. Check error logs
4. Found: Database connection timeout
5. Action: Restart connection pool
6. Verify: Services restored
7. Post-mortem: Connection leak in v2.1.0
```

### Code Review Request
```
User: Review this PR

SuperClaude applies standards:
✅ Security: Input validation present
⚠️ Performance: N+1 query detected → Add .includes()
⚠️ Code quality: Function too complex → Split into 3
✅ Tests: Coverage adequate
❌ Documentation: Missing API docs → Required
```

## v2 Modular YAML Architecture

### How Rules Are Organized
```yaml
# v2 uses @include for modular rules
Structure:
  RULES.md: Main rules with @includes
  shared/superclaude-rules.yml: Core rules
  commands/shared/: Command-specific rules

Example from RULES.md:
  ## Security Standards
  @include shared/superclaude-rules.yml#Security_Standards
  
  ## Development Practices  
  @include shared/superclaude-rules.yml#Development_Practices
```

### Rule Inheritance with --seq
```bash
# Rules cascade through command execution
/build "api" --seq --think

# Sequential rule application:
# Step 1: Loading global rules...
#   → Security: Input validation required
#   → Quality: Error handling mandatory
# Step 2: Loading command rules...
#   → Build: TDD cycle enforced
#   → Build: Clean architecture
# Step 3: Applying context rules...
#   → TypeScript: Strict mode on
#   → API: OpenAPI documentation
```

## Real-World v2 Scenarios

### Production Emergency with Sequential Response
```bash
User: Site is down! 500 errors everywhere!

# v2 emergency protocol with --seq
/troubleshoot --emergency --prod --seq --ultrathink

# Sequential emergency response:
# Step 1: Triage severity...
#   → Impact: All users affected
#   → Priority: CRITICAL [10]
#
# Step 2: Checking vitals...
#   → Server: Responding
#   → Database: Connection timeout
#   → Cache: Operational
#
# Step 3: Analyzing recent changes...
#   → Deploy 2h ago: New connection pooling
#   → Config change: Pool size 100→10
#
# Step 4: Implementing fix...
#   → Reverting pool size
#   → Restarting connections
#
# Step 5: Verifying recovery...
#   → Services: All green
#   → Monitoring: Normal metrics
#
# Step 6: Post-mortem preparation...
#   → Root cause: Misconfigured pool
#   → Action items: Config validation

Resolution time: 3 minutes
```

### Code Review with v2 Standards
```bash
User: Review this PR

# v2 PR review with sequential analysis
/review --pr --seq --think --all-checks

# Sequential review process:
# Step 1: Security scan [CRITICAL]...
#   ✅ Input validation present
#   ✅ No hardcoded secrets
#   ⚠️ Missing CSRF token check
#
# Step 2: Code quality [HIGH]...
#   ✅ Test coverage: 87%
#   ⚠️ Function complexity: 8 (limit: 5)
#   ❌ Missing error boundaries
#
# Step 3: Performance check [HIGH]...
#   ⚠️ N+1 query in getUserPosts()
#   ✅ Proper indexing
#   ✅ Connection pooling
#
# Step 4: Standards compliance [MEDIUM]...
#   ✅ Follows naming conventions
#   ⚠️ Missing JSDoc on public methods
#   ✅ Proper file structure

Review summary:
- 1 HIGH issue must be fixed (error boundaries)
- 3 warnings to address
- Security and performance acceptable
```

## Best Practices Summary - v2 Enhanced

1. **Let severity guide you**: CRITICAL stops everything, HIGH must be fixed
2. **Use --seq for transparency**: See rule application step-by-step
3. **Evidence over opinion**: Always back claims with data
4. **Leverage @includes**: Modular rules for consistency
5. **Fail gracefully**: Every error needs a recovery path
6. **Learn from patterns**: Adapt to user preferences
7. **Security isn't optional**: Always validate, never trust
8. **Quality compounds**: Small improvements add up
9. **Context is king**: Remember everything in session
10. **Embrace automation**: Let v2 auto-activate appropriate rules

Remember: RULES.md in v2 isn't about restrictions - it's about consistency, quality, and protecting both the code and the developer from common pitfalls, with full transparency through sequential reasoning! 🚀