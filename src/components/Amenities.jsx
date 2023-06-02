import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    gap: 15px;
    background-color: #EBF1EF;
    color: #135846;
    border-radius: 5px;
    padding: 14px;
    padding-left: 10px;
    padding-right: 10px;
    width: 120px;
    font-weight: 600;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 10px;
`;

const StyledH1 = styled.div`
     font-size: 10px; 
`;

const StyledContainerLittle = styled(StyledContainer)`
    padding: 10px;
    padding-left: 6px;
    padding-right: 6px;
`;

export const Amenities = ({ icon, title}) => {
  return (
    <StyledContainer>
        {icon}
        <StyledH1>{title}</StyledH1>
    </StyledContainer>
  )
}

export const AmenitiesLittle = ({ icon, title}) => {
  return (
    <StyledContainerLittle>
        {icon}
        <StyledH1>{title}</StyledH1>
    </StyledContainerLittle>
  )
}

