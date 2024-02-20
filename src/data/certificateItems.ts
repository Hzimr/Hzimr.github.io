import { Certificate } from './types/certificates'
import certReact from '../assets/certificateReact.png'
import certNode from '../assets/certificateNode.png'

export const itemsCertificates: Certificate[] = [
  {
    id: crypto.randomUUID(),
    title: 'Certificate React',
    date: new Date('2024-02-10'),
    category: 'string',
    image: certReact,
    description: 'NLW Expert Trilha React front-end',
  },
  {
    id: crypto.randomUUID(),
    title: 'Certificate Node',
    date: new Date('2024-02-12'),
    category: 'string',
    image: certNode,
    description: 'NLW Expert Trilha Node back-end',
  },
]
