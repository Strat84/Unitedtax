import { useEffect } from 'react';

/**
 * Hook to preload critical images for better performance
 * 
 * @param imagePaths Array of image paths to preload
 */
export function usePreloadImages(imagePaths: string[]) {
  useEffect(() => {
    // Create an array of preload link elements
    const preloadLinks = imagePaths.map((path) => {
      // Extract the filename without extension
      const basePath = path.substring(0, path.lastIndexOf('.'));
      const baseName = basePath.substring(basePath.lastIndexOf('/') + 1);
      const ext = path.substring(path.lastIndexOf('.'));
      
      // Skip non-optimized images like logos and icons
      if (path.includes('logo') || path.includes('icon')) {
        return [
          {
            rel: 'preload',
            href: path,
            as: 'image'
          }
        ];
      }
      
      // Create preload links for different formats
      return [
        // WebP format
        {
          rel: 'preload',
          href: `/images/optimized/${baseName}-sm.webp`,
          as: 'image',
          type: 'image/webp',
          media: '(max-width: 640px)'
        },
        {
          rel: 'preload',
          href: `/images/optimized/${baseName}-md.webp`,
          as: 'image',
          type: 'image/webp',
          media: '(min-width: 641px) and (max-width: 1024px)'
        },
        {
          rel: 'preload',
          href: `/images/optimized/${baseName}-lg.webp`,
          as: 'image',
          type: 'image/webp',
          media: '(min-width: 1025px)'
        },
        
        // AVIF format for modern browsers
        {
          rel: 'preload',
          href: `/images/optimized/${baseName}-sm.avif`,
          as: 'image',
          type: 'image/avif',
          media: '(max-width: 640px)'
        }
      ];
    }).flat();

    // Add preload links to head
    preloadLinks.forEach(linkData => {
      const link = document.createElement('link');
      Object.entries(linkData).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      preloadLinks.forEach((_, index) => {
        const link = document.head.querySelector(`link[href="${preloadLinks[index].href}"]`);
        if (link) document.head.removeChild(link);
      });
    };
  }, [imagePaths]);
}