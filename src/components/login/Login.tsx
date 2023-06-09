import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoContainer } from "../../styledComponents/styled";
import logo from "../../assets/logo.png";
import { getItem, setItem } from "../../utils/localStorage";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const FormContainer = styled.form`
  width: 40%;
  margin: 0 auto;
  margin-top: 10%;
  padding: 40px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const StyledLabel = styled.label`
  width: 40%;
`;

export const StyledInput = styled.input`
  width: 40%;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #135846;
  color: #fff;
  border-radius: 2px;
  border: none;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 50px;
  margin-right: 20px;
`;

const StyledEdit = styled.a`
  text-decoration: underline;
  margin-left: 50px;
  cursor: pointer;
`;

const Login = () => {
  const [login, setLogin] = useState({ userName: "asdasd", email: "", password: "" });
  const [activeUpdate, setActiveUpdate] = useState(false);

  const { dispatch, userState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [name]: value });
  };

  const submitLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!activeUpdate) {
      dispatch({ type: "login", payload: login });
    } else {
      setActiveUpdate(false);
      dispatch({ type: "updateUser", payload: login });
    }
    if(userState.email === "asd@asd.com" && userState.password === "asdasd") {
      navigate("/")
    } else{
      navigate("/login")
    }
  };


  useEffect(() => {
    if (activeUpdate) {
      setLogin(getItem("loginUser"));
    }
    setItem("loginUser", userState);
   
  }, [activeUpdate, userState, navigate]);

  return (
    <FormContainer onSubmit={submitLogin} >
      <LogoContainer>
        <StyledImage src={logo} alt="" />
        <StyledEdit onClick={() => setActiveUpdate(false)}>Log In</StyledEdit>
        <StyledEdit onClick={() => setActiveUpdate(true)}>Edit User</StyledEdit>
      </LogoContainer>
      <InputContainer>
        <StyledLabel htmlFor="userName">Username</StyledLabel>
        <StyledInput
          type="text"
          name="userName"
          onChange={handleChange}
          defaultValue={activeUpdate ? login.userName : ""}
     
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          onChange={handleChange}
          defaultValue={activeUpdate ? login.email : ""}
          data-cy="email"
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput type="password" name="password" onChange={handleChange}  data-cy="password"/>
      </InputContainer>
      {activeUpdate ? (
        <StyledButton type="submit">Update User</StyledButton>
      ) : (
        <StyledButton type="submit" data-cy="login">Log In</StyledButton>
      )}
    </FormContainer>
  );
};

export default Login;





