import { useState } from "react";
import room2  from "../../assets/room2.jpg"
import room1  from "../../assets/room1.jpg"
import room3  from "../../assets/room3.jpg"
import styled from "styled-components";


const Container = styled.div`
  background-color:  #FFF;
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
    gap: 100px;
    padding-right: 0px;
`;

const Title = styled.h1`
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
    background-color: ${props => props.color};
    color: #FFF;
`;

const ViewMore = styled.h1`
  text-align: center;
  margin-top: 10px;
  color: #135846;
  font-weight: 600;
`;

const reservations = [{
      id: 1,
      title: "Queen Bed A-12324",
      image: room1,
      room: "3",
      client: "James Doe",
      entry: "1/05/2023",
      departure: "12/08/2023",
    },
    {
      id: 2,
      title: "Classic B-12324",
      image: room2,
      room: "10",
      client: "Laura Lopez",
      entry: "1/05/2023",
      departure: "12/08/2023",
    },
    {
      id: 3,
      title: "Luxury Room  D-1231",
      image: room3,
      room: "2",
      client: "José García",
      entry: "1/05/2023",
      departure: "12/08/2023",
    },]

const Reservations = () => {
  const colors = ["#135846", "#E23428", "#FB9F44"]
  return (
    <Container>
      {reservations.map((reservation, index) => (
        <ReservContainer key={reservation.id}>
          <SubContainer>
            <img style={{ borderRadius: '10px' }} src={reservation.image} alt="" width={150} height={100}/>
            <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <Title>{reservation.title}</Title>
              <ClientContainer>
                <Client>{reservation.client}</Client>
                <div>
                    <div>Entry: {reservation.entry}</div>
                    <div>Departure: {reservation.departure}</div>
                </div>
              </ClientContainer>
            </div>
          </SubContainer>
          <Room color={colors[index]}>{reservation.room}</Room>
        </ReservContainer>
      ))}
      <ViewMore>View More</ViewMore>
    </Container>
  );
};

export default Reservations;
