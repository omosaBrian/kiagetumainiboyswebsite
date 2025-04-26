# Image Optimization Script

This script automatically optimizes images for the website by:
- Resizing images to appropriate dimensions
- Compressing images while maintaining quality
- Converting to optimal formats
- Preserving aspect ratios

## Usage

1. Place your original images in `client/public/images/`
2. Run the optimization script:
   ```bash
   npm run optimize-images
   ```
3. Find optimized images in `client/public/images/optimized/`

## Image Categories

The script automatically categorizes images based on their filenames:

- **Hero Images** (1920x1080px)
  - Filenames starting with `hero-`
  - Used for main banner/slider images

- **Content Images** (1200x800px)
  - Default category for other images
  - Used for general content images

- **Form Images** (800x600px)
  - Filenames starting with `form-`
  - Used for form section images

## Configuration

You can modify the optimization settings in `scripts/optimize-images.js`:

```javascript
const config = {
  imageConfigs: {
    hero: {
      width: 1920,
      height: 1080,
      quality: 80,
      format: 'jpeg'
    },
    // ... other configurations
  }
};
```

## Features

- Automatic image categorization
- Size reduction reporting
- Error handling and logging
- Preserves original images
- Maintains aspect ratios
- Progressive optimization 