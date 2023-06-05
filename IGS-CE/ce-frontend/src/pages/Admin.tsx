import React from "react";
import Box from "@mui/material/Box";
import { InputLabel, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import {
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { PropertyCard } from "../components/PropertyCard";
import { AdminLogics } from "../Utils/AdminLogics";
import { requests } from "../Redux/PropertySlice";
import { useDispatch } from "react-redux";

export const Admin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    handleClearClick,
    handlePageChange,
    handleFilterChange,
    types,
    filteredProperties,
    cities,
    visibleProperties,
    totalPages,
    searchTerm,
    setSearchTerm,
    selectedCity,
    propertyType,
    currentPage,
  } = AdminLogics();
  return (
    <>
      <Box
        sx={{
          "& .MuiOutlinedInput-root": {
            border: "none",
            outline: "none",
            borderRadius: "12px",
            height: "54px",
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
          flexDirection: "row",
          height: 60,
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "30px auto",
          width: "92%",
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
          Properties
        </Typography>
        <Button
          component={Link}
          to={"/property_form"}
          onClick={() => {
            dispatch<any>(requests<any>("Post"));
          }}
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
        <Paper
          component="form"
          sx={{
            borderRadius: "12px",
            p: "2px 4px",
            display: "flex",
            height: "54px",
            alignItems: "center",
            width: 600,
            marginLeft: "30px",
            backgroundColor: "white",
            boxShadow: `0.5px 1.5px 9px 1px rgba(0,0,0,0.2)`,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />

          <IconButton
            disabled={!searchTerm}
            sx={{
              color: theme.palette.primary.main,
            }}
            onClick={handleClearClick}
          >
            <ClearOutlinedIcon />
          </IconButton>
        </Paper>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FmdGoodOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            marginLeft: "30px",

            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              boxShadow: `0.5px 1.5px 9px 1px rgba(0,0,0,0.2)`,
            },
            "& .css-lyltk5-MuiFormLabel-root-MuiInputLabel-root": {
              color: "white",
              fontSize: "1.2rem",
              fontWeight: 500,
              background: theme.palette.secondary.main,
              padding: "2px 10px 2px 10px",
              borderRadius: "12px",
              top: "-5px",
            },
            "& .css-1djx7wr": {
              color: "white",
              fontSize: "1.2rem",
              fontWeight: 500,
              background: theme.palette.secondary.main,
              padding: "2px 10px 2px 10px",
              borderRadius: "12px",
              top: "-5px",
            },
          }}
          id="outlined-select-currency"
          color="secondary"
          select
          defaultValue="All"
          label="Location"
          value={selectedCity}
          name="city"
          onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          {cities.map((option, idx) => (
            <MenuItem key={idx} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            marginLeft: "30px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              boxShadow: `0.5px 1.5px 9px 1px rgba(0,0,0,0.2)`,
            },
            "& .css-1djx7wr": {
              color: "white",
              fontSize: "1.2rem",
              fontWeight: 500,
              background: theme.palette.secondary.main,
              padding: "2px 10px 2px 10px",
              borderRadius: "12px",
              top: "-5px",
            },
            "& .css-lyltk5-MuiFormLabel-root-MuiInputLabel-root": {
              color: "white",
              fontSize: "1.2rem",
              fontWeight: 500,
              background: theme.palette.secondary.main,
              padding: "2px 10px 2px 10px",
              borderRadius: "12px",
              top: "-5px",
            },
          }}
          id="outlined-select-currency"
          select
          defaultValue="All"
          label="Property"
          value={propertyType}
          name="type"
          color="secondary"
          onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          {types.map((type: string) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          //   justifyContent: "flex-start",
          padding: "1rem 5rem 2rem 5rem",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "3rem",
          }}
          spacing={2}
        >
          {visibleProperties.map((card: any, idx) => (
            <Grid item key={idx}>
              <PropertyCard card={card} idx={idx} />
            </Grid>
          ))}
        </Grid>

        <Grid>
          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
              sx={{
                marginTop: "36px",
                ".Mui-selected": {
                  color: theme.palette.primary.main,
                  bgcolor: `#F6C290 !important`,
                },
              }}
            />
          )}
        </Grid>
      </Box>
    </>
  );
};
