import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import PaletteIcon from "@mui/icons-material/Palette";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import {
  openModalForBlockingChat,
  openModalForArchiveChat,
  openModalForDeletingChat,
  openModalForChangeUsername,
} from "../../../services/redux/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCurrentChat } from "../../ChatElements/DeleteChat/DeleteCurrentChat";
import { BlockUser } from "../../ChatElements/BlockChat/BlockUser";
import { ArchiveChat } from "../../ChatElements/ArchiveChat/ArchiveChat";
import { ChangeUsername } from "../../ChatElements/ChangeUsername/ChangeUsername";

const Wrapper = styled.div`
  display: flex;
  padding: 0.4rem;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const AccordionWrapper = styled.div`
  .MuiAccordionDetails-root p {
    font-size: 13px;
    cursor: pointer;
  }
  .MuiAccordion-root {
    background: rgb(31, 38, 49);
    color: white;
  }
  .MuiAccordion-root .MuiAccordionSummary-content p {
    font-size: 13px;
  }
  .MuiSvgIcon-root {
    color: white;
  }
`;
const AccordionOption = styled.div`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    margin-right: 0.3rem;
    font-size: 18px;
  }
  :hover {
    color: rgb(1, 86, 189);
    transition: 0.5s ease;
    .MuiSvgIcon-root {
      color: rgb(1, 86, 189);
      transition: 0.5s ease;
    }
  }
`;
const OptionWrapper = styled.div`
  font-size: 13px;
`;
const MuteOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: space-between;
  font-size: 13px;
`;

const SpecificOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1rem;
  .MuiSvgIcon-root {
    margin-right: 0.3rem;
    font-size: 22px;
  }
  :hover {
    cursor: pointer;
    color: rgb(1, 86, 189);
    transition: 0.5s ease;
    .MuiSvgIcon-root {
      color: rgb(1, 86, 189);
      transition: 0.5s ease;
    }
  }
`;

export const DetailsBody = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  const dispatch = useDispatch();
  const { isOpenForChangeUsername } = useSelector((state) => state.modal);
  const { isOpenForBlockingChat } = useSelector((state) => state.modal);
  const { isOpenForArchiveChat } = useSelector((state) => state.modal);
  const { isOpenForDeletingChat } = useSelector((state) => state.modal);

  return (
    <Wrapper>
      <MuteOption>
        <NotificationsOutlinedIcon />
        Wycisz wiadomości <Switch {...label} defaultChecked />
      </MuteOption>

      <AccordionWrapper>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Dostosuj czat</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <AccordionOption
                onClick={() => {
                  dispatch(openModalForChangeUsername());
                }}
              >
                <EditIcon />
                <p>Zmień nazwę użytkownika</p>
              </AccordionOption>
              <AccordionOption>
                <PaletteIcon />
                <p>Zmień motyw</p>
              </AccordionOption>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Multimedia i pliki</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <AccordionOption>
                <PhotoLibraryOutlinedIcon />
                Multimedia
              </AccordionOption>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionWrapper>
      {isOpenForChangeUsername && <ChangeUsername />}
      <OptionWrapper>
        <SpecificOption
          onClick={() => {
            dispatch(openModalForBlockingChat());
          }}
        >
          <BlockOutlinedIcon />
          Zablokuj
        </SpecificOption>
        {isOpenForBlockingChat && <BlockUser />}

        <SpecificOption
          onClick={() => {
            dispatch(openModalForArchiveChat());
          }}
        >
          <ArchiveOutlinedIcon />
          Archiwizuj czat
        </SpecificOption>
        {isOpenForArchiveChat && <ArchiveChat />}

        <SpecificOption
          onClick={() => {
            dispatch(openModalForDeletingChat());
          }}
        >
          <DeleteOutlineOutlinedIcon />
          Usuń czat
        </SpecificOption>
        {isOpenForDeletingChat && <DeleteCurrentChat />}
      </OptionWrapper>
    </Wrapper>
  );
};
