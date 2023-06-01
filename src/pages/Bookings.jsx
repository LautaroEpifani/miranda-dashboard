import React from "react";
import Layout from "./Layout";
import Menu from "../components/bookings/Menu";
import GridTable from "../components/bookings/GridTable";

const Bookings = () => {
  return (
    <Layout title="Bookings">
        <Menu/>
        <GridTable/>
    </Layout>
  );
};

export default Bookings;
