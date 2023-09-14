import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";

function KCWhiteButton(props) {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      startIcon={props.startIcon}
      sx={{
        width: "fit-content",
        minWidth: "180px",
        height: "53px",
        bgcolor: "white",
        borderRadius: "25px",
        fontFamily: "Roboto",
        color: theme.palette.primary.dark,
        mb: 3,
        "&:hover": {
          bgcolor: "#fff",
          color: theme.palette.primary.dark,
        },
      }}
      href={props.href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Stack alignItems="flex-start" spacing={0.1}>
        <Typography sx={{ fontSize: 8 }}>{props.subtitle}</Typography>
        <Typography sx={{ fontSize: 16 }}>{props.children}</Typography>
      </Stack>
    </Button>
  );
}

export default KCWhiteButton;
