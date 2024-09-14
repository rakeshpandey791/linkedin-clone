import React from "react";
import UserProfile from "./userProfile";

const LeftPanel = () => {
  return (
    <div className="flex flex-col  ">
      <div className="w-full h-[30rem] bg-white rounded-md">
        <UserProfile />
      </div>
    </div>
  );
};

export default LeftPanel;
