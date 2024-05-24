import { SideNavItem } from '@/types/side-nav-item-type'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPersonWorkspace } from 'react-icons/bs'
import { FaGithub, FaGraduationCap } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { IoPersonCircle } from 'react-icons/io5'
import { MdOutlineSchedule } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'

export const SidenavItems: SideNavItem[] = [
  {
    title: 'Home',
    path: '/secondaryPage',
    icon: <AiOutlineHome />,
  },
  {
    title: 'About This Page',
    path: '/secondaryPage/aboutThisPage',
    icon: <BsPersonWorkspace />,
  },
  {
    title: 'AboutMe',
    path: '/secondaryPage/aboutme',
    icon: <IoPersonCircle />,
    submenu: true,
    subMenuItems: [
      {
        title: 'AboutMe',
        path: '/secondaryPage/aboutme',
        icon: <IoPersonCircle />,
      },
      {
        title: 'Experience',
        path: '/secondaryPage/aboutme/experience',
        icon: <BsPersonWorkspace />,
      },
      {
        title: 'Undergraduate',
        path: '/secondaryPage/aboutme/undergraduate',
        icon: <FaGraduationCap />,
      },
    ],
  },
  {
    title: 'Projects',
    path: '/secondaryPage/projects',
    icon: <GrProjects />,
  },
  {
    title: 'Certificates',
    path: '/secondaryPage/certificates',
    icon: <TbCertificate />,
  },
  {
    title: 'GitHub Infos',
    path: '/secondaryPage/githubInfos',
    icon: <FaGithub />,
  },
  {
    title: 'Schedule',
    path: '/secondaryPage/schedule',
    icon: <MdOutlineSchedule />,
  },
]
