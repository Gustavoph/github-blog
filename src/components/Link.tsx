import NextLink from 'next/link'
import { PropsWithChildren } from 'react'

interface LinkProps extends PropsWithChildren {
  href: string
  target?: string
}

export function Link({ href, target, children }: LinkProps) {
  return (
    <div className="flex h-full items-center">
      <NextLink
        href={href}
        target={target}
        className="flex h-4 items-center gap-2 text-xs font-bold uppercase text-brand-blue hover:border-b hover:border-brand-blue"
      >
        {children}
      </NextLink>
    </div>
  )
}
