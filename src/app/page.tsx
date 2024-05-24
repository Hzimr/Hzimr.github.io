import { DefaultLayout } from '@/components/theme/defaultPageLayout'

export default function Home() {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <main className="w-screen">
        <div className="flex justify-center bg-gradient-to-br from-[#ff0083] to-[#ae0036]">
          <DefaultLayout>
            <div className="">
              <p className="text-xl text-white">
                OI, EU SOU O HÍTALO RODRIGUES
              </p>

              <a
                href="/pdf.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                PDF
              </a>

              <div>
                <h1 className="text-[10rem] font-bold text-white">REACT</h1>
                <section></section>
              </div>
              <h1 className="text-[10rem] font-bold text-white">DEVELOPER</h1>
            </div>
            <p className="text-white">
              TENHO 28 ANOS SOU DESENVOLVEDOR FRONTEND COM MAIS DE 1 ANOS DE
              EXPERIÊNCIA TRABALHANDO COMO DESENVOLDEDOR{' '}
            </p>
          </DefaultLayout>
        </div>
        <div className="flex w-screen justify-center bg-gradient-to-r from-[#161129] to-[#060F23]">
          <DefaultLayout>
            <div className=""></div>
          </DefaultLayout>
        </div>
      </main>
    </div>
  )
}
