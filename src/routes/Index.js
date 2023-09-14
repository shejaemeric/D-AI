import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pxToEm, pxToVw } from "../utilities/cssUtils";

const theme = createTheme({
  palette: {
    primary: {
      main: "#08C0B4",
      dark: "#015C57",
      light: "#08C0B4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#C1EFEC",
      light: "#E6F9F7",
      dark: "#E6EFEE",
    },
    progress: {
      main: "#1F78D1",
    },
    success: {
      main: "#1AAA55",
    },
    error: {
      main: "#F84528",
    },
    warning: {
      main: "#ff9800",
    },
    text: {
      primary: "#021211",
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),

    fontSize: pxToEm(17),
    subtitle1: {
      fontSize: pxToEm(11),
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: pxToEm(8),
      fontWeight: 400,
    },
    h6: {
      fontSize: pxToEm(16),
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h5: {
      fontSize: pxToEm(22),
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: 1.8,
    },
    h4: {
      fontSize: pxToEm(30),
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h3: {
      fontSize: pxToVw(45),
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h2: {
      fontSize: pxToVw(64),
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h1: {
      fontSize: pxToVw(89),
      fontWeight: 700,
      textTransform: "uppercase",
    },
    body1: {
      fontSize: pxToEm(16),
      fontWeight: 400,
    },
    body2: {
      fontSize: pxToEm(16),
      fontWeight: 400,
    },
  },
});

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/terms-and-conditions-of-service"
            element={<TermsAndConditions />}
          />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
};

export default Index;
