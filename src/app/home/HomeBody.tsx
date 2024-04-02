import React from "react";

const HomeBody = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center p-16">
        <div className="text-5xl">Descend into the dark</div>
      </div>
      <div className="flex mx-10">
        <div className="grid grid-cols-2 gap-40">
          <div>
            <div className="text-5xl my-10 font-bold">
              Brave the Depths of a Forgotten Kingdom
            </div>
            <div className="text-xl">
              Beneath the fading town of Dirtmouth sleeps a vast, ancient
              kingdom. Many are drawn beneath the surface, searching for riches,
              or glory, or answers to old secrets. As the enigmatic Knight,
              you’ll traverse the depths, unravel its mysteries and conquer its
              evils.
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/HomeImages/farm.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
