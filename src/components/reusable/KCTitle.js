import { useTheme } from "@emotion/react";
import { Typography, Stack, Grid } from "@mui/material";
import React from "react";

function KCTitle(props) {
  const theme = useTheme();
  const styles = {
    subtitle: { color: "#9C9C9C" },
    titles: {
      maxWidth: props.maxWidth ?? "70%",
      margin: "auto",
      textAlign: "center",
    },
  };
  return (
    <>
      <Grid
        item
        md={12}
        sm={12}
        mb={10}
        sx={props.sx}
        display={{ xs: "none", md: "block" }}
      >
        <Stack sx={styles.titles} alignItems="center" spacing={4}>
          <Typography variant="subtitle1" sx={styles.subtitle}>
            {props.subtitle}
          </Typography>
          <Typography variant="h4" color="primary">
            {props.prefix}
            <Typography
              variant="h4"
              color={theme.palette.primary.dark}
              sx={{ display: "inline", whiteSpace: "pre-wrap" }}
            >
              {props.title}
            </Typography>
          </Typography>
          {props.children}
        </Stack>
      </Grid>
      <Grid item md={12} sm={12} mb={10} display={{ md: "none" }}>
        <Stack sx={styles.titles} alignItems="center" spacing={4}>
          <Typography variant="subtitle1" sx={styles.subtitle}>
            {props.subtitle}
          </Typography>
          <Typography variant="h2" color="primary">
            {props.prefix}
            <Typography
              variant="h2"
              color={theme.palette.primary.dark}
              sx={{ display: "inline", whiteSpace: "pre-wrap" }}
            >
              {props.title}
            </Typography>
          </Typography>
          {props.children}
        </Stack>
      </Grid>
    </>
  );
}

export default KCTitle;
