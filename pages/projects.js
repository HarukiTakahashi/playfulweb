import Page from "../components/page";
import Head from "next/head";
import About from "../components/about";
import ResearchProject from "../components/researchProject";
import projects from "../public/projects.json";

export default function Projects() {
  return (
    <Page>
      <Head>
        <title>projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full sm:px-5 lg:px-20 py-5">
        <About name="研究プロジェクト">
          <p className="sm:text-base lg:text-lg">
            研究内容を紹介します。
          </p>
        </About>
          <ResearchProject projects={projects} />
      </main>
    </Page>
  );
}
