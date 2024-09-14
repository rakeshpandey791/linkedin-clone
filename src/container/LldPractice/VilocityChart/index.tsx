import React from "react";
import { CHART_DATA, IChart } from "./constant";

const VilocityChart = () => {
  return (
    <div className="w-[90vw] h-[92vh] mt-5 flex justify-center items-center">
      <div className="w-[60vw] h-[60vh] border-2 border-gray-500 border-t-0 border-r-0 flex items-end m-5 relative">
        <div
          className="absolute top-32 left-[-4rem]"
          style={{ transform: "rotate(270deg)" }}
        >
          No of tickets
        </div>
        <div className="absolute bottom-[-2.5rem] left-14">Departments</div>

        {CHART_DATA?.map((item: IChart) => (
          <div
            className={`mx-2 w-16 relative flex justify-center`}
            style={{ background: item.colour, height: item.ticketCount + "vh" }}
          >
            <div className="absolute bg-black text-white py-1 px-2 rounded-md text-xs top-[-2rem] w-28 z-10 text-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VilocityChart;
