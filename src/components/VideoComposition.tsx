import { AbsoluteFill, Sequence } from 'remotion'
import { hookData } from '../constants/hookData'
import { HookSequence } from './HookSequence'
import { Intro } from './sequences/Intro'
import { Outro } from './sequences/Outro'

const SEQUENCE_DURATION = 300

export const VideoComposition = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={SEQUENCE_DURATION}>
        <Intro />
      </Sequence>

      {hookData.map((hook, index) => (
        <Sequence
          key={index}
          from={SEQUENCE_DURATION + index * SEQUENCE_DURATION}
          durationInFrames={SEQUENCE_DURATION}
        >
          <HookSequence
            component={hook.component}
            caption={hook.caption}
          />
        </Sequence>
      ))}
      
      <Sequence 
        from={SEQUENCE_DURATION * (hookData.length + 1)} 
        durationInFrames={SEQUENCE_DURATION}
      >
        <Outro />
      </Sequence>
    </>
  )
}