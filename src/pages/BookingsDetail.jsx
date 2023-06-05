import styled from "styled-components";
import { ContainerBetween } from "../styledComponents/styled";
import { useLocation, useOutletContext } from "react-router-dom";
import Layout from "./Layout";
import Room1 from "../assets/room1.jpg";
import Room1front from "../assets/room1front.jpg";
import guestImage from "../assets/guest.jpg";
import { SliderButtons } from "../components/dashboard/Messages";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Amenities, AmenitiesLittle } from "../components/Amenities";
import { IoBedOutline } from "react-icons/io5";

const DetailContainer = styled(ContainerBetween)`
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  margin: 40px;
  border-radius: 10px;
`;

const Details = styled(ContainerBetween)`
  display: block;
  width: 50%;
 padding-top: 20px;
 padding-left: 40px;
`;

const SliderContainer = styled(ContainerBetween)`
  position: relative;
`;

const GuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 25px;
  color: #212121;
  font-weight: 600;
`;

const IdGuest = styled.h1`
  font-size: 15px;
  font-weight: 300;
  margin-top: 20px;
`;

const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledImage = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 8px;
`;

const CheckContainer = styled(ContainerBetween)`
  margin-top: 20px;
  margin-bottom: 30px;
  padding-right: 200px;
`;

const RoomContainer = styled(ContainerBetween)`
  margin-bottom: 30px;
   padding-right: 190px;
`;

const StyledH1 = styled.h1`
  color: #6e6e6e;
  font-size: 12px;
`;

const StyledH1Price = styled.h1`
  color: #6e6e6e;
  font-size: 12px;
  font-weight: 300;
  margin-top: 5px;
`;

const StyledSpan = styled.span`
  color: #212121;
  font-size: 15px;
  font-weight: 600;
`;

const StyledSpan2 = styled.span`
  color: #212121;
  font-size: 18px;
  display: flex;
  font-weight: 600;
`;

const SpecialRequest = styled.h1`
  color: #363636;
  font-size: 10px;
  margin-bottom: 30px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const SliderDetails = styled.div`
  position: absolute;
  padding-left: 50px;
  padding-right: 50px;
  color: #fff;
  top: 70%;
`;

const StyledButtons = styled(SliderButtons)`
  background-color: #c5c5c5;
  border: none;
  color: #fff;
  margin-left: 50px;
  margin-right: 50px;
  transform: translate(0, -100px);
  &:hover {
    border: #fff;
    background-color: #e2e2e2;
  }
`;

const ButtonLeft = styled(StyledButtons)`
  left: 0;
`;

const ButtonRight = styled(StyledButtons)`
  right: 0;
`;

const RoomDescription = styled.div`
  color: #e2e2e2;
  font-size: 12px;
  font-weight: 300;
  margin-top: 20px;
`;

const StyledRibbon = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  top: -10px;
  right: -10px;

  &:before,
  &:after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid #fb9f44;
    border-top-color: transparent;
    border-right-color: transparent;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const StyledRibbonSpan = styled.span`
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #fb9f44;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 18px/1 "Lato", sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
`;

const ContainerAmenities = styled.div`
  padding-right: 200px;
`;

const StyledH1Amenities = styled(StyledH1)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledBar = styled.div`
  width: 80%;
  margin-top: 5px;
  height: 2px;
  background-color: #d3d3d3;
  opacity: 0.5;
  margin-bottom: 30px;
`;

const BookingsDetail = () => {
  const { state } = useLocation();
  const { guest, id, check_in, check_out, room_type, special_request } =
    state.reservations;
  const roomImgs = [Room1, Room1front];
  const [slideIndex, setSlideIndex] = useState(0);
  const setTitle = useOutletContext()

  const moveSlideRight = () => {
    console.log(slideIndex);
    if (slideIndex === roomImgs.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const moveSlideLeft = () => {
    console.log(slideIndex);
    if (slideIndex === 0) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  
  useEffect(() => {
    setTitle("Room Details")
  }, [])

  return (
    <DetailContainer>
      <Details>
        <GuestContainer>
          <ContainerImage>
            <StyledImage src={guestImage} alt="" />
            <div>
              <h1>{guest}</h1>
              <IdGuest>ID: {id}</IdGuest>
            </div>
          </ContainerImage>
        </GuestContainer>
        <CheckContainer>
          <StyledH1>
            Check In <br></br>
            <br></br> <StyledSpan>{check_in}</StyledSpan>
          </StyledH1>
          <StyledH1>
            Check Out <br></br>
            <br></br> <StyledSpan>{check_out}</StyledSpan>
          </StyledH1>
        </CheckContainer>
        <StyledBar></StyledBar>
        <RoomContainer>
          <StyledH1>
            Room info <br></br>
            <br></br> <StyledSpan2>{room_type}</StyledSpan2>
          </StyledH1>
          <StyledH1>
            Price<br></br>
            <br></br>{" "}
            <StyledSpan2>
              $345 <StyledH1Price>&nbsp; /night</StyledH1Price>
            </StyledSpan2>
          </StyledH1>
        </RoomContainer>
        <SpecialRequest>{special_request}</SpecialRequest>
        <ContainerAmenities>
          <StyledH1Amenities>Amenities</StyledH1Amenities>
          <ContainerBetween>
            <Amenities
              icon={<IoBedOutline />}
              title={"3 Bed Space"}
            ></Amenities>
            <Amenities
              icon={<IoBedOutline />}
              title={"3 Bed Space"}
            ></Amenities>
            <Amenities
              icon={<IoBedOutline />}
              title={"3 Bed Space"}
            ></Amenities>
          </ContainerBetween>
          <ContainerBetween>
            <AmenitiesLittle
              icon={<IoBedOutline />}
              title={"3 Bed Space"}
            ></AmenitiesLittle>
            <AmenitiesLittle
              icon={<IoBedOutline />}
              title={"3 Bed Space"}
            ></AmenitiesLittle>
            <AmenitiesLittle
              icon={<IoBedOutline />}
              title={"3 Bed Space"}
            ></AmenitiesLittle>
          </ContainerBetween>
        </ContainerAmenities>
      </Details>
      <SliderContainer>
        <StyledRibbon>
          <StyledRibbonSpan>In Progress</StyledRibbonSpan>
        </StyledRibbon>
        <StyledImg src={roomImgs[slideIndex]} alt="" />
        <SliderDetails>
          <ButtonLeft onClick={() => moveSlideLeft()}>
            <AiOutlineArrowLeft />
          </ButtonLeft>
          <ButtonRight onClick={() => moveSlideRight()}>
            <AiOutlineArrowRight />
          </ButtonRight>
          <h1>Queen Bed A-10294</h1>
          <RoomDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quam, necessitatibus nesciunt optio error aspernatur doloribus rem
            fugiat dolorum quibusdam minima consequuntur nam nulla obcaecati
            assumenda natus tenetur? Magnam ex quis omnis autem, unde quibusdam
            blanditiis mollitia nemo repellendus aliquid.
          </RoomDescription>
        </SliderDetails>
      </SliderContainer>
    </DetailContainer>
  );
};

export default BookingsDetail;
