import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';
import { existsSync, mkdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const config = {
  inputDir: join(__dirname, '../client/public/images'),
  outputDir: join(__dirname, '../client/public/images/optimized'),
  backupDir: join(__dirname, '../client/public/images/backup'),
  imageConfigs: {
    hero: {
      width: 1920,
      height: 1080,
      quality: 80,
      format: 'jpeg',
      fit: 'cover',
      position: 'center'
    },
    content: {
      width: 1200,
      height: 800,
      quality: 80,
      format: 'jpeg',
      fit: 'cover',
      position: 'center'
    },
    form: {
      width: 800,
      height: 600,
      quality: 80,
      format: 'jpeg',
      fit: 'cover',
      position: 'center'
    }
  },
  // Test mode configuration
  testMode: {
    enabled: false,
    maxImages: 2,
    outputDir: join(__dirname, '../client/public/images/test-optimized')
  }
};

// Ensure directories exist
function ensureDirectories() {
  [config.outputDir, config.backupDir, config.testMode.outputDir].forEach(dir => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  });
}

// Function to determine image type based on filename
function getImageType(filename) {
  if (filename.startsWith('hero-')) return 'hero';
  if (filename.startsWith('form-')) return 'form';
  return 'content';
}

// Function to create backup of original images
async function backupImage(file) {
  const inputPath = join(config.inputDir, file);
  const backupPath = join(config.backupDir, file);
  
  if (!existsSync(backupPath)) {
    await fs.copyFile(inputPath, backupPath);
    console.log(`📦 Backed up: ${file}`);
  }
}

// Function to optimize a single image
async function optimizeImage(file, isTest = false) {
  const imageType = getImageType(file);
  const imageConfig = config.imageConfigs[imageType];
  const inputPath = join(config.inputDir, file);
  const outputPath = join(isTest ? config.testMode.outputDir : config.outputDir, file);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate target dimensions while maintaining aspect ratio
    const targetWidth = imageConfig.width;
    const targetHeight = imageConfig.height;
    const aspectRatio = metadata.width / metadata.height;
    
    let finalWidth = targetWidth;
    let finalHeight = targetHeight;
    
    if (aspectRatio > 1) {
      finalHeight = Math.round(targetWidth / aspectRatio);
    } else {
      finalWidth = Math.round(targetHeight * aspectRatio);
    }

    await image
      .resize(finalWidth, finalHeight, {
        fit: imageConfig.fit,
        position: imageConfig.position
      })
      .toFormat(imageConfig.format, { 
        quality: imageConfig.quality,
        progressive: true
      })
      .toFile(outputPath);

    console.log(`✅ Optimized: ${file}`);
    
    // Get file size difference
    const originalSize = statSync(inputPath).size;
    const optimizedSize = statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`   Size reduced by ${reduction}% (${originalSize} bytes → ${optimizedSize} bytes)`);
    console.log(`   Dimensions: ${finalWidth}x${finalHeight}px`);
    
    return {
      file,
      originalSize,
      optimizedSize,
      reduction,
      dimensions: `${finalWidth}x${finalHeight}`
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${file}:`, error.message);
    return null;
  }
}

// Function to generate optimization report
function generateReport(results) {
  const report = {
    totalImages: results.length,
    totalOriginalSize: results.reduce((sum, r) => sum + r.originalSize, 0),
    totalOptimizedSize: results.reduce((sum, r) => sum + r.optimizedSize, 0),
    averageReduction: results.reduce((sum, r) => sum + parseFloat(r.reduction), 0) / results.length,
    details: results
  };

  const reportPath = join(config.outputDir, 'optimization-report.json');
  fs.writeFile(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📊 Report generated: ${reportPath}`);
}

// Main function to process all images
async function optimizeImages(isTest = false) {
  console.log(`🚀 Starting ${isTest ? 'test' : ''} image optimization...\n`);
  
  try {
    ensureDirectories();
    
    const files = (await fs.readdir(config.inputDir))
      .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
      .slice(0, isTest ? config.testMode.maxImages : undefined);

    const results = [];
    
    for (const file of files) {
      await backupImage(file);
      const result = await optimizeImage(file, isTest);
      if (result) results.push(result);
    }

    if (!isTest) {
      generateReport(results);
    }

    console.log(`\n✨ ${isTest ? 'Test' : 'Image'} optimization complete!`);
    console.log(`📁 Optimized images saved to: ${isTest ? config.testMode.outputDir : config.outputDir}`);
  } catch (error) {
    console.error('❌ Error during optimization:', error.message);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const isTest = args.includes('--test');

// Run the optimization
optimizeImages(isTest); 