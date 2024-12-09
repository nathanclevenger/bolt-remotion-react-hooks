import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { useDebounce } from '../../hooks/useDebounce'
import { usePrevious } from '../../hooks/usePrevious'
import { HookDemo } from '../HookDemo'

export const UseMemoDemo = () => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  const previousSearch = usePrevious(debouncedSearch)

  return (
    <HookDemo
      title='5. useMemo'
      code={`const memoizedValue = useMemo(() => {
  // Expensive computation here
  return computeExpensiveValue(a, b)
}, [a, b]) // Only recompute if a or b changes`}
    >
      <div className='w-full max-w-md'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full pl-10 pr-4 py-2 border rounded-lg'
            placeholder='Type to search...'
          />
        </div>
        <div className='mt-4 text-sm text-gray-600'>
          <p>Current: {search}</p>
          <p>Debounced: {debouncedSearch}</p>
          <p>Previous: {previousSearch || 'None'}</p>
        </div>
      </div>
    </HookDemo>
  )
}