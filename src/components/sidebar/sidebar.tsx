'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import { IoIosMenu } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

export function Sidebar() {
  return (
    <Collapsible.Root
      className={twMerge(
        'dark:bg-primary-dark',
        'fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 bg-zinc-300 p-4',
        'data-[state=open]:bottom-0',
        'lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0',
      )}
    >
      <Collapsible.Trigger asChild className="lg:hidden">
        <div className="flex items-start justify-end">
          <button>
            <IoIosMenu className="h-6 w-6" />
          </button>
        </div>
      </Collapsible.Trigger>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <div className="text-textColor-lightColor1">SideBar</div>
      </Collapsible.Content>

      <div className="mt-auto flex flex-col gap-6">
        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
      </div>
    </Collapsible.Root>
  )
}
