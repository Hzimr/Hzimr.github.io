import { BackButton } from '@/components/back-button'
import { MyInfo } from './componentes/myInfo'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h1 className="animate-pulse text-2xl md:text-4xl">
        Githubinfos in construction right now
      </h1>
      <BackButton navigate="/" />
      <main className="relative mt-7 flex flex-1 flex-row justify-center bg-slate-100 dark:bg-primary-darkContent">
        <MyInfo />
        {children}
      </main>
    </div>
  )
}
