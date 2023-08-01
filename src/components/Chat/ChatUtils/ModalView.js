import React from "react";
import styled from "styled-components";
import { Backdrop, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { closeModal } from "../../../services/redux/modal/modalSlice";

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
export const ModalView = ({ modalTitle, modalDescription, toggleState, children }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={toggleState}
        onClose={() => dispatch(closeModal())}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={toggleState}>
          <Box sx={style}>
            <CustomizedIcons>
              <CloseOutlinedIcon
                onClick={() => {
                  dispatch(closeModal());
                }}
              />
            </CustomizedIcons>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {modalTitle}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {modalDescription}
            </Typography>
            <div className="modal-content">{children}</div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
