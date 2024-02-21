import Imagem from '../../assets/HitaloImage.png'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

export function MyImage() {
  return (
    <div
      className={twMerge(
        'group relative flex h-rem w-[22rem] justify-center rounded-2xl shadow-foto transition',
      )}
    >
      <div className="absolute top-0 h-auto w-[250px] duration-500 group-hover:-top-24 group-hover:scale-75">
        <Image className="h-full w-full object-cover" src={Imagem} alt={''} />
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
