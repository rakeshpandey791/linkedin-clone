import React from "react";

const newsData = [
  {
    title: "Avani Lekhara creates history",
    subTitle: "1d ago • 7,477 readers",
  },
  {
    title: "Moody’s, Fitch upbeat on India",
    subTitle: "1d ago • 1,779 readers",
  },
  {
    title: "Zepto raises $340 million",
    subTitle: "2d ago • 13,019 readers",
  },
  {
    title: "Internships are getting longer",
    subTitle: "2d ago • 3,855 readers",
  },
  {
    title: "Global ad firms head to India",
    subTitle: "3d ago • 3,523 readers",
  },
];

const News = () => {
  return (
    <div className="flex flex-col bg-white py-4">
      <div className="flex p-4">
        <span className="text-xl font-bold w-11/12">LinkedIn News</span>
        <span className="w-1/12">ℹ️</span>
      </div>
      <div className="flex px-4">
        <span className="text-md font-medium text-gray-500">Top stories</span>
      </div>
      {newsData?.map((news) => (
        <div
          className="flex flex-col px-4 hover:bg-gray-100 py-2 cursor-pointer"
          key={news.title}
        >
          <span className="text-sm font-medium">{news.title}</span>
          <span className="text-xs font-light text-gray-500">
            {news.subTitle}
          </span>
        </div>
      ))}
      <div className="flex flex-col px-4 ">
        <span className="w-5/12 text-sm font-medium hover:bg-gray-100 p-1 cursor-pointer rounded-sm">
          Show more ⬇️
        </span>
      </div>
    </div>
  );
};

export default News;
