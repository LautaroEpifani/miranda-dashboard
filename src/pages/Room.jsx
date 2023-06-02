import { redirect, useNavigate, useOutletContext } from "react-router-dom";
import { getItem } from "../utils/localStorage";
import { useEffect } from "react";
import Layout from "./Layout";
import GridTable from "../components/room/GridTable";
import Menu from "../components/room/Menu";

const Room = () => {
  const setTitle = useOutletContext()
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
