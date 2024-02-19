'use client'

import { BackButton } from '@/components/back-button'

export default function AboutUs() {
  return (
    <div className="relative mt-7 flex flex-1 flex-col items-center justify-center bg-primary-darkContent">
      <BackButton navigate="/" />
      <h2 className="text-4xl">My history</h2>
      <section className="p-4 text-justify text-xl text-slate-100">
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
        <h3 className="text-2xl">More about me</h3>
        <section className="flex w-full flex-1 justify-around p-2">
          <button className="rounded-full bg-teal-700 p-3 hover:opacity-80">
            Experience
          </button>
          <button className="rounded-full bg-teal-700 p-3 hover:opacity-80">
            Undergraduate
          </button>
        </section>
      </div>
    </div>
  )
}
