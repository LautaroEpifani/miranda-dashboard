import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components';
import Menu from '../components/users/Menu';
import GridTable from '../components/users/GridTable';

const StyledContainer = styled.div`
    margin: 40px;
    background-color: #FFF;
`;

export const Users = () => {
    const setTitle = useOutletContext()
  useEffect(() => {
    setTitle("Users")
  }, [])
  return (
    <StyledContainer>
          <Menu/>
          <GridTable/>
    </StyledContainer>
  )
}
