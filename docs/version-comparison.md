---
sidebar_position: 2
title: Version Comparison
---

# SuperClaude Version Comparison

This page compares SuperClaude v1 and v2 features, helping you understand the improvements and migrate to v2.

## 🆚 Quick Comparison

| Feature | v1 | v2 |
|---------|----|----|
| **Commands** | Basic set | 19 specialized commands |
| **Personas** | 6 personas | 9 cognitive personas |
| **MCP Integration** | Limited | 4 MCP servers (Context7, Sequential, Magic, Puppeteer) |
| **Token Optimization** | Basic compression | UltraCompressed mode (70% reduction) |
| **Configuration** | Single file | Modular YAML with @include system |
| **Auto-activation** | Basic triggers | Intelligent context-aware activation |
| **Thinking Modes** | `--think` only | `--think`, `--think-hard`, `--ultrathink` |
| **Session Management** | None | Task persistence & recovery |

## 📊 Detailed Feature Comparison

### Commands System

**v1 Commands** (Limited set):
- Basic build and test commands
- Simple analysis tools
- Manual workflow management

**v2 Commands** (19 specialized):
```yaml
Development:
  - /build     # Universal project builder with TDD
  - /test      # Comprehensive testing framework
  - /dev-setup # Environment configuration

Analysis & Improvement:
  - /analyze      # Multi-dimensional analysis
  - /review       # AI-powered code review
  - /troubleshoot # Professional debugging
  - /improve      # Evidence-based optimization
  - /explain      # Technical documentation

Operations:
  - /deploy   # Smart deployment with safety
  - /migrate  # Database & code migrations
  - /scan     # Security auditing
  - /estimate # Project estimation
  - /cleanup  # Maintenance tasks
  - /git      # Git workflow automation

Design & Workflow:
  - /design   # System architecture
  - /spawn    # Parallel task agents
  - /document # Multi-format documentation
  - /load     # Context analysis
  - /task     # Advanced task management
```

### Persona Evolution

**v1 Personas** (6 basic):
- Architect
- Developer
- Debugger
- Security
- Performance
- QA

**v2 Personas** (9 specialized):
- 🏗️ **Architect**: Systems thinking, scalability
- 🎨 **Frontend**: UI/UX perfectionist
- ⚙️ **Backend**: Reliability engineer
- 🔍 **Analyzer**: Root cause detective
- 🔒 **Security**: Paranoid guardian
- 📚 **Mentor**: Patient teacher
- 🔧 **Refactorer**: Code beautifier
- ⚡ **Performance**: Speed optimizer
- ✅ **QA**: Quality guardian

### MCP Integration

**v1**: Basic tool integration

**v2**: Full MCP server ecosystem:
- **Context7** (`--c7`): Documentation lookup
- **Sequential** (`--seq`): Step-by-step reasoning
- **Magic** (`--magic`): UI component generation
- **Puppeteer** (`--pup`): Browser automation

### Configuration Architecture

**v1**: Single `CLAUDE.md` file

**v2**: Modular configuration system:
```yaml
~/.claude/
├── CLAUDE.md                    # Master orchestrator
├── shared/
│   ├── superclaude-core.yml    # Core philosophy
│   ├── superclaude-rules.yml   # Standards
│   ├── superclaude-mcp.yml     # MCP config
│   └── superclaude-personas.yml # Personas
└── commands/
    ├── shared/                  # Reusable patterns
    └── [19 command files]       # Command definitions
```

## 🚀 Migration Guide

### For v1 Users

1. **Command Updates**:
   - Old: `/build-react` → New: `/build --react`
   - Old: `/debug` → New: `/troubleshoot --investigate`
   - Old: `/optimize` → New: `/improve --performance`

2. **Persona Usage**:
   - Old: `/persona:architect` → New: `--persona-architect`
   - Now available as universal flags on any command

3. **New Features to Explore**:
   - Sequential thinking: Add `--seq` for step-by-step reasoning
   - Deep analysis: Use `--think-hard` or `--ultrathink`
   - Token saving: Add `--uc` for 70% compression
   - MCP servers: Enable with `--all-mcp`

### Breaking Changes

1. **Command Syntax**: All commands now follow `/command [flags]` pattern
2. **Persona Activation**: Personas are now flags, not separate commands
3. **Configuration Location**: Now in `~/.claude/` instead of project-local

## 💡 v2 Advantages

1. **Modular Architecture**: Easier to extend and maintain
2. **Universal Flags**: Consistent behavior across all commands
3. **Smart Auto-activation**: Context-aware persona and tool selection
4. **Evidence-Based**: Built-in quality checks and validation
5. **Session Recovery**: Never lose progress with task persistence
6. **Token Efficiency**: Dramatic cost reduction with UltraCompressed mode

## 🔄 Upgrade Recommendation

We strongly recommend upgrading to v2 for:
- **Power Users**: More commands and deeper analysis capabilities
- **Team Projects**: Better collaboration with standardized workflows
- **Large Codebases**: Efficient token usage and context management
- **Complex Tasks**: Sequential thinking and task persistence

---

Ready to upgrade? Check out our [Getting Started](/docs/getting-started) guide for v2!