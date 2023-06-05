import React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SuperAdminDataElement from "../components/SuperAdmin/SuperAdminDataElement";

type Props = {};

const SuperAdmin = (props: Props) => {
  const theme = useTheme();
  const role = localStorage.getItem("role");
  return (
    <>
      <Box
        sx={{
          "& .MuiOutlinedInput-root": {
            border: "none",
            outline: "none",
            borderRadius: "12px",
            boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
          "& .MuiInputBase-input": {
            backgroundColor: "none",
          },
          "& .MuiTextField-root": {
            backgroundColor: "#F6F6F6",
            width: "30ch",
          },
          display: "flex",
          flexDirection: "column",
          height: 60,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          margin: "auto",
          width: "92%",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            style={{
              marginRight: 2,
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {role === "superuser"
              ? "Admin"
              : role === "admin"
              ? "Owner"
              : role == "owner"
              ? "Tenent"
              : ""}
          </Typography>
          <Button
            component={Link}
            to={`/add_user`}
            sx={{
              height: "31px",
              width: "88px",
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                scale: "1.1",
              },
              transition: ".5s",
              boxShadow: `0.5px 1.5px 9px 1px rgba(0,0,0,0.2)`,
              margin: "12px",
              borderRadius: "12px",
              fontFamily: "Poppins",
              fontSize: "12px",
              textTransform: "none",
              color: theme.palette.info.main,
              backgroundColor: theme.palette.secondary.main,
            }}
            startIcon={<AddOutlinedIcon />}
          >
            ADD
          </Button>
        </Grid>
        <Grid
          sx={{
            position: "relative",
            display: "grid",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <SuperAdminDataElement />
        </Grid>
      </Box>
    </>
  );
};

export default SuperAdmin;
