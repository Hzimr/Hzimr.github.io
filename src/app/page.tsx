import { DefaultLayout } from '@/components/theme/defaultPageLayout'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { LuNewspaper } from 'react-icons/lu'

export default function Home() {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <main className="w-screen">
        <div className="bg-custom-radial flex justify-center">
          <DefaultLayout className="items-center justify-center">
            <div className="">
              <p className="text-xl text-white">
                OI, EU SOU O HÍTALO RODRIGUES
              </p>

              <div>
                <section className="flex flex-row items-center gap-7">
                  <h1 className="text-[10rem] font-bold text-white">REACT</h1>{' '}
                  <a
                    href="/pdf.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="pt-4 text-white"
                    title="Github"
                  >
                    <FaGithub size={64} />
                  </a>
                  <a
                    href="/pdf.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="pt-4 text-white"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn size={64} />
                  </a>
                  <a
                    href="/pdf.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="pt-4 text-white"
                    title="Currículo"
                  >
                    <LuNewspaper size={64} />
                  </a>
                </section>
              </div>
              <h1 className="text-[10rem] font-bold text-white">DEVELOPER</h1>
            </div>
            <p className="text-white">
              TENHO 28 ANOS SOU DESENVOLVEDOR FRONTEND COM MAIS DE 1 ANOS DE
              EXPERIÊNCIA TRABALHANDO COMO DESENVOLDEDOR{' '}
            </p>
          </DefaultLayout>
        </div>
        {/* <div className="flex w-screen bg-gradient-to-r from-[#161129] to-[#060F23]">
          <DefaultLayout>
            <div className="text-4xl text-white">
              Projetos que já desenvolvi
            </div>
          </DefaultLayout>
        </div> */}
      </main>
    </div>
  )
}
