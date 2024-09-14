import React from "react";
import { ICircles } from "./contant";
interface ICirclesData {
  circles: Array<ICircles>;
}
const Circles: React.FC<ICirclesData> = ({ circles = [] }) => {
  return (
    <>
      {circles.map((circle, i) => (
        <div
          className="w-8 h-8 rounded-full absolute"
          style={{
            background: circle.bgColor,
            left: `${circle.x}px`,
            top: `${circle.y - 56}px`,
            transform: "translate(-50%, -50%)",
          }}
          key={i}
        ></div>
      ))}
    </>
  );
};

export default Circles;
