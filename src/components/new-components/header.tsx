'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import useScroll from '@/hooks/use-scroll'
import { cn } from '@/utils/utils-cn'

export function Header() {
  const scrolled = useScroll(5)
  const selectedLayout = useSelectedLayoutSegment()

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full border-b border-gray-500 transition-all dark:border-gray-200`,
        {
          'backgrop-blur-lg border-b border-gray-500 bg-white/75 dark:border-gray-200':
            scrolled,
          'border-b border-gray-500 bg-white dark:border-gray-200':
            selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div>
          <Link
            href="/"
            className="flex flex-row items-center justify-center space-x-3 md:hidden"
          >
            <span className="h-7 w-7 rounded-lg bg-zinc-600 dark:bg-zinc-300" />
            <span className="flex text-xl font-bold">Logo</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="rounderd-full flex h-8 w-8 items-center justify-center bg-zinc-300 text-center">
            <span className="text-sm font-semibold">Hz</span>
          </div>
        </div>
      </div>
    </div>
  )
}
