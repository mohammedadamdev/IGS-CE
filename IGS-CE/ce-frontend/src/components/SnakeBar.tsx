import React from "react";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { snackBarOpen } from "../Redux/PropertySlice";
type props = {};
const SnackBar = ({ message, duration, navigate }: any) => {
  const open = useSelector((state: any) => state.PropertySlice.open);
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch<any>(snackBarOpen<any>(false));
    history(navigate);
    console.log("goback works");
  };
  const [state, setState] = React.useState<any>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      anchorOrigin={{ vertical, horizontal }}
      style={{
        transition: ".3s",
        backgroundColor: "#f6c290",
        // top: "12vh",
        borderRadius: "1rem",
      }}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      <div
        style={{
          color: "#84342d",
          backgroundColor: "#f6c290",
          //   width: "20vw",
          padding: "10px",
          borderRadius: "1rem",
          textAlign: "center",
          fontSize: "1rem",
          fontFamily: "Poppins",
        }}
      >
        {message}
      </div>
    </Snackbar>
  );
};

export default SnackBar;
