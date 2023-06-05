import React from "react";
import { Box, MenuItem, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SuperAdminDataGrid from "./SuperAdminDataGrid";
import { TextFieldStyle } from "../../Utils/Constants";
type Props = {};

const SuperAdminDataElement = (props: Props) => {
  const theme = useTheme();

  return (
    <>
      <Paper
        sx={{
          borderRadius: "12px",
          margin: "2rem",
          p: "2rem 3rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          backgroundColor: "white",
        }}
      >
        <Paper
          sx={{
            //   background: "#f6c290",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: ".3rem .1rem .6rem .1rem",
            gap: ".7rem",
            boxShadow: "none",
          }}
        >
          <TextField
            placeholder="Search"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "54.5rem",
              borderRadius: "100px",
              backgroundColor: "#ffffff00",
            }}
            sx={TextFieldStyle}
            name="search"
            //   value={search}
            //   onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                scale: "1.1",
              },
              transition: ".5s",
              mt: "6px",
              borderRadius: "100px",
              minWidth: "0rem",
              boxShadow: `0.5px 1.5px 9px 1px rgba(0,0,0,0.2)`,
              color: theme.palette.info.main,
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <DeleteForeverIcon sx={{ fontSize: "25px" }} />
          </Button>
        </Paper>
        <SuperAdminDataGrid />
      </Paper>
    </>
  );
};

export default SuperAdminDataElement;
