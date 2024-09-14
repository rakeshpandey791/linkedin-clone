import React from "react";
import OtherUserImg from "./../../../assets/icons/other-user.jpeg";
import AuthorImg from "./../../../assets/icons/author.jpeg";
import PostImg from "./../../../assets/images/post-img.jpeg";
import LikeIcon from "./../../../assets/icons/like.svg";
import FireIcon from "./../../../assets/icons/fire.svg";
import LoveIcon from "./../../../assets/icons/love.svg";
import ClapIcon from "./../../../assets/icons/clap.svg";
import ProfileImg from "./../../../assets/icons/profile.jpeg";

const Post = () => {
  return (
    <div className="p-4 mt-5 flex flex-col bg-white border border-gray-200 rounded-md ">
      <div className="flex  items-center">
        <div className="flex items-center w-10/12">
          <img
            src={OtherUserImg}
            className="w-5 h-5 rounded-full mr-2 cursor-pointer"
            alt="other-user"
          />
          <span className="font-bold text-sm mr-2 cursor-pointer">
            Rituresh kumar rai
          </span>
          <span className="font-normal text-xs">celebrates this</span>
        </div>
        <div className="flex w-2/12">
          <div className="text-lg text-center w-8 h-8 hover:bg-gray-100 cursor-pointer rounded-full mr-2">
            ...
          </div>
          <div className="text-lg text-center w-8 h-8 hover:bg-gray-100 cursor-pointer rounded-full">
            X
          </div>
        </div>
      </div>

      <div className="mt-1 border border-gray-100 w-full"></div>

      <div className="flex items-center mt-2">
        <div className="flex items-center w-9/12">
          <img
            src={AuthorImg}
            className="w-10 h-10 rounded-full mr-2"
            alt="other-user"
          />
          <div className="flex flex-col">
            <span className="font-bold text-md cursor-pointer hover:text-blue-500">
              Shasank Pandey{" "}
              <span className="text-sm font-normal hover:text-black">
                · 2nd
              </span>
            </span>
            <span className="font-normal text-xs">
              SDE III @Walmart || React,Redux es6 || ex- Adobe
            </span>
            <span className="font-light text-xs">5h •</span>
          </div>
        </div>
        <div className="flex w-3/12 justify-end">
          <div className="text-md text-center cursor-pointe cursor-pointer py-1 px-2 text-blue-800 rounded-sm hover:bg-blue-50">
            ➕ Connect
          </div>
        </div>
      </div>

      <div className="text-sm mt-2 font-normal">
        A smarter observability solution. Learn how new AI technologies work,
        the most common use cases, and the future of AIOps and GAI in this
        eBook.
      </div>
      <div className="w-full h-full">
        <img src={PostImg} alt="post image" />
      </div>

      <div className="flex mt-3">
        <div className="w-9/12 flex">
          <img src={LikeIcon} className="w-4 h-4" alt="like" />
          <img src={FireIcon} className="w-4 h-4" alt="fire" />
          <img src={LoveIcon} className="w-4 h-4" alt="love" />
          <img src={ClapIcon} className="w-4 h-4" alt="clap" />
          <span className="text-xs font-light ml-1">422</span>
        </div>
        <div className="w-3/12 flex">
          <span className="text-xs font-normal ml-1">42 comments</span>
          <span className="text-xs font-normal ml-1">·</span>
          <span className="text-xs font-normal ml-1">1 repost</span>
        </div>
      </div>

      <div className="mt-1 border border-gray-100 w-full"></div>

      <div className="flex justify-between mt-2">
        <div className="flex justify-center items-center px-2 py-2 hover:bg-gray-100 w-full rounded-md cursor-pointer">
          <img src={LikeIcon} className="w-4 h-4" alt="like" /> Like
        </div>
        <div className="flex justify-center items-center px-2 py-2 hover:bg-gray-100 w-full rounded-md cursor-pointer">
          <img src={FireIcon} className="w-4 h-4" alt="like" /> Comment
        </div>
        <div className="flex justify-center items-center px-2 py-2 hover:bg-gray-100 w-full rounded-md cursor-pointer">
          <img src={LoveIcon} className="w-4 h-4" alt="like" /> Repost
        </div>
        <div className="flex justify-center items-center px-2 py-2 hover:bg-gray-100 w-full rounded-md cursor-pointer">
          <img src={ClapIcon} className="w-4 h-4" alt="like" /> Send
        </div>
      </div>

      <div className="flex mt-2">
        <div className="mr-2">
          <img
            src={ProfileImg}
            className="w-12 h-12 rounded-full"
            alt="profile images"
          />
        </div>
        <div
          contentEditable
          className="flex rounded-full hover:bg-gray-200 border hover:border-gray-500 cursor-pointer px-5 items-center w-full"
        >
          Add a comment...
        </div>
      </div>
    </div>
  );
};

export default Post;
