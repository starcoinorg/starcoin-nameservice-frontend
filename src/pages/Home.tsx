import "./Home.css";
import React from "react";
import { Nav } from "../components/Nav/Nav";
import { Notification } from "../components/Notification/Notification";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const Home = () => (
  <div className="home">
    <Nav />

    <main>
      <img
        id="home-logo"
        className="max-h-[200px] ease-in duration-200 hover:scale-150 hover:my-10 animate-pulse hover:animate-none"
        src="https://app.ens.domains/static/media/ENSLogo.7345281bf4086d716e34fd63fabcb4aa.svg"
      ></img>
      <h1 className="text-lg">
        迅猛的 <span className=" text-green-400 text-xl">SWC</span> 美观的{" "}
        <span className=" text-blue-200 text-xl">React</span> 和便捷的{" "}
        <span className=" text-xl text-blue-300">Tailwind</span>
      </h1>
      <h3>现在享受你的Web时光吧~</h3>
      <SearchBar />
      <div className="max-w-[80%]">

        <Notification
          link_to=""
          title="STCNS constitution book now available"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />
      </div>

    </main>



    <footer className=" mt-20">
      <ul className=" bg-brightblue justify-center p-4">
        <li>
          <a
            className="text-white"
            href="https://reactjs.org/docs/hello-world.html"
          >
            React Guide
          </a>
        </li>
        <li>
          <a
            className="text-white"
            href="https://basarat.gitbook.io/typescript/getting-started"
          >
            Typescript Online book
          </a>
        </li>
        <li>
          <a
            className="text-white"
            href="https://swc-project.github.io/docs/usage-swc-loader"
          >
            Swc-loader config doc
          </a>
        </li>
        <li>
          <a
            className="text-white"
            href="https://https://tailwindcss.com/docs/"
          >
            Tailwind config doc
          </a>
        </li>
      </ul>
    </footer>
  </div>
);
