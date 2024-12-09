import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { HookDemo } from '../HookDemo'

export const UseStateDemo = () => {
  const { count, increment, decrement } = useCounter(0)

  return (
    <HookDemo 
      title='1. useState'
      code={`const [count, setCount] = useState(0)

// Update state
setCount(count + 1)
// Or with callback
setCount(prev => prev + 1)`}
    >
      <div className='text-center'>
        <p className='text-2xl mb-4'>{count}</p>
        <div className='space-x-4'>
          <button 
            onClick={decrement}
            className='px-4 py-2 bg-red-500 text-white rounded'
          >
            -
          </button>
          <button 
            onClick={increment}
            className='px-4 py-2 bg-green-500 text-white rounded'
          >
            +
          </button>
        </div>
      </div>
    </HookDemo>
  )
}