import { MdOutlineCreateNewFolder, MdOutlineUpdate } from 'react-icons/md'
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

export async function GitRepo() {
  const responseRepo = await fetch('https://api.github.com/users/Hzimr/repos')
  const repo = await responseRepo.json()

  const sortedRepos: Repo[] = repo.sort((a: Repo, b: Repo) => {
    return b.updated_at.localeCompare(a.updated_at)
  })
  return (
    <div className="flex flex-col">
      {sortedRepos?.map((repo) => {
        return (
          <div
            className="flex flex-col gap-2 border-b border-b-slate-50 p-3"
            key={repo.id}
          >
            <a
              className="text-2xl text-blue-500 hover:underline"
              href={repo.html_url}
              target="_blank"
            >
              {repo.name}
            </a>
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
          </div>
        )
      })}
    </div>
  )
}
