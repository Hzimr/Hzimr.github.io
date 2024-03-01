import { Certificate } from '../types/certificates-type'
import certReact from '../assets/certificates/certificateReact.png'
import certNode from '../assets/certificates/certificateNode.png'
import certEnglish from '../assets/certificates/certificateInglês.png'
import certRemoteWork from '../assets/certificates/certificateRemoteWork.png'

export const itemsCertificates: Certificate[] = [
  {
    id: crypto.randomUUID(),
    title: 'Certificate Node',
    date: new Date('2024-02-12'),
    category: 'hardskills',
    image: certNode,
    description: 'NLW Expert Trilha Node back-end',
  },
  {
    id: crypto.randomUUID(),
    title: 'Certificate React',
    date: new Date('2024-02-10'),
    category: 'hardskills',
    image: certReact,
    description: 'NLW Expert Trilha React front-end',
  },
  {
    id: crypto.randomUUID(),
    title: 'Certificate Remote Work',
    date: new Date('2023-04-16'),
    category: 'softskills',
    image: certRemoteWork,
    description: 'Remote Work Professional Certification',
  },
  {
    id: crypto.randomUUID(),
    title: 'Certificate English',
    date: new Date('2022-12-05'),
    category: 'softskills',
    image: certEnglish,
    description: 'Basic English Certification',
  },
]
