import { BiSearchAlt } from "react-icons/bi";
import { ContainerBetween } from "../../styledComponents/styled";
import styled from "styled-components";
import { StyledInput } from "../../components/login/Login";
import { TiArrowSortedDown } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sortMessages } from "../../features/contact/messagesSlice";


const ContainerMenu = styled.div`
  width: 90%;
  padding: 40px;
`;

const SubContainer = styled(ContainerBetween)`
  padding-left: 40px;
  padding-right: 40px;
  gap: 10px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #6e6e6e;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const ContainerSections = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

const SelectContainer = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 1px #135846 solid;
  border-radius: 8px;
  padding: 8px;
  padding-left: 12px;
  color: #135846;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

const StyledOption = styled.option`
`;

const StyledArrow = styled(TiArrowSortedDown)`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0, -50%);
  color: #135846;
`;

const Bar = styled.div`
  width: 50%;
  margin-left: ${(props) => (props.margin)};
  margin-top: 5px;
  height: 2px;
  background-color: #135846;
`;

const ContainerBar = styled.div`
    background-color: #E9E9E9;
    width: 25%;
    margin-left: 15px;
`;

const Menu = ({setActiveTable}) => {

  const dispatch = useDispatch();
  const [margin, setMargin] = useState("0%")

  const handleChange = (e) => {
    dispatch(sortMessages(e.target.value));
  };

  const allContacts = () => {
    setActiveTable(false)
  }

  const archived = () => {
    setActiveTable(true)
  }

  const changeMargin = (percentaje) => {
    setMargin(percentaje)
  }

  return (
    <ContainerMenu>
        <SubContainer>
          <ContainerSections>
            <StyledA onClick={() => { allContacts(); changeMargin("0%")}}>All Contacts</StyledA>
            <StyledA onClick={() => { archived(); changeMargin("50%")}}>Archived</StyledA>
          </ContainerSections>
          <SelectContainer>
            <StyledSelect name="" id="" onChange={handleChange}>
              <StyledOption value="date">Date</StyledOption>
              <StyledOption value="name">Customer</StyledOption>
            </StyledSelect>
            <StyledArrow />
          </SelectContainer>
        </SubContainer>
        <ContainerBar><Bar margin={margin}></Bar></ContainerBar>
      </ContainerMenu>
  )
}

export default Menu