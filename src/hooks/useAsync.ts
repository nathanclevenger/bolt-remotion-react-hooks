import { useState, useCallback } from 'react'

export const useAsync = <T>() => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const execute = useCallback(async (promise: Promise<T>) => {
    setStatus('pending')
    setValue(null)
    setError(null)

    try {
      const result = await promise
      setValue(result)
      setStatus('success')
      return result
    } catch (error) {
      setError(error as Error)
      setStatus('error')
      throw error
    }
  }, [])

  return { execute, status, value, error }
}