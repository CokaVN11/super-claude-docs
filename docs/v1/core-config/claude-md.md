---
sidebar_position: 1
title: CLAUDE.md
---

# CLAUDE.md - SuperClaude Configuration

The main configuration file that defines core settings, thinking modes, and operational parameters.

## Core Configuration

```yaml
Philosophy: Code>docs | Simple→complex | Security first
Communication: Concise format | Symbols: →|&:» | Bullets>prose
Workflow: TodoRead()→TodoWrite(3+)→Execute | Update immediate
Stack: React|TS|Vite + Node|Express|PostgreSQL + Git|ESLint|Jest
Commands: /user:<command> [flags] | Ex: /user:build --init
```

### Key Principles

- **Code over Documentation**: Focus on implementation
- **Simple to Complex**: Start with minimal viable solutions
- **Security First**: All operations prioritize security

## Thinking Modes

Different levels of analysis based on task complexity:

```yaml
Activation: Natural language OR command flags
Flags: --think | --think-hard | --ultrathink
none: Single file|Basic | think: Multi-file|Standard  
think hard: Architecture|Complex | ultrathink: Redesign|Critical
Examples: /user:analyze --code --think | /user:design --api --ultrathink
```

### Mode Selection

- **No flag**: Basic single-file operations
- **--think**: Multi-file analysis, standard complexity
- **--think-hard**: Architecture decisions, complex problems
- **--ultrathink**: System redesigns, critical analysis

## Token Economy

Optimized for minimal token usage:

```yaml
Targets: Minimal commands | Responses<4 lines | Concise docs
Symbols: →(leads to) |(separator) &(combine) :(define) »(sequence)
Remove: the|a|very|really|that|which | "in order to"→to | and→&
```

### Optimization Strategies

1. Use symbols instead of words
2. Remove filler words
3. Prefer bullets over prose
4. Limit responses to 4 lines

## UltraCompressed Mode

Extreme token reduction (~70%):

```yaml
Purpose: ~70% token reduction | Telegram-style docs | Symbols & abbrevs
Activation: --uc flag | Natural language | Auto when context>70%
Rules: shared/ultracompressed.yml | Remove filler | Use symbols
Output: Direct info only | No intros/outros | Lists>prose
Legend: Auto-generate | Used symbols/abbrevs only | Start of docs
```

### When Activated

- Manual: Use `--uc` flag
- Automatic: When context exceeds 70%
- Natural language requests for compression

## Code Economy

Clean, minimal code generation:

```yaml
Generation: No comments | Short names | No boilerplate
Documentation: Only on request | Bullets>prose | Essential facts only
Patterns: Destructure | Chain | Ternary | Arrow functions
Output: Code only | No explanation unless asked
```

### Code Standards

- No comments unless explicitly requested
- Concise variable names
- Modern JavaScript patterns
- Direct output without explanations

## Cost Optimization

Model selection based on task complexity:

```yaml
Models: Simple→sonnet | Complex→sonnet-4 | Critical→opus-4
MCP: C7 progressive loading | Seq adaptive thinking | Batch similar
Efficiency: Min tokens | Cache results | Batch ops
```

### Model Selection Criteria

- **Sonnet**: Simple tasks, basic operations
- **Sonnet-4**: Complex analysis, multi-file operations
- **Opus-4**: Critical decisions, system architecture

## Auto-Activation

Context-aware feature activation:

```yaml
Files: *.tsx→frontend | *.sql→data | Docker→devops | *.test→qa
Keywords: bug|error→debugger | optimize→performance | secure→security
Context: TypeError→trace | Module error→deps | Permission→security
```

### Triggers

- File extensions automatically select personas
- Keywords activate relevant tools
- Error types guide debugging approach

## Performance

Operational efficiency guidelines:

```yaml
Ops: Parallel>sequential | Batch similar | One in-progress
```

### Best Practices

1. Prefer parallel operations
2. Batch similar tasks
3. Maintain single task in progress
4. Update status immediately