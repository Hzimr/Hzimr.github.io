import { ReactNode } from 'react'

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-grow flex-col space-y-2 px-4 pb-4 pt-2">
      {children}
    </div>
  )
}
