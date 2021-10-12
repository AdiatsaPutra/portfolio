import Head from "next/head";
import { Nav } from "../components/Header";
import {
  DataDiri,
  Footer,
  Skills,
  GetInTouch,
  Portfolio,
  SocialMedia,
} from "../components/Home";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adiatsa Portfolio</title>
        <meta name="description" content="Adiatsa Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Nav />
        <DataDiri />
        <Portfolio />
        <Skills />
        <GetInTouch />
        <Footer />
        <SocialMedia />
      </div>
    </div>
  );
}
