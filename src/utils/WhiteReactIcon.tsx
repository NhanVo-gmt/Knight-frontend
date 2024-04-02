import React, { ReactNode } from "react";
import { IconContext } from "react-icons";

type WhiteReactIconType = {
  children: ReactNode
}

const WhiteReactIcon = ({children} : WhiteReactIconType) => {
  return (
    <IconContext.Provider value={{ color: "white", size: "40px" }}>
      {children}
    </IconContext.Provider>
  );
};

export default WhiteReactIcon;
