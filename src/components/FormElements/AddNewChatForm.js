import React from "react";
import styled from "styled-components";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonProvider } from "./CustomButtonProvider";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../services/redux/modal/modalSlice";
import { AutocompleteSearchBar } from "./AutocompleteSearchBar";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Avatar, IconButton } from "@mui/material";

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

// const CustomizedIcons = styled(IconButton)`
//   .MuiSvgIcon-root {
//     position: relative;
//     top: 0;
//     right: 0;
//     color: white;
//   }
// `;

export const AddNewChat = () => {
  const [open, setOpen] = React.useState(true);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());
  const handleClose = () => dispatch(closeModal());
  console.log("is open in new component? " + isOpen);
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
    // <Dialog>
    //   <h2>Dodaj znajomych do wspólnego czatowania</h2>
    //   <p>Wyszukaj nazwę użytkownika poprzez podanie jego nazwy.</p>
    //   <button
    //     onClick={() => {
    //       dispatch(closeModal());
    //     }}
    //     aria-label="close"
    //     className="x"
    //   >
    //     ❌
    //   </button>
    // </Dialog>
  );
};
