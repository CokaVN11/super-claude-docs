---
sidebar_position: 1
title: CLAUDE.md
---

# CLAUDE.md - SuperClaude v2 Configuration

:::info Version Notice
This explains **SuperClaude v2's modular architecture** with YAML configuration and `@include` system.
- 📚 [View v1 configuration](/docs/v1/core-config/claude-md)
- 🆚 [Version comparison](/docs/version-comparison)
:::

The main configuration file that leverages v2's modular YAML architecture for maximum flexibility and reusability.

## v2 Architecture: Modular YAML System

```yaml
# SuperClaude v2 uses modular YAML with @include
Architecture: Modular YAML files + @include system
Benefits: Reusable components | Organized structure | Easy updates
Structure:
  CLAUDE.md: Main config with @include directives
  shared/: Reusable YAML modules
  commands/: Command-specific configs
  
Example:
  @include shared/superclaude-core.yml#Core_Philosophy
  @include commands/shared/universal-constants.yml#Universal_Legend
```

### File Organization
```
super-claude/
├── CLAUDE.md                 # Main config with @includes
├── shared/                   # Reusable modules
│   ├── superclaude-core.yml
│   ├── superclaude-rules.yml
│   ├── superclaude-mcp.yml
│   └── superclaude-personas.yml
└── commands/                 # Command configs
    └── shared/
        ├── universal-constants.yml
        ├── flag-inheritance.yml
        └── execution-patterns.yml
```

## Core Configuration with --seq

```yaml
Philosophy: Code>docs | Simple→complex | Security first | Sequential reasoning
Communication: Concise format | Symbols: →|&:» | Bullets>prose | Step-by-step
Workflow: TodoRead()→TodoWrite(3+)→Execute --seq | Update immediate
Stack: React|TS|Vite + Node|Express|PostgreSQL + Git|ESLint|Jest
Commands: /<command> [flags] | 19 specialized | Ex: /build --tdd --seq
```

### Key v2 Enhancements

- **19 Specialized Commands**: Not just basic operations
- **Sequential Thinking**: `--seq` for step-by-step reasoning
- **Modular Architecture**: `@include` for component reuse
- **Auto-activation**: Smart persona and tool selection

## Enhanced Thinking Modes

```yaml
# v2 adds sequential reasoning to all thinking modes
Activation: Natural language OR command flags OR auto-activation
Flags: --think | --think-hard | --ultrathink | --seq (NEW!)
Sequential: Shows step-by-step reasoning process

Examples with --seq:
  /analyze --arch --seq --think        # Architecture with steps
  /troubleshoot --prod --seq --think-hard  # Debug with reasoning
  /design --system --seq --ultrathink  # Maximum depth + steps
```

### Sequential Thinking Examples

```bash
# Without --seq
/fix "memory leak"
→ Here's the fix: [code]

# With --seq  
/fix "memory leak" --seq
→ Step 1: Analyzing memory patterns...
→ Step 2: Identifying leak sources...
→ Step 3: Tracing object retention...
→ Step 4: Implementing fix...
→ Step 5: Verifying solution...
```

## Advanced Token Economy

```yaml
# v2 enhanced with UltraCompressed mode
Standard: Minimal commands | Responses<4 lines | Concise docs
UltraCompressed: ~70% reduction | Telegram-style | --uc flag
Adaptive: Auto-activate when context>70% | Smart compression

Optimization with --seq:
  Normal: Full step descriptions
  --uc: Compressed steps (→1:analyze →2:fix →3:test)
```

### Token Optimization in Practice

```bash
# Standard sequential
/analyze --performance --seq
# → Step 1: Profiling application...
# → Step 2: Identifying bottlenecks...
# → Step 3: Analyzing database queries...

# UltraCompressed sequential
/analyze --performance --seq --uc
# →1:profile →2:bottlenecks →3:queries
```

## Modular YAML Features

```yaml
# v2's powerful @include system
@include: Reference specific sections from YAML files
Syntax: @include path/to/file.yml#Section_Name
Benefits: 
  - Reuse configurations across commands
  - Maintain single source of truth
  - Easy updates propagate everywhere
  
Common Includes:
  @include shared/superclaude-core.yml#Core_Philosophy
  @include shared/superclaude-rules.yml#Development_Practices
  @include shared/superclaude-mcp.yml#Server_Capabilities
  @include shared/superclaude-personas.yml#All_Personas
```

### Real @include Examples

```yaml
# In CLAUDE.md
## Core Principles
@include shared/superclaude-core.yml#Core_Philosophy

## MCP Integration  
@include shared/superclaude-mcp.yml#Server_Capabilities_Extended
@include shared/superclaude-mcp.yml#Workflows

## Personas
@include shared/superclaude-personas.yml#Intelligent_Activation_Patterns
```

## v2 Command Structure

```yaml
# All 19 commands follow consistent patterns
Format: /<command> [flags] [arguments]
Universal Flags: Available on ALL commands
  --seq: Sequential reasoning
  --think/--think-hard/--ultrathink: Analysis depth
  --uc: UltraCompressed mode
  --c7/--magic/--pup: MCP servers
  --persona-*: Cognitive profiles

Command Categories:
  Development: /build, /test, /dev-setup
  Analysis: /analyze, /troubleshoot, /improve, /explain, /review
  Operations: /deploy, /migrate, /scan, /estimate, /cleanup, /git
  Design: /design
  Workflow: /spawn, /document, /task
  System: /load
```

## Auto-Activation Patterns

```yaml
# v2's intelligent activation based on context
Files: 
  *.tsx→frontend+react | *.py→backend+python
  *.sql→data+sql | Docker*→devops+docker
  *.test.*→qa+testing | *.spec.*→qa+jest

Keywords:
  "step by step"→--seq | "think through"→--think
  "memory leak"→analyzer+performance | "secure"→security
  "optimize"→performance | "refactor"→refactorer

Error Patterns:
  TypeError→analyzer+--seq | OOM→performance+--seq
  401/403→security | Timeout→performance+backend
```

## Performance Standards

```yaml
# v2 optimized for efficiency
Operations: 
  Parallel>sequential (except with --seq flag)
  Batch similar tasks
  One in-progress task
  Smart caching with MCP

Sequential Performance:
  --seq: Adds ~20% time for reasoning display
  --seq --uc: Minimizes overhead to ~5%
  Benefits: Better debugging, learning, validation

Compression Baselines:
  Standard: 100% tokens
  --think: +40% tokens
  --uc: -70% tokens
  --seq: +20% tokens
  --seq --uc: -50% tokens (net)
```

## Session Management

```yaml
# v2 enhanced session awareness
Context: Preserve across commands | Build on previous
Memory: CLAUDE.md for persistence | Session state
Workflow: Natural command chaining | Contextual suggestions

Example Session:
  /load --seq                    # Loads with reasoning
  /analyze --arch --seq --think  # Builds on loaded context
  /design "new feature" --seq    # Uses analysis insights
  /build --tdd --seq            # Implements design
```

## Integration Examples

```bash
# Debugging with sequential reasoning
/troubleshoot "API timeout" --seq --think-hard --persona-backend

# Architecture design with documentation
/design "microservices" --seq --ultrathink --c7

# Performance optimization journey
/analyze --performance --seq
/improve --performance --seq --uc
/test --performance --seq

# Security audit workflow
/scan --security --owasp --seq --think-hard
/improve --security --seq --persona-security
```

---

Ready to leverage v2's modular architecture? The `@include` system makes SuperClaude infinitely extensible! 🚀