'use client'

import { useTheme } from 'next-themes'
import { IoIosMoon } from 'react-icons/io'
import { IoSunnyOutline } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      title="Theme Button"
      className={twMerge(
        'transition delay-150 ease-in-out',
        'background-color, flex size-6 items-center justify-center rounded-md bg-black px-1 py-1 font-semibold text-white',
        'hover:scale-105 hover:opacity-70',
        'dark:bg-white dark:text-black',
      )}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      {theme === 'light' ? (
        <IoIosMoon size={20} />
      ) : (
        <IoSunnyOutline size={20} />
      )}
    </button>
  )
}
