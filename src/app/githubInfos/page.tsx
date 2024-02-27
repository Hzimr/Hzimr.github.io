import { Suspense } from 'react'
import { GitRepo } from './componentes/gitRepo'
import { LoadingRepo } from './componentes/loadingRepo'

export default async function Githubinfos() {
  await new Promise((resolve) => setTimeout(resolve, 600))

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-7 flex w-full flex-1 flex-col justify-center bg-slate-100 dark:bg-primary-darkContent">
        <h2 className="text-3xl text-textColor-lightColor1">Repositórios</h2>
        <Suspense fallback={<LoadingRepo />}>
          <GitRepo />{' '}
        </Suspense>
      </div>
    </div>
  )
}
