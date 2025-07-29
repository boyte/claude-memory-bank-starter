# Memory Bank Starter

Simple baseline starter for working with Claude Code. Creates a memory system for keeping track of project decisions, architecture, tasks, etc between sessions. 

## Overview

Memory Bank Starter is a powerful project template that combines a hierarchical knowledge management system with AI agents to enable unprecedented development speed. 

## Features

- 🚀 **Scaffolding** - Create complete project structures
- 🤖 **AI Agents** - Pre-created agents for Claude
- 📚 **Memory Bank** - Intelligent knowledge management system

## Quick Start

```bash
# Clone the starter
git clone https://github.com/yourusername/memory-bank-starter.git
cd memory-bank-starter

# Initialize your project
node init-memory-bank.js

# Start building at lightning speed!
```

## Core Concepts

### 🧠 Memory Bank
The memory-bank is a hierarchical documentation system that serves as your project's institutional knowledge. It stores:
- Architecture decisions and patterns
- API documentation
- Component libraries
- Code examples
- Development history
- Issue tracking

Agents use this knowledge to generate code that follows your established patterns.

### 🤖 AI Agents
Specialized AI assistants in `.claude/agents/` that handle specific tasks:
- **memory-bank-scaffold** - Project scaffolding
- **api-generator** - API generation
- **component-library-manager** - UI component management
- **memory-bank-template-manager** - Site template deployment
- And many more...


## Documentation

- [Getting Started Guide](README-STARTER.md) - Comprehensive setup and usage
- [Claude Instructions](CLAUDE.md) - Instructions for AI assistants
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute
- [License](LICENSE) - MIT License


## How It Works

1. **Initialize** - Set up Memory Bank for your project
2. **Request** - Tell Claude what you want to build
3. **Generate** - Agents create code using proven patterns
4. **Iterate** - Refine and extend with natural language
5. **Learn** - System improves with every project

## Example Workflow

```bash
# 1. Start a new e-commerce project
"Create an e-commerce site with Next.js"

# 2. Claude uses multiple agents:
# - Scaffolds the project structure
# - Generates product API
# - Creates UI components
# - Sets up payment integration

# 3. Add features naturally
"Add user reviews to products"
"Create an admin dashboard"
"Add email notifications"

```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](LICENSE) file for details.
