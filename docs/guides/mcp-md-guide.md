---
sidebar_position: 3
title: MCP.md Integration Guide
---

# Understanding MCP.md - v2 Model Context Protocol Integration

:::info Version Notice
This guide covers **SuperClaude v2** with enhanced MCP integration and sequential thinking.
- 📚 [View v1 guide](/docs/v1/guides/mcp-md-guide)
- 🆚 [Version comparison](/docs/version-comparison)
:::

MCP.md orchestrates advanced tools that extend Claude's capabilities. Think of it as Claude's toolkit for specialized tasks - from finding documentation to generating UI components. In v2, these tools integrate seamlessly with `--seq` for transparent reasoning.

## The Four Power Tools with v2 Features

### 🔍 Context7 (C7) - Documentation Finder
Instantly finds and retrieves official library documentation with sequential lookup.

### 🧠 Sequential - Deep Thinker
Step-by-step reasoning for complex problems - now integrated as `--seq` flag!

### 🎨 Magic - UI Generator
Creates UI components matching your project style with reasoning steps.

### 🌐 Puppeteer - Browser Tester
Tests in real browsers and captures screenshots with sequential validation.

## v2 Decision Matrix - Enhanced Auto-Activation

### Automatic Triggers with Sequential Reasoning

#### Documentation Requests
```bash
User: How do I use React hooks?

# v2 auto-activates C7 with sequential lookup
SuperClaude: [C7 + --seq activates]
# Step 1: Resolving React library...
# Step 2: Fetching hooks documentation...
# Step 3: Extracting relevant sections...
✅ Here's the official guide: [provides React hooks docs]
```

#### Complex Problems
```bash
User: Why is our app using 4GB of memory?

# v2 activates sequential analysis automatically
SuperClaude: [--seq activates]
# Sequential memory analysis:
# Step 1: Checking process memory usage...
# Step 2: Analyzing heap snapshots...
# Step 3: Identifying retention patterns...
# Step 4: Tracing allocation sources...
→ Found: Unbounded cache in user service
```

#### UI Requests
```bash
User: Need a data table with sorting

# v2 combines Magic with sequential building
SuperClaude: [Magic + --seq activates]
# Step 1: Analyzing table requirements...
# Step 2: Generating component structure...
# Step 3: Adding sorting logic...
# Step 4: Matching project style...
✅ Created DataTable.tsx with sorting
```

### v2 Manual Flags

Force specific tools with enhanced control:

```bash
--c7      # Force Context7 docs lookup
--seq     # Force Sequential thinking (v2 default!)
--magic   # Force Magic UI generation
--pup     # Force Puppeteer testing
--all-mcp # Use all tools with coordination
--no-mcp  # Disable all MCP tools for speed
```

## Real-World v2 Workflows

### Workflow 1: Learning New Library with Sequential Steps

```bash
User: I need to add authentication with Auth0

# v2 approach with transparent reasoning
/build "Auth0 authentication" --seq --c7 --think

# Sequential process:
# Step 1: Resolving Auth0 documentation...
→ C7: Found Auth0 React SDK v3.1.0

# Step 2: Analyzing integration requirements...
→ Need: Auth0Provider, useAuth0 hook, config

# Step 3: Planning implementation...
→ 1. Install @auth0/auth0-react
→ 2. Configure Auth0Provider
→ 3. Create login/logout components
→ 4. Protect routes

# Step 4: Implementing with best practices...
[Creates auth components following docs]

# Step 5: Testing authentication flow...
→ Puppeteer: Testing login/logout cycle
✅ Auth0 integrated successfully
```

### Workflow 2: Debugging Complex Issue with Deep Analysis

```bash
User: Users report random logouts, can't reproduce

# v2 with ultra-deep sequential investigation
/troubleshoot "random logouts" --seq --ultrathink --c7

# Ultra-sequential analysis:
# Step 1: Gathering symptom patterns...
  - Time: Random, no pattern
  - Users: Both new and existing
  - Frequency: 5-10 per day

# Step 2: Forming hypotheses...
  H1: Token expiration issue
  H2: CORS misconfiguration
  H3: State management race condition
  H4: Session storage conflicts

# Step 3: Checking documentation...
→ C7: JWT best practices, common pitfalls

# Step 4: Testing hypotheses...
  - H1: ❌ Tokens valid for 24h
  - H2: ❌ CORS properly configured
  - H3: ✓ Found race in token refresh!

# Step 5: Implementing solution...
Fix: Token refresh queue with mutex
```javascript
const refreshQueue = new TokenRefreshQueue();
await refreshQueue.enqueue(() => refreshToken());
```

✅ Issue resolved - no logouts in 72 hours
```

### Workflow 3: Building UI Feature with Magic + Sequential

```bash
User: Create a dashboard with charts and metrics

# v2 UI building with step-by-step generation
/build "analytics dashboard" --seq --magic --c7 --think

# Sequential UI creation:
# Step 1: Analyzing dashboard requirements...
  - Real-time metrics
  - 4 chart types
  - Responsive layout
  - Dark mode support

# Step 2: Researching charting libraries...
→ C7: Fetching Chart.js v4 documentation

# Step 3: Generating dashboard layout...
→ Magic: Creating responsive grid system

# Step 4: Building chart components...
→ Magic: Generating LineChart, BarChart, PieChart, AreaChart

# Step 5: Integrating with data layer...
[Connects to WebSocket for real-time updates]

# Step 6: Testing dashboard rendering...
→ Puppeteer: Capturing dashboard screenshot
→ Puppeteer: Testing responsive breakpoints

✅ Dashboard complete with live data
```

### Workflow 4: Performance Optimization Journey

```bash
User: Homepage takes 5 seconds to load

# v2 performance analysis with sequential optimization
/analyze --performance --seq --think-hard --pup --c7

# Sequential performance investigation:
# Step 1: Measuring baseline metrics...
→ Puppeteer: Load time: 5.2s, FCP: 2.1s, TTI: 4.8s

# Step 2: Profiling bottlenecks...
  - Bundle size: 2.5MB (!!!)
  - API calls: 47 on initial load
  - Images: 15MB unoptimized
  - No code splitting

# Step 3: Researching optimization techniques...
→ C7: React performance patterns, Next.js optimization

# Step 4: Implementing optimizations...
  1. Dynamic imports for code splitting
  2. API call batching with DataLoader
  3. Image optimization with next/image
  4. Tree shaking unused imports

# Step 5: Measuring improvements...
→ Puppeteer: New metrics
  - Load time: 1.8s (65% improvement!)
  - FCP: 0.8s
  - TTI: 1.5s
  - Lighthouse: 45 → 92

✅ Homepage now loads in under 2 seconds
```

## v2 Token Economics

Enhanced token management with sequential mode:

### Token Usage by Mode
```yaml
# Base costs
Native only: 0 tokens
C7 lookup: 100-500 tokens
Magic UI: 200-1K tokens
Puppeteer: 100-300 tokens

# Sequential adds ~20% for reasoning display
--seq modifier: +20% tokens for transparency
--seq --uc: Only +5% (compressed reasoning)
```

### Smart v2 Escalation
```bash
# Progressive enhancement based on complexity
Simple task → Native tools (0 tokens)
Need docs → Add --c7 (low cost)
Complex logic → Add --seq (reasoning)
Full analysis → --seq --think-hard
Maximum → --seq --ultrathink --all-mcp
```

### Example v2 Token Optimization
```bash
❌ Inefficient v2:
/build "button" --seq --ultrathink --all-mcp
Cost: 5K+ tokens for simple button

✅ Efficient v2:
/build "button"
Cost: 0 tokens (native only)

✅ Balanced for complex:
/build "payment form" --seq --c7
Cost: 800 tokens (docs + reasoning)
```

## v2 Persona Integration

Enhanced persona-MCP combinations:

### Architect Persona
```yaml
Prefers: --seq (system thinking) + --c7 (patterns)
Power combo: --seq --ultrathink --c7

Example:
/design "microservices" --seq --ultrathink --persona-architect --c7
→ Deep architectural analysis
→ Pattern documentation lookup
→ Step-by-step design process
```

### Frontend Persona
```yaml
Prefers: --magic (UI) + --pup (testing) + --c7 (React)
Power combo: --magic --seq --pup

Example:
/build "modal component" --magic --seq --persona-frontend
→ Sequential UI generation
→ Component testing with Puppeteer
→ Accessibility validation
```

### Analyzer Persona
```yaml
Primary: --seq --think-hard (root cause analysis)
Secondary: --c7 (solution research)

Example:
/troubleshoot "memory leak" --seq --ultrathink --persona-analyzer
→ Ultra-deep sequential analysis
→ Documentation-backed solutions
→ Step-by-step debugging
```

## Advanced v2 Patterns

### Multi-Tool Orchestration with Sequential Coordination
```bash
User: Migrate from REST to GraphQL

# v2 orchestrated migration
/migrate "REST to GraphQL" --seq --ultrathink --all-mcp

# Coordinated sequential process:
# Step 1: Architecture analysis (Sequential)
  - Current REST endpoints: 47
  - Data relationships mapped
  - Migration complexity: High

# Step 2: Research phase (C7)
  - GraphQL best practices
  - Apollo Server setup
  - Schema design patterns

# Step 3: Design phase (Sequential)
  - Phased migration plan
  - Schema first approach
  - Backward compatibility

# Step 4: Implementation (Native + Magic)
  - Schema generation
  - Resolver creation
  - Magic: GraphQL playground UI

# Step 5: Testing (Puppeteer)
  - Query validation
  - Performance comparison
  - Breaking change detection

Result: Zero-downtime migration completed
```

### v2 Research-First Pattern
```yaml
Rule: External library = MUST check docs first

# v2 enforcement with --seq
User: Add Stripe payments

/build "Stripe integration" --seq --c7 --think

# Sequential research-first approach:
# Step 1: Resolving Stripe documentation...
# Step 2: Understanding payment flow...
# Step 3: Implementing exact patterns...
# Result: Zero guessing, correct first time
```

### Progressive Enhancement with Sequential Stages
```bash
# v2 progressive complexity handling
Simple: "Format date" 
→ Native only

Medium: "Format with timezone"
→ Native + --c7 (moment-timezone docs)

Complex: "Multi-timezone scheduler"
→ --seq --think --c7 --magic --pup
→ Full sequential analysis + UI + testing
```

## v2 Failure Handling

### Enhanced Recovery Strategies

#### C7 Failures
```bash
Library not found:
→ Sequential: Try alternative names
→ Fallback: Use --seq for reasoning

Docs incomplete:
→ Combine: --seq + web search
→ Generate: Best practice examples
```

#### Sequential Timeouts
```bash
Complex analysis timeout:
→ Switch: --seq --uc (compressed)
→ Chunk: Break into smaller steps
→ Cache: Reuse partial results
```

#### Magic Generation Issues
```bash
Poor component quality:
→ Add: --seq for requirements analysis
→ Iterate: Refine with context
→ Fallback: Manual implementation
```

## v2 Pro Tips

### 1. Embrace Sequential by Default
```bash
# v2 makes --seq natural
"Debug this" → Auto-adds --seq
"Analyze performance" → Auto-adds --seq --think
"Complex refactor" → Auto-adds --seq --ultrathink
```

### 2. Stack Flags for Power
```bash
# v2 power combinations
Investigation: --seq --think-hard --c7
Building: --seq --magic --pup
Optimization: --seq --uc --think
Learning: --seq --c7 --persona-mentor
```

### 3. Use Natural Language
```bash
# v2 understands intent
"step by step" → Activates --seq
"check the docs" → Activates --c7
"build a UI" → Activates --magic
"test in browser" → Activates --pup
```

### 4. Monitor Context with --uc
```bash
# v2 context management
< 50%: Use all tools freely
50-70%: Add --uc for efficiency
> 70%: --uc mandatory, selective tools
> 85%: Native + --uc only
```

### 5. Leverage Tool Memory
```bash
# v2 caches intelligently
- C7 docs fetched once per session
- Sequential analyses reusable
- Magic components remembered
- Puppeteer results cached
```

## Common v2 Scenarios

### "I need to learn X"
```bash
/explain "Redis pub/sub" --seq --c7 --persona-mentor

# Process:
# → Fetch official docs
# → Sequential explanation
# → Step-by-step examples
# → Practice exercises
```

### "Debug this weird issue"
```bash
/troubleshoot "random crashes" --seq --ultrathink --c7

# Process:
# → Deep sequential analysis
# → Documentation research
# → Hypothesis testing
# → Root cause + fix
```

### "Build this UI"
```bash
/build "admin panel" --seq --magic --pup

# Process:
# → Requirements analysis
# → Sequential component generation
# → Browser testing
# → Responsive validation
```

### "Optimize performance"
```bash
/improve --performance --seq --think-hard --pup --c7

# Process:
# → Baseline measurement
# → Sequential bottleneck analysis
# → Research optimizations
# → Implement + measure
```

## v2 Best Practices

1. **Default to --seq** - Transparency builds trust
2. **Research-first with --c7** - Never guess at APIs
3. **Combine thoughtfully** - Each tool has a purpose
4. **Use --uc when needed** - Manage token budget
5. **Let auto-activation work** - It's smarter in v2
6. **Stack personas + MCP** - Specialized expertise
7. **Cache and reuse** - v2 remembers more

Remember: v2 MCP tools are force multipliers. Combined with sequential thinking, they transform Claude from a code assistant into a transparent, intelligent development partner with access to documentation, reasoning capabilities, and testing tools. The `--seq` flag makes every decision visible! 🚀