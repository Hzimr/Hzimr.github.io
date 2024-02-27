import { Skeleton } from '@/components/skeleton'

export default function GitInfoLoading() {
  return (
    <Skeleton className="mt-7 flex h-[70vh] w-[60rem] flex-1">
      <h1>Carregando repositórios</h1>
    </Skeleton>
  )
}
