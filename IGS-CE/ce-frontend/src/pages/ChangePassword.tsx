import { Button, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grid } from "@mui/material";

import { TextValidatorStyle, TypographyStyles } from "../Utils/Constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SnackBar from "../components/SnakeBar";
import { AuthenticationLogics } from "../Utils/AuthenticationLogics";

type Props = {};

const ChangePassword = (props: Props) => {
  const loginError = useSelector((state: any) => state.LoginSlice.error);
  console.log(loginError, "error");

  const { ChangePassHandleSubmit, ChangePassHandleChange, ChangePassValues } =
    AuthenticationLogics();
  const theme = useTheme();
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontFamily: "Poppins",
          fontWeight: "500",
          color: "inherit",
          textDecoration: "none",
          margin: "1rem",
        }}
      >
        Change Password
      </Typography>
      <Paper
        elevation={3}
        style={{
          position: "relative",
          width: "25rem",
          borderRadius: "12px",
          margin: "2rem",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: loginError ? "2px solid red" : "",
        }}
      >
        <ValidatorForm
          onSubmit={ChangePassHandleSubmit}
          onError={(errors: any) => console.log(errors)}
        >
          <Grid
            container
            spacing={2}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
              "& .MuiTextValidator-root": {},
              padding: "2.5rem 2rem 2rem 4rem",
            }}
          >
            <Grid item xs={12}>
              <Typography style={TypographyStyles}>Current Password</Typography>
              <TextValidator
                placeholder="9876543210"
                id="outlined-basic"
                variant="outlined"
                value={ChangePassValues.old_password}
                onChange={ChangePassHandleChange}
                name="old_password"
                required={true}
                style={{
                  width: "250px",
                  marginTop: "0.5rem",
                }}
                sx={TextValidatorStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography style={TypographyStyles}>New Password</Typography>
              <TextValidator
                placeholder="9876543210"
                id="outlined-basic"
                variant="outlined"
                value={ChangePassValues.new_password1}
                onChange={ChangePassHandleChange}
                name="new_password1"
                required={true}
                style={{
                  width: "250px",
                  marginTop: "0.5rem",
                }}
                sx={TextValidatorStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography style={TypographyStyles}>
                Re-type New Password
              </Typography>
              <TextValidator
                placeholder="**********"
                id="outlined-basic"
                variant="outlined"
                value={ChangePassValues.new_password2}
                onChange={ChangePassHandleChange}
                name="new_password2"
                required={true}
                style={{
                  width: "250px",
                  marginTop: "0.5rem",
                }}
                sx={TextValidatorStyle}
              />
            </Grid>
            <Grid item xs={3} sx={{ display: "flex" }}>
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
            </Grid>
          </Grid>
        </ValidatorForm>
      </Paper>
      <SnackBar
        message={"Mobile number or password Incorrect"}
        duration={10000}
        navigate={{}}
      />
    </div>
  );
};

export default ChangePassword;
