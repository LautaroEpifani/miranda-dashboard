import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../components/login/Login";
import Room from "../pages/Room";
import Bookings from "../pages/Bookings";
import BookingsDetail from "../pages/BookingsDetail";
import { getItem } from "../utils/localStorage";
import App from "../App";
import Layout from "../pages/Layout";
import NewRoom from "../pages/NewRoom";
import Contact from "../pages/Contact";
import { Users } from "../pages/Users";
import NewUser from "../pages/NewUser";
import NewBooking from "../pages/NewBooking";

const user = await getItem("loginUser");

export const router = createBrowserRouter([
  {
    path: "/",
    element: user ? <Layout/> : <Login/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "/room",
        element: <Room/>,
      },
      {
        path: "/newRoom",
        element: <NewRoom/>,
      },
      {
        path: "/bookings",
        element: <Bookings/>,
      },
      {
        path: "/newBooking",
        element: <NewBooking/>,
      },
      {
        path: "/bookings/:id",
        element: <BookingsDetail/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/users",
        element: <Users/>,
      },
      {
        path: "/newUser",
        element: <NewUser/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);
