import { BiSearchAlt } from "react-icons/bi";
import { ContainerBetween } from "../../styledComponents/styled";
import styled from "styled-components";
import { StyledInput } from "../../components/login/Login";
import { TiArrowSortedDown } from "react-icons/ti";


const ContainerMenu = styled.div`
  width: 90%;
  padding: 40px;
`;

const SubContainer = styled(ContainerBetween)`
  padding-left: 40px;
  padding-right: 40px;
  gap: 10px;
`;

const Bar = styled.div`
  width: 25%;
  margin-left: 20px;
  margin-top: 5px;
  height: 2px;
  background: -moz-linear-gradient(left, #135846 75%, #d4d4d4 25%);
  background: -webkit-linear-gradient(left, #135846 75%, #d4d4d4 25%);
  background: linear-gradient(to right, #135846 50%, #d4d4d4 25%);
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #6e6e6e;
  font-size: 12px;
  font-weight: 500;
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

const Menu = () => {

  return (
    <ContainerMenu>
        <SubContainer>
          <ContainerSections>
            <StyledA href="">All Contacts</StyledA>
            <StyledA href="">Archived</StyledA>
          </ContainerSections>
          <SelectContainer>
            <StyledSelect name="" id="">
              <StyledOption value="date">Date</StyledOption>
              <StyledOption value="name">Customer</StyledOption>
            </StyledSelect>
            <StyledArrow />
          </SelectContainer>
        </SubContainer>
        <Bar></Bar>
      </ContainerMenu>
  )
}

export default Menu