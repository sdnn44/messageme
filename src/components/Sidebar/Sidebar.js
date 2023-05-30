import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { SidebarBody } from "./SidebarBody";
import { SidebarHeader } from "./SidebarHeader";
import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Wrapper = styled.div`
  background-color: rgb(26, 26, 33);
  width: 30vh;
  color: white;
`;

const Sidebar = () => {
  const theme = useTheme();
  const style = {
    mt: 2,
    width: "90%",
    maxWidth: 360,
    bgcolor: theme.palette.primary.main,
  };

  return (
    <>
      <Wrapper>
        <SidebarHeader />
        <SidebarBody />
        <Divider sx={style} variant="middle" />
      </Wrapper>
    </>
  );
};

export default Sidebar;
