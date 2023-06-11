import React from 'react'
import styled from 'styled-components';
import { BsCheck2All } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../../features/rooms/roomsSlice';

const StyledContainer = styled.div`
    position: absolute;
    text-align: center;
    width: 120px;
    padding: 5px;
    top: -10px;
    left: 0;
    border: 1px solid #135846;
    background-color: #FFF;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0px 2px 2px #b3c0c6;
    text-align: end;
`;

const StyledIcon = styled(AiOutlineCloseCircle)`
    color: #000;
    cursor: pointer;
`;

const StyledContainerButtons = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-left: 5px;
    padding-right: 5px;
`;

const StyledButton = styled.button`
    padding: 5px;
  border-radius: 5px;
  background-color: #135846;
  color: #fff;
`;

const Options = ({user, setOptions, index, setModalDelete, setUserId}) => {

  return (
    <StyledContainer>
          <StyledIcon onClick={() => setOptions(index)}/>
        <StyledContainerButtons>
            <Link style={{ textDecoration: "none" }} to={"/newUser"} state={{ user }}>
            <StyledButton>
                Edit User
            </StyledButton>
            </Link>
            <StyledButton onClick={() => {setModalDelete(true); setOptions(index); setUserId(user.id)}}>
                Delete User
            </StyledButton>
        </StyledContainerButtons>
    </StyledContainer>
  )
}

export default Options