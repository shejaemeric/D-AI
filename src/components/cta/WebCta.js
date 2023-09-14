import React from "react";
import KCTitle from "../reusable/KCTitle";
import KCButton from "../reusable/form/KCButton";
import { Stack, Grid, Typography, Link } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import webAppImage from "../../assets/webCta-laptops.webp";
import { useTheme } from "@emotion/react";

function WebCta() {
  const theme = useTheme();
  return (
    <Grid>
      <KCTitle
        subtitle="GET STARTED"
        title="For your convenience, our platform is now seamlessly accessible on mobile, desktop, and self-hosted local servers."
        sx={{ mt: 8 }}
      ></KCTitle>
      <Grid
        item
        md={12}
        xs={12}
        sx={{
          paddingLeft: ["10px", "10px", "80px"],
          paddingRight: ["10px", "10px", "80px"],
        }}
      >
        <Grid container direction="row" justifyContent="space-around">
          <Grid item md={7} xs={12} mb={3}>
            <Stack sx={{ width: ["90%", "90%", "auto"] }} m="auto">
              <img src={webAppImage} alt="doctor-ai-web-app" />
            </Stack>
          </Grid>
          <Grid item md={5} xd={12} alignSelf="center">
            <Stack alignItems="center" spacing={6}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center" }}
                color={theme.palette.primary.dark}
              >
                Start using doctor ai WEB APP today
              </Typography>
              <Link
                href="https://doctorai-app.shejaemeric.com"
                sx={{ textDecoration: "none" }}
              >
                <KCButton sx={{ px: 5.5 }} startIcon={<ArrowRightAltIcon />}>
                  Web app
                </KCButton>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WebCta;
