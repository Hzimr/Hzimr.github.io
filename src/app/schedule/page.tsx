import { BackButton } from '@/components/back-button'
import { TitlePage } from '@/components/title-page'

export default function Schedule() {
  return (
    <div className="relative mt-7 flex flex-1 flex-col items-center justify-center bg-slate-100 dark:bg-primary-darkContent">
      <TitlePage title="Schedule in construction..." />
      <BackButton navigate="/" />
    </div>
  )
}
