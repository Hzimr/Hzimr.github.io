import { MyImage } from '@/components/myImage/myImage'
import { TypeMsg } from '@/utils/typeMsg'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandCypress } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { SiJest } from 'react-icons/si'

export default function Home() {
  return (
    <div className="mt-16 flex justify-center p-12">
      <div className="flex h-[600px] justify-between gap-10 p-24 lg:p-12">
        <div>
          <article className="flex w-[420px] flex-col gap-5">
            <h2 className="text-2xl">Welcome to my Page</h2>
            <TypeMsg />
            <section className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              eos. Illum dignissimos modi consequuntur dolorem sed inventore ut
              odio tenetur debitis blanditiis, magni quasi perspiciatis
              laudantium libero eaque iste esse!
            </section>
            <section>
              <h3 className="text-2xl">Technologies I use the most:</h3>
              <div className="flex gap-2">
                <FaHtml5 size={24} />
                <FaCss3Alt size={24} />
                <IoLogoJavascript size={24} />
                <FaReact size={24} />
                <BiLogoTailwindCss size={24} />
                <TbBrandNextjs size={24} />
                <TbBrandCypress size={24} />
                <SiJest size={24} />
              </div>
            </section>
          </article>
        </div>
        <MyImage />
      </div>
    </div>
  )
}
