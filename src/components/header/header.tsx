'use client'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Logo } from './logo'
import Imagem from '../../assets/HitaloImage.png'
import * as HoverCard from '@radix-ui/react-hover-card'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { ModeToggle } from '../theme/newToggle'

export function Header() {
  return (
    <header className="flex items-start justify-between bg-zinc-300 p-2 dark:bg-primary-dark">
      <Logo />
      <p className="hidden text-lg md:flex">Version 1.0</p>
      <div className="flex gap-4">
        <ModeToggle />
        <a
          className="transition ease-in-out hover:scale-105 hover:opacity-70"
          href="https://github.com/Hzimr"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
        <a
          className="transition ease-in-out  hover:scale-105 hover:opacity-70"
          href="https://www.linkedin.com/in/hitalorodrigues/"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <div className="transition ease-in-out  hover:scale-105 hover:opacity-70">
              <FaDiscord size={24} />
            </div>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="HoverCardContent" sideOffset={5}>
              <div
                className={twMerge(
                  'flex flex-col items-center gap-2',
                  'bg-textColor-lightColor2 p-4 text-gray-950',
                  'dark:bg-textColor-lightColor1',
                )}
              >
                <div className="flex items-center justify-center overflow-hidden rounded-full bg-primary-dark">
                  <Image
                    className="h-10 w-10"
                    src={Imagem}
                    alt="Foto de Hítalo"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="">
                      <p className="text-xl">hzimr</p>
                    </div>
                    <div className="">
                      <p className="text-lg">
                        <strong>hzimr#9251</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <HoverCard.Arrow className="HoverCardArrow" />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    </header>
  )
}
