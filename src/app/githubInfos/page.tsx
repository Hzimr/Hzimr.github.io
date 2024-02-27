import { BackButton } from '@/components/back-button'
import Image from 'next/image'
import { Suspense } from 'react'
import { FaLocationDot, FaPersonWalking } from 'react-icons/fa6'
import {
  MdOutlineCreateNewFolder,
  MdOutlineUpdate,
  MdPeopleOutline,
} from 'react-icons/md'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Repo {
  id: string
  name: string
  description?: string
  updated_at: string
  created_at: string
  html_url: string
}

export default async function Githubinfos() {
  await new Promise((resolve) => setTimeout(resolve, 1300))

  const response = await fetch('https://api.github.com/users/hzimr')
  const user = await response.json()

  const responseRepo = await fetch('https://api.github.com/users/Hzimr/repos')
  const repo = await responseRepo.json()

  const sortedRepos: Repo[] = repo.sort((a: Repo, b: Repo) => {
    return b.updated_at.localeCompare(a.updated_at)
  })

  return (
    <Suspense>
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="animate-pulse text-2xl md:text-4xl">
          Githubinfos in construction right now
        </h1>
        <BackButton navigate="/" />
        <div className="relative mt-7 flex flex-1 flex-row justify-center bg-slate-100 dark:bg-primary-darkContent">
          <div className="flex max-w-72 flex-col gap-4 p-4">
            {' '}
            <Image
              className="rounded-full"
              width={260}
              height={260}
              src={`${user.html_url}` + '.png'}
              alt=""
            />
            <h1 className="text-textColor-lightColor text-3xl">{user.name}</h1>
            <h2 className="text-2xl text-textColor-lightColor2">
              {user.login}
            </h2>
            <h3 className="text-xl text-textColor-lightColor1">{user.bio}</h3>
            <div className="flex flex-col gap-2">
              <section className="flex items-center gap-1">
                <MdPeopleOutline />
                <p>{user.followers}</p>
                <span>followers</span>
              </section>
              <section className="flex items-center gap-1">
                <FaPersonWalking />
                <p>{user.following}</p>
                <span>following</span>
              </section>
              <section className="flex items-center gap-1">
                <FaLocationDot />
                <p>{user.location}</p>
              </section>
            </div>
          </div>
          <div>
            {' '}
            <div className="flex flex-col text-xl">
              {sortedRepos?.map((repo) => {
                return (
                  <div
                    className="flex flex-col gap-2 border-b border-b-slate-50 p-3"
                    key={repo.id}
                  >
                    <h1 className="text-2xl text-blue-500">{repo.name}</h1>
                    <p>{repo?.description}</p>
                    <section>
                      <p className="fle-col flex items-center gap-2">
                        <MdOutlineUpdate />
                        {formatDistanceToNow(repo.updated_at, {
                          locale: ptBR,
                          addSuffix: true,
                        })}
                      </p>
                      <p className="fle-col flex items-center gap-2">
                        <MdOutlineCreateNewFolder />
                        {formatDistanceToNow(repo.created_at, {
                          locale: ptBR,
                          addSuffix: true,
                        })}
                      </p>
                    </section>
                    <a href={repo.html_url} target="_blank">
                      Link do projeto
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
