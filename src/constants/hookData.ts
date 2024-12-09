import { UseStateDemo } from '../components/hooks/UseStateDemo'
import { UseEffectDemo } from '../components/hooks/UseEffectDemo'
import { UseRefDemo } from '../components/hooks/UseRefDemo'
import { UseCallbackDemo } from '../components/hooks/UseCallbackDemo'
import { UseMemoDemo } from '../components/hooks/UseMemoDemo'
import { UseContextDemo } from '../components/hooks/UseContextDemo'
import { UseReducerDemo } from '../components/hooks/UseReducerDemo'
import { UseLayoutEffectDemo } from '../components/hooks/UseLayoutEffectDemo'
import { UseImperativeHandleDemo } from '../components/hooks/UseImperativeHandleDemo'
import { UseIdDemo } from '../components/hooks/UseIdDemo'

export const hookData = [
  {
    component: UseStateDemo,
    caption: 'useState is the most basic React Hook. It lets you add state to functional components, perfect for managing simple values like counters, form inputs, or toggle states.'
  },
  {
    component: UseEffectDemo,
    caption: 'useEffect handles side effects in your components. Use it for data fetching, subscriptions, or manually changing the DOM. It runs after render and supports cleanup.'
  },
  {
    component: UseRefDemo,
    caption: 'useRef provides a mutable reference that persists across renders. Great for accessing DOM elements directly or storing values that shouldn\'t trigger re-renders.'
  },
  {
    component: UseCallbackDemo,
    caption: 'useCallback memoizes functions to optimize performance. Essential when passing callbacks to child components that rely on referential equality to prevent unnecessary renders.'
  },
  {
    component: UseMemoDemo,
    caption: 'useMemo memoizes computed values, preventing expensive calculations on every render. Use it when computing values from props or state that are costly to recalculate.'
  },
  {
    component: UseContextDemo,
    caption: 'useContext subscribes to React context without nesting. Perfect for sharing global state like themes, user data, or any values that many components need.'
  },
  {
    component: UseReducerDemo,
    caption: 'useReducer manages complex state logic in a single function. Ideal for state that involves multiple sub-values or when state updates depend on other state.'
  },
  {
    component: UseLayoutEffectDemo,
    caption: 'useLayoutEffect is similar to useEffect but fires synchronously after DOM mutations. Use it when you need to measure or mutate the DOM immediately after updates.'
  },
  {
    component: UseImperativeHandleDemo,
    caption: 'useImperativeHandle customizes the instance value exposed to parent components when using refs. Perfect for exposing specific methods of a child component.'
  },
  {
    component: UseIdDemo,
    caption: 'useId generates unique IDs for accessibility attributes. Essential for server rendering and avoiding hydration mismatches when multiple instances exist.'
  }
]