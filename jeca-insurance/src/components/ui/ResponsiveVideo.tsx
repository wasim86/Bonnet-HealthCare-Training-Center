'use client'

import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface ResponsiveVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16'
  sizes?: string
  quality?: 'auto' | 'high' | 'medium' | 'low'
}

export default function ResponsiveVideo({
  src,
  poster,
  className,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  aspectRatio = '16:9',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
}: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const aspectRatioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '9:16': 'aspect-[9/16]'
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
      setDuration(video.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleError = () => {
      setIsLoading(false)
      setHasError(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('error', handleError)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const newTime = (parseFloat(e.target.value) / 100) * duration
    video.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (hasError) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-gray-100 text-gray-400 rounded-lg sm:rounded-xl',
        aspectRatioClasses[aspectRatio],
        className
      )}>
        <div className="text-center p-4">
          <svg className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <p className="mt-2 text-xs sm:text-sm">Video not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      'relative group overflow-hidden rounded-lg sm:rounded-xl bg-black',
      aspectRatioClasses[aspectRatio],
      className
    )}>
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        poster={poster}
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls */}
      {controls && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="relative z-10 p-3 sm:p-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200 touch-target-comfortable"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <PauseIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            ) : (
              <PlayIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            )}
          </button>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black to-transparent">
            {/* Progress Bar */}
            <div className="mb-2">
              <input
                type="range"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleSeek}
                className="w-full h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs sm:text-sm">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button
                  onClick={togglePlay}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors touch-target"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <PauseIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors touch-target"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <SpeakerWaveIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
              </div>

              <div className="text-xs sm:text-sm opacity-90">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Responsive YouTube embed component
interface ResponsiveYouTubeProps {
  videoId: string
  title: string
  className?: string
  aspectRatio?: '16:9' | '4:3'
  autoPlay?: boolean
  showControls?: boolean
}

export function ResponsiveYouTube({
  videoId,
  title,
  className,
  aspectRatio = '16:9',
  autoPlay = false,
  showControls = true
}: ResponsiveYouTubeProps) {
  const aspectRatioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]'
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${new URLSearchParams({
    autoplay: autoPlay ? '1' : '0',
    controls: showControls ? '1' : '0',
    modestbranding: '1',
    rel: '0'
  }).toString()}`

  return (
    <div className={cn(
      'relative overflow-hidden rounded-lg sm:rounded-xl',
      aspectRatioClasses[aspectRatio],
      className
    )}>
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
