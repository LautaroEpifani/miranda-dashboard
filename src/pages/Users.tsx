import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components';
import Menu from '../components/users/Menu';
import GridTable from '../components/users/GridTable';
import { User } from '../interfaces/interfaces';

const StyledContainer = styled.div`
    margin: 40px;
    background-color: #FFF;
`;

export const Users = () => {
    const setTitle: (arg0: string) => void = useOutletContext()
    const [searchUser, setSearchUser] = useState<User[] | null>(null);
  useEffect(() => {
    setTitle("Users")
  }, [])
  return (
    <StyledContainer>
          <Menu setSearchUser={setSearchUser}/>
          <GridTable searchUser={searchUser} />
    </StyledContainer>
  )
}
