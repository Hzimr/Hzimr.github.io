'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { IoClose } from 'react-icons/io5'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Certificate } from '@/data/types/certificates'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface CertificateCardProps {
  certificate: Certificate
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={twMerge(
          'relative flex flex-col gap-3 overflow-hidden rounded-md bg-slate-200 p-5 text-left outline-none',
          'hover:ring-2 hover:ring-slate-600',
          'focus-visible:ring-2 focus-visible:ring-primary-darkLine',
          'dark:bg-primary-darkContent dark:focus-visible:ring-lime-400 ',
        )}
      >
        <span className="text-sm font-medium text-primary-dark dark:text-slate-300">
          {formatDistanceToNow(certificate.date, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>{' '}
        <h3>{certificate.title}</h3>
        <Image
          className="h-36 w-36 self-center"
          src={certificate.image}
          alt=""
        />
        <p className="text-sm leading-6 text-primary-dark dark:text-slate-400">
          {certificate.description}
        </p>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t to-black/0 dark:from-black/60" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className={twMerge(
            'fixed inset-0 left-1/2 top-1/2 flex h-[64vh] w-full max-w-80 -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden bg-slate-200 outline-none',
            'dark:bg-slate-700 ',
            'md:h-[80vh] md:max-w-[800px] md:rounded-md',
          )}
        >
          <Dialog.Close
            className={twMerge(
              'absolute right-0 top-0 bg-slate-100 p-1.5 text-primary-dark hover:text-slate-950 ',
              'dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-100',
            )}
          >
            <IoClose className="size-5" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-2 p-3 md:gap-3 md:p-5 ">
            <span className="text-sm font-medium dark:text-slate-300">
              {formatDistanceToNow(certificate.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <h3 className=" md:text-lg">{certificate.title}</h3>
            <div className="flex flex-1 items-center justify-center">
              <Image
                className={twMerge('h-36 w-64 md:h-[28rem] md:w-[42rem]')}
                src={certificate.image}
                alt=""
              />
            </div>
            <p className="text-base leading-6 dark:text-slate-400">
              {certificate.description}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
