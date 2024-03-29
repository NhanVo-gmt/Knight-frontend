import HomePageImage from "@/components/HomePage/HomePageImage";
import HomePageSection from "@/components/HomePage/HomePageSection";
import { homepageimages, homepagesections } from "@/data/HomePageData";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full py-4 px-8 ">
      <div className="text-3xl font-bold py-4">Home</div>
      <div>
        {homepagesections.map((item) => (
          <HomePageSection
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
        <div className="grid gap-8 gap-y-6 grid-cols-[repeat(auto-fill,minmax(600px,1fr))] justify-center px-10">
          {homepageimages.map((item) => (
            <HomePageImage key={item.id} imgUrl={item.imgUrl} imgName={item.imgName}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
