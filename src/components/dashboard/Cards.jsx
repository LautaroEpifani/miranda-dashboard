import styled from "styled-components";
import { IoBedOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoExitOutline, IoEnterOutline } from "react-icons/io5";

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
  
`;

const StyledCards = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  width: 25%;
  font-size: 25px;
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: #e23428;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 8px 15px #b3c0c6;
  }
`;

const BgIcons = styled.div`
  background-color: #ffedec;
  padding: 14px;
  padding-top: 10px;
  padding-bottom: 4px;
  border-radius: 5px;
  &:hover {
    background-color: #e23428;
    color: #fff;
  }
`;

const CardsTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #393939;
`;

const CardsText = styled.h6`
  font-size: 10px;
  font-weight: 400;
  color: #787878;
`;

const Cards = () => {
  return (
    <ContainerFlex>
      <StyledCards>
        <BgIcons>
          <IoBedOutline />
        </BgIcons>
        <div>
          <CardsTitle>8,461</CardsTitle>
          <CardsText>New Booking</CardsText>
        </div>
      </StyledCards>
      <StyledCards>
        <BgIcons>
          <LuCalendarCheck2 />
        </BgIcons>
        <div>
          <CardsTitle>963</CardsTitle>
          <CardsText>Schedule Room</CardsText>
        </div>
      </StyledCards>
      <StyledCards>
        <div>
          <BgIcons>
            <IoEnterOutline />
          </BgIcons>
        </div>
        <div>
          <CardsTitle>753</CardsTitle>
          <CardsText>Check In</CardsText>
        </div>
      </StyledCards>
      <StyledCards>
        <BgIcons>
          <IoExitOutline />
        </BgIcons>
        <div>
          <CardsTitle>516</CardsTitle>
          <CardsText>Check Out</CardsText>
        </div>
      </StyledCards>
    </ContainerFlex>
  );
};

export default Cards;
