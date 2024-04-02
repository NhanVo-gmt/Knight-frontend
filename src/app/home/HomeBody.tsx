import { homebodysections } from "@/data/HomePageData";
import React from "react";

const HomeBody = () => {
  return (
    <div className="bg-secondary-dark-hover">
      <div className="flex items-center justify-center p-16">
        <div className="text-6xl font-bold">Descend into the dark</div>
      </div>
      <div className="flex flex-col mx-20 gap-y-20">
        {homebodysections.map((item, index) => (
          <div key={item.id} className={`flex gap-40 items-center ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}>
            <div className="basis-1/2">
              <div className="text-5xl my-10 font-semibold">
                {item.title}
              </div>
              <div className="text-xl">
                {item.description}
              </div>
            </div>
            <div className="flex flex-grow basis-1/2 transition-transform duration-300 hover:scale-105 relative">
              <img src={item.imgUrl} alt={item.imgName} />
              <div className="absolute hidden hover:block text-10xl">Hello</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBody;
