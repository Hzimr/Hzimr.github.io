import { BiLogoTailwindCss } from 'react-icons/bi'
import { ThemeToggle } from '../theme/themeToggle'
import {
  FaCss3Alt,
  FaDiscord,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
} from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'
import { Logo } from './logo'

export function Header() {
  return (
    <header className="dark:bg-primary-dark flex items-start justify-between bg-zinc-300">
      <Logo />
      <div className="flex gap-2">
        <p>Tecnologias</p>
        <FaHtml5 size={24} />
        <FaCss3Alt size={24} />
        <IoLogoJavascript size={24} />
        <FaReact size={24} />
        <BiLogoTailwindCss size={24} />
        <TbBrandNextjs size={24} />
      </div>
      <div className="flex gap-4">
        <ThemeToggle />
        <a
          className="transition ease-in-out  hover:scale-105 hover:opacity-70"
          href="https://github.com/Hzimr"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
        <a
          className="transition ease-in-out  hover:scale-105 hover:opacity-70"
          href="https://www.linkedin.com/in/hitalorodrigues/"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          className="transition ease-in-out  hover:scale-105 hover:opacity-70"
          href="#"
          target="_blank"
          title="hzimr#9251"
        >
          <FaDiscord size={24} />
        </a>
      </div>
    </header>
  )
}
