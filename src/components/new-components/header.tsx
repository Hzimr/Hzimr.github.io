'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import useScroll from '@/hooks/use-scroll'
import { cn } from '@/utils/utils-cn'
import { Logo } from '../header/logo'
import { Header1 } from '../header/header'

export function Header() {
  const scrolled = useScroll(5)
  const selectedLayout = useSelectedLayoutSegment()

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full border-b border-gray-500 transition-all dark:border-gray-200`,
        {
          'backgrop-blur-lg border-b border-gray-500 dark:border-gray-200 dark:bg-primary-darkContent/75':
            scrolled,
          'border-b border-gray-500 dark:border-gray-200': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div>
          <Link
            href="/"
            className="flex flex-row items-center justify-center space-x-3 md:hidden"
          >
            <span className="flex text-xl font-bold">
              <Logo />
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Header1 />
        </div>
      </div>
    </div>
  )
}
