import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
  Typography,
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import PaletteIcon from "@mui/icons-material/Palette";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

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
              <AccordionOption>
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
      <OptionWrapper>
        <SpecificOption>
          <BlockOutlinedIcon />
          Zablokuj
        </SpecificOption>

        <SpecificOption>
          <ArchiveOutlinedIcon />
          Archiwizuj czat
        </SpecificOption>

        <SpecificOption>
          <DeleteOutlineOutlinedIcon />
          Usuń czat
        </SpecificOption>
      </OptionWrapper>
    </Wrapper>
  );
};
