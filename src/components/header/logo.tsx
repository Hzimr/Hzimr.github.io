import { MonteCarlo } from 'next/font/google'

const monteCarlo = MonteCarlo({
  subsets: ['latin'],
  weight: '400',
})

export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-2xl font-semibold ">
      <h1 title="Hítalo Project" className={monteCarlo.className}>
        Hítalo Developer
      </h1>
    </strong>
  )
}
