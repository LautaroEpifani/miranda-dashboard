import styled from "styled-components";
import { reservationsData } from "../../mockData/Reservations";
import React from "react";

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
`;

const ReservContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 20px;
`;

const SubContainer = styled(ReservContainer)`
  width: 50%;
  padding-left: 0px;
  padding-right: 0px;
`;

const ClientContainer = styled(ReservContainer)`
  width: 500px;
  gap: 100px;
  padding-right: 0px;
`;

const Title = styled.h1`
width: 100%;
  font-size: 15px;
  font-weight: 900;
  color: #393939;
  padding-left: 10px;
`;

const Client = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #393939;
`;

const Room = styled.div`
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: #fff;
`;

const ViewMore = styled.h1`
  text-align: center;
  margin-top: 10px;
  color: #135846;
  font-weight: 600;
 width: 100%;
`;

const Reservations = () => {
  const colors = ["#135846", "#E23428", "#FB9F44"];
  return (
    <Container>
      {reservationsData.map((reservation, index) => (
        <ReservContainer key={reservation.id}>
          <SubContainer>
            <img style={{ borderRadius: "10px" }} src={reservation.image} alt="" width={150} height={100} />
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <ClientContainer>
                <Title>{reservation.title}</Title>
                <ViewMore>{reservation.status}</ViewMore>
              </ClientContainer>
            </div>
          </SubContainer>
          <Room color={colors[index]}>{reservation.room}</Room>
        </ReservContainer>
      ))}
      {/* <ViewMore>View More</ViewMore> */}
    </Container>
  );
};

export default Reservations;
