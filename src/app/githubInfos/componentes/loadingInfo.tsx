import { Skeleton } from '@/components/skeleton'
import { FaLocationDot, FaPersonWalking } from 'react-icons/fa6'
import { MdPeopleOutline } from 'react-icons/md'

export function LoadingInfo() {
  return (
    <Skeleton className="relative mt-7 flex flex-1 flex-row justify-center bg-slate-100 dark:bg-primary-darkContent">
      <div className="flex max-w-72 flex-col gap-4 p-4">
        {' '}
        <Skeleton className="h-[260px] w-[260px] rounded-full" />
        <Skeleton className="text-textColor-lightColor text-3xl">
          <p>Loading...</p>
        </Skeleton>
        <Skeleton className="text-2xl text-textColor-lightColor2 hover:underline">
          <p>Loading...</p>
        </Skeleton>
        <Skeleton className="text-xl text-textColor-lightColor1">
          <p>Loading...</p>
        </Skeleton>
        <Skeleton className="flex flex-col gap-2">
          <section className="flex items-center gap-1">
            <MdPeopleOutline />
            <span>followers</span>
          </section>
          <section className="flex items-center gap-1">
            <FaPersonWalking />
            <span>following</span>
          </section>
          <section className="flex items-center gap-1">
            <FaLocationDot />
          </section>
        </Skeleton>
      </div>
    </Skeleton>
  )
}
