import {useContext, useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import SideBard from "../components/SideBard";
import styled from "styled-components";
import { Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import React from "react";
import AuthContext from "../context/AuthContext";
import { getItem, setItem } from "../utils/localStorage";

const StyledContainer = styled.div`
  display: flex;
`;

const NavStretch = styled.div<{openSideBar: boolean}>`
  margin-left: ${(props) => (props.openSideBar ? "250px" : "0px")};
  transition: all 0.5s ease-in;
  width: ${(props) => (props.openSideBar ? "84%" : "100%")};
  background-color: #f8f8f8;
`;

interface Props {
  children: React.ReactNode
}

const Layout =  ({ children }: Props) => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const [title, setTitle] = useState("");
  
  const { userState } = useContext(AuthContext)

  useEffect(() => {
    setItem("loginUser", userState);
   
  }, [userState]);

  return (
    <>
    {Object.keys(userState).length !== 0  ?
    <StyledContainer>
      <SideBard openSideBar={openSideBar} />
      <NavStretch openSideBar={openSideBar}>
        <NavBar
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
          title={title}
        />
        <Outlet context={setTitle} />
      </NavStretch>
    </StyledContainer>
    : 
    <Navigate to="/login"/>
    }
    </>
  );
};

export default Layout;
