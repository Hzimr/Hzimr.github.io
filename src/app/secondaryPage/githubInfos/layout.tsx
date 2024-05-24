import { BackButton } from '@/components/back-button'
import { MyInfo } from './componentes/myInfo'
import { TitlePage } from '@/components/title-page'
import { Suspense } from 'react'
import { LoadingInfo } from './componentes/loadingInfo'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <TitlePage title="Github Infos" />
      <BackButton navigate="/" />
      <main className="relative mt-10 grid grid-cols-app justify-center bg-slate-100 dark:bg-primary-darkContent md:mt-7">
        <Suspense fallback={<LoadingInfo />}>
          <MyInfo />
        </Suspense>
        {children}
      </main>
    </div>
  )
}
