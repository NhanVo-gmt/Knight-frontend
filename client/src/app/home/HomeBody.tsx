import { homebodysections } from "@/data/HomePageData";
import React from "react";
import HomeBodySection from "./components/HomeBodySection";

const HomeBody = () => {
  return (
    <div className="bg-secondary-dark-hover pb-16">
      <div className="flex items-center justify-center p-16">
        <div className="text-6xl font-bold">Descend into the dark</div>
      </div>
      <HomeBodySection />
    </div>
  );
};

export default HomeBody;
