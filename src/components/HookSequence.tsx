import React from 'react'
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion'

interface HookSequenceProps {
  component: React.ComponentType
  caption: string
}

export const HookSequence: React.FC<HookSequenceProps> = ({
  component: Component,
  caption
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  })

  const captionOpacity = spring({
    frame: frame - 15,
    fps,
    config: {
      damping: 12,
    },
  })

  return (
    <AbsoluteFill className='bg-gray-900'>
      <div className='h-full flex flex-col'>
        <div
          className='flex-1'
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <Component />
        </div>
        <div
          className='bg-black/80 text-white py-4'
          style={{
            opacity: captionOpacity,
          }}
        >
          <div className='max-w-7xl mx-auto text-xl leading-relaxed px-8'>
            {caption}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}