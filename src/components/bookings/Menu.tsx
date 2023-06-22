import { BiSearchAlt } from "react-icons/bi";
import { ContainerBetween } from "../../styledComponents/styled";
import styled from "styled-components";
import { StyledInput } from "../login/Login";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  sortBookings,
} from "../../features/bookings/bookingsSlice";
import { SetStateAction, useEffect, useState } from "react";
import React from "react";
import { RootState } from "../../app/store";
import { Booking } from "../../interfaces/interfaces";

const ContainerMenu = styled.div`
  width: 90%;
  padding: 40px;
`;

const SubContainer = styled(ContainerBetween)`
  padding-left: 40px;
  padding-right: 40px;
  gap: 10px;
`;

const Bar = styled.div<{margin: string}>`
  width: 25%;
  margin-left: ${(props) => (props.margin)};
  margin-top: 5px;
  height: 2px;
  background-color: #135846;
`;

const ContainerBar = styled.div`
    background-color: #E9E9E9;
    width: 45%;
    margin-left: 15px;
`;

const StyledA = styled.button`
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

export const ContainerInput = styled.div`
  margin-left: 20px;
  position: relative;
`;

export const StyledSearch = styled(StyledInput)`
  width: 100%;
`;

export const Icon = styled(BiSearchAlt)`
  position: absolute;
  right: 5px;
  top: 5px;
  color: #838383;
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

const StyledOption = styled.option``;

const StyledArrow = styled(TiArrowSortedDown)`
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translate(0, -50%);
  color: #135846;
`;

const StyledButton = styled.button`
  background-color: #135846;
  color: #fff;
  padding: 12px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 8px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  margin-right: 20px;
`;

export interface Props {
  setSearchBooking: React.Dispatch<SetStateAction<Booking[] | null>>
}


const Menu = ({ setSearchBooking }: Props) => {
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.bookings.bookingsState);
  const [search, setSearch] = useState("");
  const [margin, setMargin] = useState("0%")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortBookings(e.target.value));
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const allBookings = () => {
    setSearchBooking(bookings)
  }

  const checkInBookings = () => {
    setSearchBooking(bookings.filter(booking => booking.status === "Check In"))
  }

  const checkOutBookings = () => {
    setSearchBooking(bookings.filter(booking => booking.status === "Check Out"))
  }

  const inProgressBookings = () => {
    setSearchBooking(bookings.filter(booking => booking.status === "In Progress"))
  }

  const changeMargin = (percentaje: string) => {
    setMargin(percentaje)
  }

  useEffect(() => {
    const filteredBookings = bookings.filter((booking) =>
      booking.guest.toLowerCase().includes(search?.toLocaleLowerCase())
    );
    setSearchBooking(filteredBookings);
  }, [search, bookings, setSearchBooking]);

  return (
    <ContainerMenu>
      <SubContainer>
        <ContainerSections>
          <StyledA  onClick={() => { allBookings(); changeMargin("0%")}} >All Bookings</StyledA>
          <StyledA  onClick={() => {checkInBookings(); changeMargin("25%")}}>Cheking In</StyledA>
          <StyledA onClick={() => {checkOutBookings(); changeMargin("50%")}}>Cheking Out</StyledA>
          <StyledA onClick={() => {inProgressBookings(); changeMargin("75%")}}>In Progress</StyledA>
        </ContainerSections>
        <ContainerInput>
          <StyledSearch
            type="text"
            name="search"
            onChange={onSearch}
          />
          <Icon />
        </ContainerInput>
        <SelectContainer>
          <Link to="/newBooking">
            <StyledButton>+ New Booking</StyledButton>
          </Link>
          <StyledSelect name="" id="" onChange={handleChange}>
            <StyledOption value="order_date">Order Date</StyledOption>
            <StyledOption value="guest">Guest</StyledOption>
            <StyledOption value="check_in">Check In</StyledOption>
            <StyledOption value="check_out">Check Out</StyledOption>
          </StyledSelect>
          <StyledArrow />
        </SelectContainer>
      </SubContainer>
      <ContainerBar><Bar margin={margin}></Bar></ContainerBar>
    </ContainerMenu>
  );
};

export default Menu;
