'use client'
import React, { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  delay: number
}

const TypingEffect = ({ text, delay }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('')
  const [displayTextStrong, setDisplayTextStrong] = useState('')
  const [displayTextContinues, setDisplayTextContinues] = useState('')

  useEffect(() => {
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < 8) {
        setDisplayText(text.substring(0, currentIndex))
        currentIndex++
      } else if (currentIndex > 7 && currentIndex < 25) {
        setDisplayTextStrong(text.substring(8, currentIndex))
        currentIndex++
      } else {
        setDisplayTextContinues(text.substring(24, currentIndex))
        currentIndex++
      }

      if (currentIndex > text.length) {
        clearInterval(interval)
      }
    }, delay)

    return () => clearInterval(interval)
  }, [text, delay])

  return (
    <h1 className="text-4xl after:relative after:animate-ping after:border-r-4 after:border-teal-800 dark:after:border-second-redcolor1">
      {displayText}{' '}
      <strong className="text-teal-800 dark:text-second-redcolor1 ">
        {displayTextStrong}
      </strong>{' '}
      {displayTextContinues}
    </h1>
  )
}

export function TypeMsg() {
  return (
    <TypingEffect
      text="Hi, I'm Hítalo Rodrigues a Web Developer"
      delay={100} // Adjust the delay to control the typing speed
    />
  )
}
