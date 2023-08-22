import React, { useEffect, useState } from "react";
import Menu from "../components/bookings/Menu";
import GridTable from "../components/bookings/GridTable";
import { useOutletContext } from "react-router-dom";
import { Booking } from "../interfaces/interfaces";

const Bookings = () => {
  const setTitle: (arg0: string) => void = useOutletContext()
  const [searchBooking, setSearchBooking] = useState<Booking[] | null>(null);
  useEffect(() => {
    setTitle("Bookings")
  }, [])
  return (
    <>
        <Menu setSearchBooking={setSearchBooking}/>
        <GridTable searchBooking={searchBooking}/>
    </>
  );
};

export default Bookings;
