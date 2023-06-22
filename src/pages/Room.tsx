import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import GridTable from "../components/room/GridTable";
import Menu from "../components/room/Menu";
import React from "react";

const Room = () => {
  const setTitle: (arg0: string) => void = useOutletContext()
  useEffect(() => {
    setTitle("Room")
  }, [])
  return (
  <>
      <Menu/>
      <GridTable/>
  </>
  )
};

export default Room;
