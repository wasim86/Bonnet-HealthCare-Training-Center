'use client'

import { ShareIcon } from '@heroicons/react/24/outline'

interface ShareButtonProps {
  title: string
  url: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const handleShare = async () => {
    const shareText = `Check out this article: ${title}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
          url: url
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copying URL to clipboard
      try {
        await navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
      } catch (error) {
        console.log('Error copying to clipboard:', error)
        // Final fallback - just show the URL
        alert(`Share this link: ${url}`)
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <ShareIcon className="h-4 w-4 mr-2" />
      Share
    </button>
  )
}
