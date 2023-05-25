import { PropsWithChildren } from 'react'

interface RenderIfProps extends PropsWithChildren {
  condition: boolean
}

export function RenderIf({ condition, children }: RenderIfProps) {
  if (condition) {
    return <>{children}</>
  }

  return null
}
