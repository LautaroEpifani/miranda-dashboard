import styled from "styled-components";
import logo from "../../assets/logo.png";
import guest from "../../assets/guest.jpg";
import { RxDashboard } from "react-icons/rx";
import { TfiKey } from "react-icons/tfi";
import { BsCalendarCheck } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlinePuzzle } from "react-icons/hi";
import { useState } from "react";

const SbContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  width: 16%;
  font-family: "Poppins", sans-serif;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
  padding-left: 40px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LinkContainer = styled.div<{ $primary  }>`
  display: flex;
  gap: 25px;
  align-items: center;
  color: #799283;
  font-weight: bold;
  font-size: 20px;
  padding-left: 40px;
   padding-top: 10px;
   padding-bottom: 10px;
   color: ${props => props.$primary ? "white" : "#BF4F74"};
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 300;
  color: #799283;
  font-size: 15px;
 
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

const CardTitle = styled.div`
  font-size: 12px;
  color: #393939;
  font-weight: 600;
  width: 80%;
  margin: 0 auto;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Email = styled.div`
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
  width: 100%;
  width: 80%;
`;

const Rights = styled.div`
  font-size: 9px;
  color: #799283;
  font-weight: 300;
  width: 80%;
`;

const SideBard = () => {
  const [activeLink, setActiveLink] = useState([false, false, false, false, false]);

  return (
    <SbContainer>
      <LogoContainer>
        <img src={logo} alt="" width={200} height={50} />
      </LogoContainer>
      <LinksContainer>
        <LinkContainer $primary onClick={() => setActiveLink([...activeLink, activeLink[0] === true])} active={activeLink[0]}>
          <RxDashboard />
          <StyledLink href="/" alt="">
            Dashboard
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <TfiKey />
          <StyledLink href="/" alt="">
            Room
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <BsCalendarCheck />
          <StyledLink href="/" alt="">
            Bookings
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <BiUser />
          <StyledLink href="/" alt="">
            Guest
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <HiOutlinePuzzle />
          <StyledLink href="/" alt="">
            Concierge
          </StyledLink>
        </LinkContainer>
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
