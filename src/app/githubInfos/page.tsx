import { Suspense } from 'react'
import { GitRepo } from './componentes/gitRepo'

export default async function Githubinfos() {
  await new Promise((resolve) => setTimeout(resolve, 1300))

  return (
    <Suspense>
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative mt-7 flex flex-1 flex-row justify-center bg-slate-100 dark:bg-primary-darkContent">
          <GitRepo />{' '}
        </div>
      </div>
    </Suspense>
  )
}
