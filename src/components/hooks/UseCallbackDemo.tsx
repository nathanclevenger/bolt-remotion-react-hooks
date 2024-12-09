import React from 'react'
import { RefreshCw } from 'lucide-react'
import { useAsync } from '../../hooks/useAsync'
import { HookDemo } from '../HookDemo'

const mockFetch = () => new Promise<string>((resolve) => {
  setTimeout(() => resolve('Data fetched successfully!'), 1500)
})

export const UseCallbackDemo = () => {
  const { status, value, execute } = useAsync<string>()

  return (
    <HookDemo
      title='4. useCallback'
      code={`const memoizedFn = useCallback((newValue) => {
  // This function is memoized and only changes
  // when dependencies change
  setValue(newValue)
}, []) // Dependencies array`}
    >
      <div className='text-center'>
        <button
          onClick={() => execute(mockFetch())}
          disabled={status === 'pending'}
          className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50'
        >
          <RefreshCw className={`w-5 h-5 ${status === 'pending' ? 'animate-spin' : ''}`} />
          <span>Fetch Data</span>
        </button>
        {status === 'success' && (
          <p className='mt-4 text-green-600'>{value}</p>
        )}
      </div>
    </HookDemo>
  )
}