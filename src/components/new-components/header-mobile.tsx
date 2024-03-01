'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidenavItems } from '@/data/side-nav-items'
import { MenuItemWithSubMenuProps } from '@/types/menu-item-type'
import { motion, useCycle } from 'framer-motion'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      resDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const variants = {
  open: {
    transition: {},
  },
  closed: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
    },
  },
}

export function HeaderMobile() {
  const pathname = usePathname()
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${isOpen ? '' : 'pointer-events-none'}`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-slate-100 dark:bg-primary-dark"
        variants={sidebar}
      />
      <motion.ul
        className="absolute grid w-full gap-3 px-10 py-16"
        variants={variants}
      >
        {SidenavItems.map((item, id) => {
          const isLastItem = id === SidenavItems.length - 1

          return (
            <div
              key={id}
              className={`${isOpen ? 'dark:bg-primary-darkContent dark:text-slate-100' : ''} `}
            >
              {item.submenu ? (
                <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
              ) : (
                <MenuItem>
                  <Link
                    href={item.path}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-2xl ${item.path === pathname ? 'font-bold' : ''}`}
                  >
                    {item.title}
                  </Link>
                </MenuItem>
              )}
              {!isLastItem && (
                <MenuItem className="my-3 h-px w-full bg-gray-300 dark:bg-gray-600" />
              )}
            </div>
          )
        })}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    className="bg-red"
    stroke="#020617"
    strokeLinecap="round"
    {...props}
  />
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[14px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        transtion={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth
      dimensions.current.height = ref.current.offsetHeight
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])

  return dimensions.current
}

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
}

const MenuItem = ({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  )
}

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-2xl"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <span
              className={`${pathname.includes(item.path) ? 'font-bold text-slate-500 dark:text-slate-300' : ''}`}
            >
              {item.title}
            </span>
            <div className={`${subMenuOpen && 'rotate-180'}`}>setinha</div>
          </div>
        </button>
      </MenuItem>
      <div className="ml-2 mt-2 flex flex-col space-y-2">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subId) => {
              return (
                <MenuItem key={subId}>
                  <Link
                    href={subItem.path}
                    onClick={() => toggleOpen()}
                    className={`${subItem.path === pathname ? 'font-extrabold dark:text-textColor-lightColor2' : ''}`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              )
            })}
          </>
        )}
      </div>
    </>
  )
}
