import { Box } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { SidebarBody } from './SidebarBody';
import { SidebarHeader } from './SidebarHeader';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: text-top;
  margin: 0 auto;
  background-color: black;
  color: white;
`;

const Sidebar = () => {
  return (
    <>
    <Wrapper>Sidebar</Wrapper>
    {/* <SidebarBody />
    <SidebarHeader /> */}
    </>
  )
}

export default Sidebar