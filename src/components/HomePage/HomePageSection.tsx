import React from "react";

type HomePageSectionType = {
  title: string;
  description: string;
  imgUrl?: string;
};

const HomePageSection = ({title, description, imgUrl} : HomePageSectionType) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-5 ">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-2xl text-center max-w-[800px]">
        {description}
      </p>
    </div>
  );
};

export default HomePageSection;
