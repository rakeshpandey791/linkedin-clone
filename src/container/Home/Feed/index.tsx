import React from "react";
import CreatePost from "./createPost";
import PostContainer from "./PostContainer";

const Feed = () => {
  return (
    <div className="flex flex-col">
      <CreatePost />
      <PostContainer />
    </div>
  );
};

export default Feed;
