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
      className="rounded-full bg-teal-700 p-3 hover:opacity-80"
      onClick={handleNavigate}
    >
      {text}
    </button>
  )
}
