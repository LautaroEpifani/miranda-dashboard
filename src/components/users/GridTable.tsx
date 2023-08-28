import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerBetween } from "../../styledComponents/styled";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/users/usersApi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Options from "./Options";
import ModalDelete from "./ModalDelete";
import { sortUsers } from "../../features/users/usersSlice";
import React from "react";
import { AppDispatch, RootState } from "../../app/store";
import { User } from "../../interfaces/interfaces";

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
  text-align: center;
  vertical-align: middle;
`;

const StyledDate = styled.p`
  font-weight: 400;
`;

const StyledDescr = styled.p`
  font-weight: 400;
  font-size: 11px;
  text-align: left;
  margin-top: 25px;
`;

const StyledButtonStatus = styled.button<{ bgColor: string }>`
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 7px;
  border: none;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  width: 100px;
  text-align: center;
`;

const ContainerStatus = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
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

const PageButton = styled.button<{ activeButton: boolean }>`
  border: none;
  color: ${(props) => (props.activeButton ? "#FFF" : "#393939")};
  background-color: ${(props) => (props.activeButton ? "#135846" : "transparent")};
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

const ShowingData = styled.div`
  padding-left: 80px;
  font-size: 10px;
`;

const StyledContainerGuest = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledP1 = styled.p`
  color: #222222;
  font-weight: 600;
`;

const StyledP2 = styled.p`
  font-size: 10px;
  padding: 0;
  margin: 0;
  font-weight: 600;
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

interface Props {
  searchUser: User[] | null;
}

const GridTable = ({ searchUser }: Props) => {
  const users = useSelector((state: RootState) => state.users.usersState);
  const loading = useSelector((state: RootState) => state.users.loading);
  const dispatch = useDispatch<AppDispatch>();
  const pages = [1, 2, 3, 4, 5];
  const [options, setOptions] = useState(new Array(users.length).fill(false));
  const [userId, setUserId] = useState<string | undefined>();
  const [modalDelete, setModalDelete] = useState(false);
  const [activeButton, setActiveButton] = useState([true, false, false, false, false]);

  const [indexPagination, setIndexPagination] = useState(1);
  let firstElement = indexPagination * 10 - 10;
  let lastElement = indexPagination * 10;

  const movePaginationRight = () => {
    if (indexPagination === pages.length) {
      setIndexPagination(pages.length);
    } else {
      setIndexPagination(indexPagination + 1);
    }
  };

  const movePaginationLeft = () => {
    if (indexPagination === 1) {
      setIndexPagination(1);
    } else {
      setIndexPagination(indexPagination - 1);
    }
  };

  const colorButton = (index: number) => {
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

  const setOptionsFunc = (index: number) => {
    const newArray = [...options];
    newArray[index] = !newArray[index];
    setOptions(newArray);
  };

  useEffect(() => {
    colorButton(indexPagination - 1);
    if (loading === "idle") {
      dispatch(getUsers());
    }
    dispatch(sortUsers("start_date"));
  }, [indexPagination, dispatch, loading]);

  return (
    <>
      <ContainerTable>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh scope="col">Name</StyledTh>
              <StyledTh scope="col">Email</StyledTh>
              <StyledTh scope="col">Start Date</StyledTh>
              <StyledTh scope="col">Description</StyledTh>
              <StyledTh scope="col">Contact</StyledTh>
              <StyledTh scope="col">Status</StyledTh>
            </tr>
          </thead>
          <tbody>
            {searchUser
              ? searchUser.slice(firstElement, lastElement).map((user, index) => (
                  <tr key={user._id}>
                    <StyledTd>
                      {" "}
                      <StyledContainerGuest>
                        <StyledImage src={user.image} alt="" />
                        <div>
                          <StyledP1>{user.employee_name}</StyledP1>
                          <StyledP2>{user.id}</StyledP2>
                        </div>
                      </StyledContainerGuest>
                    </StyledTd>
                    <StyledTd>
                    <StyledP2>{user.email} </StyledP2>
                    </StyledTd>
                    <StyledTd>
                      <StyledDate>{user.start_date.toString()}</StyledDate>
                    </StyledTd>
                    <StyledTd><StyledDescr>{user.description}</StyledDescr></StyledTd>
                    <StyledTd> <StyledP2>{user.contact} </StyledP2></StyledTd>
                    <StyledTd>
                      <ContainerStatus>
                        <StyledButtonStatus bgColor={user.status === "Active" ? "#5AD07A" : "#E23428"}>
                          {user.status}
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
                            user={user}
                            setOptions={setOptionsFunc}
                            index={index}
                            setUserId={setUserId}
                          />
                        )}
                      </ContainerStatus>
                    </StyledTd>
                    {modalDelete ? <ModalDelete setModalDelete={setModalDelete} id={userId} /> : <></>}
                  </tr>
                ))
              : users.slice(firstElement, lastElement).map((user, index) => (
                  <tr key={user._id}>
                    <StyledTd>
                      {" "}
                      <StyledContainerGuest>
                        <StyledImage src={user.image} alt="" />
                        <div>
                          <StyledP1>{user.employee_name}</StyledP1>
                          <StyledP2>{user.id}</StyledP2>
                        </div>
                      </StyledContainerGuest>
                    </StyledTd>
                    <StyledTd>
                    <StyledP2>{user.email}</StyledP2>
                    </StyledTd>
                    <StyledTd>
                      <StyledDate>{user.start_date.toString()}</StyledDate>
                    </StyledTd>
                    <StyledTd><StyledDescr>{user.description}</StyledDescr></StyledTd>
                    <StyledTd><StyledP2>{user.contact}</StyledP2></StyledTd>
                    <StyledTd>
                      <ContainerStatus>
                        <StyledButtonStatus bgColor={user.status === "Active" ? "#5AD07A" : "#E23428"}>
                          {user.status}
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
                            user={user}
                            setOptions={setOptionsFunc}
                            index={index}
                            setUserId={setUserId}
                          />
                        )}
                      </ContainerStatus>
                    </StyledTd>
                    {modalDelete ? <ModalDelete setModalDelete={setModalDelete} id={userId} /> : <></>}
                  </tr>
                ))}
          </tbody>
        </StyledTable>
      </ContainerTable>
      {searchUser ? (
        <ShowingData>
          Showing {searchUser.slice(firstElement, lastElement).length} of {searchUser.length} Data
        </ShowingData>
      ) : (
        <ShowingData>
          Showing {users.slice(firstElement, lastElement).length} of {users.length} Data
        </ShowingData>
      )}

      <PaginationContainer>
        <DirectionButton onClick={() => movePaginationLeft()}>Prev</DirectionButton>
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
        <DirectionButton onClick={() => movePaginationRight()}>Next</DirectionButton>
      </PaginationContainer>
    </>
  );
};

export default GridTable;
