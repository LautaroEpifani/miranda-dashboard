import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { bookings } from "../../mockData/Bookings";
import { Link } from "react-router-dom";
import Options from "./Options";
import ModalDelete from "./ModalDelete";
import { getBookings } from "../../features/bookings/bookingsApi";
import { useDispatch, useSelector } from "react-redux";
import { sortBookings } from "../../features/bookings/bookingsSlice";

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
  padding-left: 30px;
  padding-right: 10px;
  color: #393939;
  font-weight: 600;
`;

const StyledButtonView = styled.button`
  width: 120px;
  padding: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 7px;
  border: 1px solid #799283;
  color: #799283;
  background-color: #fff;
`;

const StyledDate = styled.h6`
  font-weight: 400;
`;

const StyledButtonStatus = styled.button`
  width: 130px;
  padding: 30px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 7px;
  border: none;
  background-color: ${(props) => props.bgrColor};
  color: ${(props) => props.color};
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
  margin-top: 5px;
  color: #222222;
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

const StyledContainerGuest = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledH1 = styled.h1`
  color: #222222;
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

const GridTable = ({ searchBooking }) => {
  const bookings = useSelector((state) => state.bookings.bookingsState);
  const loading = useSelector((state) => state.bookings.loading);
  const dispatch = useDispatch();
  const pages = [1, 2, 3, 4, 5];
  const [bookingId, setBookingId] = useState(null);
  const [options, setOptions] = useState(
    new Array(bookings.length).fill(false)
  );
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
      dispatch(getBookings());
    }
    dispatch(sortBookings("order_date"));
  }, [indexPagination, loading, dispatch]);

  return (
    <>
      <ContainerTable>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh scope="col">Guest</StyledTh>
              <StyledTh scope="col">Order Date</StyledTh>
              <StyledTh scope="col">Check In</StyledTh>
              <StyledTh scope="col">Check Out</StyledTh>
              <StyledTh scope="col">Special Request</StyledTh>
              <StyledTh scope="col">Room Type</StyledTh>
              <StyledTh scope="col">Status</StyledTh>
            </tr>
          </thead>
          <tbody>
            {searchBooking
              ? searchBooking
                  .slice(firstElement, lastElement)
                  .map((booking, index) => (
                    <tr key={booking.id}>
                      <StyledTd>
                        {" "}
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/bookings/${booking.id}`}
                          state={{ booking: booking }}
                        >
                          <StyledContainerGuest>
                            <StyledImage
                              src={
                                booking.image.images0
                                  ? booking.image.images0
                                  : booking.image
                              }
                              alt=""
                            />
                            <div>
                              <StyledH1>{booking.guest}</StyledH1>
                              <Styledh6>{booking.id}</Styledh6>
                            </div>
                          </StyledContainerGuest>
                        </Link>
                      </StyledTd>

                      <StyledTd>
                        <StyledDate>{booking.order_date}</StyledDate>
                      </StyledTd>
                      <StyledTd>
                        <CheckContainer>
                          <h1>{booking.check_in}</h1>
                          <Styledh6>hour</Styledh6>
                        </CheckContainer>
                      </StyledTd>
                      <StyledTd>
                        <CheckContainer>
                          <h1>{booking.check_out}</h1>
                          <Styledh6>hour</Styledh6>
                        </CheckContainer>
                      </StyledTd>
                      <StyledTd>
                        <StyledButtonView>View Notes</StyledButtonView>
                      </StyledTd>
                      <StyledTd>{booking.room_type}</StyledTd>
                      <StyledTd>
                        <ContainerStatus>
                          <StyledButtonStatus
                            color={booking.color}
                            bgrColor={booking.bgrColor}
                          >
                            {booking.status}
                          </StyledButtonStatus>
                          {!options[index] ? (
                            <BsThreeDotsVertical
                              onClick={() => {
                                setOptionsFunc(index);
                              }}
                            />
                          ) : (
                            <Options
                              setModalDelete={setModalDelete}
                              booking={booking}
                              setOptions={setOptionsFunc}
                              index={index}
                              setBookingId={setBookingId}
                            />
                          )}
                        </ContainerStatus>
                      </StyledTd>
                      {modalDelete ? (
                        <ModalDelete
                          setModalDelete={setModalDelete}
                          id={bookingId}
                        />
                      ) : (
                        <></>
                      )}
                    </tr>
                  ))
              : bookings
                  .slice(firstElement, lastElement)
                  .map((booking, index) => (
                    <tr key={booking.id}>
                      <StyledTd>
                        {" "}
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/bookings/${booking.id}`}
                          state={{ booking: booking }}
                        >
                          <StyledContainerGuest>
                            <StyledImage
                              src={
                                booking.image.images0
                                  ? booking.image.images0
                                  : booking.image
                              }
                              alt=""
                            />
                            <div>
                              <StyledH1>{booking.guest}</StyledH1>
                              <Styledh6>{booking.id}</Styledh6>
                            </div>
                          </StyledContainerGuest>
                        </Link>
                      </StyledTd>

                      <StyledTd>
                        <StyledDate>{booking.order_date}</StyledDate>
                      </StyledTd>
                      <StyledTd>
                        <CheckContainer>
                          <h1>{booking.check_in}</h1>
                          <Styledh6>hour</Styledh6>
                        </CheckContainer>
                      </StyledTd>
                      <StyledTd>
                        <CheckContainer>
                          <h1>{booking.check_out}</h1>
                          <Styledh6>hour</Styledh6>
                        </CheckContainer>
                      </StyledTd>
                      <StyledTd>
                        <StyledButtonView>View Notes</StyledButtonView>
                      </StyledTd>
                      <StyledTd>{booking.room_type}</StyledTd>
                      <StyledTd>
                        <ContainerStatus>
                          <StyledButtonStatus
                            color={booking.color}
                            bgrColor={booking.bgrColor}
                          >
                            {booking.status}
                          </StyledButtonStatus>
                          {!options[index] ? (
                            <BsThreeDotsVertical
                              onClick={() => {
                                setOptionsFunc(index);
                              }}
                            />
                          ) : (
                            <Options
                              setModalDelete={setModalDelete}
                              booking={booking}
                              setOptions={setOptionsFunc}
                              index={index}
                              setBookingId={setBookingId}
                            />
                          )}
                        </ContainerStatus>
                      </StyledTd>
                      {modalDelete ? (
                        <ModalDelete
                          setModalDelete={setModalDelete}
                          id={bookingId}
                        />
                      ) : (
                        <></>
                      )}
                    </tr>
                  ))}
          </tbody>
        </StyledTable>
      </ContainerTable>
      <ShowingData>
        Showing {bookings.length} of {bookings.length} Data
      </ShowingData>
      <PaginationContainer>
        <DirectionButton onClick={() => movePaginationLeft()}>
          Prev
        </DirectionButton>
        {pages.map((page, index) => (
          <PageButton
            key={index}
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
