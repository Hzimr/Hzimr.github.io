import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme/themeProvider'
import { Header } from '../components/header/header'
import { Sidebar } from '../components/sidebar/sidebar'

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
        <ThemeProvider attribute="class">
          <div className="min-h-screen bg-zinc-300 dark:bg-primary-dark lg:grid lg:grid-cols-app">
            <Sidebar />

            <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pb-12 lg:pt-8">
              <Header />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
