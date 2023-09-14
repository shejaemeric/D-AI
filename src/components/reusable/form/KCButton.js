import React from "react";
import { Button } from "@mui/material";
import styles from "./styles/KCButtonStyles";

function KCButton(props) {
  return (
    <Button
      disabled={(props.disabled || props.isSubmitted) ?? false}
      variant={props.variant ? props.variant : "contained"}
      onClick={props.onClick}
      sx={{
        fontFamily: "Roboto",

        ...styles.button,
        borderRadius: props.radius ?? "25px",
        lineHeight: 1,
        px: 4,
        ...props.style,
        ...props.sx,
        background:
          props.bgColor ?? "linear-gradient(90deg, #08C0B4 0%, #038078 100%)",
        height: "42px",
        color: props.color ?? "white",
        width: props.width ?? "fit-content",
      }}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      disableElevation
    >
      {props.children}
    </Button>
  );
}

export default KCButton;
