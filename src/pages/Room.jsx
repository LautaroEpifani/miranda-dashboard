import { redirect, useNavigate, useOutletContext } from "react-router-dom";
import { getItem } from "../utils/localStorage";
import { useEffect } from "react";
import Layout from "./Layout";
import GridTable from "../components/room/GridTable";
import Menu from "../components/room/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../features/rooms/roomsSlice";

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
