---
sidebar_position: 6
title: SuperClaude Best Practices
---

# SuperClaude v2 Best Practices

:::info Version Notice
This guide covers **SuperClaude v2** best practices with sequential thinking and enhanced workflows.
- 📚 [View v1 practices](/docs/v1/guides/best-practices)
- 🆚 [Version comparison](/docs/version-comparison)
:::

Master these practices to get the most out of SuperClaude v2's capabilities with transparent reasoning, 19 specialized commands, and intelligent automation.

## 🎯 Core Principles

### 1. Trust v2's Enhanced Automation
```bash
❌ Don't: Manually specify every flag and persona
✅ Do: Let auto-activation work based on context

Example v2:
Just say: "Debug this TypeError"
Auto-activates: → Analyzer persona → --seq flag

# Or use command for explicit control
/troubleshoot "TypeError" --seq --think
# → Step 1: Analyzing error context...
# → Step 2: Tracing call stack...
# → Step 3: Identifying root cause...
```

### 2. Specificity Beats Verbosity
```
❌ Don't: "I have a problem with my code somewhere"
✅ Do: "Login fails with 401 after 5 minutes"

❌ Don't: "Make the app better"
✅ Do: "Reduce initial load from 3s to under 1s"
```

### 3. Progressive Enhancement with v2 Layers
```bash
Start simple → Add complexity as needed

# v2 progression with increasing depth
Level 1: /explain "JSON format"
Level 2: /build "JSON validator" --seq
Level 3: /build "JSON schema validator" --seq --think --tdd
Level 4: /design "type-safe validator" --seq --ultrathink --c7

# Each level adds reasoning transparency
```

## 📋 Workflow Best Practices

### Starting New Projects with v2 Sequential Flow

#### The Right Way - v2 Enhanced
```bash
1. Start with architecture using sequential thinking
   /design "system" --seq --ultrathink --persona-architect
   
2. Build incrementally with transparency
   /build --core --seq → /improve --features --seq → /improve --performance --seq

3. Test continuously with step-by-step validation
   /test --tdd --seq (shows: write test → implement → verify)

4. Security from start with OWASP scanning
   /scan --security --owasp --seq --think-hard
```

#### Example v2 Flow with Sequential Reasoning
```bash
User: Building e-commerce platform for 10K products

# Day 1: Architecture with transparent decisions
/design "e-commerce platform" --seq --ultrathink --persona-architect
# → Step 1: Analyzing scale requirements...
# → Step 2: Evaluating architecture patterns...
# → Step 3: Choosing microservices for scalability...
# → Step 4: Designing service boundaries...

# Day 2-5: Backend with sequential building
/build "product API" --seq --tdd --persona-backend
# → Step 1: Writing API tests...
# → Step 2: Implementing endpoints...
# → Step 3: Adding database layer...
# → Step 4: Authentication integration...

# Day 6-10: Frontend with component progression
/build "product UI" --seq --magic --persona-frontend
# → Step 1: Component architecture...
# → Step 2: Product catalog creation...
# → Step 3: Cart implementation...
# → Step 4: Checkout flow...

# Throughout: Testing with visibility
/test --e2e --seq --pup --persona-qa
# → Step 1: Test scenario planning...
# → Step 2: Writing test cases...
# → Step 3: Running browser tests...
# → Step 4: Coverage analysis...
```

### Debugging Complex Issues with v2 Sequential Analysis

#### The Systematic Approach - v2 Enhanced
```bash
1. Gather evidence with structured input
   /troubleshoot "issue description" --seq --think

2. Watch sequential analysis unfold
   # → Step 1: Symptom analysis
   # → Step 2: Hypothesis formation
   # → Step 3: Testing each hypothesis
   # → Step 4: Root cause identification
   
3. Test fixes incrementally
   /fix "issue" --seq --validate
   
4. Document with lessons learned
   /document --postmortem --seq
```

#### Real v2 Example with Sequential Debugging
```bash
User: Random crashes in production

# v2 approach with full transparency
/troubleshoot "random production crashes" --seq --ultrathink --prod

# Sequential investigation:
# Step 1: Gathering crash data...
#   → Started: After v2.3.1 deployment
#   → Frequency: ~5% of requests
#   → Error: 'Cannot allocate memory'
#   → New feature: Image processing
#
# Step 2: Forming hypotheses...
#   H1: Memory leak in image handler
#   H2: Concurrent processing overload
#   H3: Large image size handling
#   H4: Missing stream cleanup
#
# Step 3: Testing each hypothesis...
#   → H1: Checking object retention... ❌
#   → H2: Analyzing concurrency... ❌
#   → H3: Reviewing size limits... ❌
#   → H4: Inspecting stream lifecycle... ✅
#
# Step 4: Root cause confirmed...
#   → Unclosed streams in image processor
#   → Each request leaks ~50MB
#   → Accumulates to OOM after ~100 requests

Solution: Add stream.destroy() in finally block
```

### Performance Optimization with v2 Sequential Process

#### The Right Order - v2 Transparent
```bash
1. Measure first with sequential profiling
   /analyze --performance --seq --think
   
2. Find bottlenecks with step-by-step analysis
   # → Step 1: Profiling current state
   # → Step 2: Identifying slowest parts
   # → Step 3: Analyzing root causes
   
3. Fix biggest issues with visibility
   /improve --performance --seq --uc
   
4. Verify improvements with comparison
   /test --performance --before-after --seq
```

#### v2 Example with Full Journey
```bash
# Start optimization journey
/analyze --performance "3s load time" --seq --think-hard --pup

# Sequential performance analysis:
# Step 1: Measuring baseline metrics...
#   → Load time: 3.2s
#   → Bundle size: 2.5MB
#   → API calls: 47 sequential
#   → Images: 15MB unoptimized
#
# Step 2: Identifying bottlenecks...
#   → 40% - Large bundle (no splitting)
#   → 35% - Sequential API calls
#   → 25% - Unoptimized images
#
# Step 3: Planning optimizations...
#   Priority 1: Code splitting
#   Priority 2: Parallel API calls
#   Priority 3: Image optimization
#
# Step 4: Implementing fixes...

/improve --performance --seq --implement
# → Implementing code splitting...
# → Parallelizing API calls...
# → Optimizing images...

Result: 3.2s → 0.9s (72% improvement)
```

## 🔧 Tool Usage Patterns

### MCP Tools - When to Use

#### Context7 (C7)
```
✅ Use when:
- Working with external libraries
- Need official documentation
- Implementing new APIs

❌ Don't use when:
- You know the syntax
- Working with internal code
- Simple operations
```

#### Sequential Thinking (--seq)
```bash
✅ Use when:
- Complex debugging → Shows hypothesis testing
- Architecture decisions → Reveals decision process
- Multi-step problems → Breaks down complexity
- Root cause analysis → Transparent investigation
- Learning new concepts → Step-by-step understanding

❌ Don't use when:
- Simple fixes → Adds unnecessary verbosity
- Straightforward tasks → Slows down execution
- Known solutions → No exploration needed

# v2 auto-activates --seq for:
"step by step", "show your thinking", "explain how"
```

#### Magic UI Generator
```
✅ Use when:
- Need UI components quickly
- Prototyping interfaces
- Consistent styling needed

❌ Don't use when:
- Have existing components
- Need pixel-perfect designs
- Complex interactions
```

### Flag Combinations That Work in v2

#### Power Combos
```bash
# Deep security analysis with transparency
/scan --security --seq --ultrathink --persona-security
# Shows each vulnerability check step-by-step

# Full stack feature with all tools
/build "feature" --fullstack --seq --all-mcp
# Uses C7 for docs, Magic for UI, sequential for logic

# Performance deep dive with profiling
/analyze --performance --seq --think-hard --pup
# Browser profiling + sequential analysis

# Learning mode with documentation
/explain "concept" --seq --c7 --persona-mentor
# Fetches docs + explains step-by-step
```

#### v2 Anti-Patterns
```bash
❌ --no-mcp --c7              # Contradictory flags
❌ --ultrathink "format json"  # Overkill for simple task
❌ --magic "fix bug"           # Wrong tool for debugging
❌ --seq --uc "hello world"    # Sequential for trivial task
❌ Five flags for simple task   # Over-specification
```

## 💡 Communication Patterns

### Effective Requests

#### The Three-Part Structure
```
1. Context: Current situation
2. Problem: What's wrong  
3. Goal: Desired outcome

Example:
"React app using Redux. (Context)
State updates cause full re-renders. (Problem)
Need selective component updates." (Goal)
```

#### Progressive Disclosure
```
Start broad:
"Build user authentication"

Add specifics as needed:
"Add email verification"
"Include password reset"
"Add 2FA with SMS"
```

### Managing Long Conversations in v2

#### Checkpoint Strategy with Commands
```bash
# Before major changes:
/git --checkpoint "before-auth-refactor" --seq

# When switching contexts:
/spawn --checkpoint "backend-complete" --switch-to "frontend"

# Before risky operations:
/migrate --checkpoint --dry-run --seq
# Shows migration steps before executing

# v2 auto-checkpoints on risky operations
```

#### Context Preservation with --uc
```bash
# When context > 60%:
/load --summary --uc
# Ultra-compressed summary of progress

# When context > 80%:
/compact --aggressive --keep-todos
# Maintains task list while clearing context

# Example v2 context management:
/status --seq --uc
# → Done: Auth ✓ API ✓ Tests ✓
# → Current: Dashboard
# → Next: Deploy
```

## 🚀 Advanced Techniques

### Parallel Development with v2 Spawn
```bash
# v2 parallel execution with coordination
/spawn --parallel "backend,frontend,tests" --seq

# Terminal 1: Backend API
/build "REST API" --seq --persona-backend
# → Step 1: Designing endpoints...
# → Step 2: Implementing controllers...

# Terminal 2: Frontend UI
/build "React components" --seq --persona-frontend --magic
# → Step 1: Component architecture...
# → Step 2: UI generation...

# Terminal 3: Test Suite
/test --integration --seq --persona-qa
# → Step 1: Test planning...
# → Step 2: Writing test cases...

# Coordination command
/spawn --status --seq
# Shows progress across all parallel tasks
```

### Pattern Learning
```
SuperClaude learns your patterns:

First time: "Use styled-components"
Second time: "Style this button"
→ Automatically uses styled-components

First time: "Test with Jest and React Testing Library"
Later: "Add tests"
→ Uses your testing stack
```

### Custom Workflows with v2 Task Chains
```bash
# Define custom v2 workflow
/task --define "TDD flow" --seq
# → Step 1: Define workflow steps...
# → Step 2: Set execution order...
# → Step 3: Add validation points...

# Execute custom workflow
/task --run "TDD flow" --seq
# → Running: Write failing test
# → Running: Implement minimum code
# → Running: Make test pass
# → Running: Refactor
# → Loop: Next feature

# v2 learns and suggests workflows
"Working on auth?" → "Use your OAuth flow?"
```

## ⚠️ Common Pitfalls

### Over-Engineering
```
❌ Wrong:
User: "Store user preferences"
Using: Microservices, event sourcing, CQRS

✅ Right:
Simple JSON in database until scale demands more
```

### Premature Optimization
```
❌ Wrong:
Optimizing before measuring
Caching everything
Complex algorithms for small data

✅ Right:
1. Build working version
2. Measure performance
3. Optimize bottlenecks
```

### Ignoring Security
```
❌ Wrong:
"Add auth later"
"Validate on frontend only"
"Store tokens in localStorage"

✅ Right:
Security from start
Defense in depth
Follow OWASP guidelines
```

### Fighting the System
```bash
❌ Wrong in v2:
/build "button" --seq --ultrathink --all-mcp --persona-architect
# Over-specified for simple task

/troubleshoot --no-seq --no-think
# Disabling helpful features

✅ Right in v2:
/build "button"
# Let v2 choose appropriate depth

"Debug this step by step"
# Natural language triggers --seq

/troubleshoot "complex issue"
# Auto-activates --seq --think
```

## 📊 Metrics for Success

### Code Quality Indicators
```
✅ Good signs:
- Functions < 20 lines
- Clear naming
- Low nesting
- High cohesion
- Comprehensive tests

❌ Warning signs:
- Deep nesting (>3 levels)
- Long functions
- Duplicate code
- No tests
- Complex conditions
```

### Performance Targets
```
Page Load: < 2s
API Response: < 200ms
Time to Interactive: < 3s
Bundle Size: < 500KB
Test Coverage: > 80%
```

### Security Checklist
```
□ Input validation
□ Output encoding
□ Authentication
□ Authorization
□ Secure communication
□ Error handling
□ Logging/monitoring
```

## 🎭 Persona Switching Mastery in v2

### Natural Transitions with Sequential Flow
```bash
# v2 seamless persona transitions
Building → Testing → Optimizing

/build "product gallery" --seq --persona-frontend
# → Step 1: Component design...
# → Step 2: Implementation...

"Now test it thoroughly"
# [QA persona auto-activates with --seq]
# → Step 1: Test case design...
# → Step 2: Running tests...

"Make it load faster"
# [Performance persona activates]
# → Step 1: Performance profiling...
# → Step 2: Optimizations...
```

### Multi-Persona Collaboration with v2 Coordination
```bash
# Complex feature with coordinated personas
/spawn --multi-persona "payment-system" --seq

Morning: 
  /design --system --seq --persona-architect
  # → Payment flow architecture

Afternoon:
  /build --api --seq --persona-backend
  /build --ui --seq --persona-frontend --magic
  # → Parallel implementation

Evening:
  /test --comprehensive --seq --persona-qa --pup
  # → Full test coverage

Next day:
  /improve --performance --seq --persona-performance
  # → Speed optimization

Finally:
  /scan --security --owasp --seq --persona-security
  # → Security hardening
```

## 🏁 Quick Decision Tree

### Which Persona?
```
System design? → Architect
UI/UX work? → Frontend
API/Database? → Backend
Bug hunting? → Analyzer
Audit/Review? → Security
Learning? → Mentor
Cleanup? → Refactorer
Speed issues? → Performance
Testing? → QA
```

### Which Flag in v2?
```bash
Need transparency? → --seq
Need docs? → --c7
Complex problem? → --think / --think-hard / --ultrathink
UI component? → --magic
Visual testing? → --pup
Save tokens? → --uc
Quick task? → (no flags needed)
Everything? → --all-mcp --seq
```

### Which v2 Command?
```bash
New feature? → /build
Fix issues? → /troubleshoot
Explore code? → /analyze
Learning? → /explain
Improve code? → /improve
Check security? → /scan
Deploy code? → /deploy
Design system? → /design
Run tests? → /test
Manage tasks? → /task
```

## 🌟 Golden Rules - v2 Enhanced

1. **Clarity beats cleverness** - Simple, clear requests get better results
2. **Sequential thinking reveals process** - Use --seq to understand decisions
3. **Context is king** - Share relevant information upfront
4. **Trust v2's intelligence** - Auto-activation is smarter than ever
5. **Iterate naturally** - Build conversation progressively
6. **Measure twice, cut once** - /analyze --seq before implementing
7. **Security is not optional** - /scan --security from start
8. **Tests are documentation** - /test --tdd --seq as you go
9. **Personas are mindsets** - Let them auto-activate
10. **Tools amplify capability** - Combine them wisely
11. **Learn from patterns** - v2 adapts to your style
12. **Transparency builds trust** - --seq shows the why

## 💭 Final Thoughts on v2

SuperClaude v2 is most powerful when you embrace its transparency. The `--seq` flag isn't just about seeing steps - it's about understanding the reasoning, learning from the process, and building trust in the solutions. With 19 specialized commands and intelligent auto-activation, v2 feels like pair programming with a team of experts who explain their thinking.

The best v2 sessions combine:
- Natural language that triggers appropriate tools
- Sequential reasoning for complex problems
- Smart compression (--uc) for long conversations
- Parallel execution for efficiency
- Automatic persona switching based on context

Remember: SuperClaude v2 is designed to be transparent, efficient, and adaptive. When in doubt, just describe what you're trying to achieve and watch the sequential magic unfold! 🚀