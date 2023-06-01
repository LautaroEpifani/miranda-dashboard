import { redirect, useNavigate } from "react-router-dom";
import { getItem } from "../utils/localStorage";
import { useEffect } from "react";

const Room = () => {

  const navigate = useNavigate()

  const loader = async () => {
    const user = await getItem("loginUser");
    if (!user) {
      navigate("/login");
    }
  };

  useEffect(() => {

    loader()
  }, [])

  return <div>Room</div>;
};

export default Room;
