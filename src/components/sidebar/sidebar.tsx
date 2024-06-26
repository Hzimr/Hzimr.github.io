'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPersonWorkspace } from 'react-icons/bs'
import { FaGithub, FaGraduationCap } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { IoIosMenu } from 'react-icons/io'
import { TbCertificate } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import { SubLinkContent } from './sublink'
import { MdOutlineContactPage, MdOutlineSchedule } from 'react-icons/md'

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
        <aside className="flex flex-col gap-8 text-xl">
          <ul className="flex flex-col gap-4">
            <li className="flex cursor-pointer items-center justify-start gap-2">
              <AiOutlineHome />
              <Link href="/secondaryPage">Home</Link>
            </li>
            <li className="flex cursor-pointer items-center justify-start gap-2">
              <MdOutlineContactPage />
              <Link href="/secondaryPage/aboutThisPage">About This Page</Link>
            </li>
            <li className="flex cursor-pointer flex-col  justify-start">
              <SubLinkContent>
                <ul className="ml-8">
                  <li className="flex cursor-pointer items-center justify-start gap-2">
                    <BsPersonWorkspace />
                    <Link href="/secondaryPage/aboutme/experience">
                      Experience
                    </Link>
                  </li>
                  <li className="flex cursor-pointer items-center justify-start gap-2">
                    <FaGraduationCap />
                    <Link href="/secondaryPage/aboutme/undergraduate">
                      Undergraduate
                    </Link>
                  </li>
                </ul>
              </SubLinkContent>
            </li>
            <li className="flex cursor-pointer items-center justify-start gap-2">
              <GrProjects />
              <Link href="/secondaryPage/projects">Projects</Link>
            </li>
            <li className="flex cursor-pointer items-center justify-start gap-2">
              <TbCertificate />
              <Link href="/secondaryPage/certificates">Certificates</Link>
            </li>
            <li className="group flex items-center justify-start gap-2">
              <FaGithub />
              <Link className="" href="/secondaryPage/githubInfos">
                GitHub Infos
              </Link>
            </li>
            <li className="group flex items-center justify-start gap-2">
              <MdOutlineSchedule />
              <Link className="" href="/schedule">
                Schedule
              </Link>
            </li>
          </ul>
        </aside>
      </Collapsible.Content>

      <div className="mt-auto flex flex-col gap-6">
        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
      </div>
    </Collapsible.Root>
  )
}
