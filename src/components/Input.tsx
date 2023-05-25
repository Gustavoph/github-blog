'use client'

import { ComponentProps, forwardRef } from 'react'

interface InputProps extends ComponentProps<'input'> {}

export function InputComponent({ ...rest }: InputProps, ref: any) {
  return (
    <input
      ref={ref}
      className="h-12 w-full rounded-md border border-base-border bg-base-input px-4 py-3 text-base text-base-text outline-none transition placeholder:text-base-label focus:border-brand-blue"
      {...rest}
    />
  )
}

export const Input = forwardRef(InputComponent)
