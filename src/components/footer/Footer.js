import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import logo from "../../assets/icons/white-logo.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { Link } from "react-router-dom";

const styles = {
  container: { background: "#484848", color: "white" },
  logo: { width: "4.5vw", height: "auto" },
  socialIcons: { width: "2rem", height: "2rem" },
};
function Footer() {
  return (
    <div style={styles.container}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        p={5}
        m="auto"
        spacing={[5, 3, 3]}
        sx={{ minWidth: "400px" }}
      >
        <Grid item md={2} sm={6} xs={7}>
          <img src={logo} alt="doctor-ai-logo" sx={styles.logo} />
        </Grid>
        <Grid item md={3} sm={6} xs={7}>
          <Typography variant="h6" mb={1}>
            Doctor AI Ltd.
          </Typography>
          <Typography>Copyright 2023. All rights reserved</Typography>
        </Grid>

        <Grid item md={3} sm={6} xs={7}>
          <a href="/privacy-policy" style={{ textDecoration: "none" }}>
            <Typography variant="h6" color="white" mb={1}>
              Privacy policy
            </Typography>
          </a>

          <a
            href="/terms-and-conditions-of-service"
            style={{ textDecoration: "none" }}
          >
            <Typography color="white">Terms and conditions</Typography>
          </a>
        </Grid>
        <Grid item md={3} sm={6} xs={7}>
          <Typography variant="h6" mb={1}>
            Connect with us
          </Typography>

          <Stack direction="row" gap={2}>
            <a
              href="https://www.linkedin.com/company/doctorai-modernizing-healthcare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={styles.socialIcons}
                src={linkedin}
                alt="doctor-ai-linkedin"
              ></img>
            </a>

            <a
              href="https://web.facebook.com/DoctorAIApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                style={styles.socialIcons}
                alt="doctor-ai-facebook"
              ></img>
            </a>

            <a
              href="https://twitter.com/DoctorAI_App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                style={styles.socialIcons}
                alt="doctor-ai-twitter"
              ></img>
            </a>

            <a
              href="https://www.youtube.com/channel/UCq_6d32Th22U6v5lchZ4WCQ/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtube}
                style={styles.socialIcons}
                alt="doctor-ai-youtube"
              ></img>
            </a>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
