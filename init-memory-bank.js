#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function initMemoryBank() {
  console.log('🚀 Memory Bank Initialization\n');

  // Get project details
  const projectName = await question('Project name: ');
  const projectDescription = await question('Project description: ');
  const architecture = await question('Architecture type (e.g., monolith, microservices, modular-monolith): ');
  const framework = await question('Primary framework (e.g., Next.js, Express, FastAPI): ');
  const language = await question('Primary language (e.g., TypeScript, Python, Go): ');
  
  const date = new Date().toISOString().split('T')[0];
  
  // Copy template to memory-bank
  const templateDir = path.join(__dirname, 'memory-bank-template');
  const targetDir = path.join(__dirname, 'memory-bank');
  
  // Check if memory-bank already exists
  if (fs.existsSync(targetDir)) {
    const overwrite = await question('\n⚠️  memory-bank directory already exists. Overwrite? (y/N): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('Initialization cancelled.');
      rl.close();
      return;
    }
    // Remove existing directory
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
  
  // Copy template
  copyDirectory(templateDir, targetDir);
  
  // Replace placeholders
  const replacements = {
    '[PROJECT_NAME]': projectName,
    '[PROJECT_DESCRIPTION]': projectDescription,
    '[Your Architecture Type]': architecture,
    '[Your architecture type]': architecture.toLowerCase(),
    '[Your framework]': framework,
    '[Primary language]': language,
    '[DATE]': date,
    '[YYYY-MM-DD]': date,
    '[PORT]': '3000',
    '[YOUR_DOMAIN]': 'api.example.com'
  };
  
  replaceInDirectory(targetDir, replacements);
  
  // Create initial context files
  const activeContext = `# Active Development Context

## Current Sprint
- Sprint: 1
- Start Date: ${date}
- Focus: Initial setup and foundation

## Current Tasks
- Set up development environment
- Define initial architecture
- Create basic project structure

## Recent Decisions
- Chose ${architecture} architecture
- Selected ${framework} as primary framework
- Using ${language} as primary language

## Notes
- Project initialized on ${date}
- See projectBrief.md for full project details

---

*Last Updated: ${date}*`;

  fs.writeFileSync(path.join(targetDir, 'context', 'active.md'), activeContext);

  // Create package.json scripts if they don't exist
  const packageJsonPath = path.join(__dirname, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }
    
    // Add memory bank scripts
    Object.assign(packageJson.scripts, {
      'memory:search': 'node scripts/memory-search.js',
      'memory:browse': 'node scripts/memory-browse.js',
      'memory:overview': 'node scripts/memory-overview.js',
      'memory:update': 'node scripts/memory-update.js'
    });
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }

  // Create scripts directory
  const scriptsDir = path.join(__dirname, 'scripts');
  if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir);
  }

  // Create basic search script
  const searchScript = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const searchTerm = process.argv[2];
if (!searchTerm) {
  console.log('Usage: npm run memory:search <keyword>');
  process.exit(1);
}

const memoryBankDir = path.join(__dirname, '..', 'memory-bank');

function searchInFile(filePath, term) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\\n');
  const matches = [];
  
  lines.forEach((line, index) => {
    if (line.toLowerCase().includes(term.toLowerCase())) {
      matches.push({
        file: path.relative(memoryBankDir, filePath),
        line: index + 1,
        content: line.trim()
      });
    }
  });
  
  return matches;
}

function searchDirectory(dir, term) {
  const results = [];
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.')) {
      results.push(...searchDirectory(filePath, term));
    } else if (stat.isFile() && file.endsWith('.md')) {
      results.push(...searchInFile(filePath, term));
    }
  });
  
  return results;
}

console.log(\`\\n🔍 Searching for: "\${searchTerm}"\\n\`);

const results = searchDirectory(memoryBankDir, searchTerm);

if (results.length === 0) {
  console.log('No results found.');
} else {
  console.log(\`Found \${results.length} matches:\\n\`);
  results.forEach(result => {
    console.log(\`📄 \${result.file}:\${result.line}\`);
    console.log(\`   \${result.content}\\n\`);
  });
}`;

  fs.writeFileSync(path.join(scriptsDir, 'memory-search.js'), searchScript);
  fs.chmodSync(path.join(scriptsDir, 'memory-search.js'), '755');

  console.log('\n✅ Memory Bank initialized successfully!');
  console.log('\nNext steps:');
  console.log('1. Review and update /memory-bank/projectBrief.md');
  console.log('2. Add your architecture decisions to /memory-bank/architecture/decisions/');
  console.log('3. Document your API endpoints in /memory-bank/api/');
  console.log('4. Run `npm run memory:search <keyword>` to search the Memory Bank');
  
  rl.close();
}

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function replaceInDirectory(dir, replacements) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      replaceInDirectory(filePath, replacements);
    } else if (stat.isFile() && (file.endsWith('.md') || file.endsWith('.json'))) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      Object.entries(replacements).forEach(([placeholder, value]) => {
        content = content.replace(new RegExp(escapeRegExp(placeholder), 'g'), value);
      });
      
      fs.writeFileSync(filePath, content);
    }
  });
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Run initialization
initMemoryBank().catch(console.error);