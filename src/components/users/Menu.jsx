import { BiSearchAlt } from "react-icons/bi";
import { ContainerBetween } from "../../styledComponents/styled";
import styled from "styled-components";
import { StyledInput } from "../../components/login/Login";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { ContainerInput, Icon, StyledSearch } from "../bookings/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { sortUsers } from "../../features/users/usersSlice";


const ContainerMenu = styled.div`
  width: 90%;
  padding: 40px;
`;

const SubContainer = styled(ContainerBetween)`
  padding-left: 40px;
  padding-right: 40px;
  gap: 10px;
`;

const Bar = styled.div`
  width: 32%;
  margin-left: ${(props) => (props.margin)};
  margin-top: 5px;
  height: 2px;
  background-color: #135846;
`;

const ContainerBar = styled.div`
    background-color: #E9E9E9;
    width: 45%;
    margin-left: 15px;
`;


const StyledA = styled.a`
  text-decoration: none;
  color: #6e6e6e;
  font-size: 12px;
  font-weight: 500;
`;

const ContainerSections = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

const SelectContainer = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 1px #135846 solid;
  border-radius: 8px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 24px;
  color: #135846;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

const StyledButton = styled.button`
  background-color: #135846;
  color: #FFF;
  padding: 12px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 8px;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  margin-right: 20px;
`;

const StyledOption = styled.option`
`;

const StyledArrow = styled(TiArrowSortedDown)`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0, -50%);
  color: #135846;
`;

const Menu = ({ setSearchUser }) => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.usersState);
  const [search, setSearch] = useState("");
  const [margin, setMargin] = useState("0%")

  const handleChange = (e) => {
    dispatch(sortUsers(e.target.value));
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const allEmployees = () => {
    setSearchUser(users)
  }

  const activeEmployees = () => {
    setSearchUser(users.filter(user => user.status === "Active"))
  }

  const inactiveEmployees = () => {
    setSearchUser(users.filter(user => user.status === "Inactive"))
  }

  const changeMargin = (percentaje) => {
    setMargin(percentaje)
  }

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.employee_name.toLowerCase().includes(search?.toLocaleLowerCase())
    );
    setSearchUser(filteredUsers);
  }, [search, users, setSearchUser]);


  return (
    <ContainerMenu>
      <SubContainer>
        <ContainerSections>
          <StyledA  onClick={() => { allEmployees(); changeMargin("0%")}} >All Employees</StyledA>
          <StyledA  onClick={() => {activeEmployees(); changeMargin("30%")}}>Active Employees</StyledA>
          <StyledA onClick={() => {inactiveEmployees(); changeMargin("68%")}}>Inactive Employees</StyledA>
        </ContainerSections>
        <ContainerInput>
          <StyledSearch
            type="text"
            name="search"
            onChange={onSearch}
          />
          <Icon />
        </ContainerInput>
        <SelectContainer>
          <Link to="/newUser">
            <StyledButton>+ New User</StyledButton>
          </Link>
          <StyledSelect name="" id="" onChange={handleChange}>
            <StyledOption value="start_date">Start Date</StyledOption>
            <StyledOption value="employee_name">Employee Name</StyledOption>
          </StyledSelect>
          <StyledArrow />
        </SelectContainer>
      </SubContainer>
      <ContainerBar><Bar margin={margin}></Bar></ContainerBar>
    </ContainerMenu>
  )
}

export default Menu