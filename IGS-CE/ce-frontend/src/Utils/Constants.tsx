export interface Property {
  PropertyTitle: string;
  PropertyType: string;
  Property_Address: string;
  Property_Location: string;
  Property_ImgURL: string;
  Client_Block: string;
}

export function getUniqueValuesFromArray(
  arr: Property[],
  key: keyof Property
): string[] {
  return arr.reduce((acc: string[], obj: Property) => {
    if (!acc.includes(obj[key])) {
      acc.push(obj[key]);
    }
    return acc;
  }, []);
}
export const TextFieldStyle = {
  "& .MuiOutlinedInput-root": {
    background: "#ececec",
    marginTop: "0.5rem",
    height: "3rem",
    boxShadow: `0.5px .5px 5px .5px rgba(0,0,0,0.2)`,
  },
  "& .css-1uhh9gl .MuiOutlinedInput-root": {
    boxShadow: "none",
  },
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    borderRadius: "12px",
    height: "1rem",
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: "1px solid black",
  },
};
export const TextValidatorStyle = {
  "& .MuiOutlinedInput-root": {
    boxShadow: "none",
    background: "#F6F6F6 !important",
    marginTop: "0.5rem",
  },
  "& .css-jeuavn .MuiOutlinedInput-root": {
    boxShadow: "none",
    background: "#F6F6F6 !important",
    marginTop: "0.5rem",
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
};
export const TypographyStyles = {
  fontFamily: "Poppins",
  fontWeight: "650",
  color: "inherit",
  textDecoration: "none",
};
