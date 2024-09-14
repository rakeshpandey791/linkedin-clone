import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Feed from "./Feed";

const Home = () => {
  return (
    <div className="flex px-32 pt-5 min-h-[100vh]">
      <div className="w-2/12">
        <LeftPanel />
      </div>

      <div className="w-6/12 mx-9">
        <Feed />
      </div>

      <div className="w-3/12">
        <RightPanel />
      </div>
    </div>
  );
};

export default Home;
