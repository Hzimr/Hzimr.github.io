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
      className="absolute left-3 top-9 flex cursor-pointer items-center justify-center gap-1 border-none p-2 text-lg font-medium md:top-2"
      onClick={handleNavigate}
    >
      <IoArrowBackCircleOutline size={24} />
      Back
    </button>
  )
}
