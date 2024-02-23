import { MonteCarlo } from 'next/font/google'

const monteCarlo = MonteCarlo({
  subsets: ['latin'],
  weight: '400',
})

export function Logo() {
  return (
    <h1 title="Hítalo Project" className={monteCarlo.className}>
      <strong className="mx-1 flex items-center gap-2 text-2xl font-semibold ">
        Hítalo Developer
      </strong>
    </h1>
  )
}
