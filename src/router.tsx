import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ROUTE_NAME } from "./constants";
import Home from "./container/Home";
import MyNetwork from "./container/MyNetwork";
import Jobs from "./container/Jobs";
import Messaging from "./container/Messaging";
import Notifications from "./container/Notifications";
import Profile from "./container/Profile";
import LldPractice from "./container/LldPractice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ROUTE_NAME.FEED,
        element: <Home />,
      },
      {
        path: ROUTE_NAME.MY_NETWORK,
        element: <MyNetwork />,
      },
      {
        path: ROUTE_NAME.JOBS,
        element: <Jobs />,
      },
      {
        path: ROUTE_NAME.MESSAGING,
        element: <Messaging />,
      },
      {
        path: ROUTE_NAME.NOTIFICATIONS,
        element: <Notifications />,
      },
      {
        path: ROUTE_NAME.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTE_NAME.LLD,
        element: <LldPractice />,
      },
    ],
  },
]);

export default router;
