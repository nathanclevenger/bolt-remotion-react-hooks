import React from 'react'
import { CodeBlock } from './CodeBlock'

interface HookDemoProps {
  title: string
  code: string
  children: React.ReactNode
}

export const HookDemo: React.FC<HookDemoProps> = ({ title, code, children }) => {
  return (
    <div className='w-full h-full bg-gray-900 text-white'>
      {/* Title Section */}
      <div className='p-8 border-b border-gray-800'>
        <h2 className='text-8xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text'>
          {title}
        </h2>
      </div>

      <div className='flex h-[calc(100%-8rem)]'>
        {/* Code Section - Left Side (2/3 width) */}
        <div className='w-2/3 p-8 border-r border-gray-800 overflow-auto'>
          <CodeBlock code={code} />
        </div>

        {/* Component Demo Section - Right Side (1/3 width) */}
        <div className='w-1/3 p-8 flex items-center justify-center overflow-hidden'>
          <div className='w-full max-w-full transform scale-150'>
            <div className='flex items-center justify-center'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}