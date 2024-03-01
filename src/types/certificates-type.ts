import { StaticImageData } from 'next/image'

export interface Certificate {
  id: string
  title: string
  date: Date
  category: 'softskills' | 'hardskills'
  image: StaticImageData
  description: string
  featured?: boolean
}
