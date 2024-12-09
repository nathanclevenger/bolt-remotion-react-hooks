import React from 'react'
import { UseStateDemo } from './hooks/UseStateDemo'
import { UseEffectDemo } from './hooks/UseEffectDemo'
import { UseRefDemo } from './hooks/UseRefDemo'
import { UseCallbackDemo } from './hooks/UseCallbackDemo'
import { UseMemoDemo } from './hooks/UseMemoDemo'
import { UseContextDemo } from './hooks/UseContextDemo'
import { UseReducerDemo } from './hooks/UseReducerDemo'
import { UseLayoutEffectDemo } from './hooks/UseLayoutEffectDemo'
import { UseImperativeHandleDemo } from './hooks/UseImperativeHandleDemo'
import { UseIdDemo } from './hooks/UseIdDemo'

export const HookExamples = () => {
  return (
    <div className='space-y-8'>
      <UseStateDemo />
      <UseEffectDemo />
      <UseRefDemo />
      <UseCallbackDemo />
      <UseMemoDemo />
      <UseContextDemo />
      <UseReducerDemo />
      <UseLayoutEffectDemo />
      <UseImperativeHandleDemo />
      <UseIdDemo />
    </div>
  )
}