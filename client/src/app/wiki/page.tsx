import WikiPageImage from "@/components/WikiPage/WikiPageImage";
import WikiPageSection from "@/components/WikiPage/WikiPageSection";
import { homepageimages, homepagesections } from "@/data/HomePageData";
import React from "react";

const WikiPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full py-4 px-8 bg-gradient-to-b from-secondary-dark-hover to-secondary-dark">
      <div className="text-3xl font-bold py-4">Wiki</div>
      <div>
        {homepagesections.map((item) => (
          <WikiPageSection
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
        <div className="grid gap-8 gap-y-6 grid-cols-[repeat(auto-fill,minmax(600px,1fr))] justify-center px-10">
          {homepageimages.map((item) => (
            <WikiPageImage key={item.id} imgUrl={item.imgUrl} imgName={item.imgName}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WikiPage;
