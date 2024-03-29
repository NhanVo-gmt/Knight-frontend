"use client"

import React, { useState } from "react";

type HomePageType = {
  imgUrl: string;
  width?: number;
  height?: number;
  imgName: string;
};

const defaultWidth = 700;
const defaultHeight = 400;

const HomePageImage = ({ imgUrl, width, height, imgName }: HomePageType) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`flex transition-transform duration-150 ${isHover ? "scale-105" : "scale-100"}`}
    >
      <img
        src={imgUrl}
        sizes="100vw"
        alt={imgName}
        className="object-cover block w-full h-full"
      />
    </div>
  );
};

export default HomePageImage;
