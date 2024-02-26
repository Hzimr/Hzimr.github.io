import { BackButton } from '@/components/back-button'

export default async function Githubinfos() {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const response = await fetch('https://api.github.com/users/hzimr')
  const user = await response.json()

  return (
    <div className="relative mt-7 flex flex-1 flex-col items-center justify-center bg-slate-100 dark:bg-primary-darkContent">
      <h1 className="text-2xl md:text-4xl">Githubinfos in construction...</h1>
      <BackButton navigate="/" />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
