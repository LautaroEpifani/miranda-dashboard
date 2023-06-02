import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { roomsList } from '../../mockData/Rooms.js'
import { ContainerBetween } from '../../styledComponents/styled.jsx'

const ContainerTable = styled.div`
  margin: 40px;
  margin-top: 0;
  margin-bottom: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
`;

const StyledTh = styled.th`
  padding: 20px;
  padding-left: 35px;
  padding-right: 35px;
  color: #393939;
  font-size: 12px;
  font-weight: 600;
`;

const StyledTd = styled.td`
  padding: 20px;
  font-size: 12px;
  color: #393939;
  font-weight: 600;
  text-align: center; 
    vertical-align: middle;
`;

const StyledDate = styled.h6`
  font-weight: 400;
`;

const StyledButtonStatus = styled.button`
  padding: 30px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 7px;
  border: none;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;

const ContainerStatus = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CheckContainer = styled.div`
`;

const Styledh6 = styled.h6`
  font-weight: 300;
  font-size: 10px;
  padding: 0;
  margin: 0;
`;

const PaginationContainer = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: end;
  gap: 20px;
  padding-right: 60px;
  padding-bottom: 40px;
  font-size: 12px;
`;

const PageButton = styled.button`
  border: none;
  color: ${(props) => (props.activeButton ? "#FFF" : "#393939")};
  background-color: ${(props) =>
    props.activeButton ? "#135846" : "transparent"};
  padding: 10px;
  border-radius: 6px;
  padding-right: 15px;
  padding-left: 15px;
`;

const DirectionButton = styled.button`
  border: 1px solid #135846;
  color: #135846;
  background-color: #fff;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

const ShowingData = styled.h6`
  padding-left: 80px;
  font-size: 10px;
`;

const StyledImg = styled.img`
    width: 80px;
    height: 40px;
    border-radius: 10px;
`;

const ContainerTd = styled(ContainerBetween)`
    justify-content: left;
    gap: 20px;
`;

const GridTable = () => {
  const [rooms, setRooms] = useState(roomsList);
  const pages = [1, 2, 3, 4, 5];
  const [color, setColor] = useState("#FFF");
  const [bgColor, setBgColor] = useState("#5AD07A");
  const [status, setStatus] = useState("Avaliable");
  const [activeButton, setActiveButton] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const [indexPagination, setIndexPagination] = useState(1);
  let firstElement = indexPagination * 10 - 10;
  let lastElement = indexPagination * 10;

  const movePaginationRight = () => {
    console.log(indexPagination);
    if (indexPagination === pages.length) {
      setIndexPagination(pages.length);
    } else {
      setIndexPagination(indexPagination + 1);
    }
  };

  const movePaginationLeft = () => {
    console.log(indexPagination);
    if (indexPagination === 1) {
      setIndexPagination(1);
    } else {
      setIndexPagination(indexPagination - 1);
    }
  };

  const colorButton = (index) => {
    console.log(index);
    const newArray = [...activeButton];
    if (newArray[index] !== true) {
      let i = 0;
      for (i = 0; i < newArray.length; i++) {
        newArray[i] = false;
      }
      newArray[index] = !newArray[index];
    }
    setActiveButton(newArray);
  };

  useEffect(() => {
    colorButton(indexPagination - 1);
  }, [indexPagination]);

  return (
    <>
      <ContainerTable>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh scope="col">Room Name</StyledTh>
              <StyledTh scope="col">ID Room</StyledTh>
              <StyledTh scope="col">Room Type</StyledTh>
              <StyledTh scope="col">Amenities</StyledTh>
              <StyledTh scope="col">Price</StyledTh>
              <StyledTh scope="col">Offer Price</StyledTh>
              <StyledTh scope="col">Status</StyledTh>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>
                <StyledTd>
                  <ContainerTd><StyledImg src={room.image} alt=""/><h1>{room.title}</h1></ContainerTd>
                </StyledTd>
                <StyledTd>
                  <StyledDate>{room.id}</StyledDate>
                </StyledTd>
                <StyledTd>
                  {room.room_type}
                </StyledTd>
                <StyledTd>
            
                    <Styledh6>{room.amenities}</Styledh6>
               
                </StyledTd>
                <StyledTd>
                  {room.price}
                </StyledTd>
                <StyledTd>
                  {room.offer_price}
                </StyledTd>
                <StyledTd>
                  <ContainerStatus>
                    <StyledButtonStatus color={color} bgColor={bgColor}>
                      {status}
                    </StyledButtonStatus>
                    <BsThreeDotsVertical />
                  </ContainerStatus>
                </StyledTd>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </ContainerTable>
      <ShowingData>
        Showing {rooms.length} of {rooms.length} Data
      </ShowingData>
      <PaginationContainer>
        <DirectionButton onClick={() => movePaginationLeft()}>
          Prev  
        </DirectionButton>
        {pages.map((page, index) => (
          <PageButton
            key={page}
            activeButton={activeButton[page - 1]}
            onClick={() => {
              setIndexPagination(page);
              colorButton(page - 1);
            }}
          >
            {page}
          </PageButton>
        ))}
        <DirectionButton onClick={() => movePaginationRight()}>
          Next
        </DirectionButton>
      </PaginationContainer>
    </>
  );
};

export default GridTable;