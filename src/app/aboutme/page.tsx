'use client'

import { BackButton } from '@/components/back-button'
import { ButtonNavigate } from '@/components/button-navigate'

export default function AboutMe() {
  return (
    <div className="relative mt-7 flex flex-1 flex-col items-center justify-center bg-slate-100 dark:bg-primary-darkContent">
      <BackButton navigate="/" />
      <h1 className="text-4xl">My history</h1>
      <section className="mt-4 p-4 text-justify text-xl dark:text-slate-100 md:mt-0">
        <p>
          At the beginning of my college journey, I had my first encounter with
          programming through the C language, a moment that marked the start of
          my journey. As I progressed in my studies, I delved into the
          foundations of various languages. However, it was upon discovering the
          Rocketseat platform that my trajectory took a new direction. Through
          Rocketseat, I was introduced to the web ecosystem and its endless
          possibilities. I decided to focus my efforts on studying JavaScript
          and React, drawn by their versatility and growing popularity. Today, I
          can confidently say that I have a solid familiarity with the web
          ecosystem. Particularly with front-end code writing, I feel
          comfortable navigating this environment.
        </p>
      </section>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 p-3">
        <h2 className="text-2xl">More about me</h2>
        <section className="flex w-full flex-1 justify-around gap-2 p-2">
          <ButtonNavigate navigate="/aboutme/experience" text="Experience" />
          <ButtonNavigate
            navigate="/aboutme/undergraduate"
            text="Undergraduate"
          />
        </section>
      </div>
    </div>
  )
}
