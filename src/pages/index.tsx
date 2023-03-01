import { type NextPage } from "next";
import Head from "next/head";
import SummonerSearch from "../components/common/SummonerSearch";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My TFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-800">
        <SummonerSearch/>
      </main>
    </>
  );
};

export default Home;
