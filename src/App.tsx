import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/organisms/Header";

function App() {
  return (
    <div className="flex flex-col bg-[#f2f4ee]">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
