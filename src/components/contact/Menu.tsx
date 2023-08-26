import { ContainerBetween } from "../../styledComponents/styled";
import styled from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { SetStateAction, useState } from "react";
import { sortMessages } from "../../features/contact/messagesSlice";
import React from "react";

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
  width: 20%;
  display: flex;
  justify-content: space-between;
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
  padding-right: 20px;
  color: #135846;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

const StyledOption = styled.option`
  padding: 2px;
`;

const StyledArrow = styled(TiArrowSortedDown)`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0, -50%);
  color: #135846;
`;

const Bar = styled.div<{ margin: string }>`
  width: 50%;
  margin-left: ${(props) => props.margin};
  margin-top: 5px;
  height: 2px;
  background-color: #135846;
`;

const ContainerBar = styled.div`
  background-color: #e9e9e9;
  width: 25%;
  margin-left: 15px;
`;

interface Props {
  setActiveTable: React.Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setActiveTable }: Props) => {
  const dispatch = useDispatch();
  const [margin, setMargin] = useState("0%");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortMessages(e.target.value));
  };

  const allContacts = () => {
    setActiveTable(false);
  };

  const archived = () => {
    setActiveTable(true);
  };

  const changeMargin = (percentaje: string) => {
    setMargin(percentaje);
  };

  return (
    <ContainerMenu>
      <SubContainer>
        <ContainerSections>
          <StyledA
            onClick={() => {
              allContacts();
              changeMargin("0%");
            }}
          >
            All Contacts
          </StyledA>
          <StyledA
            onClick={() => {
              archived();
              changeMargin("50%");
            }}
          >
            Archived
          </StyledA>
        </ContainerSections>
        <SelectContainer>
          <StyledSelect name="" id="" onChange={handleChange}>
            <StyledOption value="date">Date</StyledOption>
            <StyledOption value="name">Customer</StyledOption>
          </StyledSelect>
          <StyledArrow />
        </SelectContainer>
      </SubContainer>
      <ContainerBar>
        <Bar margin={margin}></Bar>
      </ContainerBar>
    </ContainerMenu>
  );
};

export default Menu;
