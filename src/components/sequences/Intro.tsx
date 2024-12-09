import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { Book } from 'lucide-react'

export const Intro = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  
  const scale = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  })

  return (
    <AbsoluteFill className='bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
      <div
        className='text-center text-white'
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <div className='flex justify-center mb-6'>
          <Book className='w-24 h-24' />
        </div>
        <h1 className='text-7xl font-bold mb-4'>
          React Hooks Mastery
        </h1>
        <p className='text-4xl opacity-90'>
          10 Essential Hooks Every React Developer Should Know
        </p>
      </div>
    </AbsoluteFill>
  )
}