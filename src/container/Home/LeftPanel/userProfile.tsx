import React from "react";
import Profile from "./../../../assets/icons/profile.jpeg";
import SavedItems from "./../../../assets/icons/saved-items.svg";

const UserProfile = () => {
  return (
    <div className="flex flex-col ">
      <div className="h-14 w-full rounded-tl-md rounded-tr-md bg-gray-500 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-14">
          <img
            src={Profile}
            className="rounded-full h-20 w-20 "
            alt="user profile image"
          />
        </div>
      </div>
      <div className="mt-16 cursor-pointer font-bold text-lg flex items-center justify-center">
        Rakesh Pandey
      </div>
      <div className="mt-2 px-4 font-light text-sm text-gray-700 flex items-center justify-center flex-wrap">
        Tech Lead at BharatPe | Ex-Ivanti | Enhancing User Experience Through
        Frontend Excellence | Tech Leadership
      </div>
      <div className="mt-2 border border-gray-100 w-full"></div>
      <div className="flex justify-between px-2 py-1 mt-4  hover:bg-gray-100 cursor-pointer">
        <div className="text-xs font-bold text-gray-500">Profile viewers</div>
        <div className="text-xs text-blue-400 font-semibold">118</div>
      </div>
      <div className="flex justify-between px-2 py-1  hover:bg-gray-100 cursor-pointer">
        <div className="text-xs flex flex-col font-bold text-gray-500">
          <div>Connections</div>
          <div className="font-bold text-black">Manage your network</div>
        </div>
        <div className="text-xs text-blue-400 font-semibold">2016</div>
      </div>
      <div className="mt-2 border border-gray-100 w-full"></div>
      <div className="mt-2 px-2 py-1 font-light text-xs text-gray-900 flex flex-col items-center justify-center hover:bg-gray-100 cursor-pointer">
        <div>Strengthen your profile with an AI writing assistant</div>
        <div className="font-bold text-xs mt-2">
          Reactivate Premium: 50% Off
        </div>
      </div>
      <div className="mt-2 border border-gray-100 w-full"></div>

      <div className="flex px-2 py-3 hover:bg-gray-100 cursor-pointer">
        <div className="">
          <img src={SavedItems} alt="saved items" />
        </div>
        <div className="text-xs font-bold">Saved items</div>
      </div>
    </div>
  );
};

export default UserProfile;
