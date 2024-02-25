'use client'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { IoPersonCircle } from 'react-icons/io5'

interface SubLinkContentProps {
  children: ReactNode
}

export function SubLinkContent({ children }: SubLinkContentProps) {
  const [isContentVisible, setContentVisible] = useState(false)

  const handleContentVisibility = () => {
    setContentVisible((prevState) => !prevState)
  }

  return (
    <div className="flex flex-1 cursor-pointer flex-col gap-2">
      <div className="flex items-center gap-2">
        <section className="flex items-center gap-2">
          <IoPersonCircle />
          <Link href="/aboutme">About Me</Link>
        </section>
        <button className="bg-transparent" onClick={handleContentVisibility}>
          <FaAngleUp
            className={`transform transition-transform duration-300 ${
              isContentVisible ? '' : '-rotate-180'
            }`}
          />
        </button>
      </div>
      {isContentVisible && <div className="flex flex-col">{children}</div>}
    </div>
  )
}
