import styled from "styled-components";
import { TbArrowsLeft } from "react-icons/tb";
import { TbArrowsRight } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

import { MdOutlineNotifications } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavTitle } from "../styledComponents/styled";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const NavContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  background-color: #FFF;
  margin-bottom: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 12px;
  color: #262626;
`;

const IconsContainer = styled(SectionContainer)`
  gap: 80px;
  font-size: 25px;
  color: #6e6e6e;
`;

const Icons = styled(SectionContainer)`
  gap: 40px;
  font-size: 25px;
  color: #135846;
`;


const NotifContainer = styled.div`
  position: relative;
  display: flex;
`;

const Notifications = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #e23428;
  width: 20px;
  height: 18px;
  border-radius: 6px;
  top: -5px;
  right: -10px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 1px;
  border: 1px solid #fff;
`;


export const NavBar = ({ openSideBar, setOpenSideBar, title }) => {
  const [emails, setEmails] = useState(2);
  const [notifications, setNotifications] = useState(87);

  const { dispatch } = useContext(AuthContext);

  return (
    <NavContainer>
      <SectionContainer>
        {openSideBar ? (
          <TbArrowsLeft
            style={{ fontSize: "25px" }}
            onClick={() => setOpenSideBar(!openSideBar)}
          />
        ) : (
          <TbArrowsRight
            style={{ fontSize: "25px" }}
            onClick={() => setOpenSideBar(!openSideBar)}
          />
        )}
        <NavTitle>{title}</NavTitle>
      </SectionContainer>
      <IconsContainer>
        <Icons>
          <NotifContainer>
            <HiOutlineMail />
            <Notifications>{emails}</Notifications>
          </NotifContainer>
          <NotifContainer>
            <MdOutlineNotifications />
            <Notifications>{notifications}</Notifications>
          </NotifContainer>
          <Link to={"/login"}  onClick={() => dispatch({ type: "logout"})}>
          <IoExitOutline style={{ color: "#135846" }}/>
          </Link>
        </Icons>
      </IconsContainer>
    </NavContainer>
  );
};
