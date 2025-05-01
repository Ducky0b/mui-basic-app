import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/index";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// const theme = createTheme({
//   shape: { borderRadius: 8 },
// });
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <div>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <SearchAppBar />
          <Box textAlign="center" mt={2}>
            <Button variant="outlined" onClick={toggleTheme}>
              {isDarkMode ? "Light" : "Dark"} Mode
            </Button>
          </Box>
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<DetailPage />} />
          <Route
            path="*"
            element={
              <main>
                <p style={{ color: "white" }}>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
