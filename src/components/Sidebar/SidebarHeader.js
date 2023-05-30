import React from "react";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1.2rem;
  justify-content: space-between;
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 6vw;
`;
const CustomizedIcons = styled(IconButton)`
  .MuiSvgIcon-root {
    margin-right: .1vw;
    font-size: 1.5rem !important;
  }
`

// czat&imie&avatar&wyloguj
export const SidebarHeader = () => {
  return (
    <Wrapper>
      <Avatar />
      <RightHeader>
        <CustomizedIcons sx={{ color: "#fff" }}>
          <AddCommentOutlinedIcon />
        </CustomizedIcons>
        <CustomizedIcons sx={{ color: "#fff" }}>
          <LogoutIcon />
        </CustomizedIcons>
      </RightHeader>
    </Wrapper>
  );
};
