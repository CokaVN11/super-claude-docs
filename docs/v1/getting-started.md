---
sidebar_position: 2
title: Getting Started
---

# Getting Started with SuperClaude

Welcome to SuperClaude! This guide will help you start using SuperClaude effectively based on your specific needs.

## Quick Start by Role

### 🆕 I'm New to SuperClaude

Start with these basics:

```bash
# 1. Load your project
/user:load --depth medium

# 2. Get an overview
/user:analyze --code

# 3. Try a simple task
Fix this typo in README.md

# 4. Let auto-activation work
"Why is this function slow?"
→ Performance persona activates automatically
```

**Next steps**:
- Read [CLAUDE.md Configuration Guide](./guides/claude-md-guide)
- Try different [personas](./guides/personas-md-guide)
- Explore [commands](./guides/commands-guide)

### 👨‍💻 I'm Starting a New Project

Perfect workflow for new projects:

```bash
# Day 1: Setup and Architecture
/user:load
/user:dev-setup --install --ci
/persona:architect
/user:design --api --ddd --think-hard

# Day 2: Start Building
/user:build --init --react  # or --api or --fullstack
/user:test --unit --coverage

# Ongoing: Feature Development
/user:build --feature "user authentication" --tdd
/user:test --e2e
```

**Pro tip**: Use `/user:git --checkpoint` before major changes

### 🐛 I Need to Debug Something

Systematic debugging approach:

```bash
# For development issues
/user:troubleshoot --investigate
"Error: Cannot read property 'user' of undefined"

# For production emergencies
/user:troubleshoot --prod --emergency
"Site is down! 500 errors everywhere!"

# Let analyzer persona help
/persona:analyzer
"Random crashes, can't reproduce locally"
```

**Remember**: SuperClaude traces root causes, not just symptoms

### ⚡ I Want to Optimize Performance

Performance improvement workflow:

```bash
# 1. Measure first
/user:analyze --profile

# 2. Get specific metrics
/persona:performance
"Page load takes 4 seconds"

# 3. Iterative improvement
/user:improve --performance --iterate --threshold 90

# 4. Verify improvements
/user:test --performance
```

### 🔒 I Need a Security Audit

Security-first approach:

```bash
# 1. Full security scan
/user:scan --security --owasp

# 2. Let security persona guide
/persona:security
"Review our authentication system"

# 3. Fix issues systematically
/user:improve --security
/user:scan --validate
```

## Common First Tasks

### Task 1: Understanding Your Codebase

```bash
/user:load --depth deep
/user:analyze --architecture --think

Ask: "What are the main components and how do they interact?"
```

### Task 2: Adding a Feature

```bash
# Use natural language
"Add password reset functionality"

# Or be more specific
/user:build --feature "password reset with email verification"
```

### Task 3: Fixing a Bug

```bash
# Describe the issue
"Users can't login after password reset"

# SuperClaude will:
→ Activate analyzer persona
→ Investigate the issue
→ Provide fix with tests
```

### Task 4: Learning Something New

```bash
/persona:mentor
"Explain React hooks with examples"

# Or with documentation
"How do I use React Query?" --c7
```

## Understanding Auto-Activation

SuperClaude automatically activates the right tools and personas:

### Keyword Triggers
- "bug" or "error" → Analyzer persona
- "slow" or "performance" → Performance persona
- "secure" or "vulnerability" → Security persona
- "explain" or "understand" → Mentor persona

### File-Based Activation
- Open `Component.tsx` → Frontend persona
- Open `api.js` → Backend persona
- Open `test.spec.js` → QA persona

### Context Triggers
- External library mentioned → Context7 docs
- Complex problem → Sequential thinking
- UI component needed → Magic builder

## Your First Day Checklist

- [ ] Load your project: `/user:load`
- [ ] Run basic analysis: `/user:analyze --code`
- [ ] Try a simple fix or feature
- [ ] Experiment with different personas
- [ ] Use natural language for requests
- [ ] Let auto-activation work
- [ ] Try a thinking mode: `--think`
- [ ] Create a checkpoint: `/user:git --checkpoint`

## Essential Concepts

### 1. Personas Are Mindsets
```bash
/persona:frontend  # Thinks about UX
/persona:backend   # Thinks about reliability
/persona:security  # Thinks about threats
```

### 2. Commands Chain Naturally
```bash
analyze → design → build → test → deploy
```

### 3. Thinking Modes Scale
```bash
Simple task → No flag needed
Complex task → --think
Architecture → --think-hard
Critical → --ultrathink
```

### 4. Be Specific
```
❌ "Make it better"
✅ "Reduce load time from 3s to under 1s"

❌ "Fix the bug"
✅ "Login fails with 401 after 5 minutes"
```

## Quick Wins

### Get Instant Value
1. **Code Quality**: `/user:analyze --code` → `/user:improve --quality`
2. **Performance**: `/user:analyze --profile` → See bottlenecks immediately
3. **Security**: `/user:scan --security` → Find vulnerabilities
4. **Documentation**: `/user:document --readme` → Auto-generate docs

### Time Savers
- Use `--uc` flag for 70% token savings
- Let auto-activation choose tools
- Use natural language instead of complex commands
- Trust the defaults

## What Makes SuperClaude Different

### Without SuperClaude
```
You: "Fix the login bug"
Claude: "I'll help you fix the login bug. Can you provide more details 
about what's happening? What error messages are you seeing? When did 
this start occurring?..."
```

### With SuperClaude
```
You: "Fix the login bug"
SuperClaude: [Analyzer persona activates]
Investigating login issue...
✓ Found: Session timeout after 5 min
✓ Cause: JWT expiry not refreshing
✓ Fix: Implement token refresh
[Provides code fix with tests]
```

## Next Steps

### Explore the Guides
1. [CLAUDE.md Configuration](./guides/claude-md-guide) - Core settings
2. [Commands Guide](./guides/commands-guide) - All 18 commands
3. [Personas Guide](./guides/personas-md-guide) - 9 expert modes
4. [Best Practices](./guides/best-practices) - Pro tips

### Try These Scenarios
1. Build something: `/user:build --react --magic`
2. Debug an issue: `/user:troubleshoot --investigate`
3. Optimize code: `/user:improve --quality`
4. Learn a concept: `/persona:mentor` + question

### Join the Community
- Star the [GitHub repo](https://github.com/NomenAK/SuperClaude)
- Share your workflows
- Contribute improvements

## Remember

- **Start simple** - Don't over-specify commands
- **Trust the system** - Auto-activation usually picks right
- **Be specific** - Clear goals get better results
- **Use natural language** - Describe what you need
- **Iterate naturally** - Build conversations progressively

Welcome to a new way of coding with AI. SuperClaude is ready to be your specialized development partner.

Ready? Just type what you need and let SuperClaude do the rest! 🚀