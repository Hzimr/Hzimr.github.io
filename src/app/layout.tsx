import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme/themeProvider'
import { Header } from '@/components/new-components/header'
import { HeaderMobile } from '@/components/new-components/header-mobile'
import { SideNav } from '@/components/new-components/side-nav'
import { PageWrapper } from '@/components/new-components/page-wrapper'
import { MarginWidthWrapper } from '@/components/new-components/margin-width-wrapper'

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
          <div className="flex min-h-screen bg-zinc-300 dark:bg-primary-dark">
            <SideNav />
            <main className="flex-1">
              <MarginWidthWrapper>
                <Header />
                <HeaderMobile />
                <PageWrapper>{children}</PageWrapper>
              </MarginWidthWrapper>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
