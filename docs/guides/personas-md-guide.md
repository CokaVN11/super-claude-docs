---
sidebar_position: 4
title: PERSONAS.md Usage Guide
---

# Understanding PERSONAS.md - Behavioral Profiles

Personas are specialized thinking modes that change how Claude approaches problems. Each persona has unique beliefs, priorities, and problem-solving methods. Think of them as different expert consultants you can summon instantly.

## The Nine Personas

### 🏗️ Architect - The Systems Thinker

**Core Belief**: "Systems evolve, design for change"

#### When to Use
- Designing new systems
- Major refactoring decisions  
- Scalability planning
- Technology selection

#### Real Scenario
```
User: We need to handle 10x more users next year

/persona:architect
Analyzing scalability requirements...

Current: Monolithic Django app, PostgreSQL, 1K users
Target: 10K users, global distribution

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

#### Real Scenario
```
User: Users complain our forms are confusing

/persona:frontend
Analyzing form UX issues...

Problems identified:
• No visual feedback on errors
• Labels unclear
• Too many fields visible at once
• No progress indication

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

[Creates improved FormWizard component]
```

### ⚙️ Backend - The Reliability Engineer

**Core Belief**: "Reliability & performance enable everything else"

#### When to Use
- API design
- Database optimization
- System reliability
- Performance tuning

#### Real Scenario
```
User: Our API is getting slow

/persona:backend
Analyzing API performance...

Findings:
• N+1 queries in /users endpoint
• No connection pooling
• Missing database indexes
• Synchronous external API calls

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

#### Real Scenario
```
User: Random 500 errors in production, can't reproduce locally

/persona:analyzer
Investigating intermittent 500 errors...

Evidence gathering:
1. Error frequency: Peaks at 9am, 1pm, 5pm
2. Pattern: Only affects logged-in users
3. Stack trace: "Connection pool exhausted"
4. Correlation: Matches traffic spikes

Hypothesis formation:
H1: Connection pool too small ❌ (would be constant)
H2: Connection leak ✓ (accumulates over time)
H3: Deadlock situation ❌ (would show in logs)

Root cause analysis:
- Found: Websocket connections not closing properly
- Each user creates persistent connection
- Connections accumulate during peak hours
- Pool exhausted after ~500 connections

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

#### Real Scenario
```
User: Review our user authentication

/persona:security
Performing security audit...

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

#### Real Scenario
```
User: I don't understand async/await

/persona:mentor
Let me explain async/await step by step!

Think of a restaurant:
- Synchronous: One waiter serves one table completely before moving to next
- Asynchronous: Waiter takes order, starts kitchen, serves other tables while food cooks

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

Let's build understanding:

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

#### Real Scenario
```
User: This code is becoming unmaintainable

/persona:refactorer
Analyzing code quality issues...

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

#### Real Scenario
```
User: Page takes 3 seconds to load

/persona:performance
Profiling page load performance...

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

#### Real Scenario
```
User: Too many bugs reaching production

/persona:qa
Analyzing quality process...

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

## Persona Collaboration Patterns

### Feature Development Flow
```
1. /persona:architect - Design the system
2. /persona:frontend + /persona:backend - Build it
3. /persona:qa - Test thoroughly
4. /persona:security - Security review
5. /persona:performance - Optimize
```

### Bug Investigation Flow
```
1. /persona:analyzer - Find root cause
2. /persona:refactorer - Clean up code
3. /persona:qa - Add regression tests
```

### Learning Flow
```
1. /persona:mentor - Explain concepts
2. /persona:architect - Show best practices
3. Practice with guided examples
```

## Auto-Activation Examples

### File-Based
```
Opening UserProfile.tsx
→ Frontend persona activates
"Let's improve this component's UX..."

Opening auth.test.js
→ QA persona activates
"I see missing test cases for..."
```

### Keyword-Based
```
"This is slow" → Performance persona
"Is this secure?" → Security persona
"Help me understand" → Mentor persona
```

## Switching Personas Mid-Task

```
User: Build a login form

/persona:frontend
Creating accessible login form...
[Builds beautiful UI]

User: Now make it secure

/persona:security
Auditing login security...
Adding:
- CSRF tokens
- Rate limiting
- Secure password requirements
- Session management
```

## Best Practices

1. **Start with the right persona** - Sets the correct mindset
2. **Switch when perspective changes** - Different problems need different thinking
3. **Combine personas** - Complex tasks benefit from multiple viewpoints
4. **Let auto-activation help** - Keywords and context trigger the right persona
5. **Use persona commands** - Explicit commands for specialized workflows

Remember: Personas aren't just different response styles - they're completely different ways of thinking about problems. Choose the expert you need for the task at hand.