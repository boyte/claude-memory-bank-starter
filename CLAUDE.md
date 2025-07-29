# Instructions for Claude Code

## Overview

This document provides essential instructions for AI assistants working on this project. The project uses a Memory Bank system combined with powerful AI agents to enable rapid development.

## 🚀 Quick Agent Reference

When users request development tasks, **proactively use these agents**:

### Project Setup & Scaffolding
```bash
User: "Create a Next.js app" / "Start a new project" / "Set up authentication"
→ Use: memory-bank-scaffold
```

### API Development
```bash
User: "Create an API" / "Add endpoints" / "Generate REST API"
→ Use: api-generator
```

### UI Components
```bash
User: "Create a component" / "Build a data table" / "Need a form"
→ Use: component-library-manager
```

### Site Creation
```bash
User: "Create a landing page" / "Build a dashboard" / "Need a website"
→ Use: memory-bank-template-manager
```

### Feature Development
```bash
User: "Implement user authentication" / "Add a shopping cart" / "Build a feature"
→ Use: feature-orchestrator (coordinates other agents)
```

## 🧠 Memory Bank System

The Memory Bank (`/memory-bank/`) is your knowledge base containing:
- Project documentation
- Architecture patterns
- API specifications
- Component library
- Site templates
- Code patterns
- Development history

### Essential Commands

```bash
# Search for patterns/information
npm run memory:search "<keyword>"

# Browse categories
npm run memory:browse <category>

# View templates
npm run memory:templates

# Analyze patterns
npm run memory:analyze
```

## 🎯 Development Workflow

### 1. Starting New Projects

**ALWAYS use agents for scaffolding:**
```bash
# Instead of manually creating files:
User: "Create a new React app with TypeScript"

# You should:
→ Use memory-bank-scaffold agent
→ It will create complete structure in <30 seconds
```

### 2. Building APIs

**ALWAYS use api-generator:**
```bash
# Instead of writing controllers/routes manually:
User: "Create a REST API for blog posts"

# You should:
→ Use api-generator agent
→ It will generate complete API with tests in <1 minute
```

### 3. Creating Components

**ALWAYS use component-library-manager:**
```bash
# Instead of writing components from scratch:
User: "Create a user profile card component"

# You should:
→ Use component-library-manager agent
→ It will generate accessible, tested component with stories
```

### 4. Deploying Sites

**ALWAYS use template manager:**
```bash
# Instead of building from scratch:
User: "Create a SaaS landing page"

# You should:
→ Use memory-bank-template-manager agent
→ Deploy complete site in <2 minutes
```

## 🔄 Agent Coordination

For complex tasks, agents work together:

```bash
User: "Build an e-commerce site"

You orchestrate:
1. memory-bank-scaffold → Project structure
2. api-generator → Backend API
3. component-library-manager → UI components
4. memory-bank-template-manager → Page templates
5. test-orchestrator → Test suites
```

## 📋 Before You Start Any Task

1. **Check if an agent can handle it** - Don't reinvent the wheel
2. **Search Memory Bank** - Find existing patterns
3. **Use natural language** - Agents understand context
4. **Let agents handle boilerplate** - Focus on unique logic

## 🏗️ Common Workflows

### Building a Full Application
```bash
1. User: "Create a task management app"
2. You: Use memory-bank-scaffold with "fullstack" template
3. You: Use api-generator for CRUD endpoints
4. You: Use component-library-manager for UI
5. You: Use test-orchestrator for testing
Total time: <15 minutes
```

### Adding Features
```bash
1. User: "Add user authentication"
2. You: Use feature-orchestrator
3. It coordinates:
   - api-generator for auth endpoints
   - component-library-manager for login forms
   - code-generator for middleware
   - test-orchestrator for tests
```

### Creating from Templates
```bash
1. User: "I need a portfolio site"
2. You: Use memory-bank-template-manager
3. Select "portfolio" template
4. Customize with user's information
5. Deploy in <5 minutes
```

## 💡 Best Practices

### 1. Agent-First Development
- **Always check** if an agent can handle the task
- **Don't write** boilerplate code manually
- **Let agents** handle repetitive tasks
- **Focus on** unique business logic

### 2. Memory Bank Integration
- Agents **automatically update** Memory Bank
- **Review** generated patterns
- **Approve** significant changes
- **Learn** from accumulated patterns

### 3. Natural Language Usage
```bash
# Good: Natural, high-level request
"Create an admin dashboard with user management"

# The agents understand and handle everything
```

### 4. Continuous Learning
- Every project **improves** the patterns
- Templates get **more sophisticated**
- Components become **more robust**
- APIs follow **proven architectures**

## 🛠️ Available Agents

### Core Development
- `memory-bank-scaffold` - Project scaffolding
- `api-generator` - API generation
- `component-library-manager` - UI components
- `memory-bank-template-manager` - Site templates

### Feature Development
- `feature-orchestrator` - Feature coordination
- `code-generator` - Code from patterns
- `development-planner` - Development plans
- `test-orchestrator` - Testing strategies

### Memory Bank Management
- `memory-bank-init` - Initialize Memory Bank
- `memory-bank-query` - Search information
- `memory-bank-update` - Update documentation
- `memory-bank-analyze` - Analyze patterns

### Code Quality
- `pr-creator` - Pull request creation
- `design-critic` - Design review
- `prd-analyzer` - Requirements analysis

## 📊 Performance Expectations

Users expect rapid development with these agents:

| Task | Expected Time |
|------|--------------|
| New Project | <30 seconds |
| API Creation | <1 minute |
| Component | <30 seconds |
| Landing Page | <2 minutes |
| Full Feature | <10 minutes |

## 🚨 Important Reminders

1. **ALWAYS use agents** when available - Don't code from scratch
2. **Search Memory Bank first** - Patterns already exist
3. **Update Memory Bank** - Document new patterns
4. **Coordinate agents** - They work together
5. **Focus on value** - Let agents handle boilerplate

## 🔍 Troubleshooting

If an agent fails:
1. Check agent documentation in `.claude/agents/`
2. Verify Memory Bank is initialized
3. Ensure dependencies are installed
4. Fall back to manual implementation only as last resort

## 📚 Resources

- Agent docs: `.claude/agents/`
- Memory Bank: `/memory-bank/`
- Templates: `/memory-bank/templates/`
- Components: `/memory-bank/components/`
- Patterns: `/memory-bank/code/`

---

*Remember: You have powerful agents at your disposal. Use them to build at the speed of thought. Every task should first be evaluated for agent automation before manual implementation.*