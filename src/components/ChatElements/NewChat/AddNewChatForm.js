import React from "react";
import styled from "styled-components";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../services/redux/modal/modalSlice";
import { AutocompleteSearchBar } from "../AutocompleteSearchBar";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "rgb(26, 26, 33)",
  border: "1px solid #186189",
  boxShadow: 24,
  p: 4,
  color: "#fff",
};

const CustomizedIcons = styled.div`
  .MuiSvgIcon-root {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    margin: 0.3rem;
    cursor: pointer;
  }
  .MuiSvgIcon-root:hover {
    transition: 0.3s ease;
    color: #186189;
  }
`;

export const AddNewChat = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <Button onClick={handleOpen}>Stwórz nowy czat</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <CustomizedIcons>
              <CloseOutlinedIcon
                onClick={() => {
                  dispatch(closeModal());
                }}
              />
            </CustomizedIcons>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Dodaj użytkownika do wspólnych rozmów
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Wyszukaj nazwę użytkownika, a następnie kliknij Enter.
            </Typography>
            
            <AutocompleteSearchBar />
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
