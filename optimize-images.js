import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = './client/public/images';
const optimizedDir = './client/public/images/optimized';

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get list of files in the images directory
const imageFiles = fs.readdirSync(imagesDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext) && !file.includes('optimized');
});

// Create optimized versions of each image
async function optimizeImages() {
  const sizes = [
    { width: 640, name: 'sm' },  // Small (mobile)
    { width: 1024, name: 'md' }, // Medium (tablet)
    { width: 1920, name: 'lg' }  // Large (desktop)
  ];

  for (const file of imageFiles) {
    try {
      const inputPath = path.join(imagesDir, file);
      const fileInfo = path.parse(file);
      const baseName = fileInfo.name;
      const ext = fileInfo.ext.toLowerCase();
      
      console.log(`Optimizing ${file}...`);
      
      // Generate WebP versions for different sizes
      for (const size of sizes) {
        const outputName = `${baseName}-${size.name}.webp`;
        const outputPath = path.join(optimizedDir, outputName);
        
        await sharp(inputPath)
          .resize({ width: size.width, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`  - Created ${outputName}`);
      }
      
      // Also create a small AVIF version for modern browsers (best compression)
      const avifName = `${baseName}-sm.avif`;
      const avifPath = path.join(optimizedDir, avifName);
      
      await sharp(inputPath)
        .resize({ width: 640, withoutEnlargement: true })
        .avif({ quality: 65 })
        .toFile(avifPath);
        
      console.log(`  - Created ${avifName} (best compression)`);
      
      // Create optimized original format at medium size
      const optimizedOriginal = `${baseName}-optimized${ext}`;
      const originalPath = path.join(optimizedDir, optimizedOriginal);
      
      await sharp(inputPath)
        .resize({ width: 1024, withoutEnlargement: true })
        .toFile(originalPath);
        
      console.log(`  - Created ${optimizedOriginal} (fallback)`);
      
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
}

optimizeImages().then(() => {
  console.log('Image optimization complete!');
}).catch(err => {
  console.error('Error optimizing images:', err);
});