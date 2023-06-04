import { AiOutlineWifi } from "react-icons/ai";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { GiCoffeePot, GiTowel } from "react-icons/gi";
import { MdOutlineDryCleaning, MdOutlineFoodBank } from "react-icons/md";
import { BiShower } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  gap: 15px;
  background-color: #ebf1ef;
  color: #135846;
  border-radius: 5px;
  padding: 14px;
  padding-left: 10px;
  padding-right: 10px;
  width: 120px;
  font-weight: 600;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const StyledH1 = styled.div`
  font-size: 10px;
`;

const StyledContainerLittle = styled(StyledContainer)`
  
`;

const StyledContainerIcon = styled.div`
  color: #135846;
`;

export const Amenities = ({ icon, title }) => {
  return (
    <StyledContainer>
      {icon}
      <StyledH1>{title}</StyledH1>
    </StyledContainer>
  );
};

export const AmenitiesLittle = ({ icon, title }) => {
  return (
    <StyledContainerLittle>
      {icon}
      <StyledH1>{title}</StyledH1>
    </StyledContainerLittle>
  );
};

export const AmenitiesIcon = ({ icon }) => {
  switch (icon) {
    case "wifi":
      icon = <AiOutlineWifi />;
      break;
    case "air_conditioner":
      icon = <TbAirConditioningDisabled />;
      break;
    case "breakfast":
      icon = <GiCoffeePot />;
      break;
    case "kitchen":
      icon = <MdOutlineFoodBank />;
      break;
    case "cleaning":
      icon = <MdOutlineDryCleaning />;
      break;
    case "shower":
      icon = <BiShower/>;
      break;
    case "grocery":
      icon = <IoFastFoodOutline/>;
      break;
    case "shop_near":
      icon = <BsShop />;
      break;
    case "single_bed":
      icon = <LuBedSingle />;
      break;
    case "double_bed":
      icon = <LuBedDouble />;
      break;
    case "towels":
      icon = <GiTowel/>;
      break;
    default:
      break;
  }
  return <StyledContainerIcon>{icon}</StyledContainerIcon>;
};
