import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Clubsss: create web3 powered communities</title>
        <meta name="description" content="Create web3 powered communities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full fixed p-4 bg-black flex justify-between">
        <button>
          <img src="/img/clubsss.svg" className="w-28 object-contain" />
        </button>
        <div className="flex items-center">
          <a
            href="https://discord.gg/CraUtnzK"
            target="_blank"
            rel="noopener noreferrer"
            className=" px-5 text-sm py-2 flex justify-center font-bold rounded-md justify-self-end w-fit cursor-pointer "
          >
            Discord
          </a>
          <a
            href="https://twitter.com/_clubsss"
            target="_blank"
            rel="noopener noreferrer"
            className=" px-5 text-sm py-2 flex justify-center font-bold rounded-md justify-self-end w-fit cursor-pointer "
          >
            Twitter
          </a>
          <a
            href="https://www.app.clubsss.xyz/"
            // target="_blank"
            // rel="noopener noreferrer"
            className="bg-primary px-5 text-sm py-2 flex justify-center font-bold rounded-md justify-self-end w-fit cursor-pointer  hover:brightness-90"
          >
            Launch Demo
          </a>
        </div>
      </div>
      <main className="bg-black w-full h-full min-h-screen flex overflow-hidden items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1
            data-aos-duration="2000"
            data-aos="fade-right"
            className="text-4xl md:text-5xl text-white text-center font-bold mb-1"
          >
            Building an <br /> online community? 👀
          </h1>
          <p
            data-aos-duration="2000"
            data-aos="fade-left"
            data-aos-delay="1000"
            className="w-full max-w-sm text-center mb-3 text-primary font-normal leading-[18px]"
          >
            Creating a web3 powered community(or dao) with{" "}
            <span className="font-black">clubsss</span> is as simple as creating
            a subreddit. ✨
          </p>
          <div className="flex items-center">
            <a
              href="https://www.app.clubsss.xyz/"
              // target="_blank"
              // rel="noopener noreferrer"
              className="bg-primary px-5 text-sm py-2 flex justify-center font-bold rounded-md justify-self-end w-fit cursor-pointer  hover:brightness-90"
            >
              Launch Demo
            </a>
            <a
              href="https://thoracic-cocoa-05d.notion.site/Create-A-Club-with-clubsss-03d277eb26d14180a66816f61d392c33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline px-5 text-sm py-2 flex justify-center font-bold rounded-md justify-self-end w-fit cursor-pointer  hover:brightness-90"
            >
              See Tutorial 👉
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
