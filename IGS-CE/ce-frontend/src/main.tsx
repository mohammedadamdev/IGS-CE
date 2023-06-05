import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import ClientSlice from "./Redux/ClientSlice";
import PropertySlice from "./Redux/PropertySlice";
import LoginSlice from "./Redux/LoginSlice";
import "./index.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#84342D",
    },
    secondary: {
      main: "#F6C290",
    },
    info: {
      main: "#FFFFFF",
    },
  },
});
const store = configureStore({
  reducer: {
    ClientSlice: ClientSlice,
    PropertySlice: PropertySlice,
    LoginSlice: LoginSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
