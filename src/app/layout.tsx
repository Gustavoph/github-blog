import { PropsWithChildren } from 'react'
import './globals.css'
import { Nunito } from 'next/font/google'
import Image from 'next/image'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'Github Blog',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} bg-base-background font-sans`}>
        <header className="flex h-[296px] flex-col items-center bg-coverImg bg-cover bg-center pt-16">
          <Image
            src="/logo.png"
            alt="Github blog logo"
            width={148}
            height={98}
          />
        </header>
        {children}
      </body>
    </html>
  )
}
