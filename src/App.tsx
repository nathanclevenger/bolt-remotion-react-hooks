import React from 'react'
import { Player } from '@remotion/player'
import { VideoComposition } from './components/VideoComposition'

function App() {
  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='max-w-6xl mx-auto'>
        <Player
          component={VideoComposition}
          durationInFrames={3600} // 12 sequences × 300 frames each
          compositionWidth={1920}
          compositionHeight={1080}
          fps={30}
          style={{
            width: '100%',
            aspectRatio: '16/9',
          }}
          controls
        />
      </div>
    </div>
  )
}

export default App