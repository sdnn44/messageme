import React from "react";
import styled from "styled-components";
import { SidebarBody } from "./SidebarBody";
import { SidebarHeader } from "./SidebarHeader";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex: 0.30; 
max-height: 100vh;


  background-color: rgb(26, 26, 33);
  // width: 30vh;
  // overflow: hidden;
  color: white;
`;

const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <SidebarHeader />
        <SidebarBody />
      </Wrapper>
    </>
  );
};

export default Sidebar;
