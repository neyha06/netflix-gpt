import React from "react";
import { LOGO } from "../utlis/constants";

const Header = () => {
  return (
    <div className="absolute z-20 px-8 py-2 bg-gradient-to-b  from-black">
      <img className="w-44" src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
