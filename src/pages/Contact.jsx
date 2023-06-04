import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components';
import Messages from '../components/dashboard/Messages';
import Menu from '../components/contact/Menu';
import GridTable from '../components/contact/GridTable';

const StyledContainer = styled.div`
    margin: 40px;
    background-color: #FFF;
`;

const Contact = () => {
    const setTitle = useOutletContext()
  useEffect(() => {
    setTitle("Contact")
  }, [])
  return (
    <StyledContainer>
            <Messages/>
            <Menu/>
            <GridTable/>
    </StyledContainer>
  )
}

export default Contact