import React from "react";
import styled from "styled-components";
import { BsCheck2All } from "react-icons/bs";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  position: absolute;
  text-align: center;
  padding: 20px;
  padding-top: 30px;
  width: 60%;
  padding-bottom: 40px;
  top: 5%;
  left: 18%;
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

const StyledIcon = styled(BsCheck2All)`
  color: #5ad07a;
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

const ModalCrud = ({ title, button, setOpenModal }) => {
  return (
    <StyledContainer>
      <StyledH1>¡¡User {title} with success!!</StyledH1>
      <StyledIcon></StyledIcon>
      {button ? (
        <StyledContainerButtons>
          <Link to="/users">
            <StyledButton>Go to Users Page</StyledButton>
          </Link>
          <StyledButton onClick={() => setOpenModal(false)}>
            {button}
          </StyledButton>
        </StyledContainerButtons>
      ) : (
        <></>
      )}
    </StyledContainer>
  );
};

export default ModalCrud;
