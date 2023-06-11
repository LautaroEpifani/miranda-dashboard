import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { addRoom, editRoom } from "../features/rooms/roomsSlice";
import uuid from "react-uuid";
import { editRequestRoom, getRooms, postRoom } from "../features/rooms/roomApi";
import ModalCrud from '../components/bookings/ModalCrud'
import { editBooking, postBooking } from "../features/bookings/bookingsApi";

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

const StyledForm = styled.form`
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

const NewBooking = () => {
  const [booking, setBooking] = useState({});
  const [image, setImage] = useState({});
  const [openModal, setOpenModal] = useState(false)
  const { state } = useLocation();
  const editBookingSelected = state;
  const setTitle = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setBooking({ ...booking, [name]: value });
  };

  const handleImages = (e) => {
    const formData = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append(`images${i}`, e.target.files[i]);
    }
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setImage(data.files));
  };

  const setStatusColor = () => {
      if (booking.status === "Check In") {
        booking.color = "#5AD07A";
        booking.bgrColor = "#E8FFEE";
      }
      if (booking.status === "Check Out") {
        booking.color = "#E23428";
        booking.bgrColor = "#FFEDEC";
      }
       if(booking.status === "In Progress") {
        booking.color = "#FF9C3A";
        booking.bgrColor = "#ffd7ae";
      }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editBookingSelected) {
       setStatusColor()
      booking.image = image;
      booking.id = uuid();
      setBooking(booking);
      dispatch(postBooking(booking));
      setOpenModal(true)
    } else {
      setOpenModal(true)
      dispatch(editBooking(booking))
      setTimeout(() => { navigate("/bookings") }, 3000);
      setTimeout(() => { setOpenModal(false) }, 3000);
    }
   
     window.scrollTo(0, 0)
  };
  useEffect(() => {
    setTitle("New Booking");
    if(editBookingSelected) {
      setBooking(editBookingSelected.booking)
    }
  }, [setTitle, editBookingSelected]);

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
            defaultValue={
              editBookingSelected ? editBookingSelected.booking.guest : null
            }
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Image</StyledLabel>
          <StyledInput
            multiple
            className=""
            type="file"
            name="image"
            id=""
            onChange={handleImages}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Room Type</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="room_type"
            defaultValue={
              editBookingSelected ? editBookingSelected.booking.room_type : null
            }
          >
            <option value=""></option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Double Superior">Double Superior</option>
            <option value="Suite">Suite</option>
          </StyledSelect>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Room Number</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="number"
            name="room_number"
            defaultValue={
              editBookingSelected ? editBookingSelected.booking.room_number : null
            }
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Special Request</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="special_request"
            defaultValue={
              editBookingSelected ? editBookingSelected.booking.special_request : null
            }
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Order Date</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="date"
            name="order_date"
            defaultValue={
              editBookingSelected ? editBookingSelected.booking.order_date : null
            }
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Check In</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="date"
            name="check_in"
            defaultValue={
              editBookingSelected ? editBookingSelected.booking.check_in : null
            }
          />
        </StyledInputContainer>
         <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Check Out</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="date"
            name="check_out"
            defaultValue={
              editBookingSelected ? editBookingSelected.booking.check_out : null
            }
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Status</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="status"
            defaultValue={
              editBookingSelected ? editBookingSelected.booking.status : null
            }
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
       {
        openModal ? (
        !editBookingSelected ? 
        <ModalCrud title={"Added"} button={"Add another booking"} setOpenModal={setOpenModal}/>
        :
        <ModalCrud title={"Updated"}/>
        )
        :
        <></>
       }
    </StyledContainer>
  );
};

export default NewBooking;
