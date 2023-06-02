import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 40px;
  background-color: #fff;
  padding: 20px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  width: 30%;
`;

const StyledInput = styled.input`
  width: 40%;
`;

const StyledCheckBox = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 10px;
  width: 500px;
`;

const NewRoom = () => {
  const [room, setRoom] = useState({});
  const [amenities, setAmenities] = useState([]);
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

  const handleChange = ({ target: { name, value } }) => {
    setRoom({ ...room, [name]: value });
  };

  const handleCheckbox = ({ target: { name } }) => {
    let icon = "";
    switch (name) {
      case "wifi":
        icon = "AiOutlineWifi";
        break;
      case "air_conditioner":
        icon = "TbAirConditioningDisabled";
        break;
      case "breakfast":
        icon = "GiCoffeePot";
         break;
      case "kitchen":
        icon = "MdOutlineFoodBank";
         break;
      case "cleaning":
        icon = "MdOutlineDryCleaning";
         break;
        case "shower":
        icon = "BiShower";
         break;
        case "grocery":
        icon = "IoFastFoodOutline";
         break;
        case "shop_near":
        icon = "BsShop";
         break;
      case "single_bed":
        icon = "LuBedSingle";
         break;
        case "double_bed":
        icon = "LuBedDouble";
         break;
         case "towels":
        icon = "GiTowel";
         break;
      default:
         break;
    }
    setAmenities([...amenities, { [name]: name, icon }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newRoom)
    room.price = room.price/room.discount
    setRoom(room)
    // //Logica de Redux para agregar nueva Room
    // console.log(room);
    console.log(room.price)
  };

  const setTitle = useOutletContext();
  useEffect(() => {
    setTitle("New Room");
  }, []);

  return (
    <StyledContainer>
      <form action="" onSubmit={handleSubmit}>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Image</StyledLabel>
          <StyledInput
            className=""
            type="file"
            name="image"
            id=""
            onChange={handleChange}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          {" "}
          <StyledLabel htmlFor="">Room Type</StyledLabel>
          <StyledInput onChange={handleChange} type="text" name="room_number" />
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
          <select onChange={handleChange} name="offer">
            <option value=""></option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
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
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="wifi"
                checked={isChecked[0]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Air conditioner</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="air_conditioner"
                checked={isChecked[1]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">BreakFast</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="breakfast"
                checked={isChecked[2]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>

            <StyledCheckBox>
              <StyledLabel htmlFor="">Kitchen</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="kitchen"
                checked={isChecked[3]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Cleaning</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="cleaning"
                checked={isChecked[4]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              {" "}
              <StyledLabel htmlFor="">Shower</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="shower"
                checked={isChecked[5]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Grocery</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="grocery"
                checked={isChecked[6]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Single Bed</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="single_bed"
                checked={isChecked[7]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Double Bed</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="double_bed"
                checked={isChecked[8]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              <StyledLabel htmlFor="">Shop near</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="shop_near"
                checked={isChecked[9]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
            <StyledCheckBox>
              {" "}
              <StyledLabel htmlFor="">Towels</StyledLabel>
              <StyledInput
                onChange={handleCheckbox}
                type="checkbox"
                name="towels"
                checked={isChecked[10]}
                onClick={() => setIsChecked(!isChecked)}
              />
            </StyledCheckBox>
          </div>
        </StyledInputContainer>
        <button type="submit">Add new room</button>
      </form>
    </StyledContainer>
  );
};

export default NewRoom;
