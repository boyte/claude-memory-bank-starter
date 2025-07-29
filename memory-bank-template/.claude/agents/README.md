# AI Agents Directory

This directory contains AI agent definitions for Claude Code. Each agent is a specialized assistant that handles specific development tasks.

To use the agents here, move them into your own .claude folder in your project. 

## Available Agents

Place your agent definition files (`.md`) in this directory. Agent files should follow this format:

```yaml
---
name: agent-name
description: What this agent does - when to use it
tools: List, Of, Tools, The, Agent, Uses
---

Agent instructions and implementation details...
```

## Core Agents

Your project should include these essential agents:
- `memory-bank-init.md` - Initialize Memory Bank
- `memory-bank-query.md` - Search Memory Bank
- `memory-bank-update.md` - Update documentation
- `api-generator.md` - Generate APIs
- `component-library-manager.md` - Manage UI components
- And more...

## Creating Custom Agents

1. Create a new `.md` file in this directory
2. Add the YAML frontmatter with name, description, and tools
3. Write clear instructions for the agent's behavior
4. Test the agent with Claude Code

See the main project documentation for detailed agent creation guidelines.