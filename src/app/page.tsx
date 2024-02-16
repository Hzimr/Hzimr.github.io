import { MyImage } from '@/components/myImage/myImage'

export default function Home() {
  return (
    <div className="mt-16 flex items-center justify-center p-12">
      <div className="flex h-[600px] items-center justify-between gap-10 p-24 lg:p-12">
        <div>
          <article className="flex flex-col gap-5">
            <h2>Welcome to my Page</h2>
            <h1 className="text-4xl">
              Hi, I{`'`}m{' '}
              <strong className="text-second-redcolor1 ">
                Hítalo Rodrigues
              </strong>{' '}
              <br /> a Web Developer
            </h1>
            <p>Technologies I use the most:</p>
            <div className="grid grid-cols-2">
              <section className="flex flex-col">
                <h1>TALK TO ME:</h1>
                <div>oi</div>
              </section>
              <section className="flex flex-col">
                <h1>BEST SKILL ON:</h1>
                <div>oi</div>
              </section>
            </div>
          </article>
        </div>
        <MyImage />
      </div>
    </div>
  )
}
