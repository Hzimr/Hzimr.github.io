'use client'
import { BackButton } from '@/components/back-button'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const itemsTabExperience = [
  {
    id: 1,
    title: 'Move LTDA',
    description: 'Estágio Front-End Move LTDA',
  },
  {
    id: 2,
    title: 'Sefi Cred',
    description: 'Estágio Anterior',
  },
]

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const firstBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus()
    }
  }, [])
  return (
    <div className="relative mt-7 flex min-h-[50vh] flex-col items-center bg-slate-100 dark:bg-primary-dark2">
      <BackButton navigate="/aboutus" />

      <h1 className="text-lg md:text-4xl">Experience</h1>
      <div className="mt-12 flex w-[20rem] flex-1 flex-col gap-2 p-2 text-xl shadow-foto dark:bg-primary-darkLine md:w-[30rem] md:p-8 md:text-3xl">
        {' '}
        <div className="flex items-center justify-between gap-x-2 rounded-xl p-2 font-bold dark:bg-primary-darkContent dark:text-white">
          {itemsTabExperience.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              className={twMerge(
                'w-full rounded-xl border-none p-2 text-center outline-none',
                'focus:bg-teal-400 focus:text-primary-dark  focus:ring-2 focus:ring-teal-700',
                'hover:opacity-70 ',
                `${selectedTab === index ? 'bg-teal-400 text-primary-dark' : ''}`,
              )}
              key={index}
              onClick={() => setSelectedTab(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex flex-1 rounded-xl bg-white p-2 text-primary-dark">
          {itemsTabExperience.map((item, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? '' : 'hidden'}`}
            >
              <p className="p-4 text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
