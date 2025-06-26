---
sidebar_position: 6
title: SuperClaude Best Practices
---

# SuperClaude Best Practices

Master these practices to get the most out of SuperClaude's capabilities while maintaining efficiency and code quality.

## 🎯 Core Principles

### 1. Trust the Automation
```
❌ Don't: Manually specify every flag and persona
✅ Do: Let auto-activation work based on context

Example:
Just say: "Debug this TypeError"
Auto-activates: → Analyzer persona → Sequential thinking
```

### 2. Specificity Beats Verbosity
```
❌ Don't: "I have a problem with my code somewhere"
✅ Do: "Login fails with 401 after 5 minutes"

❌ Don't: "Make the app better"
✅ Do: "Reduce initial load from 3s to under 1s"
```

### 3. Progressive Enhancement
```
Start simple → Add complexity as needed

Level 1: "Format this JSON"
Level 2: "Validate and format this JSON"
Level 3: "Create JSON schema validator with TypeScript types"
```

## 📋 Workflow Best Practices

### Starting New Projects

#### The Right Way
```
1. Start with architecture
   /persona:architect
   Design a [type] system for [purpose] handling [scale]

2. Build incrementally
   Core features → Enhancement → Optimization

3. Test continuously
   Write tests as you build, not after

4. Security from start
   Include security constraints in initial design
```

#### Example Flow
```
User: Building e-commerce platform for 10K products

Day 1:
/persona:architect --think-hard
→ Microservices vs Monolith decision
→ Database design
→ API structure

Day 2-5:
/persona:backend
→ Core API implementation
→ Database setup
→ Authentication

Day 6-10:
/persona:frontend
→ Product catalog
→ Shopping cart
→ Checkout flow

Throughout:
/persona:qa
→ Tests for each component
```

### Debugging Complex Issues

#### The Systematic Approach
```
1. Gather evidence
   - Error messages
   - When it started
   - What changed
   - Reproduction steps

2. Let analyzer work
   /persona:analyzer --think
   
3. Test hypotheses
   One change at a time
   
4. Document solution
   For future reference
```

#### Real Example
```
User: Random crashes in production

Good approach:
"App crashes randomly in production.
Started: After deploying v2.3.1
Frequency: ~5% of requests
Logs: 'Cannot allocate memory'
Changes: Added image processing"

SuperClaude response:
[Analyzer activated]
Memory issue after image processing added.
Checking for:
• Memory leaks in image handling
• Missing cleanup
• Concurrent processing limits
[Finds unclosed streams in image processor]
```

### Performance Optimization

#### The Right Order
```
1. Measure first
   Get baseline metrics
   
2. Find bottlenecks
   Use profiling tools
   
3. Fix biggest issues
   80/20 rule applies
   
4. Verify improvements
   Measure again
```

#### Example
```
/persona:performance
Current: 3s page load, Target: <1s
--profile --think

Results in:
1. Bundle analysis
2. Network waterfall
3. Render timeline
4. Specific optimizations
5. Expected improvements
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

#### Sequential Thinking
```
✅ Use when:
- Complex debugging
- Architecture decisions
- Multi-step problems
- Root cause analysis

❌ Don't use when:
- Simple fixes
- Straightforward tasks
- Known solutions
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

### Flag Combinations That Work

#### Power Combos
```bash
# Deep security analysis
/persona:security
/user:analyze --security --think-hard

# Full stack feature
/user:build --fullstack --all-mcp

# Performance deep dive
/persona:performance
/user:analyze --profile --seq

# Learning mode
/persona:mentor
/user:explain --depth --c7
```

#### Anti-Patterns
```bash
❌ --no-mcp --c7  # Contradictory
❌ --ultrathink "format json"  # Overkill
❌ --magic "fix bug"  # Wrong tool
❌ Five flags for simple task  # Over-specification
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

### Managing Long Conversations

#### Checkpoint Strategy
```
Before major changes:
"Create checkpoint before refactoring auth"

When switching contexts:
"Checkpoint current state, switching to frontend"

Before risky operations:
"Checkpoint before database migration"
```

#### Context Preservation
```
When context > 60%:
- Summarize progress
- State current focus
- Clear unnecessary details

Example:
"Summary: Fixed auth, built API, added tests.
Now focus: Frontend dashboard only."
```

## 🚀 Advanced Techniques

### Parallel Development
```
Open multiple terminals:

Terminal 1: /persona:backend
"Build API endpoints"

Terminal 2: /persona:frontend
"Create UI components"

Terminal 3: /persona:qa
"Write integration tests"
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

### Custom Workflows
```
Create your own flows:

"Start my TDD flow":
1. Write failing test
2. Implement minimum code
3. Make test pass
4. Refactor
5. Repeat

SuperClaude learns and follows your process
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
```
❌ Wrong:
Forcing wrong persona
Overriding smart defaults
Too many manual flags

✅ Right:
Trust auto-activation
Use natural language
Let system guide you
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

## 🎭 Persona Switching Mastery

### Natural Transitions
```
Building → Testing → Optimizing

/persona:frontend
"Build product gallery"
[Creates components]

"Now test it thoroughly"
[QA persona auto-activates]

"Make it load faster"
[Performance persona activates]
```

### Multi-Persona Collaboration
```
Complex feature requiring multiple viewpoints:

Morning: Architect designs
Afternoon: Frontend/Backend build
Evening: QA tests
Next day: Performance optimizes
Finally: Security audits
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

### Which Flag?
```
Need docs? → --c7
Complex problem? → --think / --seq
UI component? → --magic
Visual testing? → --pup
Quick task? → --no-mcp
Everything? → --all-mcp
```

### Which Command?
```
New feature? → /user:build
Fix issues? → /user:troubleshoot
Explore code? → /user:analyze
Learning? → /user:explain
Improve code? → /user:improve
Check security? → /user:scan
```

## 🌟 Golden Rules

1. **Clarity beats cleverness** - Simple, clear requests get better results
2. **Context is king** - Share relevant information upfront
3. **Trust the defaults** - Auto-activation usually picks right
4. **Iterate naturally** - Build conversation progressively
5. **Measure twice, cut once** - Analyze before implementing
6. **Security is not optional** - Include from start
7. **Tests are documentation** - Write them as you go
8. **Personas are mindsets** - Switch based on task needs
9. **Tools are servants** - Use them, don't be used by them
10. **Learn from patterns** - SuperClaude adapts to you

## 💭 Final Thoughts

SuperClaude is most powerful when used naturally. Don't overthink commands or flags - describe what you need clearly and let the system's intelligence work for you. The best SuperClaude sessions feel like pair programming with an expert who knows exactly when to be an architect, when to be a debugger, and when to be a teacher.

Remember: SuperClaude is designed to make you more productive, not to add complexity. When in doubt, just describe what you're trying to achieve and let the magic happen.