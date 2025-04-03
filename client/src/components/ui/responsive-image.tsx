import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  quality?: 'low' | 'medium' | 'high';
  priority?: boolean;
}

/**
 * A component that delivers optimized, responsive images
 * with modern formats, proper sizing, and lazy loading.
 */
export function ResponsiveImage({
  src,
  alt,
  className = '',
  sizes = '100vw',
  quality = 'medium',
  priority = false,
}: ResponsiveImageProps) {
  // Extract filename without extension
  const basePath = src.substring(0, src.lastIndexOf('.'));
  const baseName = basePath.substring(basePath.lastIndexOf('/') + 1);
  
  // For images that don't have optimized versions, use original
  const hasOptimized = !src.includes('logo') && !src.includes('icon');
  
  if (!hasOptimized) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        loading={priority ? "eager" : "lazy"}
      />
    );
  }
  
  return (
    <picture>
      {/* AVIF format - best compression, modern browsers */}
      <source
        type="image/avif"
        srcSet={`/images/optimized/${baseName}-sm.avif`}
        media="(max-width: 640px)"
      />
      
      {/* WebP format - good compression, broad support */}
      <source
        type="image/webp"
        srcSet={`
          /images/optimized/${baseName}-sm.webp 640w,
          /images/optimized/${baseName}-md.webp 1024w,
          /images/optimized/${baseName}-lg.webp 1920w
        `}
        sizes={sizes}
      />
      
      {/* Fallback for browsers that don't support WebP */}
      <img
        src={`/images/optimized/${baseName}-optimized${src.substring(src.lastIndexOf('.'))}`}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        width={quality === 'high' ? 1920 : quality === 'medium' ? 1024 : 640}
        height="auto"
      />
    </picture>
  );
}