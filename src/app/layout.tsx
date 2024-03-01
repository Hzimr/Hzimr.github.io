import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme/themeProvider'
import { Sidebar } from '../components/sidebar/sidebar'
import { Newsidebar } from '@/components/sidebar/new-sidebar'
import { Header } from '@/components/new-components/header'
import { HeaderMobile } from '@/components/new-components/header-mobile'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
    <html
      lang="pt-br"
      className={`${inter.variable} inter.variable antialiased`}
    >
      <body>
        <ThemeProvider attribute="class">
          <div className="min-h-screen bg-zinc-300 dark:bg-primary-dark lg:grid lg:grid-cols-app">
            {/* <Sidebar /> */}
            <Header />
            <HeaderMobile />
            <Newsidebar />
            <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-2 lg:pb-12 lg:pt-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
