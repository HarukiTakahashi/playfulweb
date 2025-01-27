import Head from "next/head";
import Page from "../components/page";
import Banner from "../components/banner";
import News from "../components/news";
import About from "../components/about";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Playful Laboratory</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="flex flex-col justify-center w-full sm:px-5 lg:px-20 py-5">
        <div className="h-full bg-white">
          <div className="flex-1 bg-gray-100">
            <Banner />
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <div className="py-10">
                <About name="私たちについて">
                  <p className="sm:text-base lg:text-lg">
                    私たち、立命館大学情報理工学部プレイフルインタラクション研究室は、Human-Centred
                    Designの手法を用いて実世界の問題をプレイフルに解決する集団です。研究者として、エンジニアとして、デザイナーとして、実践者として、アーティストとして、あるいはオタクとして、新しいデジタル技術を創造し、それがもたらす社会的価値や科学的価値を発見・発信します。これによって社会問題を解決することや未来の生活を楽しくすることを目指します。
                  </p>
                </About>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <News number={5}/>
              <div className="mt-6">
                <a href="/news" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                 View all
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}
