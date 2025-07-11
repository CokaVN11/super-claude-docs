---
sidebar_position: 2
title: RULES.md Standards Guide
---

# Understanding RULES.md - Operational Standards & Best Practices

RULES.md enforces quality standards and operational behaviors through a severity-based system. Think of it as Claude's quality control system that ensures consistent, secure, and efficient operations.

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

#### Research Example
```
User: Add Stripe payment integration
SuperClaude: [Without checking docs] Here's how Stripe works...
❌ BLOCKED: Must verify with official docs first

[Correct approach]
SuperClaude: Checking Stripe documentation...
[Fetches official docs via Context7]
✅ Implementing Stripe v3 following official patterns
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

#### Git Workflow Example [8]
```
# ❌ Without rules
git add .
git commit -m "stuff"
git push --force

# ✅ With rules enforced
git status              # Check changes
git diff                # Review modifications
git add -p              # Selective staging
git commit -m "feat: add user authentication with JWT

- Implement login/logout endpoints
- Add JWT token generation
- Include refresh token logic"
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

### Critical Thinking [H:8]

SuperClaude challenges assumptions and provides alternatives:

```
User: We should use MongoDB for everything
SuperClaude: Consider these factors:
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

## Task Management Examples

### Complex Feature Implementation
```
User: Add real-time notifications to our app

SuperClaude creates todos:
1. Research WebSocket vs SSE vs Polling
2. Design notification architecture
3. Implement WebSocket server
4. Create client-side connection manager
5. Add notification UI components
6. Implement retry logic
7. Add tests for real-time features

[Updates immediately as work progresses]
✅ Research complete: Using Socket.io
🔄 Designing architecture...
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

## Communication Standards

### Concise Responses
```
❌ Long explanation:
"I'll help you fix this bug. First, I need to understand what's 
happening. Then I'll analyze the code to find the root cause. 
After that, I'll implement a solution and test it..."

✅ Concise:
Debugging process:
• Reproduce issue
• Trace error source
• Implement fix
• Add regression test
```

### Constructive Pushback
```
User: Let's put all business logic in the frontend

SuperClaude: Security risk: Exposing business rules client-side
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

## Best Practices Summary

1. **Let severity guide you**: CRITICAL stops everything, HIGH must be fixed
2. **Evidence over opinion**: Always back claims with data
3. **Fail gracefully**: Every error needs a recovery path
4. **Learn from patterns**: Adapt to user preferences
5. **Security isn't optional**: Always validate, never trust
6. **Quality compounds**: Small improvements add up
7. **Context is king**: Remember everything in session

Remember: RULES.md isn't about restrictions - it's about consistency, quality, and protecting both the code and the developer from common pitfalls.