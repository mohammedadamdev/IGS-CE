import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormActionButtons = ({ handleClear }: any) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        type="submit"
        style={{
          fontFamily: "Poppins",
          padding: ".5rem 3rem",
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        onClick={handleClear}
        style={{
          fontFamily: "Poppins",
          padding: ".5rem 3rem",
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        Clear
      </Button>
      <Button
        variant="contained"
        type="submit"
        onClick={handleBack}
        style={{
          fontFamily: "Poppins",
          padding: ".5rem 1rem",
          minWidth: "7rem",
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default FormActionButtons;
