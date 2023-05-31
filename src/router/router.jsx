import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../components/login/Login";
import Room from "../pages/Room";
import Guest from "../pages/Guest";
import Bookings from '../pages/Bookings'
import Concierge from '../pages/Concierge'
import Reviews from '../pages/Reviews'

createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "room",
        element: <Room/>,
      },
      {
        path: "bookings",
        element: <Bookings/>,
      },
      {
        path: "guest",
        element: <Guest/>,
      },

      {
        path: "concierge",
        element: <Concierge/>,
      },
      {
        path: "reviews",
        element: <Reviews/>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
      },
    ],
  },
]);
