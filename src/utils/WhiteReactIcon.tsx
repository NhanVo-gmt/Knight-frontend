import React, { ReactNode } from "react";
import { IconContext } from "react-icons";

const WhiteReactIcon = ({children}) => {
  return (
    <IconContext.Provider value={{ color: "white", size: "40px" }}>
      {children}
    </IconContext.Provider>
  );
};

export default WhiteReactIcon;
