import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import uuid from "react-uuid";
import { editUser, postUser } from "../features/users/usersApi";
import ModalCrud from "../components/users/ModalCrud";
import { AppDispatch } from "../app/store";
import React from "react";
import { User } from "../interfaces/interfaces";

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
  padding-left: 5px;
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

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

const initialState = {
  employee_name: "",
  id: "",
  image: "",
  email: "",
  start_date: new Date(),
  description: "",
  contact: "",
  status: "",
  position: "",
};

const NewUser = () => {
  const [user, setUser] = useState<User>(initialState);
  const [image, setImage] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);
  const { state } = useLocation();
  const editUserSelected = state;
  const setTitle: (arg0: string) => void = useOutletContext();
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (user) {
      setUser({ ...user, [name]: value });
    }
  };

  const handleImages = (e: HTMLInputEvent) => {
    const formData = new FormData();
    if (!e.target.files) return;
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUserSelected) {
      if (user) {
        user.image = image;
        user.id = uuid();
      }
      setUser(user);
      dispatch(postUser(user));
      setOpenModal(true);
    } else {
      const { _id, employee_name, id, image, email, start_date, description, contact, status, position } =
        user;
      const editedUser = { _id, employee_name, id, image, email, start_date, description, contact, status, position };
      setOpenModal(true);
      dispatch(editUser(editedUser));
      setTimeout(() => {
        navigate("/users");
      }, 3000);
      setTimeout(() => {
        setOpenModal(false);
      }, 3000);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setTitle("New User");
    if (editUserSelected) {
      setUser(editUserSelected.user);
    }
  }, [setTitle, editUserSelected]);

  return (
    <StyledContainer>
      <form action="" onSubmit={handleSubmit}>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Image</StyledLabel>
          <StyledInput multiple className="" type="file" name="image" id="" onChange={handleImages} />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Name</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="employee_name"
            defaultValue={editUserSelected ? editUserSelected.user.employee_name : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Position</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="position"
            defaultValue={editUserSelected ? editUserSelected.user.position : null}
          >
            <option value=""></option>
            <option value="Manager">Manager</option>
            <option value="Reception">Reception</option>
            <option value="Room Service">Room Service</option>
          </StyledSelect>
        </StyledInputContainer>

        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Email</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="email"
            name="email"
            defaultValue={editUserSelected ? editUserSelected.user.email : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Contact</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="contact"
            defaultValue={editUserSelected ? editUserSelected.user.contact : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Entry Date</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="date"
            name="start_date"
            defaultValue={editUserSelected ? editUserSelected.user.start_date : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Description</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="description"
            defaultValue={editUserSelected ? editUserSelected.user.description : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Status</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="status"
            defaultValue={editUserSelected ? editUserSelected.user.status : null}
          >
            <option value=""></option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </StyledSelect>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Password</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="password"
            name="password"
            defaultValue={editUserSelected ? editUserSelected.user.password : null}
          />
        </StyledInputContainer>
        {!editUserSelected ? (
          <StyledButton type="submit">Add new user</StyledButton>
        ) : (
          <StyledButton type="submit">Edit user</StyledButton>
        )}
      </form>
      {openModal ? (
        !editUserSelected ? (
          <ModalCrud title={"Added"} button={"Add another user"} setOpenModal={setOpenModal} />
        ) : (
          <ModalCrud title={"Updated"} button={""} setOpenModal={setOpenModal} />
        )
      ) : (
        <></>
      )}
    </StyledContainer>
  );
};

export default NewUser;
