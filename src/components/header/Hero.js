import { Typography, Grid, Stack, Link } from "@mui/material";
import React from "react";
import KCButton from "../reusable/form/KCButton";
import { pxToVw } from "../../utilities/cssUtils";
import heroHand from "../../assets/hero-hand.png";

function Hero() {
  const styles = {
    container: {},
    handImage: {
      width: "120%",
      zIndex: 100,
      position: "relative",
      bottom: "0vw",
    },
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={styles.container}
    >
      <Grid item sm={12} md={5} sx={{ height: ["65vh", "42vh", "auto"] }}>
        <Stack spacing={[5, 10, 5]} mt={[4, 4, 0]} pl={[0, 0, 4]}>
          <Typography
            variant="h1"
            sx={{
              borderLeft: "4px solid #484848",
              pl: 5,
              color: "#484848",
              textShadow: "5px 5px 16px rgb(0 0 0 / 24%)",
            }}
          >
            DoctorAI - Modernize Healthcare
          </Typography>
          <Typography>
            Revolutionising the way healthcare is delivered with our reliable
            and accurate cutting-edge Artificial intelligence technology” to “We
            are transforming healthcare delivery through our precise,
            state-of-the-art AI solutions.
          </Typography>
          <Link href="#cta" sx={{ textDecoration: "none" }}>
            <KCButton>Get started</KCButton>
          </Link>
        </Stack>
      </Grid>
      <Grid
        item
        md={6}
        display={{ xs: "none", sm: "none", md: "block" }}
        sx={{ maxHeight: "37vw" }}
      >
        <img src={heroHand} style={styles.handImage} alt="ai-doctor"></img>
      </Grid>
    </Grid>
  );
}

export default Hero;
