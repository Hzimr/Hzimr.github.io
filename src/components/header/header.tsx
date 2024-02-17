import { ThemeToggle } from '../theme/themeToggle'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Logo } from './logo'

export function Header() {
  return (
    <header className="flex items-start justify-between bg-zinc-300 dark:bg-primary-dark">
      <Logo />
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
