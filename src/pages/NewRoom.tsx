import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import uuid from "react-uuid";
import ModalCrud from "../components/room/ModalCrud";
import { editRequestRoom, postRoom } from "../features/rooms/roomApi";
import React from "react";
import { AppDispatch } from "../app/store";
import { Amenities, Room } from "../interfaces/interfaces";

const StyledContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  padding-left: 100px;
  padding-top: 40px;
  position: relative;
  border: 1px solid #135846;
  box-shadow: 0px 2px 2px #b3c0c6;
  border-radius: 10px;
  width: 50%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const StyledForm = styled.form<{ openModal: boolean }>`
  opacity: ${(props) => (props.openModal ? "0.2" : "1")};
`;

const StyledLabel = styled.label`
  width: 30%;
  padding: 8px;
`;

const StyledInput = styled.input`
  width: 40%;
  padding: 8px;
  border-radius: 10px;
  border: 1px #aaa3a3 solid;
  &:focus {
    border: 1px #135846 solid;
    outline: none;
    box-shadow: 0 0 10px #719ece;
  }
`;

const StyledCheckContainer = styled.div`
  width: 65%;
  display: flex;
  gap: 20px;
`;

const StyledCheckBox = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledLabelCheckBox = styled(StyledLabel)`
  font-size: 10px;
  white-space: nowrap;
  width: 50%;
`;

const StyledInputBox = styled.input`
  width: 20px;
  border-radius: 10px;
  border: 1px #aaa3a3 solid;
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 1px #aaa3a3 solid;
  border-radius: 5px;
  width: 20%;
  padding-left: 5px;
  &:focus {
    border: 1px #135846 solid;
    outline: none;
    box-shadow: 0 0 10px #719ece;
  }
`;

const StyledButton = styled.button`
  padding: 20px;
  border-radius: 5px;
  background-color: #135846;
  color: #fff;
`;

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

const initialState = {
  id: "",
  title: "",
  room_type: "",
  room_number: 0,
  amenities: [],
  price: 0,
  discount: 0,
  offer: "",
  offer_price: 0,
  description: "",
  cancellation: "",
  status: "",
  images: [],
};

const NewRoom = () => {
  const [room, setRoom] = useState<Room>(initialState);
  const [amenities, setAmenities] = useState<Amenities[] | []>([]);
  const [images, setImages] = useState<string[]>([]);
  const imageString: string[] = [];
  const [isChecked, setIsChecked] = useState(new Array(11).fill(false));
  const [openModal, setOpenModal] = useState(false);
  const { state } = useLocation();
  const editRoomSelected = state;
  const setTitle: (arg0: string) => void = useOutletContext();
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  //handleChange to set some properties
  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRoom({ ...room, [name]: value });
  };

  //HandleChange for Images
  const handleImages = (e: HTMLInputEvent) => {
    if (!e.target.files) return;
    const formData = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append(`${i}`, e.target.files[i]);
    }
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setImages(data.files));
  };

  //HandleChange for Amenities
  const handleCheckbox = (index: number, { target: { name } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(name);
    isChecked[index] = !isChecked[index];
    setIsChecked(isChecked);
    if (isChecked[index]) {
      setAmenities([...amenities, { a_name: name, icon: name, isChecked: isChecked[index] }]);
      setRoom({ ...room, amenities: amenities });
    } else {
      const filtered = amenities.filter((ame) => ame.a_name !== name);
      setAmenities(filtered);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let objectSize = Object.keys(images).length;
    for (let i = 0; i < objectSize; i++) {
      imageString[i] = images[i];
    }
    if (!editRoomSelected) {
      room.id = uuid();
      room.room_number = Number(room.room_number);
      room.price = Number(room.price);
      room.discount = Number(room.discount);
      room.offer_price = parseInt((room.price - (room.price * room.discount) / 100).toFixed(2));
      room.amenities = amenities;
      room.images = imageString;
      dispatch(postRoom(room));
      setOpenModal(true);
    } else {
      setOpenModal(true);
      dispatch(editRequestRoom(room));
      setTimeout(() => {
        navigate("/room");
      }, 3000);
      setTimeout(() => {
        setOpenModal(false);
      }, 3000);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setTitle("New Room");
    if (editRoomSelected) {
      setRoom(editRoomSelected.room);
      // const checkedArray = editRoomSelected.room.amenities.map((amenitie: Amenities) => amenitie.isChecked);
      // setIsChecked(checkedArray)
    }
  }, [editRoomSelected, setTitle]);

  return (
    <StyledContainer>
      <StyledForm action="" onSubmit={handleSubmit} openModal={openModal}>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Image</StyledLabel>
          <StyledInput multiple className="" type="file" name="image" id="" onChange={handleImages} />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Room Type</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="room_type"
            defaultValue={editRoomSelected ? editRoomSelected.room.room_type : null}
          >
            <option value=""></option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Double Superior">Double Superior</option>
            <option value="Suite">Suite</option>
          </StyledSelect>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Room Number</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="number"
            name="room_number"
            defaultValue={editRoomSelected ? editRoomSelected.room.room_number : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Description</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="description"
            defaultValue={editRoomSelected ? editRoomSelected.room.description : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Offer</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="offer"
            defaultValue={editRoomSelected ? editRoomSelected.room.offer : null}
          >
            <option value=""></option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </StyledSelect>
        </StyledInputContainer>

        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Price</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="number"
            name="price"
            defaultValue={editRoomSelected ? editRoomSelected.room.price : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Discount</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="number"
            name="discount"
            defaultValue={editRoomSelected ? editRoomSelected.room.discount : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Cancellation</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="cancellation"
            defaultValue={editRoomSelected ? editRoomSelected.room.cancellation : null}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Status</StyledLabel>
          <StyledSelect
            onChange={handleChange}
            name="status"
            defaultValue={editRoomSelected ? editRoomSelected.room.status : null}
          >
            <option value=""></option>
            <option value="Avaliable">Avaliable</option>
            <option value="Booked">Booked</option>
          </StyledSelect>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Amenities</StyledLabel>
          <StyledCheckContainer>
            <div>
              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">High speed wifi</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(0, e)}
                  type="checkbox"
                  name="wifi"
                  checked={isChecked[0]}
                />
              </StyledCheckBox>
              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">Air conditioner</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(1, e)}
                  type="checkbox"
                  name="air_conditioner"
                  checked={isChecked[1]}
                />
              </StyledCheckBox>
              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">BreakFast</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(2, e)}
                  type="checkbox"
                  name="breakfast"
                  checked={isChecked[2]}
                />
              </StyledCheckBox>

              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">Kitchen</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(3, e)}
                  type="checkbox"
                  name="kitchen"
                  checked={isChecked[3]}
                />
              </StyledCheckBox>
              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">Cleaning</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(4, e)}
                  type="checkbox"
                  name="cleaning"
                  checked={isChecked[4]}
                />
              </StyledCheckBox>
            </div>
            <div>
              <StyledCheckBox>
                {" "}
                <StyledLabelCheckBox htmlFor="">Shower</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(5, e)}
                  type="checkbox"
                  name="shower"
                  checked={isChecked[5]}
                />
              </StyledCheckBox>
              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">Grocery</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(6, e)}
                  type="checkbox"
                  name="grocery"
                  checked={isChecked[6]}
                />
              </StyledCheckBox>
              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">Single Bed</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(7, e)}
                  type="checkbox"
                  name="single_bed"
                  checked={isChecked[7]}
                />
              </StyledCheckBox>
              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">Double Bed</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(8, e)}
                  type="checkbox"
                  name="double_bed"
                  checked={isChecked[8]}
                />
              </StyledCheckBox>
              <StyledCheckBox>
                <StyledLabelCheckBox htmlFor="">Shop near</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(9, e)}
                  type="checkbox"
                  name="shop_near"
                  checked={isChecked[9]}
                />
              </StyledCheckBox>
              <StyledCheckBox>
                {" "}
                <StyledLabelCheckBox htmlFor="">Towels</StyledLabelCheckBox>
                <StyledInputBox
                  onChange={(e) => handleCheckbox(10, e)}
                  type="checkbox"
                  name="towels"
                  checked={isChecked[10]}
                />
              </StyledCheckBox>
            </div>
          </StyledCheckContainer>
        </StyledInputContainer>
        {!editRoomSelected ? (
          <StyledButton type="submit">Add new room</StyledButton>
        ) : (
          <StyledButton type="submit">Edit Room</StyledButton>
        )}
      </StyledForm>
      {openModal ? (
        !editRoomSelected ? (
          <ModalCrud title={"Added"} button={"Add another room"} setOpenModal={setOpenModal} />
        ) : (
          <ModalCrud title={"Updated"} button={""} setOpenModal={setOpenModal} />
        )
      ) : (
        <></>
      )}
    </StyledContainer>
  );
};

export default NewRoom;
