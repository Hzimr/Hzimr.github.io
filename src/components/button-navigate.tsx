'use client'
import { useRouter } from 'next/navigation'

interface BtnProps {
  navigate: string
  text: string
}

export function ButtonNavigate({ navigate, text }: BtnProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }
  return (
    <button
      className="flex w-48 justify-center rounded-full bg-teal-400 p-3 text-lg hover:opacity-80 dark:bg-teal-700"
      onClick={handleNavigate}
    >
      {text}
    </button>
  )
}
