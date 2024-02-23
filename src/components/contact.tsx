'use client'
import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

export function Contact() {
  return (
    <Suspense>
      <motion.div
        className="mt-6 flex h-24 flex-col items-center justify-between rounded-2xl bg-slate-200 p-3 text-xl text-black dark:bg-primary-darkContent dark:text-slate-100 md:h-16 md:w-[40rem] md:flex-row md:p-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0, 0.71, 0.5, 1.01],
        }}
      >
        <section className="flex items-center gap-2">
          <MdOutlineEmail />
          hitalorodriguesdev@gmail.com
        </section>
        <section className="flex items-center gap-2">
          <FaPhoneVolume />
          88 99687-0729
        </section>
      </motion.div>
    </Suspense>
  )
}
