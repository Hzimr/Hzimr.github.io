import Imagem from '../../assets/HitaloImage.png'
import { twMerge } from 'tailwind-merge'

export function MyImage() {
  return (
    <div
      className={twMerge(
        'shadow-foto h-rem group relative flex w-[22rem] justify-center rounded-2xl transition',
        'hover:h-[450px]',
      )}
    >
      <div className="absolute top-0 h-auto w-[250px] duration-500 group-hover:-top-24 group-hover:scale-75">
        <img className="h-full w-full object-cover" src={Imagem.src} />
      </div>
      <div className="w-cem absolute top-[270px] flex h-[50px] flex-col gap-2 overflow-hidden px-0 py-8 text-center duration-500 group-hover:top-32 group-hover:h-[300px]">
        <h2>Hítalo Rodrigues</h2>
        <p>
          Front-end Developer/Programmer. Computer Engineering student at the
          Federal University of Ceará.
        </p>
      </div>
    </div>
  )
}
