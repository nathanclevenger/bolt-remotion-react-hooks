import React, { createContext, useContext, useState } from 'react'
import { HookDemo } from '../HookDemo'
import { Settings } from 'lucide-react'

const ThemeContext = createContext<{
  isDark: boolean
  toggleTheme: () => void
}>({
  isDark: false,
  toggleTheme: () => {},
})

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const UseContextDemo = () => {
  return (
    <HookDemo
      title='6. useContext'
      code={`const ThemeContext = createContext<ThemeContextType>({})

// Provider component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  
  return (
    <ThemeContext.Provider value={{ isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Consumer component
const ThemeConsumer = () => {
  const { isDark } = useContext(ThemeContext)
  return <div>{isDark ? 'Dark' : 'Light'}</div>
}`}
    >
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    </HookDemo>
  )
}

const ThemeConsumer = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  
  return (
    <div className='text-center'>
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-4 py-2 rounded ${
          isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        <Settings className='w-5 h-5' />
        <span>Theme: {isDark ? 'Dark' : 'Light'}</span>
      </button>
    </div>
  )
}