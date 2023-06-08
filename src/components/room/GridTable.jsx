import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ContainerBetween } from "../../styledComponents/styled.jsx";
import { useDispatch, useSelector } from "react-redux";
import { AmenitiesIcon } from "../Amenities.jsx";
import Options from "./Options.jsx";
import { deleteRequestRoom, getRooms } from "../../features/rooms/roomApi.js";
import { CiWarning } from "react-icons/ci";
import { deleteRoom, sortBy } from "../../features/rooms/roomsSlice.js";
import ModalDelete from "./ModalDelete.jsx";

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
  width: 100px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 7px;
  border: none;
  background-color: ${(props) => props.bgColor};
  color: #fff;
`;

const ContainerStatus = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;

const CheckContainer = styled.div``;

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

const StyledAmenities = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledOfferPrice = styled.h6`
  color: red;
`;

const GridTable = () => {
  const rooms = useSelector((state) => state.rooms.roomsState);
  const loading = useSelector((state) => state.rooms.loading);
  const dispatch = useDispatch();
  const pages = [1, 2, 3, 4, 5];
  const [roomId, setRoomId] = useState(null)
  const [options, setOptions] = useState(new Array(rooms.length).fill(false));
  const [modalDelete, setModalDelete] = useState(false);
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

  const setOptionsFunc = (index) => {
    const newArray = [...options];
    newArray[index] = !newArray[index];
    setOptions(newArray);
  };

  useEffect(() => {
    colorButton(indexPagination - 1);
    if (loading === "idle") {
      dispatch(getRooms());
    }
    dispatch(sortBy("room_number"));
  }, [indexPagination, loading, dispatch]);

  return (
    <>
      <ContainerTable>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh scope="col">Room</StyledTh>
              <StyledTh scope="col">Room Number</StyledTh>
              <StyledTh scope="col">ID Room</StyledTh>
              <StyledTh scope="col">Room Type</StyledTh>
              <StyledTh scope="col">Amenities</StyledTh>
              <StyledTh scope="col">Price</StyledTh>
              <StyledTh scope="col">Offer Price</StyledTh>
              <StyledTh scope="col">Status</StyledTh>
            </tr>
          </thead>
          <tbody>
            {rooms.length ? (
              rooms.slice(firstElement, lastElement).map((room, index) => (
                <tr key={room.id}>
                  <StyledTd>
                    <ContainerTd>
                      <StyledImg
                        src={room.image ? room.image : room.images.images0}
                        alt=""
                      />
                    </ContainerTd>
                  </StyledTd>
                  <StyledTd>{room.room_number}</StyledTd>
                  <StyledTd>
                    <StyledDate>{room.id}</StyledDate>
                  </StyledTd>
                  <StyledTd>{room.room_type}</StyledTd>
                  <StyledTd>
                    <StyledAmenities>
                      {room.amenities.map((amenitie, index) => (
                        <AmenitiesIcon key={index} icon={amenitie.icon} />
                      ))}
                    </StyledAmenities>
                  </StyledTd>
                  <StyledTd>{room.price}</StyledTd>
                  <StyledTd>
                    <StyledOfferPrice>{room.offer_price}</StyledOfferPrice>
                  </StyledTd>
                  <StyledTd>
                    <ContainerStatus>
                      <StyledButtonStatus
                        bgColor={
                          room.status === "Avaliable" ? "#5AD07A" : "#E23428"
                        }
                      >
                        {room.status}
                      </StyledButtonStatus>
                      {!options[index] ? (
                        <BsThreeDotsVertical
                          onClick={() => {setOptionsFunc(index);}}
                        />
                      ) : (
                        <Options
                          setModalDelete={setModalDelete}
                          room={room}
                          setOptions={setOptionsFunc}
                          index={index}
                          setRoomId={setRoomId}
                        />
                      )}
                    </ContainerStatus>
                  </StyledTd>
                  {modalDelete ? (
                    <ModalDelete setModalDelete={setModalDelete} id={roomId} />
                  ) : (
                    <></>
                  )}
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </StyledTable>
      </ContainerTable>
      <ShowingData>
        Showing {rooms.slice(firstElement, lastElement).length} of{" "}
        {rooms.length} Data
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
