import { BackButton } from '@/components/back-button'
import Image from 'next/image'
import { Suspense } from 'react'
import { FaLocationDot, FaPersonWalking } from 'react-icons/fa6'
import { MdPeopleOutline } from 'react-icons/md'

export default async function Githubinfos() {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const response = await fetch('https://api.github.com/users/hzimr')
  const user = await response.json()

  return (
    <Suspense>
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="animate-pulse text-2xl md:text-4xl">
          Githubinfos in construction right now
        </h1>
        <BackButton navigate="/" />
        <div className="relative mt-7 flex flex-1 flex-row justify-center bg-slate-100 dark:bg-primary-darkContent">
          <div>
            {' '}
            <Image
              className="rounded-full"
              width={260}
              height={260}
              src={`${user.html_url}` + '.png'}
              alt=""
            />
            <h1>{user.name}</h1>
            <h2>{user.login}</h2>
            <h3>{user.bio}</h3>
            <div className="flex flex-col">
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
            </div>
          </div>
          <div>
            {' '}
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
