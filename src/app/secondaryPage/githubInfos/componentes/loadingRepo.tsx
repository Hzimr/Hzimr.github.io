import { Skeleton } from '@/components/skeleton'
import { MdOutlineCreateNewFolder, MdOutlineUpdate } from 'react-icons/md'

export function LoadingRepo() {
  return (
    <Skeleton className="flex w-[60rem] flex-1 flex-col">
      <Skeleton className="flex flex-col gap-2 border-b border-b-slate-50 p-3">
        <Skeleton className="text-2xl text-blue-500 ">Loading...</Skeleton>
        <Skeleton>textDescription</Skeleton>
        <Skeleton>
          <Skeleton className="flex flex-col gap-2">
            <MdOutlineUpdate />
          </Skeleton>
          <Skeleton className="flex flex-col gap-2">
            <MdOutlineCreateNewFolder />
          </Skeleton>
        </Skeleton>
      </Skeleton>
      <Skeleton className="flex flex-col gap-2 border-b border-b-slate-50 p-3">
        <Skeleton className="text-2xl text-blue-500 ">Loading...</Skeleton>
        <Skeleton>textDescription</Skeleton>
        <Skeleton>
          <Skeleton className="flex flex-col gap-2">
            <MdOutlineUpdate />
          </Skeleton>
          <Skeleton className="flex flex-col gap-2">
            <MdOutlineCreateNewFolder />
          </Skeleton>
        </Skeleton>
      </Skeleton>
      <Skeleton className="flex flex-col gap-2 border-b border-b-slate-50 p-3">
        <Skeleton className="text-2xl text-blue-500 ">Loading...</Skeleton>
        <Skeleton>textDescription</Skeleton>
        <Skeleton>
          <Skeleton className="flex flex-col gap-2">
            <MdOutlineUpdate />
          </Skeleton>
          <Skeleton className="flex flex-col gap-2">
            <MdOutlineCreateNewFolder />
          </Skeleton>
        </Skeleton>
      </Skeleton>
      <Skeleton className="flex flex-col gap-2 border-b border-b-slate-50 p-3">
        <Skeleton className="text-2xl text-blue-500 ">Loading...</Skeleton>
        <Skeleton>textDescription</Skeleton>
        <Skeleton>
          <Skeleton className="flex flex-col gap-2">
            <MdOutlineUpdate />
          </Skeleton>
          <Skeleton className="flex flex-col gap-2">
            <MdOutlineCreateNewFolder />
          </Skeleton>
        </Skeleton>
      </Skeleton>
    </Skeleton>
  )
}
