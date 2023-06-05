import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grid } from "@mui/material";
import { AddUserFormInputs } from "../../constants";
import FormActionButtons from "../FormActionButtons";
import { TextValidatorStyle, TypographyStyles } from "../../Utils/Constants";
import AddUserFormLogics from "../../Utils/AddUserFormLogics";

const AddUserFormCom = () => {
  const { handleChange, values, handleSubmit, handleClear } =
    AddUserFormLogics();

  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      style={{
        position: "relative",
        width: "650px",
        borderRadius: "12px",
        margin: "4rem",
      }}
    >
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(errors: any) => console.log(errors)}
      >
        <Grid
          container
          spacing={2}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              height: "54px",
            },
            "& .MuiTextValidator-root": {
              width: "30ch",
            },
            padding: "2rem 2rem 2rem 3rem",
          }}
        >
          <Grid item xs={12}>
            <Typography style={TypographyStyles}>Construction Name</Typography>
            <TextValidator
              placeholder="Name of the construction"
              id="outlined-basic"
              variant="outlined"
              name="construction_name"
              value={values.construction_name}
              required={true}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  //   boxShadow: "none",
                  marginTop: "0.5rem",
                  width: "34rem",
                },
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  background: "#F6F6F6 !important",
                  borderRadius: "12px !important",
                },
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: 0,
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#84342d !important",
                  },
              }}
            />
          </Grid>
          {AddUserFormInputs.map((inputs) => (
            <Grid item xs={6}>
              <Typography style={TypographyStyles}>{inputs.label}</Typography>
              <TextValidator
                placeholder={inputs.placeholder}
                id="outlined-basic"
                variant="outlined"
                value={values[inputs.name]}
                onChange={handleChange}
                name={inputs.name}
                required={inputs.required}
                style={{
                  width: "250px",
                  marginTop: "0.5rem",
                }}
                sx={TextValidatorStyle}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={3} sx={{ m: "0 0 2rem 3rem" }}>
          <FormActionButtons handleClear={handleClear} />
        </Grid>
      </ValidatorForm>
    </Paper>
  );
};

export default AddUserFormCom;
