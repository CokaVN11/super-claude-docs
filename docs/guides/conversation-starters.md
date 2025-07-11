---
sidebar_position: 5
title: Conversation Starter Guide
---

# Mastering SuperClaude v2 Conversations

:::info Version Notice
This guide covers **SuperClaude v2** conversation patterns with sequential thinking and 19 commands.
- 📚 [View v1 guide](/docs/v1/guides/conversation-starters)
- 🆚 [Version comparison](/docs/version-comparison)
:::

Starting conversations effectively with SuperClaude v2 sets the tone for transparent, efficient interactions. With sequential thinking and enhanced auto-activation, your conversations can be more natural than ever.

## The Anatomy of a Great Request

### 1. Context → Intent → Specifics (v2 Enhanced)

```bash
❌ Poor: "Fix my code"

✅ Good: "Login failing with 401 error after adding JWT auth"
# v2 auto-activates: Analyzer persona + --seq

🌟 Best v2: /troubleshoot "Login returns 401 on valid credentials. Using Express + JWT. Token generation works but validation fails." --seq --think
# Shows complete debugging process step-by-step
```

### 2. Include Constraints with v2 Commands

```bash
❌ Vague: "Make it faster"

✅ Clear: /improve --performance "Reduce API response from 2s to <500ms"
# v2 shows optimization steps

🌟 Specific v2: /analyze --performance "API takes 2s, need <500ms. Can't change database, budget for Redis" --seq --think
# Sequential analysis with constraints:
# → Step 1: Profile current bottlenecks
# → Step 2: Evaluate Redis caching strategy
# → Step 3: Implement with constraints
```

## Conversation Patterns by Task Type

### 🐛 Debugging Pattern (v2 Sequential)

**Structure**: Problem → Evidence → What You've Tried → Watch Analysis

```bash
User: /troubleshoot "Login throws 'Cannot read property id of undefined' in auth middleware. Only Google OAuth users, not email logins. User object exists but missing profile data." --seq --think

# v2 Sequential Investigation:
# Step 1: Analyzing error context...
#   → OAuth-specific issue identified
#   → Email login works correctly
#
# Step 2: Comparing authentication flows...
#   → Email: Creates user with profile
#   → OAuth: Creates user without profile
#
# Step 3: Tracing middleware execution...
#   → Auth middleware expects user.profile.id
#   → OAuth users have no profile relation
#
# Step 4: Root cause identified...
#   → Missing eager loading in OAuth callback
#
# Step 5: Implementing fix...

Fix: await User.findById(id).populate('profile')
```

### 🏗️ Building Pattern (v2 with Sequential Planning)

**Structure**: What → Why → Constraints → Step-by-Step Build

```bash
User: /build "notification system" --seq --think --persona-architect
Requirements:
- Real-time updates for web and mobile
- Must handle 10K concurrent users  
- Using existing PostgreSQL, can add Redis

# v2 Sequential Architecture:
# Step 1: Analyzing requirements...
#   → Real-time: Need WebSocket/SSE
#   → Scale: 10K concurrent = distributed
#   → Mobile: Push notifications required
#
# Step 2: Evaluating technology stack...
#   → Redis Pub/Sub for message broker
#   → Socket.io for web real-time
#   → FCM for mobile push
#   → PostgreSQL for persistence
#
# Step 3: Designing system architecture...
#   → Microservice for notifications
#   → Redis channels per user/topic
#   → Horizontal scaling ready
#
# Step 4: Creating implementation phases...

Phase 1: Core infrastructure (Redis + basic API)
Phase 2: Web real-time (Socket.io integration)
Phase 3: Mobile push (FCM setup)
Phase 4: Scale testing (10K concurrent)
```

### 🔍 Learning Pattern (v2 with Sequential Teaching)

**Structure**: Current Understanding → Goal → Specific Questions → Step-by-Step Learning

```bash
User: /explain "React Context API" --seq --c7 --persona-mentor
Background: I understand basic React but struggling with Context API.
Goal: Manage user auth state globally.
Question: When should I use Context vs Redux?

# v2 Sequential Teaching:
# Step 1: Fetching React documentation...
#   → C7: Official Context API guide retrieved
#
# Step 2: Understanding your level...
#   → Basic React ✓
#   → Need: Global state management
#   → Use case: Authentication
#
# Step 3: Comparing Context vs Redux...
#   → Context: Built-in, simple, perfect for auth
#   → Redux: External, complex, for large apps
#   → Your case: Context is ideal!
#
# Step 4: Building auth context example...

// 1. Create context
const AuthContext = createContext();

// 2. Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const login = async (credentials) => {
    // Step-by-step login logic
  };
  
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook for easy use
export const useAuth = () => useContext(AuthContext);
```

### ⚡ Optimization Pattern (v2 with Transparent Analysis)

**Structure**: Current Metrics → Target → Constraints → Sequential Optimization

```bash
User: /analyze --performance "Homepage 4.5s load, need <2s" --seq --think-hard --pup

Constraints:
- Lighthouse score: 35
- Can't change backend API
- React SPA with Material-UI

# v2 Sequential Performance Analysis:
# Step 1: Running Lighthouse audit...
#   → LCP: 3.2s (poor)
#   → Bundle size: 1.8MB
#   → No code splitting
#   → 23 render-blocking resources
#
# Step 2: Profiling with Puppeteer...
#   → Main thread blocked 2.1s
#   → 47 components rendered on load
#   → Material-UI: 600KB ungzipped
#
# Step 3: Identifying quick wins...
#   1. Route splitting: Save 1.2s
#   2. Image lazy loading: Save 0.8s
#   3. Tree-shake MUI: Save 0.7s
#   4. Preconnect: Save 0.3s
#
# Step 4: Implementing optimizations...

/improve --performance --seq --implement
# → Implementing code splitting...
# → Adding lazy boundaries...
# → Optimizing imports...

Result: 4.5s → 1.5s (67% improvement)
Lighthouse: 35 → 89
```

## Power Combinations in v2

### 🚀 The Full Stack Feature with Sequential Flow

```bash
User: /build "user dashboard with activity charts" --fullstack --seq --all-mcp

# v2 Coordinated Sequential Build:
# Step 1: Architecture phase...
/design "dashboard architecture" --seq --persona-architect
# → Component structure defined
# → Data flow mapped
# → API contracts specified

# Step 2: Backend implementation...
/build "metrics API" --seq --tdd --persona-backend
# → Step 1: Writing API tests
# → Step 2: Creating endpoints
# → Step 3: Query optimization
# → Step 4: Redis caching layer

# Step 3: Frontend with Magic UI...
/build "dashboard UI" --seq --magic --c7 --persona-frontend
# → Step 1: Fetching Chart.js docs
# → Step 2: Generating components
# → Step 3: Responsive layout
# → Step 4: Real-time updates

# Step 4: Comprehensive testing...
/test --e2e --seq --pup --persona-qa
# → Unit tests: 95% coverage
# → Integration: API + UI
# → E2E: Full user flows
# → Performance: <2s load
```

### 🔒 The Security Audit (v2 with OWASP)

```bash
User: /scan --security "payment processing" --owasp --seq --think-hard

# v2 Sequential Security Audit:
# Step 1: Mapping payment flow...
#   → User input → Validation → Processing → Storage
#   → External APIs: Stripe, PayPal
#   → Sensitive data: CC numbers, CVV
#
# Step 2: OWASP Top 10 analysis...
#   ✓ A01: Access Control verified
#   ⚠️ A02: Cryptographic weakness found
#   ✓ A03: Injection protected
#   ❌ A04: Insecure design pattern
#
# Step 3: Testing vulnerabilities...
#   → SQL injection: Protected ✓
#   → XSS attempts: Blocked ✓
#   → CSRF tokens: Missing ❌
#   → Rate limiting: Not implemented ❌
#
# Step 4: Generating report...
#   CRITICAL: 2 issues
#   HIGH: 3 issues
#   MEDIUM: 5 issues
#
# Step 5: Remediation plan...
#   1. Implement CSRF protection
#   2. Add rate limiting
#   3. Upgrade encryption
#   4. Security headers
```

### 📚 The Learning Journey (v2 Progressive)

```bash
User: "Help me master TypeScript coming from JavaScript"

# v2 Adaptive Learning Path:
Step 1: /explain "TypeScript basics" --seq --c7 --persona-mentor
# → Step 1: Assessing JS knowledge
# → Step 2: Fetching TS handbook
# → Step 3: Core concepts introduction
# → Step 4: Interactive examples

Step 2: /migrate "app.js to TypeScript" --seq --think
# → Step 1: Analyzing JS patterns
# → Step 2: Adding type annotations
# → Step 3: Explaining each change
# → Step 4: Common pitfalls

Step 3: /troubleshoot "Type 'undefined' is not assignable" --seq
# → Step 1: Understanding the error
# → Step 2: Tracing type flow
# → Step 3: Teaching null safety
# → Step 4: Fixing with explanations

Step 4: /design "React + TS architecture" --seq --ultrathink
# → Step 1: Component patterns
# → Step 2: Type-safe props
# → Step 3: Generic components
# → Step 4: Advanced patterns
```

## Effective Flag Usage in v2

### Thinking Modes Enhanced

```bash
# Natural language triggers in v2
"step by step" → --seq auto-activated
"think about why" → --think + --seq
"deep dive into" → --think-hard + --seq
"analyze thoroughly" → --ultrathink + --seq

# Explicit v2 commands with flags
/analyze "code issue" --seq --think
/design "API structure" --seq --think-hard  
/troubleshoot "bug" --seq --ultrathink
```

### MCP Control in v2

```bash
# Smart tool activation
"Check React hooks docs" → --c7 auto-activates
"Debug this memory leak" → --seq auto-activates
"Create a data table" → --magic auto-activates
"Test in browser" → --pup auto-activates

# Manual control when needed
/explain "React hooks" --c7 --seq    # Docs + steps
/build "data table" --magic --seq     # UI + process
/test "login flow" --pup --seq        # Browser + steps

# Optimization flags
/analyze "performance" --seq --uc     # Compressed steps
/build "feature" --no-mcp             # Speed mode
```

### v2 Power Combinations

```bash
# Maximum security analysis
/scan --security --owasp --seq --ultrathink --persona-security
# Shows every security check step-by-step

# Deep performance optimization  
/analyze --performance --seq --think-hard --pup
# Browser profiling with transparent analysis

# Full stack with coordination
/build "feature" --fullstack --seq --all-mcp
# All tools working together transparently
```

## Real v2 Conversation Flows

### Flow 1: The Bug Hunt with Sequential Transparency

```bash
User: "Users report data disappearing randomly"

# v2 auto-activates analyzer + --seq
SuperClaude: /troubleshoot "random data loss" --seq --think

# Sequential investigation:
# Step 1: Gathering information...
Need specifics:
• When: During save? On refresh? After time?
• Which data: All? Specific fields?
• Frequency: Always? Sometimes?

User: "Happens on refresh, only form data, about 50% of time"

# Step 2: Analyzing patterns...
#   → 50% suggests race condition
#   → Form data = client state
#   → Refresh = persistence issue
#
# Step 3: Testing hypotheses...
#   → localStorage cleared? ❌
#   → Session timeout? ❌
#   → Save race condition? ✓
#
# Step 4: Root cause identified...
Found: save() called but not awaited before navigation

Fix: 
await saveFormData();
navigate('/next-page');

User: "That fixed it! How do I prevent this pattern?"

# Auto-switches to mentor + --seq
/explain "race conditions" --seq --c7 --persona-mentor
# → Step 1: Fetching async best practices...
# → Step 2: Common patterns that cause races...
# → Step 3: Prevention strategies...
```

### Flow 2: The Feature Build (v2 Progressive)

```bash
User: /build "admin panel for user management" --seq --persona-frontend

# Step 1: Requirements gathering...
Features identified:
• User list with search/filter
• Role management  
• Activity logs
• Bulk actions
Correct?

User: "Yes, plus user impersonation for support"

# Step 2: Security planning...
/analyze --security "impersonation feature" --seq --think
# → Audit trail design
# → Permission checks
# → Session isolation

# Step 3: Building with Magic...
/build "admin UI" --seq --magic
# → Creating UserList component...
# → Adding RoleManager...
# → Building ActivityLog...
# → Impersonation with guards...

User: "Looks great! Now make it mobile-friendly"

# Step 4: Responsive optimization...
/improve --responsive --seq --pup
# → Testing breakpoints...
# → Adjusting layouts...
# → Adding touch gestures...
# → Verifying in mobile view...

User: "Perfect. Add tests?"

# Auto-switches to QA + --seq
/test --comprehensive --seq --persona-qa
# → Step 1: Unit tests (components)...
# → Step 2: Integration tests (API)...
# → Step 3: E2E tests (user flows)...
# → Coverage: 94%
```

### Flow 3: The Performance Crisis (v2 Emergency)

```bash
User: "URGENT: API crashing under load, Black Friday tomorrow!"

# v2 emergency mode with --seq
/troubleshoot --emergency --prod --seq --ultrathink

# Sequential crisis response:
# Step 1: Immediate triage...
#   → Current load: 500 req/s
#   → Crash point: ~400 req/s
#   → Error: "Too many connections"
#   → Time to fix: <2 hours
#
# Step 2: Quick fixes for tomorrow...
#   1. Connection pool: 20→100
#   2. Redis cache for hot queries
#   3. Query result caching ON
#   4. Rate limit: 100 req/s per IP
#
# Step 3: Emergency deployment...
/deploy --emergency --seq
# → Backing up current state...
# → Applying quick fixes...
# → Rolling restart...
# → Monitoring metrics...

User: "Deployed! It's holding at 800 req/s!"

# Step 4: Planning long-term fixes...
/design --scaling-plan --seq --think
# → Read replicas needed
# → Connection pooling upgrade
# → Query optimization required
# → Caching strategy overhaul

Post-Black Friday roadmap ready.
Keep monitoring dashboard open!
```

## v2 Conversation Starters for Common Scenarios

### Starting a New Project
```bash
/design "[type] application" --seq --ultrathink --persona-architect
Core purpose: [what it does]
Tech stack: [preferences or constraints]
Must handle: [key requirements]
Timeline: [deadline]

# Shows complete architecture decisions step-by-step
```

### Debugging Production Issues
```bash
/troubleshoot "[symptom]" --prod --seq --think-hard
Started: [when]
Affects: [scope]
Logs show: [errors]
Recent changes: [deployments]

# Sequential root cause analysis with hypotheses
```

### Learning New Technology
```bash
/explain "[new tech]" --seq --c7 --persona-mentor
Current knowledge: [your skills]
Goal: [what you want to build]
Struggling with: [specific concepts]

# Step-by-step learning path with documentation
```

### Code Review Request
```bash
/review "[component/PR]" --seq --think --all-checks
Type: [feature/bugfix/refactor]
Concerns: [performance/security/maintainability]
Context: [what it does]

# Comprehensive review with sequential checks
```

### Performance Optimization
```bash
/analyze --performance "[system/page]" --seq --think-hard --pup
Current: [metrics]
Target: [goals]  
Constraints: [limitations]
Budget: [resources available]

# Profiling → Analysis → Optimization plan
```

## Pro Tips for Great v2 Conversations

### 1. Be Specific About Success
```bash
❌ "Make it better"
✅ "Reduce memory usage by 50%"
🌟 /improve --memory "reduce by 50%" --seq
```

### 2. Include Your Constraints
```bash
❌ "Speed up the database"
✅ "Speed up queries, can't change schema, have $100/month budget"
🌟 /improve --performance "queries" --constraints "no schema changes, $100 budget" --seq
```

### 3. Share What You've Tried
```bash
❌ "It's broken"
✅ "Tried X and Y, error persists. Suspect Z might be the cause"
🌟 /troubleshoot "error persists after trying X and Y, suspect Z" --seq
```

### 4. Use Natural Flow with v2 Commands
```bash
Start broad → Get specific → Iterate
/build "auth" → /improve "add 2FA" → /implement "SMS for 2FA"
# Each step builds on previous context
```

### 5. Leverage v2's Enhanced Memory
```bash
First: /load --project "React + TypeScript app"
Later: "add a modal" # Knows your stack
Later: "make it accessible" # Knows it's React
```

### 6. Let v2 Auto-Activation Work
```bash
"Build a secure API" automatically:
→ Architect persona for design
→ Backend persona for implementation  
→ Security persona for audit
→ --seq for transparency
```

### 7. Trust v2 Intelligence
```bash
❌ /build "dashboard" --react --seq --magic --think-hard --persona-frontend
✅ /build "React dashboard" # v2 activates what's needed
```

## v2 Quick Reference Card

### Task → Best v2 Starter

| Task | Optimal v2 Command | Auto-Activates |
|------|-------------------|----------------|
| **Debug** | `/troubleshoot "error details" --seq` | Analyzer + Sequential |
| **Build** | `/build "feature" --seq` | Appropriate persona + tools |
| **Learn** | `/explain "concept" --seq --c7` | Mentor + Docs |
| **Optimize** | `/analyze --performance --seq` | Performance + Profiling |
| **Secure** | `/scan --security --owasp --seq` | Security + OWASP |
| **Refactor** | `/improve --quality --seq` | Refactorer + Analysis |
| **Design** | `/design "system" --seq --ultrathink` | Architect + Deep thinking |
| **Test** | `/test --comprehensive --seq` | QA + Coverage tools |
| **Deploy** | `/deploy --canary --monitor --seq` | DevOps + Safety checks |

### Keywords → v2 Auto-Activation

| You Say | v2 Activates |
|---------|--------------|
| "step by step" | `--seq` flag |
| "why does this" | `--seq --think` |
| "think carefully" | `--think-hard` |
| "deep analysis" | `--ultrathink --seq` |
| "check the docs" | `--c7` |
| "create a UI" | `--magic` |
| "test in browser" | `--pup` |
| "save tokens" | `--uc` |

### v2 Command Cheat Sheet

```bash
# Quick commands
/explain → Teaching mode
/troubleshoot → Debug issues
/build → Create features
/improve → Enhance existing
/analyze → Deep investigation
/scan → Security/quality checks
/test → Comprehensive testing
/deploy → Smart deployment

# Always helpful flags
--seq → See the thinking process
--think → Deeper analysis
--c7 → Get documentation
--uc → Save tokens
```

Remember: SuperClaude v2 thrives on natural language. Describe what you want clearly, and watch as v2's sequential thinking transparently solves your problems. The `--seq` flag transforms every interaction into a learning experience! 🚀