# Contributing to Memory Bank Starter

Thank you for your interest in contributing to the Memory Bank Starter project! This document provides guidelines for contributing.

## How to Contribute

### Reporting Issues
- Check existing issues before creating a new one
- Provide clear description and steps to reproduce
- Include relevant system information

### Submitting Pull Requests
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow existing code patterns
- Add comments for complex logic
- Update documentation as needed
- Test your changes

### Adding New Agents
1. Create agent file in `.claude/agents/`
2. Follow the agent template format
3. Document the agent's purpose and usage
4. Add examples to documentation

### Improving Templates
- Keep templates generic and reusable
- Use clear placeholder names
- Document all customization points
- Test the template end-to-end

## Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/memory-bank-starter.git

# Install dependencies
npm install

# Initialize Memory Bank
node init-memory-bank.js

# Run tests (when available)
npm test
```

## License

By contributing, you agree that your contributions will be licensed under the MIT License.