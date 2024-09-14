import React, { useEffect, useState } from "react";
import DATA from "./constant";

const CountryCapitalGame = () => {
  const [data, setData] = useState<Object>(DATA);
  const [renderData, setRenderData] = useState<Array<string>>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCapital, setSelectedCapital] = useState<string>("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<string>("");

  const handleItemClick = (e: any) => {
    if (selectedCountry === "") {
      setSelectedCountry(e.target.innerText);
      return;
    }

    if (selectedCapital === "") {
      setSelectedCapital(e.target.innerText);
      return;
    }
  };

  const getDynamicClasses = (item: string) => {
    let classStr = "";
    if (selectedCapital === item || selectedCountry === item) {
      classStr = "border-green-500";
    }

    if (
      (selectedCapital === item || selectedCountry === item) &&
      isAnswerCorrect === "CORRECT"
    ) {
      classStr += " bg-green-500";
    } else if (
      (selectedCapital === item || selectedCountry === item) &&
      isAnswerCorrect === "INCORRECT"
    ) {
      classStr += " bg-purple-500";
    }

    return classStr;
  };

  useEffect(() => {
    // @ts-ignore
    if (data[selectedCountry] === selectedCapital) {
      setIsAnswerCorrect("CORRECT");
    } else {
      setIsAnswerCorrect("INCORRECT");
    }
  }, [selectedCapital]);

  useEffect(() => {
    const tempData = [];
    for (let key in DATA) {
      tempData.push(key);
      // @ts-ignore
      tempData.push(DATA[key]);
    }
    setRenderData(tempData);
  }, []);
  return (
    <div className="flex flex-wrap" onClick={handleItemClick}>
      {renderData.map((item, index) => (
        <div
          key={index}
          className={`flex justify-center items-center h-10 px-2 py-1
           rounded-md border border-gray-500 text-sm m-5 cursor-pointer
            ${getDynamicClasses(item)}  bg-white
            `}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CountryCapitalGame;
