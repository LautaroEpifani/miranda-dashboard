import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../components/login/Login";
import Room from "../pages/Room";
import Guest from "../pages/Guest";
import Bookings from '../pages/Bookings'
import Concierge from '../pages/Concierge'
import Reviews from '../pages/Reviews'
import BookingsDetail from "../pages/BookingsDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
      {
        path: "room",
        element: <Room/>,
      },
      {
        path: "bookings",
        element: <Bookings/>,
      },
      {
        path: "bookings/:id",
        element: <BookingsDetail/>,
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
  
]);
