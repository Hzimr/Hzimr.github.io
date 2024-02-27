import { FaLocationDot, FaPersonWalking } from 'react-icons/fa6'
import { MdPeopleOutline } from 'react-icons/md'
import Image from 'next/image'

export async function MyInfo() {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  const response = await fetch('https://api.github.com/users/hzimr')
  const user = await response.json()

  return (
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
        <h2 className="text-textColor-lightColor text-3xl">{user.name}</h2>
        <a
          href={user.html_url}
          className="text-2xl text-textColor-lightColor2 hover:underline"
          target="_blank"
        >
          {user.login}
        </a>
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
    </div>
  )
}
