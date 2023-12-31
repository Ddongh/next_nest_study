import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './component/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 learn</title>
      </head>
      <body>
        <header>
          <NavBar />

        </header>
        <section>{children}</section>
        <footer>Footer</footer>
      </body>

      {/* <body className={inter.className}>{children}</body> */}
      
    </html>
  )
}
