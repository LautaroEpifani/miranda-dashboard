import { useEffect, useState } from "react";
import styled from "styled-components";
import mock from "../../mockData/Messages.json";
import { BsCheck2Circle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ContainerBetween } from "../../styledComponents/styled";

const Container = styled.div`
  padding: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
    margin-top: 40px;
`;

const MessagesContainer = styled.div`
  position: relative;
`;

const MessagesSubContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  width: 90%;
  white-space: nowrap;
  margin: 0 auto;
  transition: all 1s;
`;

const Message = styled.div`
  box-shadow: 0px 2px 2px #b3c0c6;
  width: 27.5%;
  padding: 20px;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 8px;
  height: 40px;
  overflow: hidden;
  color: #4e4e4e;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const Pending = styled(RxCrossCircled)`
  color: #e23428;
  width: 20px;
  height: 20px;
`;

const Closed = styled(BsCheck2Circle)`
  color: #5ad07a;
  width: 20px;
  height: 20px;
`;

const Popup = styled.div`
  display: ${(props) => (props.popup ? "flex" : "none")};
  position: absolute;
  z-index: 1;
  width: 50%;
  padding: 20px;
  top: -70px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #f5f5f5;
  border-radius: 10px;
  gap: 10px;
`;

export const SliderButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 12px;
  padding-bottom: 10px;
  padding-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #135846;
  color: #fff;
  transform: translate(0, -50%);
`;

const ButtonLeft = styled(SliderButtons)`
  left: 0;
`;

const ButtonRight = styled(SliderButtons)`
  right: 0;
`;

const Messages = () => {
  const [messages, setMessages] = useState(mock.slice(0, 5));
  const initialPopup = messages.map((m) => (m.popup = false));
  const [popup, setPopup] = useState(initialPopup);
  const [slideIndex, setSlideIndex] = useState(0)

  const moveSlideRight = () => {
    
    if(slideIndex === messages.length - 1) {
        setSlideIndex(messages.length - 1)
    } else {
        setSlideIndex(slideIndex + 1)
    }
    console.log(slideIndex)
  }

  const moveSlideLeft = () => {
    
    if(slideIndex === 0) {
        setSlideIndex(0)
    } else {
        setSlideIndex(slideIndex - 1)
    }
    console.log(slideIndex)
  }

  const displayPopup = (index) => {
    let newArray = [...popup];
    let i = 0;
    for (i = 0; i < newArray.length; i++) {
      newArray[i] = false;
    }
    newArray[index] = !newArray[index];
    setPopup(newArray);
  };

  const closePopup = (index) => {
    console.log(index);
    let newArray = [...popup];
    newArray[index] = !newArray[index];
    setPopup(newArray);
  };

  const addStatus = () => {
    const newArray = [...messages];
    let i = 0;
    for (i = 0; i < newArray.length; i++) {
      newArray[i].status = false;
    }
    setMessages(newArray);
  };

  useEffect(() => {
    addStatus();
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#393939" }}>New Messages</h1>
      <MessagesContainer>
        {console.log(slideIndex)}
        <MessagesSubContainer>
          {messages.slice(slideIndex, messages.length).map((message, index) => (
            <Message key={message.id}>
              <div>
                <h6>{message.subject}</h6>
                <Text onClick={() => displayPopup(index)}>
                  {message.message.slice(0, 400)}
                </Text>
              </div>
              <ContainerBetween>
                <h2 style={{ color: "#262626" }}>{message.name}</h2>
                <h6 style={{ color: "#799283" }}>{message.email}</h6>
                <h6 style={{ color: "#799283" }}>{message.phone}</h6>
                <div>{message.status ? <Closed /> : <Pending />}</div>
              </ContainerBetween>
              {popup[index] ? (
                <Popup popup={popup}>
                  <div style={{ whiteSpace: "normal" }}>
                    {message.message.slice(0, 500)}
                  </div>
                  <Pending
                    onClick={() => closePopup(index)}
                    style={{
                      width: "50%",
                      color: "#4e4e4e",
                      cursor: "pointer",
                    }}
                  />
                </Popup>
              ) : (
                <></>
              )}
            </Message>
          ))}
          <ButtonLeft onClick={() => moveSlideLeft()}>
            <AiOutlineArrowLeft />
          </ButtonLeft>
          <ButtonRight onClick={() => moveSlideRight()}>
            <AiOutlineArrowRight />
          </ButtonRight>
        </MessagesSubContainer>
      </MessagesContainer>
    </Container>
  );
};

export default Messages;
