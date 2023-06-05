import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTheme } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import PropertyFormCom from "../components/PropertyFormCom";
import SnackBar from "../components/SnakeBar";
import { useSelector } from "react-redux";

const PropertyForm = () => {
  const message = useSelector((state: any) => state.PropertySlice.snackeBarMsg);
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "7rem",
          justifyContent: "center",
          alignItems: "start",
          //   paddingTop: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "4rem",
          }}
        >
          <Avatar
            style={{
              backgroundColor: theme.palette.secondary.main,
              width: 56,
              height: 56,
            }}
          >
            <HomeOutlinedIcon
              style={{
                color: theme.palette.primary.main,
                width: 45,
                height: 45,
              }}
            />
          </Avatar>

          <Typography
            variant="h6"
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Property Information
          </Typography>
        </Box>
        <PropertyFormCom />
      </Box>
      <SnackBar message={message} duration={2000} navigate={-1} />
    </>
  );
};

export default PropertyForm;
