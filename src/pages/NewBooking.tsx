import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import uuid from "react-uuid";
import ModalCrud from "../components/bookings/ModalCrud";
import { editBooking, postBooking } from "../features/bookings/bookingsApi";
import React from "react";
import { AppDispatch } from "../app/store";
import { Booking } from "../interfaces/interfaces";
import { formatDate, inputDateFormat } from "../utils/dateFormat";

const StyledContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  padding-left: 100px;
  padding-top: 40px;
  position: relative;
  border: 1px solid #135846;
  box-shadow: 0px 2px 2px #b3c0c6;
  border-radius: 10px;
  width: 50%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const StyledForm = styled.form<{ openModal: boolean }>`
  opacity: ${(props) => (props.openModal ? "0.2" : "1")};
`;

const StyledLabel = styled.label`
  width: 30%;
  padding: 8px;
`;

const StyledInput = styled.input`
  width: 40%;
  padding: 8px;
  border-radius: 10px;
  border: 1px #aaa3a3 solid;
  &:focus {
    border: 1px #135846 solid;
    outline: none;
    box-shadow: 0 0 10px #719ece;
  }
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 1px #aaa3a3 solid;
  border-radius: 5px;
  width: 20%;
  &:focus {
    border: 1px #135846 solid;
    outline: none;
    box-shadow: 0 0 10px #719ece;
  }
`;

const StyledButton = styled.button`
  padding: 20px;
  border-radius: 5px;
  background-color: #135846;
  color: #fff;
`;

const initialState = {
  id: "",
  guest: "",
  room_number: 0,
  special_request: "",
  order_date: new Date(""),
  check_in: new Date(""),
  check_out: new Date(""),
  status: "",
  color: "",
  bgr_color: "",
};

const NewBooking = () => {
  const [booking, setBooking] = useState<Booking>(initialState);
  const [openModal, setOpenModal] = useState(false);
  const { state } = useLocation();
  // const [editBookingSelected, setEditBookingSelected] = useState<any>();
  const  editBookingSelected  = state;
  const setTitle: (arg0: string) => void = useOutletContext();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBooking({ ...booking, [name]: value });
  };

  const setStatusColor = () => {
    if (booking) {
      if (booking.status === "Check In") {
        booking.color = "#5AD07A";
        booking.bgr_color = "#E8FFEE";
      }
      if (booking.status === "Check Out") {
        booking.color = "#E23428";
        booking.bgr_color = "#FFEDEC";
      }
      if (booking.status === "In Progress") {
        booking.color = "#FF9C3A";
        booking.bgr_color = "#fff3e7";
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (booking) {
      setStatusColor();
      if (!editBookingSelected) {
        booking.id = uuid();
        setBooking(booking);
        dispatch(postBooking(booking));
        setOpenModal(true);
      } else {
        const {
          _id,
          id,
          guest,
          room_number,
          special_request,
          order_date,
          check_in,
          check_out,
          status,
          color,
          bgr_color,
        } = booking;
        const editedBooking = {
          _id,
          id,
          guest,
          room_number,
          special_request,
          order_date,
          check_in,
          check_out,
          status,
          color,
          bgr_color,
        };
        setOpenModal(true);
        dispatch(editBooking(editedBooking));
        setTimeout(() => {
          navigate("/bookings");
        }, 3000);
        setTimeout(() => {
          setOpenModal(false);
        }, 3000);
      }
    }
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setTitle("New Booking");
    if (editBookingSelected) {
      setBooking(editBookingSelected.booking);
    }
  }, [setTitle, editBookingSelected, navigate, state]);

  return (
    <StyledContainer>
      <StyledForm action="" onSubmit={handleSubmit} openModal={openModal}>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Guest</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="guest"
            defaultValue={editBookingSelected ? editBookingSelected.booking.guest : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Room Number</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="room_number"
            defaultValue={editBookingSelected ? editBookingSelected.booking.room_number : null}
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

          </StyledSelect>
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Special Request</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="special_request"
            defaultValue={editBookingSelected ? editBookingSelected.booking.special_request : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Order Date</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="date"
            name="order_date"
            defaultValue={editBookingSelected ? inputDateFormat(editBookingSelected.order_date) : ""}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Check In</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="date"
            name="check_in"
            defaultValue={editBookingSelected ? inputDateFormat(editBookingSelected.check_in) : ""}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Check Out</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="date"
            name="check_out"
            defaultValue={editBookingSelected ? inputDateFormat(editBookingSelected.check_out) : ""}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Status</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="status"
            defaultValue={editBookingSelected ? editBookingSelected.booking.status : null}
          >
            <option value=""></option>
            <option value="Check In">Check In</option>
            <option value="Check Out">Check Out</option>
            <option value="In Progress">In Progress</option>
          </StyledSelect>
        </StyledInputContainer>
        {!editBookingSelected ? (
          <StyledButton type="submit">Add new booking</StyledButton>
        ) : (
          <StyledButton type="submit">Edit booking</StyledButton>
        )}
      </StyledForm>
      {openModal ? (
        !editBookingSelected ? (
          <ModalCrud title={"Added"} button={"Add another booking"} setOpenModal={setOpenModal} />
        ) : (
          <ModalCrud title={"Updated"} button={""} setOpenModal={setOpenModal} />
        )
      ) : (
        <></>
      )}
    </StyledContainer>
  );
};

export default NewBooking;
