import { MyImage } from '@/components/myImage/myImage'
import { TypeMsg } from '@/utils/typeMsg'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandCypress } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { SiJest } from 'react-icons/si'
import { Header } from '@/components/header/header'
import { twMerge } from 'tailwind-merge'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <Header />
      <div className="mt-16 flex justify-center py-12">
        <div
          className={twMerge(
            'flex flex-col-reverse justify-between gap-10 py-12 md:h-[600px] md:flex-row md:justify-between md:py-8 lg:h-full lg:flex-col-reverse lg:justify-between xl:flex-row',
          )}
        >
          <div>
            <article className="flex w-[320px] flex-col gap-5 lg:w-[420px]">
              <h2 className="text-2xl">Welcome to my Page</h2>
              <TypeMsg />
              <section className="text-xl">
                <p>
                  Web development is more than just code; it&#39;s about turning
                  ideas into reality.
                </p>
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
      <div className="flex w-full justify-center">
        <Contact />
      </div>
    </div>
  )
}
