import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grid, MenuItem } from "@mui/material";
import {
  FormControl,
  PropertyFormInputs,
  listingType,
  propertyType,
} from "../constants";
import { PropertyFormLogics } from "../Utils/PropertyFormLogics";
import FormActionButtons from "./FormActionButtons";
import { TextValidatorStyle, TypographyStyles } from "../Utils/Constants";

const PropertyFormCom = () => {
  const { handleChange, values, handleCheckbox, handleSubmit, handleClear } =
    PropertyFormLogics();

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
        // instantValidate
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
            <Typography style={TypographyStyles}>Property Title</Typography>
            <TextValidator
              placeholder="Tittle"
              id="outlined-basic"
              variant="outlined"
              name="PropertyTitle"
              value={values.PropertyTitle}
              required={true}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  //   boxShadow: "none",
                  background: "#F6F6F6 !important",
                  marginTop: "0.5rem",
                  width: "34rem",
                },
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  borderRadius: "12px !important",
                },
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #f6f6f600",
                },
                "& .css-igs3ac": {
                  border: "none",
                  "&:hover": {
                    border: "1px solid #84342d",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Property Type</Typography>
            <TextValidator
              variant="outlined"
              name="PropertyType"
              value={values.PropertyType}
              onChange={handleChange}
              sx={TextValidatorStyle}
              style={{ marginTop: "5px", width: "15.5rem" }}
              id="outlined-select-type"
              required={true}
              select
              defaultValue="Select"
            >
              {propertyType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Listing Type</Typography>
            <TextValidator
              variant="outlined"
              name="Property_ListingType"
              value={values.Property_ListingType}
              required={true}
              onChange={handleChange}
              sx={TextValidatorStyle}
              style={{ marginTop: "5px", width: "15.5rem" }}
              id="outlined-select-type"
              select
              defaultValue="Select"
            >
              {listingType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>
          {PropertyFormInputs.map((inputs) => (
            <Grid item xs={6}>
              <Typography style={TypographyStyles}>{inputs.label}</Typography>
              <TextValidator
                placeholder={inputs.placeholder}
                id="outlined-basic"
                variant="outlined"
                value={values[inputs.name]}
                onChange={handleChange}
                name={inputs.name}
                required={true}
                style={{
                  width: "250px",
                  marginTop: "0.5rem",
                }}
                sx={TextValidatorStyle}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography style={TypographyStyles}>Property amenities</Typography>
          </Grid>

          <FormGroup
            sx={{
              flexDirection: "row",
              justifyContent: " flex-start",
              padding: "1rem 0 0 1rem",
            }}
          >
            {FormControl.map((check) => (
              <FormControlLabel
                sx={{
                  marginLeft: "-5px",
                  marginRight: "10px",
                  width: "11rem",
                }}
                onChange={handleCheckbox}
                control={<Checkbox />}
                label={check.label}
                name={check.name}
                value={check.name}
                checked={
                  values.Property_Amenities &&
                  values.Property_Amenities.includes(check.name)
                }
              />
            ))}
          </FormGroup>

          <Grid item xs={12}>
            <Typography style={TypographyStyles}>Listing images</Typography>
            <Typography
              style={{
                marginTop: "1rem",
                color: "inherit",
              }}
            >
              Please share a Google Drive or Imgur link of your listing images
            </Typography>
            <TextValidator
              placeholder="ex. Drive.google.com/..."
              id="outlined-basic"
              variant="outlined"
              name="Property_ImgURL"
              required={true}
              value={values.Property_ImgURL}
              onChange={handleChange}
              style={{
                width: "34rem",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={3}>
            <FormActionButtons handleClear={handleClear} />
          </Grid>
        </Grid>
      </ValidatorForm>
    </Paper>
  );
};

export default PropertyFormCom;
