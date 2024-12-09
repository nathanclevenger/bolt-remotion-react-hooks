import React from 'react'
import { Heart } from 'lucide-react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { HookDemo } from '../HookDemo'

export const UseEffectDemo = () => {
  const [likes, setLikes] = useLocalStorage('likes', 0)

  return (
    <HookDemo
      title='2. useEffect'
      code={`useEffect(() => {
  // Side effect code
  document.title = \`Count: \${count}\`
  
  return () => {
    // Cleanup code
  }
}, [count]) // Dependencies`}
    >
      <div className='text-center'>
        <button
          onClick={() => setLikes(prev => prev + 1)}
          className='flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded'
        >
          <Heart className='w-5 h-5' />
          <span>{likes} likes</span>
        </button>
      </div>
    </HookDemo>
  )
}