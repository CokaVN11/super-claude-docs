---
sidebar_position: 1
title: Introduction
---

# CLAUDE Config Documentation

Welcome to the comprehensive documentation for SuperClaude configuration. This documentation covers all aspects of configuring and optimizing your CLAUDE setup.

## What is SuperClaude?

SuperClaude is an advanced configuration system for Claude Code that enhances productivity through:

- **Token Economy**: Optimized responses and minimal token usage
- **Personas**: Behavioral profiles for different development contexts
- **MCP Integration**: Model Context Protocol for enhanced capabilities
- **Rules & Standards**: Comprehensive operational guidelines

## Documentation Structure

### Core Configuration
- **CLAUDE.md**: Main configuration file with core settings
- **RULES.md**: Operational rules and standards
- **MCP.md**: Model Context Protocol integration
- **PERSONAS.md**: Behavioral profiles and archetypes

### Key Features

#### 🎯 Token Economy
- Minimal commands
- Responses < 4 lines
- Symbol-based communication
- UltraCompressed mode for ~70% token reduction

#### 🎭 Personas
Nine specialized archetypes:
- architect
- frontend
- backend
- analyzer
- security
- mentor
- refactorer
- performance
- qa

#### 🔧 Commands
Structured commands with flags:
```bash
/user:<command> [flags]
```

Example:
```bash
/user:analyze --code --think
/user:design --api --ultrathink
```

## Quick Start

1. Review the [Core Configuration](./core-config/claude-md) to understand the basic setup
2. Explore [Rules & Standards](./rules-standards/overview) for operational guidelines
3. Learn about [Personas](./personas/overview) to leverage behavioral profiles
4. Read the comprehensive [guides](./guides/claude-md-guide) for detailed usage instructions

## Legend

| Symbol | Meaning | | Abbrev | Meaning |
|--------|---------|---|--------|---------|
| → | leads to | | cfg | configuration |
| & | and/with | | docs | documentation |
| > | greater than | | ops | operations |
| : | define | | impl | implementation |
| » | sequence | | perf | performance |