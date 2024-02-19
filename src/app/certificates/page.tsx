'use client'
import { BackButton } from '@/components/back-button'
import { CertificateCard } from '@/components/certificate-card'
import { ChangeEvent, useDeferredValue, useState } from 'react'
import { itemsCertificates } from '../../data/certificateItems'

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
    <div className="relative mt-7 flex flex-1 flex-col items-center justify-center bg-primary-darkContent">
      <BackButton navigate="/" />
      <h2 className="text-4xl">Certificates</h2>
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque por um certificado..."
          className="w-full bg-transparent p-10 text-3xl font-semibold tracking-tight outline-none  placeholder:text-slate-500 focus:border-teal-700"
          onChange={handleSearch}
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCertificates.map((certificate) => {
          return (
            <CertificateCard key={certificate.id} certificate={certificate} />
          )
        })}
      </div>
    </div>
  )
}
