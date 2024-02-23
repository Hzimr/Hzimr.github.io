import { FaPhoneVolume } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

export function Contact() {
  return (
    <div className="mt-6 flex h-24 flex-col items-center justify-between rounded-2xl bg-slate-200 p-3 text-xl text-black dark:bg-primary-darkContent dark:text-slate-100 md:h-16 md:w-[40rem] md:flex-row md:p-2">
      <section className="flex items-center gap-2">
        <MdOutlineEmail />
        <p>hitalorodriguesdev@gmail.com</p>
      </section>
      <section className="flex items-center gap-2">
        <FaPhoneVolume />
        <p>88 99687-0729</p>
      </section>
    </div>
  )
}
