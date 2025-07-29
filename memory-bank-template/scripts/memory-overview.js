#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const memoryBankDir = path.join(__dirname, '..', 'memory-bank');

console.log('\n🧠 Memory Bank Overview\n');
console.log('=' .repeat(50));

// Read project brief
const briefPath = path.join(memoryBankDir, 'projectBrief.md');
if (fs.existsSync(briefPath)) {
  const brief = fs.readFileSync(briefPath, 'utf8');
  const lines = brief.split('\n').slice(0, 10);
  console.log('\n📋 Project Brief:');
  lines.forEach(line => {
    if (line.trim()) console.log(`  ${line}`);
  });
}

// Show structure
console.log('\n📁 Structure:');
const categories = fs.readdirSync(memoryBankDir)
  .filter(file => fs.statSync(path.join(memoryBankDir, file)).isDirectory());

categories.forEach(cat => {
  const catPath = path.join(memoryBankDir, cat);
  const fileCount = countFiles(catPath);
  console.log(`  📂 ${cat}/ (${fileCount} files)`);
});

// Recent updates
console.log('\n🕐 Recent Updates:');
const allFiles = getAllFiles(memoryBankDir);
const recent = allFiles
  .map(file => ({
    path: path.relative(memoryBankDir, file),
    mtime: fs.statSync(file).mtime
  }))
  .sort((a, b) => b.mtime - a.mtime)
  .slice(0, 5);

recent.forEach(file => {
  const date = file.mtime.toISOString().split('T')[0];
  console.log(`  📝 ${date} - ${file.path}`);
});

console.log('\n✨ Use memory:search to find specific information');
console.log('📚 Use memory:browse <category> to explore categories\n');

function countFiles(dir) {
  let count = 0;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      count += countFiles(filePath);
    } else if (file.endsWith('.md')) {
      count++;
    }
  });
  
  return count;
}

function getAllFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory() && !item.startsWith('.')) {
      getAllFiles(itemPath, files);
    } else if (item.endsWith('.md')) {
      files.push(itemPath);
    }
  });
  
  return files;
}