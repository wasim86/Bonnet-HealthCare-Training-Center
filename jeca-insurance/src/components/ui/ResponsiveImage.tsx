'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  placeholder = 'empty',
  blurDataURL,
  loading = 'lazy',
  onLoad,
  onError
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  if (hasError) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-gray-100 text-gray-400',
        fill ? 'absolute inset-0' : 'w-full h-full',
        className
      )}>
        <div className="text-center p-4">
          <svg className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2 text-xs sm:text-sm">Image not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative', fill ? 'w-full h-full' : '', className)}>
      {isLoading && (
        <div className={cn(
          'absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse',
          fill ? '' : 'w-full h-full'
        )}>
          <div className="w-8 h-8 sm:w-12 sm:w-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={loading}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          fill ? `object-${objectFit}` : '',
          objectPosition && fill ? `object-${objectPosition}` : ''
        )}
        style={fill ? { objectFit, objectPosition } : undefined}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

// Responsive avatar component
interface ResponsiveAvatarProps {
  src?: string
  alt: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
  fallback?: string
}

export function ResponsiveAvatar({
  src,
  alt,
  size = 'md',
  className,
  fallback
}: ResponsiveAvatarProps) {
  const [hasError, setHasError] = useState(false)

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl'
  }

  if (!src || hasError) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-gray-200 text-gray-600 font-medium rounded-full',
        sizeClasses[size],
        className
      )}>
        {fallback || alt.charAt(0).toUpperCase()}
      </div>
    )
  }

  return (
    <div className={cn('relative rounded-full overflow-hidden', sizeClasses[size], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  )
}

// Responsive hero image component
interface ResponsiveHeroImageProps {
  src: string
  alt: string
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  children?: React.ReactNode
}

export function ResponsiveHeroImage({
  src,
  alt,
  className,
  overlay = false,
  overlayOpacity = 0.4,
  children
}: ResponsiveHeroImageProps) {
  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <ResponsiveImage
        src={src}
        alt={alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        objectFit="cover"
        className="absolute inset-0"
      />
      
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {children && (
        <div className="relative z-10 h-full">
          {children}
        </div>
      )}
    </div>
  )
}

// Responsive gallery component
interface ResponsiveGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ResponsiveGallery({
  images,
  columns = 3,
  gap = 'md',
  className
}: ResponsiveGalleryProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  const gapClasses = {
    sm: 'gap-2 sm:gap-3',
    md: 'gap-3 sm:gap-4 md:gap-6',
    lg: 'gap-4 sm:gap-6 md:gap-8'
  }

  return (
    <div className={cn(
      'grid',
      columnClasses[columns],
      gapClasses[gap],
      className
    )}>
      {images.map((image, index) => (
        <div key={index} className="group">
          <div className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl">
            <ResponsiveImage
              src={image.src}
              alt={image.alt}
              fill
              sizes={`(max-width: 640px) 100vw, (max-width: 1024px) ${100/Math.min(columns, 2)}vw, ${100/columns}vw`}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {image.caption && (
            <p className="mt-2 text-sm text-gray-600 text-center">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
