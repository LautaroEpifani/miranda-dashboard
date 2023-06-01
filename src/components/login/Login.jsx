import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoContainer } from "../../styledComponents/styled";
import logo from "../../assets/logo.png";
import { getItem, setItem } from "../../utils/localStorage";

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
  background-color: #3d7653;
  color: #fff;
  border-radius: 2px;
  border: none;
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState();
  const loginUser = getItem("loginUser");
  const navigate = useNavigate();

  const submitLogin = (event) => {
    event.preventDefault();
    setLogin({
      email,
      password,
    });

    if (loginUser.email !== email && loginUser.password !== password) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (login && !getItem("loginUser")) {
      setItem("loginUser", login);
    }
  }, [login]);

  return (
    <FormContainer onSubmit={submitLogin}>
      <LogoContainer>
        <img src={logo} alt="" style={{ width: "200px", height: "50px" }} />
      </LogoContainer>
      <InputContainer>
        <StyledLabel htmlFor="userName">Username</StyledLabel>
        <StyledInput
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <StyledButton type="submit">Log In</StyledButton>
    </FormContainer>
  );
};

export default Login;
