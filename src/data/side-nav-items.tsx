import { SideNavItem } from '@/types/side-nav-item-type'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPersonWorkspace } from 'react-icons/bs'
import { FaGithub, FaGraduationCap } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { IoIosMenu } from 'react-icons/io'
import { TbCertificate } from 'react-icons/tb'

export const SidenavItems: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <AiOutlineHome />,
  },
  {
    title: 'About This Page',
    path: '/aboutThisPage',
    icon: <BsPersonWorkspace />,
  },
  {
    title: 'AboutMe',
    path: '/',
    submenu: true,
    subMenuItems: [
      {
        title: 'Experience',
        path: '/aboutme/experience',
        icon: <FaGraduationCap />,
      },
      {
        title: 'Undergraduate',
        path: '/aboutme/undergraduate',
        icon: <FaGraduationCap />,
      },
    ],
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <GrProjects />,
  },
  {
    title: 'Certificates',
    path: '/certificates',
    icon: <TbCertificate />,
  },
  {
    title: 'GitHub Infos',
    path: '/githubInfos',
    icon: <FaGithub />,
  },
  {
    title: 'Schedule',
    path: '/schedule',
    icon: <IoIosMenu />,
  },
]