import React, { useReducer } from 'react'
import { HookDemo } from '../HookDemo'
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'

type CartItem = {
  id: number
  name: string
  quantity: number
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'INCREMENT'; payload: number }
  | { type: 'DECREMENT'; payload: number }

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), name: action.payload, quantity: 1 }]
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload)
    case 'INCREMENT':
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    case 'DECREMENT':
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    default:
      return state
  }
}

export const UseReducerDemo = () => {
  const [cart, dispatch] = useReducer(cartReducer, [
    { id: 1, name: 'Item 1', quantity: 1 },
  ])

  return (
    <HookDemo
      title='7. useReducer'
      code={`const [state, dispatch] = useReducer(reducer, initialState)

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}`}
    >
      <div className='w-full max-w-md'>
        <div className='flex items-center gap-2 mb-4'>
          <ShoppingCart className='text-blue-500' />
          <span className='font-semibold'>Shopping Cart</span>
        </div>
        <div className='space-y-2'>
          {cart.map(item => (
            <div
              key={item.id}
              className='flex items-center justify-between bg-gray-50 p-2 rounded'
            >
              <span>{item.name}</span>
              <div className='flex items-center gap-2'>
                <button
                  onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}
                  className='p-1 text-gray-600 hover:text-gray-800'
                >
                  <Minus className='w-4 h-4' />
                </button>
                <span className='w-8 text-center'>{item.quantity}</span>
                <button
                  onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}
                  className='p-1 text-gray-600 hover:text-gray-800'
                >
                  <Plus className='w-4 h-4' />
                </button>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  className='p-1 text-red-500 hover:text-red-700'
                >
                  <Trash2 className='w-4 h-4' />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: `Item ${cart.length + 1}` })}
          className='mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Add Item
        </button>
      </div>
    </HookDemo>
  )
}