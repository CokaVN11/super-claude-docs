---
sidebar_position: 3
title: MCP.md Integration Guide
---

# Understanding MCP.md - Model Context Protocol Integration

MCP.md orchestrates advanced tools that extend Claude's capabilities. Think of it as Claude's toolkit for specialized tasks - from finding documentation to generating UI components.

## The Four Power Tools

### 🔍 Context7 (C7) - Documentation Finder
Instantly finds and retrieves official library documentation.

### 🧠 Sequential - Deep Thinker
Step-by-step reasoning for complex problems.

### 🎨 Magic - UI Generator
Creates UI components matching your project style.

### 🌐 Puppeteer - Browser Tester
Tests in real browsers and captures screenshots.

## Decision Matrix - When Tools Activate

### Automatic Triggers (No Flags Needed)

#### Documentation Requests
```
User: How do I use React hooks?
SuperClaude: [C7 activates automatically]
→ Resolving React library
→ Fetching hooks documentation
✅ Here's the official guide: [provides React hooks docs]
```

#### Complex Problems
```
User: Why is our app using 4GB of memory?
SuperClaude: [Sequential activates]
Analyzing memory issue step-by-step:
1. Checking for memory leaks
2. Reviewing data structures
3. Examining cache usage
→ Found: Unbounded cache in user service
```

#### UI Requests
```
User: Need a data table with sorting
SuperClaude: [Magic activates]
→ Generating table component
→ Matching your project style
✅ Created DataTable.tsx with sorting
```

### Manual Flags

Force specific tools when needed:

```bash
--c7      # Force Context7 docs lookup
--seq     # Force Sequential thinking  
--magic   # Force Magic UI generation
--pup     # Force Puppeteer testing
--all-mcp # Use all tools
--no-mcp  # Disable all MCP tools
```

## Real-World Workflows

### Workflow 1: Learning New Library

```
User: I need to add authentication with Auth0

SuperClaude's process:
1. [C7] Resolve Auth0 library → Find official docs
2. [C7] Get authentication setup guide
3. [Sequential] Plan implementation steps
4. Native tools implement the code
5. [Puppeteer] Test login flow

Actual execution:
→ C7: Found Auth0 React SDK docs
→ Sequential: Planning auth flow...
  1. Install @auth0/auth0-react
  2. Configure Auth0Provider
  3. Create login/logout components
  4. Protect routes
→ Implementing authentication...
✅ Auth0 integrated successfully
```

### Workflow 2: Debugging Complex Issue

```
User: Users report random logouts, can't reproduce

SuperClaude's process:
1. [Sequential] Analyze possible causes
2. [C7] Check session management docs
3. Native tools examine code
4. [Sequential] Form hypothesis
5. [Puppeteer] Attempt reproduction

Execution:
→ Sequential thinking:
  - Token expiration?
  - CORS issues?
  - State management problem?
→ C7: Checking JWT best practices
→ Found: Token refresh race condition
→ Fix: Implement token refresh queue
✅ Issue resolved
```

### Workflow 3: Building UI Feature

```
User: Create a dashboard with charts and metrics

SuperClaude's process:
1. [Magic] Generate dashboard layout
2. [C7] Find charting library docs
3. [Magic] Create chart components
4. Native tools integrate everything
5. [Puppeteer] Screenshot result

Execution:
→ Magic: Generating dashboard layout...
→ C7: Fetching Chart.js documentation
→ Magic: Creating MetricsCard, LineChart, PieChart
→ Integrating components...
→ Puppeteer: Capturing dashboard screenshot
✅ Dashboard complete with 4 chart types
```

### Workflow 4: Performance Optimization

```
User: Homepage takes 5 seconds to load

SuperClaude's process:
1. [Sequential] Analyze performance bottlenecks
2. [Puppeteer] Measure actual load times
3. [C7] Research optimization techniques
4. Implement improvements
5. [Puppeteer] Verify improvements

Execution:
→ Sequential: Analyzing performance...
  - Bundle size: 2.5MB
  - 47 API calls on load
  - No code splitting
→ Puppeteer: Baseline - 5.2s load time
→ C7: React optimization patterns
→ Implementing:
  - Lazy loading
  - API call batching
  - Tree shaking
→ Puppeteer: New load time - 1.8s
✅ 65% performance improvement
```

## Token Economics

Each tool has different token costs:

### Efficient Token Usage
```yaml
Native only: 0 tokens
C7 lookup: 100-500 tokens
Sequential: 500-2K tokens  
Magic UI: 200-1K tokens
Puppeteer: 100-300 tokens
```

### Smart Escalation
```
1. Try native tools first (0 tokens)
2. Use C7 for documentation (low cost)
3. Add Sequential for complex analysis
4. Combine tools only when needed
```

### Example Token Optimization
```
❌ Inefficient:
User: Add a button
SuperClaude: [Uses all MCP tools]
Cost: 3K+ tokens

✅ Efficient:
User: Add a button
SuperClaude: [Native tools only]
Cost: 0 tokens
```

## Persona Integration

Different personas prefer different tools:

### Architect Persona
```yaml
Prefers: Sequential (system design) + C7 (patterns)
Avoids: Magic (not design-focused)

Example:
/persona:architect
Design microservices architecture --seq
→ Deep Sequential analysis
→ C7 for design patterns
→ No UI generation
```

### Frontend Persona
```yaml
Prefers: Magic (UI) + Puppeteer (testing) + C7 (React)
Uses all: Quick component generation

Example:
/persona:frontend  
Build a modal component
→ Magic generates modal
→ C7 checks React patterns
→ Puppeteer tests display
```

### Analyzer Persona
```yaml
Primary: Sequential (root cause analysis)
Secondary: C7 (find solutions)

Example:
/persona:analyzer
Why does login fail intermittently?
→ Sequential deep analysis
→ C7 for error patterns
→ Systematic debugging
```

## Advanced Patterns

### Multi-Tool Orchestration
```
User: Migrate from REST to GraphQL

SuperClaude orchestrates:
1. [Sequential] Plan migration strategy
2. [C7] GraphQL best practices
3. [C7] Apollo Client docs
4. Native implementation
5. [Magic] Generate GraphQL playground UI
6. [Puppeteer] Test queries

Result: Complete migration with:
- Phased migration plan
- Type-safe resolvers
- Auto-generated UI
- End-to-end tests
```

### Research-First Pattern
```yaml
Rule: External library = MUST check docs

User: Add Stripe payments
❌ Without MCP: Guesses at implementation
✅ With MCP: 
   1. C7 → Official Stripe docs
   2. Implement exact patterns
   3. No guessing, no errors
```

### Progressive Enhancement
```
Start simple → Add tools as needed

User: Format this date
→ Native only (moment.js already in project)

User: Format dates with timezone support
→ Native + C7 (check date-fns docs)

User: Build timezone-aware scheduling system
→ Sequential + C7 + Magic + Puppeteer
```

## Failure Handling

### C7 Failures
```
Library not found → Try broader search terms
Docs incomplete → Fall back to Sequential
API timeout → Use cached results + native
```

### Sequential Failures
```
Timeout → Use partial analysis
Token limit → Summarize and continue
Unclear → Ask clarifying questions
```

### Magic Failures
```
No components → Try different description
Poor quality → Use refiner with context
Can't integrate → Document and use native
```

## Pro Tips

### 1. Let Tools Auto-Activate
```
Just describe what you need:
"Need docs for X" → C7 activates
"Complex problem" → Sequential activates
"Build UI" → Magic activates
```

### 2. Use Flags for Control
```
Force specific approach:
--seq → Deep analysis even for simple tasks
--no-mcp → Speed over intelligence
--c7 → Always verify with docs
```

### 3. Combine Tools Strategically
```
Power combinations:
Sequential + C7 → Research-backed analysis
Magic + Puppeteer → Generated + tested UI
C7 + Native → Docs-driven development
```

### 4. Monitor Token Usage
```
Check context percentage:
< 50% → Use any tools freely
50-70% → Prefer native + C7
> 70% → Native tools only
```

### 5. Cache MCP Results
```
SuperClaude remembers:
- Library docs fetched
- Sequential analyses
- Generated components
→ Reuses in same session
```

## Common Scenarios

### "I need to learn X"
```
Triggers: C7 + Sequential
Process: Fetch docs → Explain concepts → Show examples
Example: "Learn Redis pub/sub" → Docs + tutorial
```

### "Debug this weird issue"
```
Triggers: Sequential primary, C7 secondary
Process: Analyze → Research → Hypothesis → Test
Example: "Random crashes" → Systematic debugging
```

### "Build this UI"
```
Triggers: Magic + Puppeteer
Process: Generate → Integrate → Test → Screenshot
Example: "Admin panel" → Complete UI + tests
```

### "Optimize performance"
```
Triggers: Sequential + Puppeteer + C7
Process: Profile → Analyze → Research → Implement → Measure
Example: "Slow API" → Full optimization
```

## Best Practices

1. **Trust auto-activation** - It usually picks the right tools
2. **Research-first for external libs** - C7 prevents guessing
3. **Sequential for "why" questions** - Deep analysis
4. **Magic for rapid prototypes** - Quick UI generation
5. **Combine thoughtfully** - Each tool has a purpose
6. **Monitor token budget** - Escalate gradually
7. **Cache and reuse** - Don't repeat MCP calls

Remember: MCP tools are force multipliers. They turn Claude from a code assistant into a full development partner with access to documentation, reasoning capabilities, and testing tools.