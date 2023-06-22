import React, { useEffect, useState } from 'react'
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
    const setTitle: (arg0: string) => void = useOutletContext()
     const [activeTable, setActiveTable] = useState(false)
  useEffect(() => {
    setTitle("Contact")
  }, [setTitle])
  return (
    <StyledContainer>
            <Messages/>
            <Menu setActiveTable={setActiveTable}/>
            <GridTable activeTable={activeTable}/>
    </StyledContainer>
  )
}

export default Contact