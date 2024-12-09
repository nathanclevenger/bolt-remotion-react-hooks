import React, { useLayoutEffect, useRef, useState } from 'react'
import { HookDemo } from '../HookDemo'
import { Maximize2 } from 'lucide-react'

export const UseLayoutEffectDemo = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (elementRef.current) {
      const { width, height } = elementRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [])

  return (
    <HookDemo
      title='8. useLayoutEffect'
      code={`useLayoutEffect(() => {
  // Synchronous DOM measurements/mutations
  const { width, height } = element.getBoundingClientRect()
  setDimensions({ width, height })
}, []) // Empty deps = run once after mount`}
    >
      <div className='text-center'>
        <div
          ref={elementRef}
          className='inline-block p-4 bg-blue-100 rounded-lg'
        >
          <div className='flex items-center gap-2'>
            <Maximize2 className='w-5 h-5 text-blue-500' />
            <span>Measure me!</span>
          </div>
        </div>
        <div className='mt-4 text-sm text-gray-600'>
          <p>Width: {Math.round(dimensions.width)}px</p>
          <p>Height: {Math.round(dimensions.height)}px</p>
        </div>
      </div>
    </HookDemo>
  )
}