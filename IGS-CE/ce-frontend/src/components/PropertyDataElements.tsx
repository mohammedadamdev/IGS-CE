import React from "react";
import { Box, MenuItem, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import PropertyDataGrid from "./PropertyDataGrid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { PropertyDataLogics } from "../Utils/PropertyDataGridLogics";
import { TextFieldStyle } from "../Utils/Constants";

type Props = {};

const PropertyDataElements = (props: Props) => {
  const theme = useTheme();
  const {
    block,
    handleFilterChange,
    blockType,
    search,
    setSearch,
    propertyName,
  } = PropertyDataLogics();

  return (
    <>
      <Box>
        <Paper
          sx={{
            borderRadius: "12px",
            margin: "2rem",
            p: "2rem 3rem",
            display: "flex",
            flexDirection: "column",
            boxShadow: `rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px`,
            gap: "1.5rem",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h5"
            style={{
              marginRight: 2,
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#84342D",
              textDecoration: "none",
              float: "left",
            }}
          >
            {propertyName}
          </Typography>
          <Paper
            sx={{
              //   background: "#f6c290",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0rem .1rem .6rem .1rem",
              gap: ".7rem",
              boxShadow: "none",
            }}
          >
            <TextField
              variant="outlined"
              sx={TextFieldStyle}
              style={{
                width: "250px",
                borderRadius: "100px",
                backgroundColor: "#ffffff00",
              }}
              id="outlined-select-type"
              select
              defaultValue="Block"
              name="block"
              value={block}
              onChange={(e) =>
                handleFilterChange(e.target.name, e.target.value)
              }
            >
              <MenuItem value="All">All</MenuItem>
              {blockType.map((type: string) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              placeholder="Search"
              id="outlined-basic"
              variant="outlined"
              style={{
                width: "37rem",
                borderRadius: "100px",
                backgroundColor: "#ffffff00",
              }}
              sx={TextFieldStyle}
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
                color: theme.palette.info.main,
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <DeleteForeverIcon sx={{ fontSize: "25px" }} />
            </Button>
          </Paper>
          <PropertyDataGrid />
        </Paper>
      </Box>
    </>
  );
};

export default PropertyDataElements;
