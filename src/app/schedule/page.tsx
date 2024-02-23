import { BackButton } from '@/components/back-button'

export default function Schedule() {
  return (
    <div className="relative mt-7 flex flex-1 flex-col items-center justify-center bg-slate-100 dark:bg-primary-darkContent">
      <h1 className="text-2xl md:text-4xl">Projects in construction...</h1>
      <BackButton navigate="/" />
    </div>
  )
}
