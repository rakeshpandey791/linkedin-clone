import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./../../../assets/icons/logo.webp";
import HomeMenu from "./../../../assets/icons/home.svg";
import MyNetwork from "./../../../assets/icons/my-network.svg";
import Jobs from "./../../../assets/icons/jobs.svg";
import Messaging from "./../../../assets/icons/messaging.svg";
import Notifications from "./../../../assets/icons/notifications.svg";
import Profile from "./../../../assets/icons/profile.jpeg";
import ForBusiness from "./../../../assets/icons/for-business.svg";
import Learning from "./../../../assets/icons/learning.svg";
import SearchIcon from "./../../../assets/icons/search-icon.svg";
import { ROUTE_NAME } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../../../store/feedSlice";
import { AppDispatch } from "../../../store";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const feeds = useSelector((state: any) => state?.feedSlice);
  console.log("feeds", feeds);

  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  const currentPath = location?.pathname;

  const menuNavigation = (menu: string) => {
    navigate(menu);
  };
  return (
    <div className="flex h-14 border-b-2 px-32 items-center bg-white">
      {/* Logo section start */}
      <div
        className="cursor-pointer"
        onClick={() => menuNavigation(ROUTE_NAME.FEED)}
      >
        <img src={Logo} className="w-10 h-10" alt="logo" />
      </div>
      {/* Logo section end */}

      {/* Search section start */}
      <div className="ml-2 mr-10">
        <input
          type="text"
          placeholder="Search"
          className="h-9 px-2 w-64 bg-[#edf3f8] border[#edf3f8] rounded-sm focus:scale-x-150 focus:origin-left"
        />
        <div className="absolute">
          <img src={SearchIcon} className="absolute" alt="search icon" />
        </div>
      </div>
      {/* Search section start */}

      {/* Menu section start */}
      <div className="flex ml-28 items-center justify-center text-xs">
        {/* Add Class border-b-2 border-black for selected menu */}
        <div
          className={`flex px-4 justify-center items-center flex-col h-14 cursor-pointer ${
            currentPath === "/" + ROUTE_NAME.FEED && "border-b-2 border-black"
          }`}
          onClick={() => menuNavigation(ROUTE_NAME.FEED)}
        >
          <img src={HomeMenu} alt="Home menu" />
          Home
        </div>
        <div
          className={`flex px-4 justify-center items-center flex-col h-14 cursor-pointer ${
            currentPath === "/" + ROUTE_NAME.MY_NETWORK &&
            "border-b-2 border-black"
          }`}
          onClick={() => menuNavigation(ROUTE_NAME.MY_NETWORK)}
        >
          <img src={MyNetwork} alt="My Network" />
          My Network
        </div>
        <div
          className={`flex px-4 justify-center items-center flex-col h-14 cursor-pointer ${
            currentPath === "/" + ROUTE_NAME.JOBS && "border-b-2 border-black"
          }`}
          onClick={() => menuNavigation(ROUTE_NAME.JOBS)}
        >
          <img src={Jobs} alt="Home menu" />
          Jobs
        </div>
        <div
          className={`flex px-4 justify-center items-center flex-col h-14 cursor-pointer ${
            currentPath === "/" + ROUTE_NAME.MESSAGING &&
            "border-b-2 border-black"
          }`}
          onClick={() => menuNavigation(ROUTE_NAME.MESSAGING)}
        >
          <img src={Messaging} alt="Home menu" />
          Messaging
        </div>
        <div
          className={`flex px-4 justify-center items-center flex-col h-14 cursor-pointer ${
            currentPath === "/" + ROUTE_NAME.NOTIFICATIONS &&
            "border-b-2 border-black"
          }`}
          onClick={() => menuNavigation(ROUTE_NAME.NOTIFICATIONS)}
        >
          <img src={Notifications} alt="Home menu" />
          Notifications
        </div>
        <div
          className={`flex px-4 justify-center items-center flex-col h-14 cursor-pointer ${
            currentPath === "/" + ROUTE_NAME.PROFILE &&
            "border-b-2 border-black"
          }`}
          onClick={() => menuNavigation(ROUTE_NAME.PROFILE)}
        >
          <img src={Profile} className="w-6 h-6 rounded-full" alt="Home menu" />
          Me
        </div>
        <div className="border h-14 mx-5"></div>
        <div className="flex px-4 justify-center items-center flex-col h-14 cursor-pointer">
          <img src={ForBusiness} alt="Home menu" />
          For Business
        </div>
        <div className="flex px-4 justify-center items-center flex-col h-14 cursor-pointer">
          <img src={Learning} alt="Home menu" />
          Learning
        </div>
      </div>
      {/* Menu section start */}
    </div>
  );
};

export default Header;
