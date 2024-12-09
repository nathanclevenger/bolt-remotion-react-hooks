import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion'

export const Outro = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  
  const opacity = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  })

  return (
    <AbsoluteFill className='bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center'>
      <div
        className='text-center text-white'
        style={{
          opacity,
        }}
      >
        <h2 className='text-6xl font-bold mb-6'>
          Ready to Build?
        </h2>
        <p className='text-2xl opacity-90'>
          Start Using These Hooks in Your Projects Today
        </p>
        <div className='mt-12 text-xl opacity-75'>
          Created with Remotion + React
        </div>
      </div>
    </AbsoluteFill>
  )
}