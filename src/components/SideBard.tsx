import styled from "styled-components";
import logo from "../assets/logo.png";
import guest from "../assets/guest.jpg";
import { RxDashboard } from "react-icons/rx";
import { TfiKey } from "react-icons/tfi";
import { BsCalendarCheck } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlinePuzzle } from "react-icons/hi";
import {  useEffect, useState } from "react";
import { LogoContainer } from "../styledComponents/styled";
import { Link } from "react-router-dom";
import React from "react";

const SbContainer = styled.div<{openSideBar: boolean}>`
  position: absolute;
  transform: ${(props) =>
    props.openSideBar ? "translate(0px)" : "translate(-250px)"};
  transition: transform 0.5s ease-in;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 16%;
  padding-right: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LinkContainer = styled.div<{active: boolean}>`
  display: flex;
  gap: 25px;
  align-items: center;
  font-weight: bold;
  color: ${(props) => (props.active ? "#E23428" : "#799283")};
  font-size: 20px;
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: ${(props) => (props.active ? "4px solid #E23428" : "none")};
  border-radius: 4px 0px 0px 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ContainerNavLink = styled.div<{active: boolean}>`
  font-weight: 300;
  color: #799283;
  font-size: 15px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#E23428" : "#799283")};
`;

const CardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 8px 15px #b3c0c6;
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: center;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const CardTitle = styled.h1`
  font-size: 12px;
  color: #393939;
  font-weight: 600;
  width: 80%;
  margin: 0 auto;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Email = styled.h6`
  color: #b2b2b2;
  font-size: 10px;
  font-weight: 400;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 12px;
`;

const ContactUsButton = styled.button`
  padding: 4px;
  padding-left: 12px;
  padding-right: 12px;
  border: solid 5px rgba(0, 0, 0, 0);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #135846;
`;

const FootTitle = styled(CardTitle)`
  font-weight: 900;
  width: 80%;
`;

const Rights = styled.h6`
  font-size: 9px;
  color: #799283;
  font-weight: 300;
  width: 80%;
  margin: 0 auto;
`;

interface Props {
  openSideBar: boolean;
}

const SideBard = ({ openSideBar }: Props) => {
  const [activeLink, setActiveLink] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const changeActive = (index: number) => {
    let updatedLinks = [...activeLink];
    for (let i = 0; i < updatedLinks.length; i++) {
      updatedLinks[i] = false;
    }
    updatedLinks[index] = true;
   setActiveLink(updatedLinks)
    ;
  };


  return (
    <SbContainer openSideBar={openSideBar}>
      <LogoContainer>
        <img src={logo} alt="" width={200} height={50} />
      </LogoContainer>

      <LinksContainer>
        <StyledLink to="/">
          <LinkContainer onClick={() => changeActive(0)} active={activeLink[0]}>
            <RxDashboard />
            <ContainerNavLink active={activeLink[0]}>Dashboard</ContainerNavLink>
          </LinkContainer>
        </StyledLink>
        <StyledLink to="/room">
          <LinkContainer onClick={() => changeActive(1)} active={activeLink[1]}>
            <TfiKey />
            <ContainerNavLink active={activeLink[1]}>Room</ContainerNavLink>
          </LinkContainer>
        </StyledLink>
        <StyledLink to="/bookings">
          <LinkContainer onClick={() => changeActive(2)} active={activeLink[2]}>
            <BsCalendarCheck />
            <ContainerNavLink active={activeLink[2]}>Bookings</ContainerNavLink>
          </LinkContainer>
        </StyledLink>

    <StyledLink to="/contact">
        <LinkContainer onClick={() => changeActive(3)} active={activeLink[3]}>
          <BiUser />
          <ContainerNavLink active={activeLink[3]}>Contact</ContainerNavLink>
        </LinkContainer>
        </StyledLink>
        <StyledLink to="/users">
        <LinkContainer onClick={() => changeActive(4)} active={activeLink[4]}>
          <HiOutlinePuzzle />
          <ContainerNavLink active={activeLink[4]}>Users</ContainerNavLink>
        </LinkContainer>
        </StyledLink>
      </LinksContainer>
      <CardContainer>
        <img
          style={{ borderRadius: "10px" }}
          src={guest}
          alt=""
          width={50}
          height={50}
        />
        <CardTitle>William Johanson</CardTitle>
        <Email>williamjh@gmail.com</Email>
        <ContactUsButton>Contact Us</ContactUsButton>
      </CardContainer>
      <div className="footerContainer">
        <FootTitle>Tavl Hotel Admin Dashboard</FootTitle>
        <Rights>© 2023 All Rights Reserved</Rights>
      </div>
    </SbContainer>
  );
};

export default SideBard;
