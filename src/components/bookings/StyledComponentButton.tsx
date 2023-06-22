import styled from "styled-components";

interface ButtonProps {
  bgrColor: string;
  color: string;
}

export const StyledComponentButton = styled.button<ButtonProps>`
  width: 130px;
  padding: 30px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 7px;
  border: none;
  background-color: ${(props) => props.bgrColor};
  color: ${(props) => props.color};
`;