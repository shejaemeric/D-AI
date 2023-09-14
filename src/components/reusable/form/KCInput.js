import React, { forwardRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
export const FormInput = styled(TextField)(({ theme }) => ({
  height: "65px",
  [`& fieldset`]: {
    borderRadius: 60,
    border: "none",
  },
}));

const KCInput = forwardRef(({ ...props }, ref) => {
  return (
    <>
      {props.fieldLabel !== "" ? (
        <Typography sx={{ fontSize: 14, mb: 1 }}>{props.labelField}</Typography>
      ) : (
        ""
      )}
      <FormInput
        fullWidth
        ref={ref}
        label=""
        size="small"
        variant="outlined"
        placeholder={props.placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={props.icon ? { pr: 2, pl: 2 } : {}}
            >
              {props.icon}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              // sx={props.icon ? { pr: 2, pl: 2 } : {}}
            >
              {props.end}
            </InputAdornment>
          ),
          style: {
            backgroundColor: props.backgroundColor ?? "#F8F8F8",
            borderRadius: props.borderRadius ?? "10px",
            fontSize: "19px",

            height: props.height ?? "46px",
            border: props.border,
            "&:focus": {
              borderColor: "none",
            },
            width: props.width,
          },
        }}
        {...props}
      />
    </>
  );
});

export default KCInput;
