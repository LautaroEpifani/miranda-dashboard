import { useState } from "react"
import { NavBar } from "../components/NavBar"
import SideBard from "../components/SideBard"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
`;

const NavStretch = styled.div`
  margin-left: ${props => props.openSideBar ? "250px" : "0px"}; 
  transition: all 0.5s ease-in;
  width: ${props => props.openSideBar ? "84%" : "100%"};
  background-color: #f8f8f8;
`;

const Layout = ({ children, title }) => {
  const [openSideBar, setOpenSideBar] = useState(true)
  return (
    <StyledContainer>
        <SideBard openSideBar={openSideBar}/>
        <NavStretch openSideBar={openSideBar}>
          <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} title={title}/>
           { children }
        </NavStretch>
    </StyledContainer>
  )
}

export default Layout