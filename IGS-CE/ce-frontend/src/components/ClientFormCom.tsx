import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
  BHK,
  FormControl,
  Status,
  listingType,
  oneTwoThree,
  propertyType,
} from "../constants";
import { ClientFormLogics } from "../Utils/ClientFormLogics";
import FormActionButtons from "./FormActionButtons";
import { TextValidatorStyle, TypographyStyles } from "../Utils/Constants";
const ClientFormCom = () => {
  const { handleChange, handleCheckbox, values, handleSubmit, handleClear } =
    ClientFormLogics();
  const theme = useTheme();
  return (
    <Paper
      elevation={3}
      style={{
        position: "relative",
        width: "650px",
        margin: "4rem",
        borderRadius: "12px",
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
              boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
              "& .MuiOutlinedInput-notchedOutline": {},
            },
            "& .MuiInputBase-input": {},
            "& .MuiTextValidator-root": {
              width: "30ch",
            },
            padding: "2rem",
          }}
        >
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Full name</Typography>
            <TextValidator
              name="Client_FullName"
              value={values.Client_FullName}
              onChange={handleChange}
              placeholder="John Joe"
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Email</Typography>
            <TextValidator
              name="Client_EMail"
              value={values.Client_EMail}
              onChange={handleChange}
              validators={["isEmail"]}
              errorMessages={["Please enter valid email"]}
              placeholder="example@mail.com"
              type="email"
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Mobile number</Typography>
            <TextValidator
              name="Client_MobileNumber"
              value={values.Client_MobileNumber}
              onChange={handleChange}
              placeholder="+91 9012121212"
              id="outlined-basic"
              variant="outlined"
              validators={["matchRegexp:^[1-9][0-9]{9}$"]}
              errorMessages={["Please enter 10 digit Mobile"]}
              required
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography style={TypographyStyles}>Property Title</Typography>
            <TextValidator
              name="Client_PropertyTitle"
              value={values.Client_PropertyTitle}
              onChange={handleChange}
              placeholder="Tittle"
              required={true}
              id="outlined-basic"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  boxShadow: "none",
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
              name="Client_PropertyType"
              value={values.Client_PropertyType}
              onChange={handleChange}
              variant="outlined"
              sx={TextValidatorStyle}
              style={{ marginTop: "5px", width: "250px" }}
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
              name="Client_ListingType"
              value={values.Client_ListingType}
              onChange={handleChange}
              variant="outlined"
              sx={TextValidatorStyle}
              style={{ marginTop: "5px", width: "250px" }}
              id="outlined-select-type"
              required={true}
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
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Location</Typography>
            <TextValidator
              name="Client_Location"
              value={values.Client_Location}
              onChange={handleChange}
              placeholder="ex. Chennai"
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Address</Typography>
            <TextValidator
              name="Client_Address"
              value={values.Client_Address}
              onChange={handleChange}
              placeholder="ex. No 1, street, etc.,"
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Listing Price</Typography>
            <TextValidator
              name="Client_ListingPrice"
              value={values.Client_ListingPrice}
              onChange={handleChange}
              placeholder="$ 1000"
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>BHK</Typography>
            <TextValidator
              name="Client_BHK"
              value={values.Client_BHK}
              onChange={handleChange}
              variant="outlined"
              sx={TextValidatorStyle}
              required={true}
              style={{ marginTop: "5px", width: "250px" }}
              id="outlined-select-type"
              select
              defaultValue="Select"
            >
              {BHK.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Block</Typography>
            <TextValidator
              name="Client_Block"
              value={values.Client_Block}
              onChange={handleChange}
              placeholder="A"
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Flat No</Typography>
            <TextValidator
              name="Client_FlatNo"
              value={values.Client_FlatNo}
              onChange={handleChange}
              placeholder="A1234"
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Status</Typography>
            <TextValidator
              name="Client_Status"
              value={values.Client_Status}
              onChange={handleChange}
              variant="outlined"
              sx={TextValidatorStyle}
              style={{ marginTop: "5px", width: "250px" }}
              id="outlined-select-type"
              required={true}
              select
              defaultValue="Select"
            >
              {Status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Parking Lots</Typography>
            <TextValidator
              name="Client_ParkingLot"
              value={values.Client_ParkingLot}
              onChange={handleChange}
              variant="outlined"
              sx={TextValidatorStyle}
              style={{ marginTop: "5px", width: "250px" }}
              id="outlined-select-type"
              required={true}
              select
              defaultValue="Select"
            >
              {oneTwoThree.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Construction sqft.</Typography>
            <TextValidator
              name="Client_ConstructionSqft"
              value={values.Client_ConstructionSqft}
              onChange={handleChange}
              placeholder="ex. 2000 sqft"
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "250px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographyStyles}>Land sqft.</Typography>
            <TextValidator
              name="Client_LandSqft"
              value={values.Client_LandSqft}
              onChange={handleChange}
              placeholder="ex. 2000 sqft"
              id="outlined-basic"
              variant="outlined"
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
              Listing short description
            </Typography>
            <TextValidator
              name="Client_ShortDesc"
              value={values.Client_ShortDesc}
              onChange={handleChange}
              placeholder="Please enter up to 240 characters."
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "552px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography style={TypographyStyles}>
              Listing long description
            </Typography>
            <TextValidator
              name="Client_LongDesc"
              value={values.Client_LongDesc}
              onChange={handleChange}
              placeholder="Please enter up to 4000 characters."
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "552px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
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
              />
            ))}
          </FormGroup>
          <Grid item xs={12}>
            <Typography
              style={{
                marginTop: "1rem",
                fontFamily: "Poppins",
                fontWeight: "650",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Listing images
            </Typography>
            <Typography
              style={{
                marginTop: "1rem",
                color: "inherit",
              }}
            >
              Please share a Google Drive or Imgur link of your listing images
            </Typography>
            <TextValidator
              name="Client_ImgURL"
              value={values.Client_ImgURL}
              onChange={handleChange}
              placeholder="ex. Drive.google.com/..."
              id="outlined-basic"
              variant="outlined"
              required={true}
              style={{
                width: "551px",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              marginTop: "0.5rem",
            }}
          >
            <FormActionButtons handleClear={handleClear} />
          </Grid>
        </Grid>
      </ValidatorForm>
    </Paper>
  );
};

export default ClientFormCom;
