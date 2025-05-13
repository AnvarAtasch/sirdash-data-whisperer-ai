
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgFiles = [
  'sirdash-logo-circle.svg',
  'sirdash-logo-horizontal.svg',
  'sirdash-logo-text.svg',
  'sirdash-logo.svg'
];

const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function convertSvgToPng() {
  for (const svgFile of svgFiles) {
    const svgPath = path.join(imagesDir, svgFile);
    const pngFile = svgFile.replace('.svg', '.png');
    const pngPath = path.join(imagesDir, pngFile);
    
    try {
      if (fs.existsSync(svgPath)) {
        // Create PNG version with 512px width
        await sharp(svgPath)
          .resize(512)
          .png()
          .toFile(pngPath);
        
        // Create a larger version for high-resolution displays
        await sharp(svgPath)
          .resize(1024)
          .png()
          .toFile(path.join(imagesDir, svgFile.replace('.svg', '@2x.png')));
        
        console.log(`Converted ${svgFile} to ${pngFile} and ${pngFile.replace('.png', '@2x.png')}`);
      } else {
        console.warn(`SVG file not found: ${svgPath}`);
      }
    } catch (error) {
      console.error(`Error converting ${svgFile}:`, error);
    }
  }
}

convertSvgToPng();
