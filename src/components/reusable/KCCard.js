import { Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";

function KCCard(props) {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      px={2}
      py={4}
      sx={{
        width: props.width ?? "100%",
        border: "0.2px solid #08C0B4",
        borderRadius: "20px",
        height: "250px",
      }}
    >
      <Stack spacing={2} alignItems={["center", "center", "start"]} p={3}>
        <img alt="icon" src={props.icon}></img>
        <Typography variant="h5" color={theme.palette.primary.light}>
          {props.title}
        </Typography>
        <Typography>{props.children}</Typography>
      </Stack>
    </Paper>
  );
}

export default KCCard;
