import React, { useId } from 'react'
import { HookDemo } from '../HookDemo'
import { Info } from 'lucide-react'

export const UseIdDemo = () => {
  const emailId = useId()
  const passwordId = useId()

  return (
    <HookDemo
      title='10. useId'
      code={`const id = useId()

// Use for aria-labels and form inputs
<label htmlFor={id}>Email</label>
<input id={id} type="email" />`}
    >
      <form className='w-full max-w-md space-y-4'>
        <div>
          <label
            htmlFor={emailId}
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <div className='mt-1 relative'>
            <input
              type='email'
              id={emailId}
              className='w-full px-4 py-2 border rounded-lg'
              aria-describedby={`${emailId}-description`}
            />
            <Info className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          </div>
          <p
            id={`${emailId}-description`}
            className='mt-1 text-sm text-gray-500'
          >
            We'll never share your email
          </p>
        </div>
        <div>
          <label
            htmlFor={passwordId}
            className='block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <div className='mt-1'>
            <input
              type='password'
              id={passwordId}
              className='w-full px-4 py-2 border rounded-lg'
            />
          </div>
        </div>
      </form>
    </HookDemo>
  )
}