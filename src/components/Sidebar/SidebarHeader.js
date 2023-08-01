import React, { useContext } from "react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { ChangeUserDetails } from "../ChatElements/UserDetails/ChangeUserDetails";
import { openModalForChangeUserDetails } from "../../services/redux/modal/modalSlice";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin: 0 auto;
  }
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.2rem;
  min-width: 6vw;
`;
const CustomizedIcons = styled(IconButton)`
  .MuiSvgIcon-root {
    font-size: 1.5rem !important;
  }
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
  }
}));

// czat&imie&avatar&wyloguj
export const SidebarHeader = () => {
  const { currUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { isOpenForChangeUserDetails } = useSelector((state) => state.modal);

  return (
    <Wrapper>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar src={currUser.photoURL} />
      </StyledBadge>
      <span>{currUser.displayName}</span>
      <RightHeader>
        <CustomizedIcons sx={{ color: "#fff" }}
          onClick={() => {
            dispatch(openModalForChangeUserDetails());
          }}
        >
          <ManageAccountsIcon />
        </CustomizedIcons>
        <CustomizedIcons
          sx={{ color: "#fff" }}
          onClick={() => {
            signOut(auth);
          }}
        >
          <LogoutIcon />
        </CustomizedIcons>
      </RightHeader>
      {isOpenForChangeUserDetails && <ChangeUserDetails />}
    </Wrapper>
  );
};
