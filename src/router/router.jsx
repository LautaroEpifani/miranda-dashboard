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

const user = await getItem("loginUser");

export const router = createBrowserRouter([
  { path: "/",
    element: <Layout />,
    children: [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/newRoom",
    element: <NewRoom/>,
  },
  {
    path: "/bookings",
    element: <Bookings />,
  },
  {
    path: "/bookings/:id",
    element: <BookingsDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]}
]);
