import styled from "styled-components";
import { ContainerBetween } from "../styledComponents/styled";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";

const DetailContainer = styled(ContainerBetween)`
  padding: 40px;
  font-family: "Poppins", sans-serif;
  background-color: #FFF;
  margin: 40px;
`;

const Details = styled(ContainerBetween)`
  display: block;
`;

const SliderContainer = styled(ContainerBetween)`
  padding: 20px;
`;

const GuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CheckContainer = styled(ContainerBetween)`
  margin-top: 20px;
  margin-bottom: 60px;
`;

const RoomContainer = styled(ContainerBetween)`
  margin-bottom: 20px;
`;

const StyledH1 = styled.h1`
  color: #6e6e6e;
  font-size: 12px;
`;

const StyledSpan = styled.span`
  color: #212121;
  font-size: 15px;
  font-weight: 600;
`;

const StyledSpan2 = styled.span`
  color: #212121;
  font-size: 18px;
  display: flex;
  font-weight: 600;
`;

const SpecialRequest = styled.h1`
  color: #363636;
  font-size: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const BookingsDetail = () => {
  const { state } = useLocation();
  const { guest, id, check_in, check_out, room_type, special_request } =
    state.reservations;

  return (
    <Layout title="Bookings Detail">
      <DetailContainer>
        <Details>
          <GuestContainer>
            <h1>{guest}</h1>
            <h1>ID: {id}</h1>
          </GuestContainer>
          <CheckContainer>
            <StyledH1>
              Check In <br></br>
              <br></br> <StyledSpan>{check_in}</StyledSpan>
            </StyledH1>
            <StyledH1>
              Check Out <br></br>
              <br></br> <StyledSpan>{check_out}</StyledSpan>
            </StyledH1>
          </CheckContainer>
          <RoomContainer>
            <StyledH1>
              Room info <br></br>
              <br></br> <StyledSpan2>{room_type}</StyledSpan2>
            </StyledH1>
            <StyledH1>
              Price<br></br>
              <br></br>{" "}
              <StyledSpan2>
                $345 <StyledH1>/night</StyledH1>
              </StyledSpan2>
            </StyledH1>
          </RoomContainer>
          <SpecialRequest>{special_request}</SpecialRequest>
          <h1>Amenities</h1>
        </Details>
        <SliderContainer></SliderContainer>
      </DetailContainer>
    </Layout>
  );
};

export default BookingsDetail;
