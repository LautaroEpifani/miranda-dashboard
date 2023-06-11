import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Menu from "../components/bookings/Menu";
import GridTable from "../components/bookings/GridTable";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

const Bookings = () => {
  const setTitle = useOutletContext()
 
  const [searchBooking, setSearchBooking] = useState();
  useEffect(() => {
    setTitle("Bookings")
  }, [])
  return (
    <>
        <Menu searchBooking={searchBooking} setSearchBooking={setSearchBooking}/>
        <GridTable searchBooking={searchBooking}/>
    </>
  );
};

export default Bookings;
