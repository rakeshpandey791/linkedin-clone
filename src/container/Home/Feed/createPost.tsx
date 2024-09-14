import React from "react";
import ProfileImg from "./../../../assets/icons/profile.jpeg";
import MediaIcon from "./../../../assets/icons/media.svg";
import PostJobsIcon from "./../../../assets/icons/post-jobs.svg";
import ArticleIcon from "./../../../assets/icons/article.svg";

const CreatePost = () => {
  return (
    <div className="flex flex-col bg-white p-5 border border-gray-200 rounded-md">
      <div className="flex">
        <div className="mr-2">
          <img
            src={ProfileImg}
            className="w-12 h-12 rounded-full"
            alt="profile images"
          />
        </div>
        <div className="flex rounded-full hover:bg-gray-200 border hover:border-gray-500 cursor-pointer px-5 items-center w-full">
          Start a post, try writing with AI
        </div>
      </div>

      <div className="flex justify-between mt-5 px-10">
        <div className="flex px-3 py-4 hover:bg-gray-200 cursor-pointer rounded-md">
          <img
            src={MediaIcon}
            className="bg-blue-900 rounded-md mr-3"
            alt="Media icon"
          />{" "}
          Media
        </div>
        <div className="flex px-3 py-4 hover:bg-gray-200 cursor-pointer rounded-md">
          <img
            src={PostJobsIcon}
            className="bg-purple-900 rounded-md mr-3"
            alt="Media icon"
          />{" "}
          Jobs
        </div>
        <div className="flex px-3 py-4 hover:bg-gray-200 cursor-pointer rounded-md">
          <img
            src={ArticleIcon}
            className="bg-red-500 rounded-md mr-3"
            alt="Media icon"
          />{" "}
          Write article
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
