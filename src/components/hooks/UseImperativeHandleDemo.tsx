import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { HookDemo } from '../HookDemo'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface VideoPlayerHandle {
  play: () => void
  pause: () => void
  reset: () => void
}

const VideoPlayer = forwardRef<VideoPlayerHandle, {}>((_, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current?.play(),
    pause: () => videoRef.current?.pause(),
    reset: () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
      }
    }
  }))

  return (
    <video
      ref={videoRef}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      className='w-full rounded-lg'
    />
  )
})

export const UseImperativeHandleDemo = () => {
  const playerRef = useRef<VideoPlayerHandle>(null)

  return (
    <HookDemo
      title='9. useImperativeHandle'
      code={`useImperativeHandle(ref, () => ({
  play: () => videoRef.current?.play(),
  pause: () => videoRef.current?.pause(),
  reset: () => {
    videoRef.current.currentTime = 0
  }
}))`}
    >
      <div className='w-full max-w-md'>
        <VideoPlayer ref={playerRef} />
        <div className='mt-4 flex justify-center gap-4'>
          <button
            onClick={() => playerRef.current?.play()}
            className='p-2 bg-green-500 text-white rounded-full'
          >
            <Play className='w-5 h-5' />
          </button>
          <button
            onClick={() => playerRef.current?.pause()}
            className='p-2 bg-yellow-500 text-white rounded-full'
          >
            <Pause className='w-5 h-5' />
          </button>
          <button
            onClick={() => playerRef.current?.reset()}
            className='p-2 bg-blue-500 text-white rounded-full'
          >
            <RotateCcw className='w-5 h-5' />
          </button>
        </div>
      </div>
    </HookDemo>
  )
}