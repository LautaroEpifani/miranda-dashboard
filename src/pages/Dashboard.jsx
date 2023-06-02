import Cards from "../components/dashboard/Cards";
import Reservations from "../components/dashboard/Reservations";
import Messages from "../components/dashboard/Messages";
import Layout from "./Layout";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const setTitle = useOutletContext()
  useEffect(() => {
    setTitle("Dashboard")
  }, [])
  return (
    <>
          <Cards/>
          <Reservations/>
          <Messages/>
    </>
  )
}

export default Dashboard