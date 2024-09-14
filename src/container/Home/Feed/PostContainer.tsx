import React from "react";
import Post from "./Post";

const PostContainer = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex items-center">
        <div className="h-0 w-10/12 border border-gray-400 mr-5"></div>
        <div className="w-2/12 text-xs">
          Sort by: <span className="font-bold">Top ⬇️</span>{" "}
        </div>
      </div>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostContainer;
