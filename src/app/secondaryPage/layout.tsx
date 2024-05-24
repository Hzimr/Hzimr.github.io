import { Header } from '@/components/new-components/header'
import { HeaderMobile } from '@/components/new-components/header-mobile'
import { SideNav } from '@/components/new-components/side-nav'
import { PageWrapper } from '@/components/new-components/page-wrapper'
import { MarginWidthWrapper } from '@/components/new-components/margin-width-wrapper'
import { ThemeProvider } from '@/components/theme/themeProvider'

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
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
  )
}
