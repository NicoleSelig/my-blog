import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { addClasses } from './utils'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] , display: 'swap', variable: "--font-in"})
const manrope = Manrope({ subsets: ['latin'] , display: 'swap', variable: "--font-mr"})

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
      <body className={
        addClasses(
          inter.variable,
          manrope.variable,
          'font-mr bg-light dark:bg-dark'
        )}
        > 
          <Header />
          {children}
        </body>
    </html>
  )
}
