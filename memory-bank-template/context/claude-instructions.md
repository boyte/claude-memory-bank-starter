# Claude Instructions

## Overview

This document provides instructions for AI assistants working on the [PROJECT_NAME] project. Always refer to the Memory Bank for project-specific context before asking users for information.

## Key Principles

1. **Check Memory Bank First**: Always search the Memory Bank before asking for context
2. **Document Learnings**: Add important discoveries to the Memory Bank
3. **Follow Patterns**: Use established patterns from `/architecture/patterns/`
4. **Update Documentation**: Keep Memory Bank current with changes

## Project Structure

The project follows these key conventions:
- Architecture: [Your architecture type]
- Framework: [Your framework]
- Language: [Primary language]
- Testing: [Testing framework]

## Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Run linter

# Memory Bank
npm run memory:search <keyword>    # Search memory bank
npm run memory:browse <category>   # Browse category
npm run memory:update             # Update index
```

## Workflow Guidelines

### Before Starting Work
1. Check `/development/tasks/` for current priorities
2. Review `/issues/active/` for known problems
3. Search Memory Bank for relevant context

### During Development
1. Follow patterns in `/architecture/patterns/`
2. Update task status in `/development/tasks/`
3. Document any new patterns or decisions

### After Completing Work
1. Update relevant Memory Bank sections
2. Move tasks to `/development/tasks/completed/`
3. Document any new issues in `/issues/`

## Important Files

- `/CLAUDE.md` - Main instructions (project root)
- `/memory-bank/README.md` - Memory Bank navigation
- `/memory-bank/QUICK_REFERENCE.md` - Command reference
- `/memory-bank/projectBrief.md` - Project overview

---

*Last Updated: [DATE]*