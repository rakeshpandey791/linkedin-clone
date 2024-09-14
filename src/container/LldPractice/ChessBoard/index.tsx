// @ts-nocheck
import React, { useState } from "react";
import { GRID_SIZE } from "./constant";

const ChessBoard = () => {
  const [grids, setGrids] = useState([]);
  const [selectedGrid, setSelectedGrid] = useState();

  const prepareGrid = (a: number, b: number) => {
    var arr = new Array(a);
    for (var i = 0; i < a; i++) {
      arr[i] = new Array(b);
      for (let j = 0; j < b; j++) {
        arr[i][j] = j;
      }
    }
    return arr;
  };

  const handleTileClick = (e) => {
    setSelectedGrid(e.target.dataset.item);
  };

  useState(() => {
    const gridArr = prepareGrid(GRID_SIZE, GRID_SIZE);
    console.log(gridArr);

    // @ts-ignore
    setGrids(gridArr);
  });
  return (
    <div className="flex flex-col" onClick={handleTileClick}>
      {grids?.map((item, i) => (
        <div className="flex flex-row " key={i}>
          {item?.map((col, j) => (
            <div
              data-item={`${i}-${j}`}
              className={`w-10 h-10  ${
                parseInt(selectedGrid?.split("-")[0]) +
                  parseInt(selectedGrid?.split("-")[1]) ===
                i + j
                  ? "bg-pink-500"
                  : (i + j) % 2 === 0
                  ? "bg-white"
                  : "bg-black"
              } border-2 border-gray-100`}
              key={j}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
