'use client'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

interface BtnProps {
  navigate: string
}

export function BackButton({ navigate }: BtnProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }
  return (
    <button
      className="absolute left-3 top-2 flex cursor-pointer items-center justify-center gap-2 border-none p-2 text-lg font-medium"
      onClick={handleNavigate}
    >
      <IoArrowBackCircleOutline size={24} />
      Voltar
    </button>
  )
}
