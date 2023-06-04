import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { setItem } from "../utils/localStorage";
import { addRoom } from "../features/rooms/roomsSlice";
import uuid from "react-uuid";
import { AiOutlineWifi } from 'react-icons/ai'

const StyledContainer = styled.div`
  margin: 40px;
  background-color: #fff;
  padding: 20px;
  padding-left: 60px;
  padding-top: 40px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
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

const StyledCheckBox = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 10px;
  width: 500px;
`;

const StyledInputBox = styled.input`
  width: 5%;
  padding: 8px;
  border-radius: 10px;
  border: 1px #aaa3a3 solid;
  &:focus {
    border: 1px #135846 solid;
    outline: none;
    box-shadow: 0 0 10px #719ece;
  }
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

const NewRoom = () => {
  const [room, setRoom] = useState({});
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState([]);
  const [isChecked, setIsChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const setTitle = useOutletContext();
  const rooms = useSelector((state) => state.rooms.roomsState);
  const filteredRooms = useSelector((state) => state.rooms.filteredRooms);
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setRoom({ ...room, [name]: value });
  };

 

  const handleImages = (e) => {
    const formData = new FormData()
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append(`images${i}`, e.target.files[i]) ;
    }
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => setImages(data.files))
    ;
  };

  const handleCheckbox = ({ target: { name, checked } }) => {
    setIsChecked(!isChecked);
    if (checked) {
    
      setAmenities([...amenities, { a_name: name, icon: name }]);
    } else {
   
      const filtered = amenities.filter(ame => ame.a_name !== name)
      setAmenities(filtered)
    }
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    room.offer_price = (room.price - (room.price * room.discount) / 100).toFixed(2);
    room.images = images;
    room.amenities = amenities;
    room.id = uuid();
    setRoom(room);
    dispatch(addRoom(room));
    navigate("/room")
  };

  useEffect(() => {
    setTitle("New Room");
    setItem("rooms", [...rooms]);
  }, [rooms]);

  return (
    <StyledContainer>
      <form action="" onSubmit={handleSubmit}>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Image</StyledLabel>
          <StyledInput
            multiple
            className=""
            type="file"
            name="image"
            id=""
            onChange={handleImages}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Room Type</StyledLabel>
          <StyledInput onChange={handleChange} type="text" name="room_type" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Room Number</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="number"
            name="room_number"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Description</StyledLabel>
          <StyledInput onChange={handleChange} type="text" name="description" />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Offer</StyledLabel>
          <StyledSelect onChange={handleChange} name="offer">
            <option value=""></option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </StyledSelect>
        </StyledInputContainer>

        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Price</StyledLabel>
          <StyledInput onChange={handleChange} type="number" name="price" />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Discount</StyledLabel>
          <StyledInput onChange={handleChange} type="number" name="discount" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Cancellation</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            name="cancellation"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="">Amenities</StyledLabel>
          <div>
            <StyledCheckBox>
              <StyledLabel htmlFor="">High speed wifi</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="wifi"
                checked={isChecked[0]}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Air conditioner</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="air_conditioner"
                checked={isChecked[1]}
              
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">BreakFast</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="breakfast"
                checked={isChecked[2]}
             
              />
            </StyledCheckBox>

            <StyledCheckBox>
              <StyledLabel htmlFor="">Kitchen</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="kitchen"
                checked={isChecked[3]}
              
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Cleaning</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="cleaning"
                checked={isChecked[4]}
             
              />
            </StyledCheckBox>
            <StyledCheckBox>
              {" "}
              <StyledLabel htmlFor="">Shower</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="shower"
                checked={isChecked[5]}
            
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Grocery</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="grocery"
                checked={isChecked[6]}
          
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Single Bed</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="single_bed"
                checked={isChecked[7]}
          
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Double Bed</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="double_bed"
                checked={isChecked[8]}
             
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Shop near</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="shop_near"
                checked={isChecked[9]}
              
              />
            </StyledCheckBox>
            <StyledCheckBox>
              {" "}
              <StyledLabel htmlFor="">Towels</StyledLabel>
              <StyledInputBox
                onChange={handleCheckbox}
                type="checkbox"
                name="towels"
                checked={isChecked[10]}
              />
            </StyledCheckBox>
          </div>
        </StyledInputContainer>
        <StyledButton type="submit">Add new room</StyledButton>
      </form>
    </StyledContainer>
  );
};

export default NewRoom;
