'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { SidenavItems } from '@/data/side-nav-items'
import Link from 'next/link'
import { SideNavItem } from '@/types/side-nav-item-type'
import { Logo } from '../header/logo'
import { FaAngleUp } from 'react-icons/fa6'

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`hover-bg-zinc-100 flex w-full flex-row items-center justify-between rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 ${
              pathname.includes(item.path) ? '' : ''
            }`}
          >
            <div className="flex flex-row items-center space-x-4">
              {item.icon}
              <span className="flex text-xl font-semibold">{item.title}</span>
            </div>

            <div
              className={`${subMenuOpen ? 'rotate-180 transition ease-linear' : ''} flex  transition ease-linear`}
            >
              <FaAngleUp />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname
                        ? 'rounded-full bg-zinc-200 font-bold dark:bg-slate-700'
                        : ''
                    }`}
                  >
                    <div className="flex flex-row items-center gap-2">
                      {subItem.icon}
                      <span>{subItem.title}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row items-center space-x-4 rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 ${
            item.path === pathname ? 'bg-zinc-200 dark:bg-slate-700' : ''
          }`}
        >
          {item.icon}
          <span className="flex text-xl font-semibold">{item.title}</span>
        </Link>
      )}
    </div>
  )
}

export function SideNav() {
  return (
    <div className="fixed hidden h-screen flex-1 border-r border-primary-dark dark:border-zinc-200 dark:bg-primary-dark md:flex md:w-60">
      <div className="flex w-full flex-col space-y-6">
        <Link
          href="/"
          className="flex h-12 w-full flex-row items-center justify-center space-x-3 border-b border-primary-dark dark:border-zinc-200 md:justify-start md:px-6"
        >
          <span className="hidden text-xl font-bold md:flex">
            <Logo />
          </span>
        </Link>

        <div className="flex flex-col space-y-2  md:px-6 ">
          {SidenavItems.map((item, idx) => {
            return <MenuItem key={idx} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}
