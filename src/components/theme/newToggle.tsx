'use client'

import * as React from 'react'
import { IoIosMoon } from 'react-icons/io'
import { IoSunnyOutline } from 'react-icons/io5'
import { useTheme } from 'next-themes'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center justify-center p-px">
          <IoSunnyOutline
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            size={24}
          />
          <IoIosMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => setTheme('light')}>
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('system')}>
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
