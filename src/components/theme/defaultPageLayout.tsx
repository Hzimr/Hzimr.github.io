import { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="mx-auto my-0 flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center px-4 py-3">
      {children}
    </div>
  )
}
