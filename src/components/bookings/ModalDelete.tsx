import React, { SetStateAction } from "react";
import { CiWarning } from "react-icons/ci";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../features/bookings/bookingsApi";
import { AppDispatch } from "../../app/store";
import { Types } from "mongoose";

const StyledModalDelete = styled.div`
  position: absolute;
  text-align: center;
  padding: 20px;
  padding-top: 30px;
  width: 40%;
  padding-bottom: 40px;
  top: 25%;
  left: 30%;
  border: 1px solid #135846;
  background-color: #fff;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  box-shadow: 0px 2px 2px #b3c0c6;
`;

const StyledH1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #7e7979;
`;

const StyledIcon = styled(CiWarning)`
  color: red;
  margin-top: 30px;
  width: 40px;
  height: 40px;
`;

const StyledContainerButtons = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 60px;
`;

const StyledButton = styled.button`
  padding: 20px;
  border-radius: 5px;
  background-color: #135846;
  color: #fff;
  font-size: 15px;
`;

interface Props {
  setModalDelete: React.Dispatch<SetStateAction<boolean>>;
  id: string | undefined;
}

const ModalDelete = ({ setModalDelete, id }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <StyledModalDelete>
      <StyledH1>¿Are you sure you want to delete this booking?</StyledH1>
      <StyledIcon></StyledIcon>
      <StyledContainerButtons>
        <StyledButton
          onClick={() => {
            dispatch(deleteBooking(id));
            setModalDelete(false);
          }}
        >
          Yes
        </StyledButton>

        <StyledButton onClick={() => setModalDelete(false)}>No</StyledButton>
      </StyledContainerButtons>
    </StyledModalDelete>
  );
};

export default ModalDelete;
