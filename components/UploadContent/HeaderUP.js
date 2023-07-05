import React from "react";
import yt from '../../public/youtube.png'
import Image from "next/image";
import { Input } from '@nextui-org/react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Avatar, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";


function HeaderUP() {
  const router = useRouter();


  function HomePageF() {
    router.push("/");
  }
  return (
    <div className="md:max-w-[49rem] sm:max-w-[31rem] lg:max-w-[61rem] xl:max-w-[66rem] max-w-[24rem] m-auto overflow-hidden
    ">
      <div className="flex justify-between items-center m-auto">
        <div className="relative w-20 h-12 cursor-pointer" onClick={HomePageF}>
          <Image src={yt} alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="max-w-xl min-w-xl ">
          <Input fullWidth placeholder="Search" contentRight={<SearchOutlinedIcon/>}   />
        </div>
        <div className="flex h-12 w-12 mr-24 items-center">
          <VideoCallOutlinedIcon className="m-1" />
          <AppsOutlinedIcon className="m-1"  />
          <NotificationsActiveOutlinedIcon className="m-1" />
          <Avatar
          size="md"
          src="https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/two.png"
          zoomed
        />
        </div>
      </div>
    </div>
  );
}

export default HeaderUP;
