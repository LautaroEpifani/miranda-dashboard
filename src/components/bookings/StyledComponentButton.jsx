import styled from "styled-components";

export const StyledComponentButton = styled.button`
  width: 130px;
  padding: 30px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 7px;
  border: none;
  background-color: ${(props) => props.bgrColor};
  color: ${(props) => props.color};
`;