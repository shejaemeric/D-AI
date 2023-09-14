import React from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import KCTitle from "../reusable/KCTitle";
import background from "../../assets/about-background.webp";
import aboutImage from "../../assets/about-image.png";
import scope from "../../assets/scope.svg";
import { useTheme } from "@emotion/react";
import Cards from "./Cards";

function About() {
  const theme = useTheme();
  const styles = {
    subtitle: { color: "#9C9C9C" },
    container: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "bottom",
    },
    titles: { maxWidth: "70%", margin: "auto", textAlign: "center" },
    imageContainer: {
      borderRadius: "25px",
    },
    imageDiv: {
      bgcolor: "#C1EFEC",
      width: "50px",
      height: "fit-content",
    },
    scope: { height: "auto", width: "40%" },
  };
  return (
    <Grid
      id="about"
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={styles.container}
    >
      <KCTitle
        subtitle="About Us"
        prefix="Doctor AI"
        title=" is a health tech founded by medical doctors in 2019"
        maxWidth="100%"
      ></KCTitle>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={[5, 5, 3]}
        sx={{ margin: "auto", padding: ["0px 20px", "0px 20px", "0px 50px"] }}
      >
        <Grid item md={5} xs={12} sx={styles.imageContainer}>
          <Box
            sx={{
              width: ["80vw", "80vw", "fit-content"],
              margin: "auto",
              bgcolor: "#C1EFEC",
              borderRadius: "10%",
            }}
          >
            <img
              alt="about-doctor-ai"
              src={aboutImage}
              style={{
                width: "100%",
                position: "relative",
                top: "-20px",
                right: "28px",
              }}
            />
          </Box>

          <Box sx={styles.imageDiv}></Box>
        </Grid>
        <Grid item md={5} xs={12} mx={2}>
          <Typography sx={{ textShadow: "5px 5px 16px rgb(0 0 0 / 24%)" }}>
            In the face of accelerating advancements in artificial intelligence,
            it's imperative that healthcare systems not only adapt but also lead
            the way in technological innovation. We are at the forefront of this
            transformation, developing AI-powered medical solutions to address a
            myriad of challenges prevalent in healthcare today.
          </Typography>
          <Stack mx="auto" mb={3} py={2} sx={styles.scope}>
            <img src={scope} alt="doctor-ai"></img>
          </Stack>
          <Typography sx={{ textShadow: "5px 5px 16px rgb(0 0 0 / 24%)" }}>
            Our primary mission is to empower medical professionals with
            state-of-the-art tools, enabling them to deliver unparalleled
            quality of care to their patients.
          </Typography>

          {/* <Typography>
            “We dream a world where people won’t be separated from their
            doctors, their pharmacists by distance, events, or circumstances, a
            world where technology is crafted to help and where innovation
            promotes everyone’s well-being, Healthy is DoctorAI…”
            <Typography
              variant="h6"
              color={theme.palette.primary.dark}
              sx={{ display: "inline", textTransform: "none" }}
            >
              Kevin Muragijimana MD, CEO & Founder at DoctorAI Ltd.
            </Typography>
          </Typography> */}
        </Grid>
      </Grid>
      <Cards></Cards>
    </Grid>
  );
}

export default About;
