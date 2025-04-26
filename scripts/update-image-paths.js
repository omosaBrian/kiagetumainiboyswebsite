import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';
import { existsSync, copyFileSync, writeFileSync, readdirSync, readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  schoolDataPath: join(__dirname, '../client/src/data/schoolData.ts'),
  optimizedDir: join(__dirname, '../client/public/images/optimized'),
  backupDir: join(__dirname, '../client/public/images/backup')
};

// Function to read the schoolData.ts file
function readSchoolData() {
  return readFileSync(config.schoolDataPath, 'utf8');
}

// Function to write updated content to schoolData.ts
function writeSchoolData(content) {
  // Create backup
  const backupPath = config.schoolDataPath + '.bak';
  if (!existsSync(backupPath)) {
    copyFileSync(config.schoolDataPath, backupPath);
    console.log('📦 Created backup of schoolData.ts');
  }

  writeFileSync(config.schoolDataPath, content);
  console.log('✅ Updated schoolData.ts with optimized image paths');
}

// Function to update image paths
function updateImagePaths(content) {
  // Get list of optimized images
  const optimizedImages = readdirSync(config.optimizedDir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  // Create mapping of original to optimized paths
  const pathMapping = optimizedImages.reduce((acc, file) => {
    const originalPath = `/images/${file}`;
    const optimizedPath = `/images/optimized/${file}`;
    acc[originalPath] = optimizedPath;
    return acc;
  }, {});

  // Replace paths in content
  let updatedContent = content;
  Object.entries(pathMapping).forEach(([original, optimized]) => {
    const regex = new RegExp(original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    updatedContent = updatedContent.replace(regex, optimized);
  });

  return updatedContent;
}

// Main function
function updatePaths() {
  try {
    console.log('🚀 Starting image path update...\n');
    
    // Read current content
    const content = readSchoolData();
    
    // Update paths
    const updatedContent = updateImagePaths(content);
    
    // Write updated content
    writeSchoolData(updatedContent);
    
    console.log('\n✨ Image path update complete!');
    console.log('📊 Summary of changes:');
    console.log('- Created backup of original schoolData.ts');
    console.log('- Updated paths to point to optimized images');
    console.log('- Original file preserved as schoolData.ts.bak');
  } catch (error) {
    console.error('❌ Error updating image paths:', error.message);
  }
}

// Run the update
updatePaths(); 