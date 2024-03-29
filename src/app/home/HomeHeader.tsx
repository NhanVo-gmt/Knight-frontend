import React from "react";
import { FaTwitter } from "react-icons/fa";


const HomeHeader = () => {
  return (
    <div>
      <div className="relative">
        <img src="/HomeImages/banner.png" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold">
            Little Knight
        </div>
        <div className="absolute right-10 top-10">
            <div className="flex flex-row gap-6">
                <FaTwitter className="w-8 h-8"/>
                <FaTwitter className="w-8 h-8"/>
                <FaTwitter className="w-8 h-8"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
