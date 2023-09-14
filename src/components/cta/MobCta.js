import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import ctaBackground from "../../assets/mobCta-background.webp";
import ctaPhonesImage from "../../assets/mobCta-phones.png";
import KCWhiteButton from "../reusable/form/KCWhiteButton";
import { ReactComponent as PlayImage } from "../../assets/icons/play.svg";
import { ReactComponent as AppleImage } from "../../assets/icons/apple.svg";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const styles = {
  image: {
    width: ["90%", "90%", "auto"],
    height: ["", "", "267px"],
    position: ["unset", "unset", "relative"],
    margin: "auto",
    bottom: "97px",
  },
};

function MobCta(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(425));
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      wrap="wrap"
      columnSpacing={17}
      rowSpacing={3}
      mt={15}
      sx={{
        backgroundImage: ["", "", `url(${ctaBackground})`],
        height: ["auto", "auto", "195px"],
        paddingLeft: ["20px", "20px", "120px"],
        paddingRight: ["20px", "20px", "50px"],
      }}
    >
      <Grid item xs={8} sm={9} md={6} display={{ xs: "none", md: "block" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={["center", "center", "right"]}
          sx={styles.image}
        >
          <img
            src={ctaPhonesImage}
            width="100%"
            height="100%"
            alt="app-doctor-ai"
          />
        </Stack>
      </Grid>
      <Grid item md={7} xs={12} mb={5} display={{ md: "none" }}>
        <Stack sx={{ width: ["90%", "90%", "auto"] }} mx="auto">
          <img src={ctaPhonesImage} alt="app-doctor-ai" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack
          alignItems={["center", "center", "flex-start"]}
          spacing={4}
          m="auto"
        >
          <Typography
            color={[
              theme.palette.primary.dark,
              theme.palette.primary.dark,
              "white",
            ]}
            sx={{ textAlign: "center", px: 2 }}
            variant="h4"
          >
            Download the MOBILE app
          </Typography>

          <Stack
            direction={isSmallScreen ? "column" : "row"}
            gap={[isSmallScreen ? 0 : 2, 2, 5]}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <KCWhiteButton
              subtitle="Download on the"
              startIcon={<AppleImage />}
              href="https://apps.apple.com/us/app/doctorai/id1613504112"
            >
              App Store
            </KCWhiteButton>
            <KCWhiteButton
              subtitle="Get it on"
              startIcon={<PlayImage />}
              last
              href="https://play.google.com/store/apps/details?id=com.doctorai.app.dr_ai&hl=fr&gl=US&pli=1"
            >
              Play Store
            </KCWhiteButton>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default MobCta;
