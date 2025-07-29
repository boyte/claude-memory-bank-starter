#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const category = process.argv[2];
if (!category) {
  console.log('Usage: npm run memory:browse <category>');
  console.log('\nAvailable categories:');
  
  const memoryBankDir = path.join(__dirname, '..', 'memory-bank');
  const categories = fs.readdirSync(memoryBankDir)
    .filter(file => fs.statSync(path.join(memoryBankDir, file)).isDirectory());
  
  categories.forEach(cat => console.log(`  - ${cat}`));
  process.exit(1);
}

const categoryPath = path.join(__dirname, '..', 'memory-bank', category);

if (!fs.existsSync(categoryPath)) {
  console.error(`Category '${category}' not found`);
  process.exit(1);
}

console.log(`\n📂 Browsing: ${category}\n`);

function browseDirectory(dir, indent = '') {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      console.log(`${indent}📁 ${file}/`);
      browseDirectory(filePath, indent + '  ');
    } else if (file.endsWith('.md')) {
      console.log(`${indent}📄 ${file}`);
    }
  });
}

browseDirectory(categoryPath);
console.log('\n✨ Use memory:search to search within files');