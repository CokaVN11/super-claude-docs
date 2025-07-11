---
sidebar_position: 8
title: Sequential Thinking Guide
---

# Mastering Sequential Thinking with --seq

:::tip v2 Feature
Sequential thinking (`--seq`) is a powerful SuperClaude v2 feature that enables step-by-step reasoning, making complex problem-solving transparent and methodical.
:::

## What is Sequential Thinking?

Sequential thinking transforms SuperClaude's problem-solving approach from providing direct answers to showing the complete reasoning process. This is especially valuable for:

- **Complex debugging** - Trace through issues systematically
- **Architecture design** - Build solutions step-by-step
- **Learning & understanding** - See how solutions are derived
- **Critical decisions** - Validate reasoning at each step

## How --seq Works

```bash
# Without --seq: Direct answer
/fix "login error"
→ Here's the fix: [code]

# With --seq: Complete reasoning
/fix "login error" --seq
→ Step 1: Analyzing error message...
→ Step 2: Checking authentication flow...
→ Step 3: Found issue in token validation...
→ Step 4: Implementing fix...
→ Step 5: Adding tests...
→ Result: [code with explanation]
```

## Real-World Use Cases

### 🐛 Complex Bug Investigation

```bash
/troubleshoot "users randomly logged out after 15 minutes" --seq --think-hard

# Sequential investigation:
Step 1: Analyzing symptom patterns
- Occurs exactly at 15 minutes
- Affects all user types
- Started after last deployment

Step 2: Checking session configuration
- Session timeout: 30 minutes
- Token expiry: 1 hour
- Cookie settings: secure, httpOnly

Step 3: Investigating middleware
- Found JWT refresh middleware
- Refresh interval: 15 minutes
- Error in refresh logic

Step 4: Root cause identified
- Refresh token not properly validated
- Causes session invalidation
- Timing matches symptom

Step 5: Implementing fix
[Provides corrected code with tests]
```

### 🏗️ System Architecture Design

```bash
/design "real-time notification system" --seq --ultrathink --c7

# Sequential design process:
Step 1: Requirements analysis
→ Real-time delivery (< 1 second)
→ Multiple channels (email, SMS, push)
→ Scale to 1M users
→ Delivery guarantees

Step 2: Research best practices (Context7)
→ Event-driven architecture patterns
→ Message queue comparisons
→ WebSocket vs SSE analysis
→ Notification service examples

Step 3: Component design
→ API Gateway for ingestion
→ Message broker (Kafka/RabbitMQ)
→ Worker pools for processing
→ Channel-specific adapters

Step 4: Data flow mapping
→ Event → API → Queue → Worker → Channel
→ Retry logic at each stage
→ Dead letter queues
→ Monitoring touchpoints

Step 5: Implementation roadmap
Phase 1: Core infrastructure
Phase 2: Email channel
Phase 3: Push notifications
Phase 4: SMS integration
Phase 5: Analytics dashboard
```

### ⚡ Performance Optimization

```bash
/improve --performance "database queries taking 10+ seconds" --seq --think

# Optimization sequence:
Step 1: Profiling current queries
→ Identified 3 slow queries
→ All involve JOIN operations
→ Large table scans detected

Step 2: Analyzing query execution plans
Query 1: Full table scan on users (5M rows)
Query 2: Missing index on orders.user_id
Query 3: Cartesian product in JOIN

Step 3: Optimization strategy
→ Add composite index on (user_id, created_at)
→ Rewrite Query 3 with proper JOIN conditions
→ Implement query result caching

Step 4: Implementation
[Provides index creation scripts]
[Shows optimized queries]

Step 5: Performance validation
→ Query 1: 10s → 0.3s (96% improvement)
→ Query 2: 8s → 0.1s (98% improvement)
→ Query 3: 15s → 0.5s (96% improvement)
```

### 🔒 Security Vulnerability Analysis

```bash
/scan --security "e-commerce checkout process" --seq --think-hard --owasp

# Security analysis sequence:
Step 1: Mapping attack surface
→ Payment form inputs
→ API endpoints
→ Session management
→ Third-party integrations

Step 2: OWASP Top 10 evaluation
A01 - Access Control: Checking authorization
A02 - Crypto Failures: Analyzing encryption
A03 - Injection: Testing input validation
A04 - Insecure Design: Reviewing architecture

Step 3: Vulnerability discovery
→ SQL injection in search parameter
→ Missing rate limiting on API
→ Sensitive data in logs
→ Weak session tokens

Step 4: Risk assessment
Critical: SQL injection (immediate fix)
High: Rate limiting (implement ASAP)
Medium: Log sanitization
Low: Session token strength

Step 5: Remediation plan
[Provides fixes for each vulnerability]
[Includes testing procedures]
```

## Advanced Sequential Patterns

### Combining with Thinking Modes

```bash
# Light sequential analysis
/analyze --seq --think
→ 5-7 clear steps with standard depth

# Deep sequential investigation  
/troubleshoot --seq --think-hard
→ 8-12 detailed steps with thorough analysis

# Maximum sequential reasoning
/design --seq --ultrathink
→ 15+ comprehensive steps with exhaustive coverage
```

### Sequential + Personas

```bash
# Backend perspective with steps
/improve --api --seq --persona-backend

Step 1: [Backend mindset] Analyzing API reliability...
Step 2: [Backend mindset] Checking error handling...
Step 3: [Backend mindset] Reviewing data consistency...

# Architecture view with reasoning
/design --system --seq --persona-architect

Step 1: [Architect mindset] Evaluating system boundaries...
Step 2: [Architect mindset] Identifying components...
Step 3: [Architect mindset] Designing interactions...
```

### Sequential + MCP Integration

```bash
# Documentation-driven sequential development
/build "GraphQL API" --seq --c7

Step 1: Research GraphQL best practices (Context7)
Step 2: Design schema based on standards
Step 3: Implement resolvers following patterns
Step 4: Add authentication per documentation
Step 5: Generate API documentation

# UI building with sequential validation
/build "dashboard" --seq --magic --think

Step 1: Analyze UI requirements
Step 2: Generate components with Magic
Step 3: Validate accessibility
Step 4: Add interactivity
Step 5: Test responsiveness
```

## Sequential Thinking Best Practices

### 1. Use for Complex Problems
```bash
✅ Good: /troubleshoot "intermittent data corruption" --seq
❌ Overkill: /fix "typo in README" --seq
```

### 2. Combine with Appropriate Depth
```bash
# Simple sequential task
/explain "what is REST" --seq

# Complex sequential analysis
/analyze --architecture --seq --ultrathink
```

### 3. Let Steps Build on Each Other
```bash
/design "payment system" --seq

Step 1: Define payment types → 
Step 2: Model based on Step 1 →
Step 3: Design API using Step 2 →
Step 4: Security for APIs from Step 3
```

### 4. Use for Learning
```bash
# Understand the solution process
/improve --quality "legacy code" --seq --think

# See how decisions are made
/design --database "user system" --seq
```

## Sequential Workflow Examples

### Complete Feature Development

```bash
/task "implement user dashboard" --seq --breakdown

Step 1: Analyze requirements
- Real-time data updates
- Multiple widget types
- Responsive design
- Role-based access

Step 2: Break into components
- Layout container
- Widget framework
- Data fetching layer
- Permission system

Step 3: Define implementation order
1. Permission system (foundation)
2. Layout container
3. Data layer
4. Widget framework
5. Individual widgets

Step 4: Create task timeline
Week 1: Permission system + layout
Week 2: Data layer + widget framework
Week 3: Widget implementation
Week 4: Testing + polish

Step 5: Set up development workflow
- TDD for each component
- Daily integration tests
- Weekly stakeholder reviews
- Continuous deployment
```

### Debugging Production Issue

```bash
/troubleshoot --prod "API returns 502 randomly" --seq --think-hard

Step 1: Gather symptoms
- Frequency: 5-10 times per hour
- Duration: 30-60 seconds
- Pattern: No clear pattern
- Impact: 2% of requests

Step 2: Check infrastructure
→ Load balancer logs show timeouts
→ Application servers healthy
→ Database connections stable
→ Memory usage normal

Step 3: Analyze request patterns
→ Timeouts on specific endpoints
→ All involve external API calls
→ Third-party service latency spikes

Step 4: Identify root cause
External payment API has intermittent slowdowns
No timeout configured on HTTP client
Requests wait indefinitely

Step 5: Implement solution
- Add 5-second timeout to HTTP client
- Implement circuit breaker pattern
- Add retry with exponential backoff
- Monitor external API latency

Step 6: Validate fix
[Deployment plan with rollback strategy]
```

## Sequential Thinking Patterns

### Investigation Pattern
```bash
/troubleshoot [issue] --seq
1. Symptom analysis
2. Data collection
3. Hypothesis formation
4. Testing hypotheses
5. Root cause identification
6. Solution implementation
```

### Design Pattern
```bash
/design [system] --seq
1. Requirements gathering
2. Research best practices
3. Component identification
4. Interface design
5. Implementation planning
6. Risk assessment
```

### Optimization Pattern
```bash
/improve --performance --seq
1. Current state measurement
2. Bottleneck identification
3. Optimization options
4. Implementation priority
5. Apply optimizations
6. Measure improvements
```

## Tips for Maximum Value

1. **Be Patient**: Sequential thinking takes more time but provides deeper insights
2. **Read Each Step**: Understanding the reasoning helps you learn and validate
3. **Question Steps**: If a step seems wrong, you can correct course early
4. **Save Sequences**: Document sequential solutions for team learning
5. **Combine Wisely**: Use with --think modes for appropriate depth

## Quick Reference

| Scenario | Command | Expected Steps |
|----------|---------|----------------|
| Simple fix | `/fix --seq` | 3-5 steps |
| Bug investigation | `/troubleshoot --seq --think` | 5-8 steps |
| System design | `/design --seq --think-hard` | 8-12 steps |
| Architecture review | `/analyze --arch --seq --ultrathink` | 12-20 steps |

---

Ready to see SuperClaude's thinking process? Add `--seq` to any command and watch the magic unfold! 🎯