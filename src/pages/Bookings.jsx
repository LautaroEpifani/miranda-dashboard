import React, { useEffect } from "react";
import Layout from "./Layout";
import Menu from "../components/bookings/Menu";
import GridTable from "../components/bookings/GridTable";
import { useOutletContext } from "react-router-dom";

const Bookings = () => {
  const setTitle = useOutletContext()
  useEffect(() => {
    setTitle("Bookings")
  }, [])
  return (
    <>
        <Menu/>
        <GridTable/>
    </>
  );
};

export default Bookings;
