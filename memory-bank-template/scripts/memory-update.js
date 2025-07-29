#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n🔄 Updating Memory Bank Index...\n');

const memoryBankDir = path.join(__dirname, '..', 'memory-bank');
const indexPath = path.join(memoryBankDir, '.index.json');

// Build index
const index = {
  updated: new Date().toISOString(),
  files: {},
  categories: {},
  tags: {}
};

function indexDirectory(dir, category = '') {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.')) {
      const subCategory = category ? `${category}/${file}` : file;
      index.categories[subCategory] = [];
      indexDirectory(filePath, subCategory);
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(memoryBankDir, filePath);
      
      // Extract metadata
      const metadata = extractMetadata(content);
      
      index.files[relativePath] = {
        category,
        size: stat.size,
        modified: stat.mtime,
        title: metadata.title || file.replace('.md', ''),
        tags: metadata.tags || [],
        summary: metadata.summary || content.substring(0, 200).replace(/\n/g, ' ')
      };
      
      if (category) {
        index.categories[category].push(relativePath);
      }
      
      // Index tags
      metadata.tags.forEach(tag => {
        if (!index.tags[tag]) index.tags[tag] = [];
        index.tags[tag].push(relativePath);
      });
    }
  });
}

function extractMetadata(content) {
  const lines = content.split('\n');
  const metadata = {
    title: '',
    tags: [],
    summary: ''
  };
  
  // Extract title from first # heading
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (titleMatch) metadata.title = titleMatch[1];
  
  // Extract tags from frontmatter or tags line
  const tagsMatch = content.match(/tags:\s*\[([^\]]+)\]/);
  if (tagsMatch) {
    metadata.tags = tagsMatch[1].split(',').map(t => t.trim());
  }
  
  // Extract summary from first paragraph
  const summaryMatch = content.match(/^(?!#)([^\n]+)/m);
  if (summaryMatch) metadata.summary = summaryMatch[1];
  
  return metadata;
}

// Start indexing
indexDirectory(memoryBankDir);

// Write index
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));

// Report results
const fileCount = Object.keys(index.files).length;
const categoryCount = Object.keys(index.categories).length;
const tagCount = Object.keys(index.tags).length;

console.log(`✅ Indexed ${fileCount} files`);
console.log(`📂 Found ${categoryCount} categories`);
console.log(`🏷️  Found ${tagCount} unique tags`);
console.log(`\n💾 Index saved to ${path.relative(process.cwd(), indexPath)}`);
console.log('\n✨ Memory Bank index updated successfully!');