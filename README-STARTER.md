# Memory Bank Project Starter

A productivity-focused project starter template designed for use with Claude Code. This template includes a comprehensive Memory Bank system and powerful AI agents that help you build applications at unprecedented speed.

## What is Memory Bank?

Memory Bank is a hierarchical documentation system that serves as the "institutional knowledge" for your project. Combined with specialized AI agents, it enables:
- **Instant project scaffolding** from proven patterns
- **Automatic API generation** from specifications
- **Reusable component libraries** with design systems
- **Rapid site deployment** from templates
- **Continuous learning** from your development patterns

## 🚀 Quick Start

### 1. Initialize Memory Bank

```bash
# Run the initialization script
node init-memory-bank.js
```

The script will prompt you for:
- Project name
- Project description
- Architecture type
- Primary framework
- Primary language

### 2. Leverage AI Agents

After initialization, Claude Code has access to powerful agents:

#### **Scaffold a New Project**
```bash
# Tell Claude: "Scaffold a Next.js app with TypeScript and Tailwind"
# The memory-bank-scaffold agent will:
# - Generate complete project structure
# - Set up all configurations
# - Install dependencies
# - Initialize Memory Bank
# Time: <30 seconds
```

#### **Generate an API**
```bash
# Tell Claude: "Generate a REST API for a blog system"
# The api-generator agent will:
# - Create all endpoints
# - Implement authentication
# - Add validation
# - Generate tests
# - Create documentation
# Time: <1 minute
```

#### **Create UI Components**
```bash
# Tell Claude: "Create a data table component with sorting"
# The component-library-manager agent will:
# - Generate the component
# - Add TypeScript types
# - Create tests
# - Generate Storybook stories
# - Ensure accessibility
```

#### **Deploy from Templates**
```bash
# Tell Claude: "Create a SaaS landing page"
# The memory-bank-template-manager agent will:
# - Find matching template
# - Apply customizations
# - Set up the project
# - Deploy in <2 minutes
```

## 📁 Enhanced Directory Structure

```
your-project/
├── .claude/
│   └── agents/              # AI agents for productivity
│       ├── memory-bank-*    # Memory Bank agents
│       ├── api-generator    # API generation
│       ├── component-*      # Component management
│       └── ...             # Other specialized agents
├── memory-bank/
│   ├── README.md           # Memory Bank navigation
│   ├── projectBrief.md     # Project overview
│   ├── api/                # API documentation
│   ├── architecture/       # System design
│   ├── code/              # Code patterns
│   ├── components/        # Component library
│   ├── templates/         # Site templates
│   └── ...               # Other categories
├── src/                   # Your application code
└── CLAUDE.md             # Instructions for Claude
```

## 🤖 Available AI Agents

### Core Memory Bank Agents
- **memory-bank-init**: Initialize Memory Bank for new projects
- **memory-bank-query**: Search and retrieve information
- **memory-bank-update**: Keep documentation synchronized
- **memory-bank-analyze**: Analyze patterns and architecture

### Development Acceleration Agents
- **memory-bank-scaffold**: Generate complete project structures
- **api-generator**: Create REST/GraphQL APIs from specs
- **component-library-manager**: Manage reusable UI components
- **memory-bank-template-manager**: Deploy sites from templates

### Feature Development Agents
- **feature-orchestrator**: End-to-end feature development
- **code-generator**: Generate code using patterns
- **development-planner**: Create development plans
- **test-orchestrator**: Comprehensive testing

## 💡 Usage Patterns

### Starting a New Feature
```bash
# 1. Tell Claude your requirements
"I need user authentication with email/password and OAuth"

# Claude will:
# - Use development-planner to create a plan
# - Use api-generator for backend endpoints
# - Use component-library-manager for UI
# - Use test-orchestrator for testing
# - Update Memory Bank with new patterns
```

### Building a Complete Application
```bash
# 1. Scaffold the project
"Create a full-stack e-commerce application"

# 2. Claude orchestrates multiple agents:
# - memory-bank-scaffold: Project structure
# - api-generator: Backend API
# - component-library-manager: UI components
# - memory-bank-template-manager: Page templates
# - test-orchestrator: Test suites
```

### Reusing Patterns
```bash
# Claude automatically:
# - Searches Memory Bank for similar implementations
# - Applies proven patterns
# - Adapts to your specific needs
# - Learns from your preferences
```

## 📊 Memory Bank Commands

```bash
# Search for patterns
npm run memory:search "authentication"

# Browse components
npm run memory:browse components

# View templates
npm run memory:templates

# Update indices
npm run memory:update

# Analyze patterns
npm run memory:analyze
```

## 🎯 Best Practices

### 1. Let Agents Do the Heavy Lifting
- Don't write boilerplate - use memory-bank-scaffold
- Don't design APIs manually - use api-generator
- Don't create components from scratch - use component-library-manager
- Don't copy-paste sites - use memory-bank-template-manager

### 2. Keep Memory Bank Updated
- Agents automatically update Memory Bank
- Review and approve significant patterns
- Document unique solutions
- Share successful templates

### 3. Leverage Pattern Learning
- Memory Bank learns from every project
- Patterns improve over time
- Templates become more sophisticated
- Development gets faster with use

### 4. Use Natural Language
```bash
# Instead of detailed instructions:
"Create a Next.js app with auth, dashboard, and API"

# Claude understands and orchestrates everything
```

## 🚄 Speed Comparison

| Task | Traditional | With Memory Bank + Agents |
|------|------------|---------------------------|
| Project Setup | 30-60 min | <30 seconds |
| CRUD API | 2-4 hours | <1 minute |
| Component Library | 1-2 days | <5 minutes |
| Landing Page | 4-8 hours | <2 minutes |
| Full App Scaffold | 1-2 days | <10 minutes |

## 🔧 Advanced Features

### Custom Agent Creation
```javascript
// Create domain-specific agents
// Store in .claude/agents/
// Leverage Memory Bank patterns
```

### Template Marketplace
```bash
# Share templates with team
npm run memory:publish-template

# Use team templates
npm run memory:fetch-template
```

### Pattern Evolution
```bash
# Analyze pattern effectiveness
npm run memory:analyze-patterns

# Optimize based on usage
npm run memory:evolve-patterns
```

## 🎨 Example Workflows

### SaaS Application
```bash
1. "Scaffold a SaaS app with Stripe integration"
2. "Add user dashboard with analytics"
3. "Create pricing page with tiers"
4. "Add admin panel"
# Total time: <30 minutes
```

### E-commerce Platform
```bash
1. "Create e-commerce platform with Next.js"
2. "Add product catalog and search"
3. "Implement shopping cart and checkout"
4. "Add order management"
# Total time: <45 minutes
```

### Developer Portfolio
```bash
1. "Create portfolio site from template"
2. "Customize with my information"
3. "Add project showcase"
4. "Deploy to Vercel"
# Total time: <10 minutes
```

## 📈 Continuous Improvement

Memory Bank and its agents improve with every use:
- Patterns are refined based on success
- Templates are enhanced with new features
- Components become more robust
- APIs follow proven architectures

## 🤝 Contributing

To improve this starter:
1. Add new agent capabilities
2. Contribute templates
3. Share successful patterns
4. Enhance documentation

## 📚 Resources

- [Agent Documentation](.claude/agents/)
- [Memory Bank Guide](memory-bank/README.md)
- [Template Gallery](memory-bank/templates/)
- [Component Showcase](memory-bank/components/)

## License

This starter template is open source and available under the MIT License.

---

*Memory Bank Starter v2.0 - Build at the speed of thought with Claude Code*