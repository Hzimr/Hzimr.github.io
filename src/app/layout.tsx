import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme/themeProvider'
import { Header } from './components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | H-Project',
    default: 'Hítalo Project',
  },
  description: 'Portfólio do Hítalo Rodrigues',
  keywords: ['Hítalo', 'Project'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="dark antialiased">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col justify-between bg-zinc-300 p-4 dark:bg-zinc-900">
          <ThemeProvider attribute="class">
            <Header />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
