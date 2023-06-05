import { Box, BoxProps } from "@mui/material";

type StyledBoxProps = BoxProps;

export const StyledBox: React.FC<StyledBoxProps> = (props) => {
  return (
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
      {...props}
    />
  );
};
