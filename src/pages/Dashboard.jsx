import { useState } from "react"
import { NavBar } from "../components/dashboard/NavBar"
import SideBard from "../components/SideBard"
import styled from "styled-components"
import Cards from "../components/dashboard/Cards";
import Reservations from "../components/dashboard/Reservations";
import Messages from "../components/dashboard/Messages";

const StyledContainer = styled.div`
    display: flex;
`;

const NavStretch = styled.div`
  margin-left: ${props => props.openSideBar ? "250px" : "0px"}; 
  transition: all 0.5s ease-in;
  width: ${props => props.openSideBar ? "80%" : "98%"};
  background-color: #f8f8f8;
  padding: 20px;
`;

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(true)
  return (
    <StyledContainer>
        <SideBard openSideBar={openSideBar}/>
        <NavStretch openSideBar={openSideBar}>
          <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
           <Cards/>
          <Reservations/>
          <Messages/>
        </NavStretch>
    </StyledContainer>
  )
}

export default Dashboard