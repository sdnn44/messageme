import React from "react";
import { Box, Avatar, Divider, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import { Outlet } from "react-router-dom";
import { Left_Sidebar_Buttons } from "../../data/config";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px, 0px, 2px rgba(0,0,0,0.25)",
          width: "100px",
          height: "100vh",
        }}
      >
        <Stack
          direction="column"
          alignItems={"center"}
          sx={{ width: "100%" }}
          spacing={3}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src="" alt="TU BEDZIE LOGO" />
          </Box>
          <Stack
            //   border: "1px solid", borderColor: theme.palette.primary.main,
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Left_Sidebar_Buttons.map((item) =>
              item.index === selectedItem ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                    key={item.index}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              ) : (
                // <Box sx={{borderRadius: 1.5, border: "1px solid", borderColor: theme.palette.primary.main }}>
                <IconButton
                  onClick={() => {
                    setSelectedItem(item.index);
                  }}
                  sx={{ width: "max-content", color: "#000" }}
                  key={item.index}
                >
                  {item.icon}
                </IconButton>
                // </Box>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selectedItem === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelectedItem(3);
                }}
                sx={{ width: "max-content", color: "#000" }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
