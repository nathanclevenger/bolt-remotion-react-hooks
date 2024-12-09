import React from 'react'
import { Timer } from 'lucide-react'
import { useInterval } from '../../hooks/useInterval'
import { HookDemo } from '../HookDemo'

export const UseRefDemo = () => {
  const [timer, setTimer] = React.useState(0)

  useInterval(() => {
    setTimer(t => t + 1)
  }, 1000)

  return (
    <HookDemo
      title='3. useRef'
      code={`const inputRef = useRef<HTMLInputElement>(null)

// Access the DOM element
inputRef.current?.focus()

// Persist values between renders
const countRef = useRef(0)
countRef.current++`}
    >
      <div className='text-center'>
        <p className='text-xl mb-4'>Timer: {timer} seconds</p>
        <div className='flex items-center gap-2 justify-center'>
          <Timer className='w-5 h-5 text-blue-500' />
          <span className='text-sm text-gray-600'>Using useInterval under the hood</span>
        </div>
      </div>
    </HookDemo>
  )
}