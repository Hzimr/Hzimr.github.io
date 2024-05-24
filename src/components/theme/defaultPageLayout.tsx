import { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
  className?: string
}

export function DefaultLayout({ children, className }: DefaultLayoutProps) {
  return (
    <div
      className={`${className} mx-auto my-0 flex min-h-screen w-full max-w-[1200px] flex-col px-4 py-3`}
    >
      {children}
    </div>
  )
}
