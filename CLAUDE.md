# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus documentation website for the SuperClaude configuration system - an advanced configuration framework for Claude Code that provides specialized commands, behavioral personas, and token optimization strategies.

## Development Commands

```bash
# Install dependencies
npm install
# or
yarn

# Start development server (localhost:3000)
npm start
# or
yarn start

# Build for production
npm run build
# or
yarn build

# Type checking
npm run typecheck

# Serve production build locally
npm run serve

# Deploy to GitHub Pages
# With SSH:
USE_SSH=true npm run deploy
# Without SSH:
GIT_USER=<GitHub username> npm run deploy
```

## Architecture & Key Components

### Tech Stack
- **Docusaurus 3.8.1** - Static site generator
- **React 19.0.0** with TypeScript
- **Infima CSS** - Docusaurus's CSS framework with custom Discord-inspired theme

### Project Structure
- `docs/` - All markdown documentation files organized by category:
  - `core-config/` - Core configuration docs
  - `guides/` - Comprehensive guides (commands, personas, rules, MCP)
  - `personas/` - Persona system documentation
  - `reference/` - Quick reference materials
  - `rules-standards/` - Development standards
- `src/` - React components and styles:
  - `components/HomepageFeatures/` - Feature cards component
  - `pages/` - Page components (homepage)
  - `css/custom.css` - Global theme customizations
- `static/` - Static assets (images, icons)
- `docusaurus.config.ts` - Main configuration file
- `sidebars.ts` - Sidebar navigation structure

### Styling Approach
- CSS Modules for component-specific styles
- Custom theme with Discord-inspired purple color scheme (#5865f2)
- Dark mode support with GitHub-style dark backgrounds
- Monospace fonts: JetBrains Mono, Fira Code

### Configuration Requirements
Before deploying to production, update the following in `docusaurus.config.ts`:
- `url`: Change from 'https://claude-config-docs.example.com' to actual production URL
- `organizationName`: Update GitHub organization name
- `projectName`: Update GitHub repository name
- `editUrl`: Update to correct GitHub repository for "Edit this page" links

### Content Organization
The documentation covers SuperClaude v2 features:
- 19 specialized commands (`/command` format in v2, previously `/user:<command>`)
- 9 behavioral personas (Architect, Frontend, Backend, Analyzer, Security, Mentor, Refactorer, Performance, QA)
- 4 MCP servers (Context7, Sequential, Magic, Puppeteer)
- Token optimization strategies including UltraCompressed mode (70% reduction)
- Sequential thinking with `--seq` flag for step-by-step reasoning
- Version comparison between v1 and v2
- Extensive examples showcasing `--seq` and `--think` modes

### Documentation Updates (v2)
- **Version Management**: v1 documentation preserved in `/docs/v1/` directory
- **New Pages Added**:
  - `/docs/version-comparison.md` - Comprehensive v1 vs v2 comparison
  - `/docs/guides/sequential-thinking-guide.md` - Deep dive into `--seq` flag
- **Updated Pages**: All main docs updated with v2 content while maintaining v1 in separate directory
- **Sidebar Navigation**: Includes version selector and collapsed v1 section

### Key Features to Maintain
- Homepage features showcase with SVG illustrations
- Responsive design with mobile support
- Syntax highlighting for YAML, Bash, and JSON
- Dark mode toggle in navbar
- Clean sidebar navigation structure with version management