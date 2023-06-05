import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { setItem } from "../utils/localStorage";
import { addRoom } from "../features/rooms/roomsSlice";
import uuid from "react-uuid";
import { AiOutlineWifi } from "react-icons/ai";
import { addUser } from "../features/users/usersSlice";

const StyledContainer = styled.div`
  margin: 40px;
  background-color: #fff;
  padding: 20px;
  padding-left: 60px;
  padding-top: 40px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
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

const StyledCheckBox = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 10px;
  width: 500px;
`;

const StyledInputBox = styled.input`
  width: 5%;
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

const NewUser = () => {
  const [user, setUser] = useState({});
  const [images, setImages] = useState([]);
  const setTitle = useOutletContext();
  const users = useSelector((state) => state.users.usersState);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
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
      .then((data) => setImages(data.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user.image = images;
    user.id = uuid();
    setUser(user);
    dispatch(addUser(user));
   
    navigate("/users");
  };

   console.log(users)

  useEffect(() => {
    setTitle("New User");
  }, [users]);

  return (
    <StyledContainer>
      <form action="" onSubmit={handleSubmit}>
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
          <StyledLabel htmlFor="">Name</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="employee_name"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Position</StyledLabel>
          <StyledSelect onChange={handleChange} name="position">
            <option value=""></option>
            <option value="manager">Manager</option>
            <option value="reception">Reception</option>
            <option value="roomService">Room Service</option>
          </StyledSelect>
        </StyledInputContainer>

        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Email</StyledLabel>
          <StyledInput onChange={handleChange} type="text" name="email" />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Phone</StyledLabel>
          <StyledInput onChange={handleChange} type="text" name="phone" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Entry Date</StyledLabel>
          <StyledInput onChange={handleChange} type="date" name="entry_date" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Description</StyledLabel>
          <StyledInput onChange={handleChange} type="text" name="description" />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Status</StyledLabel>
          <StyledSelect onChange={handleChange} name="status">
            <option value=""></option>
            <option value="manager">Active</option>
            <option value="reception">Inactive</option>
          </StyledSelect>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Password</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="password"
            name="password"
          />
        </StyledInputContainer>
        <StyledButton type="submit">Add new user</StyledButton>
      </form>
    </StyledContainer>
  );
};

export default NewUser;
