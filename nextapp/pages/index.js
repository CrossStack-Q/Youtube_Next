import Head from "next/head";
import Image from "next/image";
import HeaderUP from "../components/UploadContent/HeaderUP";
import SidebarS from "../components/HomeQ/Sidebar/SidebarS";
import HeaderT from "../components/HomeQ/Header/HeaderT";
import HomeNavbar from "../components/HomeQ/HomeNavbar/HomeNavbar";
import MainQ from "../components/HomeQ/MainQ/MainQ"
import { useRouter } from 'next/router';



function Home() {
  return (
    <div className="!bg-[#1D1F22]">
      <Head>
        <title>Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-[100vh] ">
        <div className="bg-[#151719] max-w-[3rem] min-w-[3rem] flex justify-center -ml-[8px]">
          <SidebarS />
        </div>
        <div>
          <div className="text-white bg-[#1D1F22] flex flex-1 pt-8">
            <HeaderT />
          </div>
          <div>
            <HomeNavbar />
          </div>
          <div>
            <MainQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
