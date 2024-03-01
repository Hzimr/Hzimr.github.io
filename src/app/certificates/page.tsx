'use client'
import { BackButton } from '@/components/back-button'
import { CertificateCard } from '@/components/certificate-card'
import { ChangeEvent, useDeferredValue, useState } from 'react'
import { itemsCertificates } from '../../data/certificate-items'
import { twMerge } from 'tailwind-merge'
import { TitlePage } from '@/components/title-page'

export default function Certificates() {
  const [search, setSearch] = useState('')

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredCertificates =
    useDeferredValue(search) !== ''
      ? itemsCertificates.filter((certificate) =>
          certificate.description
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()),
        )
      : itemsCertificates

  return (
    <div className="relative mt-7 flex flex-1 flex-col items-center justify-center bg-slate-100 dark:bg-primary-darkContent">
      <BackButton navigate="/" />
      <TitlePage title="Certificates" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Search for a certificate"
          className={twMerge(
            'outline-none',
            'w-full bg-transparent p-10 text-xl font-semibold tracking-tight',
            'placeholder:text-slate-800 focus:border-teal-700 dark:placeholder:text-slate-500 md:text-3xl',
          )}
          onChange={handleSearch}
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className="flex w-full items-start px-4">
        <div className="grid w-full auto-rows-[250px] grid-cols-1 gap-6 pb-4 md:grid-cols-2 lg:grid-cols-auto">
          {filteredCertificates.map((certificate) => {
            return (
              <CertificateCard key={certificate.id} certificate={certificate} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
