import { homebodysections } from "@/data/HomePageData";
import React from "react";

const HomeBodySection = () => {
  return (
    <div className="flex flex-col mx-20 gap-y-20">
      {homebodysections.map((item, index) => (
        <div
          key={item.id}
          className={`flex gap-40 items-center ${
            index % 2 == 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="basis-1/2">
            <div className="text-5xl my-10 font-semibold">{item.title}</div>
            {item.description.map((singleItem, index) => (
              <div key={index} className="text-xl line leading-10 mb-4">
                {singleItem}
              </div>
            ))}
          </div>
          <div className="flex flex-grow basis-1/2 transition-all duration-300 relative group hover:scale-105">
            <img src={item.imgUrl} alt={item.imgName} />
            <div className="absolute h-0 overflow-hidden bg-black opacity-0 bottom-0 w-full transition-all duration-500 group-hover:opacity-60 group-hover:h-1/3">
              <div className="relative mt-10 opacity-100">
                <div className="text-bold text-6xl text-center">
                  {item.imgName}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBodySection;
