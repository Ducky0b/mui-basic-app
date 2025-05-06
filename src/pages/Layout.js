import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/SearchAppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import HomePage from "./HomePage";

function Layout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <HomePage />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default Layout;
