import Head from 'next/head'
import Page from '../components/page'
import About from '../components/about'
import Faculty from '../components/faculty'
import Divider from '../components/divider'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet"></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20">
        <About name="私たちについて">
          <p>
            私たち、立命館大学情報理工学部プレイフルインタラクション研究室は、Human-Centred Designの手法を用いて実世界の問題をプレイフルに解決する集団です。研究者として、エンジニアとして、デザイナーとして、実践者として、アーティストとして、あるいはオタクとして、新しいデジタル技術を創造し、それがもたらす社会的価値や科学的価値を発見・発信します。これによって社会問題を解決することや未来の生活を楽しくすることを目指します。
          </p>
        </About>

        <Divider>aaa</Divider>
        <div className="flex flex-wrap justify-around max-w-8xl mt-8 w-full">
          <Faculty name="松村 耕平">aafdsfsdafasda</Faculty>
        </div>
      </main>
    </Page>
  )
}
