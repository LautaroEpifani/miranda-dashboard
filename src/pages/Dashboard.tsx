import Cards from "../components/dashboard/Cards";
import Reservations from "../components/dashboard/Reservations";
import Messages from "../components/dashboard/Messages";
import Layout from "./Layout";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

const Dashboard = () => {
  const setTitle: (arg0: string) => void = useOutletContext();
  useEffect(() => {
    setTitle("Dashboard");
  }, []);
  return (
    <>
          <Cards/>
          <Reservations/>
          <Messages/>
    </>
  )
}

export default Dashboard