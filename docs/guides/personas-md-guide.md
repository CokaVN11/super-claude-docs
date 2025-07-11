---
sidebar_position: 4
title: PERSONAS.md Usage Guide
---

# Understanding PERSONAS.md - v2 Behavioral Profiles

:::info Version Notice
This guide covers **SuperClaude v2** with 9 cognitive personas and sequential thinking.
- 📚 [View v1 guide](/docs/v1/guides/personas-md-guide)
- 🆚 [Version comparison](/docs/version-comparison)
:::

Personas are specialized thinking modes that change how Claude approaches problems. Each persona has unique beliefs, priorities, and problem-solving methods. Think of them as different expert consultants you can summon instantly - now with `--seq` for transparent reasoning!

## The Nine Personas with v2 Features

### 🏗️ Architect - The Systems Thinker

**Core Belief**: "Systems evolve, design for change"

#### When to Use
- Designing new systems
- Major refactoring decisions  
- Scalability planning
- Technology selection

#### Real v2 Scenario with Sequential Thinking
```bash
User: We need to handle 10x more users next year

# v2 approach with sequential reasoning
/analyze --arch --seq --think-hard --persona-architect

# Sequential analysis:
# Step 1: Assessing current architecture...
#   - Monolithic Django app
#   - Single PostgreSQL instance
#   - 1K active users
# 
# Step 2: Identifying bottlenecks...
#   - Database will hit limits at 3K users
#   - No horizontal scaling capability
#   - Session management in memory
#
# Step 3: Designing scalable solution...
#   - Microservices for critical paths
#   - Database sharding strategy
#   - Distributed caching layer
#
# Step 4: Creating migration roadmap...

Recommendations:
1. Horizontal scaling strategy:
   - Containerize with Docker
   - Kubernetes orchestration
   - Load balancer + multiple instances

2. Database optimization:
   - Read replicas for queries
   - Redis caching layer
   - Consider sharding at 5K users

3. CDN for static assets

4. Monitoring infrastructure:
   - Prometheus + Grafana
   - Distributed tracing

Migration phases:
Phase 1: Containerization (2 weeks)
Phase 2: Caching layer (1 week)  
Phase 3: Read replicas (1 week)
Phase 4: Full orchestration (3 weeks)
```

### 🎨 Frontend - The UX Perfectionist

**Core Belief**: "UX determines product success"

#### When to Use
- Building user interfaces
- Improving user experience
- Component architecture
- Accessibility concerns

#### Real v2 Scenario with Magic Integration
```bash
User: Users complain our forms are confusing

# v2 with sequential analysis and Magic UI
/analyze --ux --seq --think --persona-frontend
/build --form --magic --seq

# Sequential UX analysis:
# Step 1: Identifying pain points...
#   - No visual feedback
#   - Too many fields at once
#   - Unclear labels
#
# Step 2: Researching best practices...
#   - Progressive disclosure
#   - Real-time validation
#   - Clear visual hierarchy
#
# Step 3: Designing solution...

Solutions:
1. Progressive disclosure:
   - Step 1: Basic info (name, email)
   - Step 2: Details (optional)
   - Step 3: Confirmation

2. Real-time validation:
   ```jsx
   <TextField
     error={!!errors.email}
     helperText={errors.email || "We'll never share this"}
     onChange={validateEmail}
   />
   ```

3. Clear visual hierarchy:
   - Required fields marked
   - Related fields grouped
   - Help text on hover

4. Success feedback:
   - Green checkmarks
   - Progress bar
   - Completion celebration

# Using Magic for instant UI
/build --form-wizard --magic --seq
[Creates improved FormWizard component with Material-UI]
```

### ⚙️ Backend - The Reliability Engineer

**Core Belief**: "Reliability & performance enable everything else"

#### When to Use
- API design
- Database optimization
- System reliability
- Performance tuning

#### Real v2 Scenario with Performance Analysis
```bash
User: Our API is getting slow

# v2 approach with sequential investigation
/troubleshoot --api --seq --think-hard --persona-backend
/analyze --performance --seq

# Sequential performance analysis:
# Step 1: Profiling API endpoints...
#   - /users: 800ms average
#   - /posts: 1.2s average
#   - Database queries: 60% of time
#
# Step 2: Analyzing query patterns...
#   - N+1 queries detected
#   - Missing indexes
#   - No connection pooling
#
# Step 3: Planning optimizations...

Optimizations:
1. Fix N+1 with eager loading:
   ```python
   users = User.objects.select_related('profile').prefetch_related('posts')
   ```

2. Add connection pooling:
   ```python
   DATABASES = {
       'default': {
           'CONN_MAX_AGE': 600,
           'OPTIONS': {
               'MAX_CONNS': 20
           }
       }
   }
   ```

3. Create indexes:
   ```sql
   CREATE INDEX idx_user_email ON users(email);
   CREATE INDEX idx_posts_user_created ON posts(user_id, created_at);
   ```

4. Async external calls:
   ```python
   async def fetch_external_data():
       async with aiohttp.ClientSession() as session:
           tasks = [fetch_user_data(session, id) for id in user_ids]
           return await asyncio.gather(*tasks)
   ```

Result: 200ms → 50ms response time
```

### 🔍 Analyzer - The Root Cause Detective

**Core Belief**: "Every symptom has multiple potential causes"

#### When to Use
- Debugging complex issues
- Performance problems
- Intermittent failures
- System analysis

#### Real v2 Scenario with Sequential Debugging
```bash
User: Random 500 errors in production, can't reproduce locally

# v2 with maximum sequential analysis
/troubleshoot --prod --seq --ultrathink --persona-analyzer

# Ultra-deep sequential investigation:
# Step 1: Gathering evidence...
#   - Error frequency: 9am, 1pm, 5pm peaks
#   - Only affects logged-in users
#   - Stack trace: "Connection pool exhausted"
#
# Step 2: Forming hypotheses...
#   H1: Connection pool too small
#   H2: Connection leak
#   H3: Deadlock situation
#
# Step 3: Testing hypotheses...
#   - H1: ❌ Would be constant
#   - H2: ✓ Matches accumulation pattern
#   - H3: ❌ No deadlock in logs
#
# Step 4: Deep diving into H2...
#   - WebSocket connections not closing
#   - Each user creates persistent connection
#   - No cleanup on disconnect
#
# Step 5: Implementing fix...

Root cause: WebSocket connection leak

Fix:
```javascript
// Add connection cleanup
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    clearInterval(socket.heartbeat);
    socket.removeAllListeners();
  });
  
  // Add heartbeat timeout
  socket.heartbeat = setInterval(() => {
    if (!socket.alive) socket.disconnect();
    socket.alive = false;
    socket.ping();
  }, 30000);
});
```

Verification: No 500 errors for 48 hours ✅
```

### 🔒 Security - The Paranoid Guardian

**Core Belief**: "Threats exist everywhere, trust must be earned"

#### When to Use
- Security audits
- Authentication systems
- Data protection
- Vulnerability assessment

#### Real v2 Scenario with OWASP Scanning
```bash
User: Review our user authentication

# v2 security audit with sequential analysis
/scan --security --owasp --seq --think-hard --persona-security

# Sequential security audit:
# Step 1: Checking OWASP Top 10...
#   A01: Broken Access Control
#   A02: Cryptographic Failures
#   A03: Injection vulnerabilities
#
# Step 2: Deep diving authentication...
#   - Password storage method
#   - Session management
#   - Rate limiting
#
# Step 3: Identifying vulnerabilities...

🔴 CRITICAL Issues:
1. Passwords stored as MD5 hashes
2. No rate limiting on login
3. Session tokens in URL
4. SQL injection in search:
   ```python
   query = f"SELECT * FROM users WHERE name LIKE '%{search}%'"
   ```

🟡 HIGH Priority:
1. No CSRF protection
2. Missing security headers
3. Verbose error messages
4. No account lockout

Immediate fixes required:
1. Bcrypt for passwords:
   ```python
   from django.contrib.auth.hashers import make_password
   hashed = make_password(password, hasher='bcrypt')
   ```

2. Rate limiting:
   ```python
   from django_ratelimit.decorators import ratelimit
   
   @ratelimit(key='ip', rate='5/m', method='POST')
   def login_view(request):
       # login logic
   ```

3. Parameterized queries:
   ```python
   users = User.objects.raw(
       "SELECT * FROM users WHERE name LIKE %s",
       [f'%{search}%']
   )
   ```

4. Security headers:
   ```python
   SECURE_BROWSER_XSS_FILTER = True
   SECURE_CONTENT_TYPE_NOSNIFF = True
   X_FRAME_OPTIONS = 'DENY'
   ```

Security score: 2/10 → 8/10 after fixes
```

### 📚 Mentor - The Patient Teacher

**Core Belief**: "Understanding grows through guided discovery"

#### When to Use
- Explaining concepts
- Code reviews
- Learning new tech
- Onboarding

#### Real v2 Scenario with Sequential Teaching
```bash
User: I don't understand async/await

# v2 mentoring with step-by-step explanation
/explain "async/await" --seq --think --persona-mentor --c7

# Sequential teaching approach:
# Step 1: Starting with analogy...
# Step 2: Building foundation...
# Step 3: Showing examples...
# Step 4: Practice exercise...

Think of a restaurant:
- Synchronous: One waiter serves one table completely before next
- Asynchronous: Waiter takes order, starts kitchen, serves others while cooking

Basic example:
```javascript
// ❌ Synchronous - blocks everything
function getUser() {
  const user = database.query('SELECT * FROM users');  // Waits here
  return user;
}

// ✅ Asynchronous - doesn't block
async function getUser() {
  const user = await database.query('SELECT * FROM users');  // Waits but doesn't block
  return user;
}
```

Let's build understanding step by step:

1. **Promise basics** (the foundation):
```javascript
// A promise is a "future value"
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
```

2. **Async makes functions return promises**:
```javascript
async function greet() {
  return "Hello";  // Actually returns Promise.resolve("Hello")
}
```

3. **Await pauses until promise resolves**:
```javascript
async function getData() {
  console.log("Starting...");
  const data = await fetch('/api/data');  // Pauses here
  console.log("Got data:", data);
}
```

Try this exercise:
Convert this callback code to async/await:
```javascript
getUserData(id, (user) => {
  getOrders(user.id, (orders) => {
    console.log(orders);
  });
});
```

Need help? Let's work through it together!
```

### 🔧 Refactorer - The Code Beautifier

**Core Belief**: "Code quality debt compounds exponentially"

#### When to Use
- Code cleanup
- Reducing complexity
- Improving readability
- Technical debt

#### Real v2 Scenario with Sequential Refactoring
```bash
User: This code is becoming unmaintainable

# v2 refactoring with sequential analysis
/analyze --quality --seq --think --persona-refactorer
/improve --quality --seq

# Sequential code analysis:
# Step 1: Measuring complexity...
#   - Cyclomatic complexity: 15
#   - Nesting depth: 5
#   - Function length: 150 lines
#
# Step 2: Identifying issues...
#   - Deep nesting
#   - Poor naming
#   - Mixed concerns
#
# Step 3: Planning refactoring...

Current state:
```javascript
function processUserData(u) {
  if (u.type == 'admin') {
    if (u.active == true) {
      if (u.permissions.includes('write')) {
        // 50 lines of nested logic
        for (let i = 0; i < u.data.length; i++) {
          if (u.data[i].valid) {
            // more nesting
          }
        }
      }
    }
  }
}
```

Issues:
• Deep nesting (5 levels)
• Poor naming
• Mixed concerns
• No early returns
• Complex conditions

Refactored:
```javascript
function processUserData(user) {
  if (!canProcessUser(user)) return;
  
  const validData = user.data.filter(item => item.valid);
  return validData.map(processDataItem);
}

function canProcessUser(user) {
  return user.type === 'admin' 
    && user.active 
    && user.permissions.includes('write');
}

function processDataItem(item) {
  // Single responsibility
}
```

Improvements:
✅ Max nesting: 2 levels
✅ Clear function names
✅ Single responsibility
✅ Early returns
✅ Functional approach

Complexity score: 15 → 4
```

### ⚡ Performance - The Speed Optimizer

**Core Belief**: "Speed is a feature, slowness kills adoption"

#### When to Use
- Performance issues
- Optimization needs
- Load time problems
- Resource usage

#### Real v2 Scenario with Sequential Optimization
```bash
User: Page takes 3 seconds to load

# v2 performance analysis with steps
/analyze --performance --seq --think-hard --persona-performance
/improve --performance --seq --uc

# Sequential performance analysis:
# Step 1: Profiling page load...
#   - JS bundle: 1.2s (2.5MB)
#   - API calls: 1.5s (sequential)
#   - Rendering: 0.3s
#
# Step 2: Identifying optimization opportunities...
#   - Bundle too large
#   - Sequential API calls
#   - No caching
#
# Step 3: Implementing optimizations...

Performance breakdown:
• JS bundle: 1.2s (2.5MB)
• API calls: 1.5s (sequential)
• Rendering: 0.3s

Optimization plan:

1. **Bundle size** (1.2s → 0.3s):
```javascript
// Code splitting
const Dashboard = lazy(() => import('./Dashboard'));

// Tree shaking
import { debounce } from 'lodash-es'; // not entire lodash

// Compression
plugins: [
  new CompressionPlugin({
    algorithm: 'brotli'
  })
]
```

2. **API calls** (1.5s → 0.4s):
```javascript
// ❌ Sequential
const user = await getUser();
const posts = await getPosts(user.id);
const comments = await getComments(user.id);

// ✅ Parallel
const [user, posts, comments] = await Promise.all([
  getUser(),
  getPosts(userId),
  getComments(userId)
]);
```

3. **Caching**:
```javascript
const cache = new Map();

async function getCachedData(key, fetcher) {
  if (cache.has(key)) return cache.get(key);
  
  const data = await fetcher();
  cache.set(key, data);
  return data;
}
```

Result: 3s → 0.7s (77% improvement)
Lighthouse score: 45 → 92
```

### ✅ QA - The Quality Guardian

**Core Belief**: "Quality cannot be tested in, must be built in"

#### When to Use
- Testing strategies
- Quality assurance
- Bug prevention
- Test coverage

#### Real v2 Scenario with Test Generation
```bash
User: Too many bugs reaching production

# v2 quality analysis with sequential approach
/analyze --quality --seq --think --persona-qa
/test --generate --coverage --seq

# Sequential quality analysis:
# Step 1: Assessing current state...
#   - Test coverage: 23%
#   - Only happy path tests
#   - No integration tests
#
# Step 2: Identifying gaps...
#   - Critical paths untested
#   - Edge cases ignored
#   - No regression tests
#
# Step 3: Building test strategy...

Current state:
• Test coverage: 23%
• Only happy path tests
• No integration tests
• Manual testing only

Quality improvement plan:

1. **Test Pyramid**:
```
         /\
        /E2E\      (5%)
       /------\
      /  Integ  \  (15%)
     /----------\
    /    Unit     \ (80%)
   /--------------\
```

2. **Critical path tests**:
```javascript
describe('User Registration', () => {
  it('should handle duplicate emails', async () => {
    await User.create({ email: 'test@example.com' });
    
    const response = await request(app)
      .post('/register')
      .send({ email: 'test@example.com' });
      
    expect(response.status).toBe(409);
    expect(response.body.error).toBe('Email already exists');
  });
  
  it('should validate email format', async () => {
    const invalidEmails = ['test', '@example.com', 'test@'];
    
    for (const email of invalidEmails) {
      const response = await request(app)
        .post('/register')
        .send({ email });
        
      expect(response.status).toBe(400);
    }
  });
});
```

3. **Edge case coverage**:
```javascript
// Boundary testing
test('handles maximum input length', () => {
  const longString = 'a'.repeat(256);
  expect(() => validateInput(longString)).toThrow();
});

// Error scenarios
test('handles network timeout', async () => {
  jest.setTimeout(100);
  await expect(slowApiCall()).rejects.toThrow('Timeout');
});
```

4. **Quality gates**:
```yaml
# CI/CD pipeline
- Coverage must be > 80%
- All tests must pass
- No critical security issues
- Performance budget met
```

Results after 1 month:
• Bugs in production: -75%
• Test coverage: 82%
• Deployment confidence: High
```

## v2 Persona Collaboration Patterns

### Feature Development Flow with Sequential Thinking
```bash
# Complete feature workflow with steps
1. /design --system --seq --persona-architect       # Design the system
2. /build --api --seq --persona-backend            # Build backend
3. /build --ui --seq --persona-frontend --magic    # Build frontend  
4. /test --e2e --seq --persona-qa --pup           # Test thoroughly
5. /scan --security --seq --persona-security       # Security review
6. /improve --performance --seq --persona-performance # Optimize
```

### Bug Investigation Flow
```bash
# Sequential debugging workflow
1. /troubleshoot --seq --ultrathink --persona-analyzer  # Find root cause
2. /improve --quality --seq --persona-refactorer       # Clean up code
3. /test --regression --seq --persona-qa              # Add tests
```

### Learning Flow
```bash
# Step-by-step learning
1. /explain --concept --seq --persona-mentor --c7      # Explain with docs
2. /design --example --seq --persona-architect        # Show best practices
3. /build --practice --seq --think                   # Guided practice
```

## v2 Auto-Activation Examples

### File-Based with Sequential
```bash
# Opening UserProfile.tsx
→ Frontend persona activates
/analyze --component --seq
"Let's improve this component's UX step by step..."

# Opening auth.test.js
→ QA persona activates  
/analyze --coverage --seq
"I see missing test cases, let me add them systematically..."
```

### Keyword-Based with v2 Features
```bash
"This is slow" → Performance persona + --seq
"Is this secure?" → Security persona + --owasp + --seq
"Help me understand" → Mentor persona + --seq + --c7
"Debug this error" → Analyzer persona + --seq + --think-hard
```

## Switching Personas Mid-Task (v2 Style)
```bash
User: Build a login form

/build --form --seq --persona-frontend --magic
# Sequential UI building...
# Step 1: Creating accessible form structure...
# Step 2: Adding Material-UI components...
# Step 3: Implementing validation...
[Builds beautiful UI]

User: Now make it secure

/improve --security --seq --persona-security
# Security hardening sequence...
# Step 1: Auditing current implementation...
# Step 2: Adding CSRF protection...
# Step 3: Implementing rate limiting...
# Step 4: Secure session management...
```

## v2 Best Practices

1. **Use --seq for complex tasks** - See the persona's thinking process
2. **Combine with thinking modes** - `--seq --think-hard` for deep analysis
3. **Leverage MCP servers** - `--c7` for docs, `--magic` for UI
4. **Stack personas strategically** - Frontend + Performance for fast UIs
5. **Let auto-activation help** - Natural language triggers the right expert

## Power Combinations

```bash
# Maximum analysis
/analyze --arch --seq --ultrathink --persona-architect --c7

# Fast debugging
/troubleshoot --seq --think --persona-analyzer --uc

# Quality code
/improve --quality --seq --persona-refactorer --think

# Secure development
/build --api --seq --persona-backend --persona-security
```

Remember: v2 personas aren't just different response styles - they're specialized experts with transparent reasoning through `--seq`. Choose the right expert and watch them think through your problem step by step! 🚀