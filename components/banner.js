/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import About from './about'
import News from './news'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Banner() {
  return (
    <div className="h-full bg-white">
        <div>
          {/* Hero card*/}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="/images/top/home1.png"
                    layout="fill"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <Image
                      className="block lg:hidden h-8 w-auto"
                      src="/playful.svg"
                      height="80"
                      width="auto"
                      alt="Playful Laboratory"
                    />
                    <span className="block text-yellow-500">Playful</span>
                    <span className="block text-white">Laboratory</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <div className="py-16">
                <About name="私たちについて">
                  <p>
                    私たち、立命館大学情報理工学部プレイフルインタラクション研究室は、Human-Centred Designの手法を用いて実世界の問題をプレイフルに解決する集団です。研究者として、エンジニアとして、デザイナーとして、実践者として、アーティストとして、あるいはオタクとして、新しいデジタル技術を創造し、それがもたらす社会的価値や科学的価値を発見・発信します。これによって社会問題を解決することや未来の生活を楽しくすることを目指します。
                  </p>
                </About>
              </div>
              <News />
            </div>
          </div>
        </div>
    </div>
  )
}
