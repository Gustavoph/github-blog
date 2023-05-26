'use client'

import { PropsWithChildren } from 'react'
import './globals.css'
import { Nunito, Fira_Code as FiraCode } from 'next/font/google'
import Image from 'next/image'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/services/api'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-nunito',
})

const firaCode = FiraCode({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira-code',
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Github Blog</title>
      </head>
      <body
        className={`${nunito.variable} ${firaCode.variable} bg-base-background font-sans`}
      >
        <header className="flex h-[296px] flex-col items-center bg-coverImg bg-cover bg-center pt-16">
          <Image
            src="/logo.png"
            alt="Github blog logo"
            width={148}
            height={98}
          />
        </header>

        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
