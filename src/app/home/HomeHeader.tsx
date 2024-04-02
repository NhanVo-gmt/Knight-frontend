import React, { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const HomeHeader = () => {
  return (
    <div>
      <div className="relative min-h-screen">
        <img src="/HomeImages/banner.png" alt="" className="object-cover min-h-screen"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold cursor-default">
            Little Knight
        </div>
        <div className="absolute right-10 top-10">
            <div className="flex flex-row gap-10 h-10">
                <HomeIcon Icon={FaTwitter} />
                <HomeIcon Icon={FaFacebook} />
                <HomeIcon Icon={FaInstagram} />
            </div>
        </div>
      </div>
    </div>
  );
};

type HomeIconType = {
  Icon: IconType
}

const HomeIcon = ({Icon}: HomeIconType) => {
  return <Icon className="h-full w-auto cursor-pointer"></Icon>
}

export default HomeHeader;
