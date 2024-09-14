import React, { useEffect, useState } from "react";
import { COLORS, ICircles } from "./contant";
import Circles from "./Circles";
import ActionBtn from "./ActionBtn";

const AnimatedCircle = () => {
  const [circles, setCircles] = useState<Array<ICircles>>([]);
  const [history, setHistory] = useState<Array<ICircles>>([]);
  const onBoardClick = (e: any) => {
    const obj = {
      x: e.clientX,
      y: e.clientY,
      bgColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    const temp = [...circles];
    temp.push(obj);
    setCircles(temp);
  };

  const onRestart = () => {
    setCircles([]);
  };
  const onRedo = () => {
    if (history.length === 0) {
      return;
    }
    const tempHistory = [...history];
    const redoEl = tempHistory.pop();
    setHistory(tempHistory);

    const tempCircles = [...circles];
    // @ts-ignore
    tempCircles.push(redoEl);
    setCircles(tempCircles);
  };
  const onUndo = () => {
    if (circles.length === 0) {
      return;
    }
    const tempCircle = [...circles];
    const redoEl = tempCircle.pop();

    setCircles(tempCircle);

    const tempHistory = [...history];
    // @ts-ignore
    tempHistory.push(redoEl);
    setHistory(tempHistory);
  };
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative" onClick={onBoardClick}>
        <ActionBtn onRestart={onRestart} onRedo={onRedo} onUndo={onUndo} />
        <Circles circles={circles} />
      </div>
    </>
  );
};

export default AnimatedCircle;
