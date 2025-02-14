import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
);
