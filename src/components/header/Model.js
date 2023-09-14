import React from "react";
import ModelCardMobile from "./model/ModelCardMobile";
import ModelCardWeb from "./model/ModelCardWeb";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import heroHand from "../../assets/hero-hand.png";
import { pxToVw } from "../../utilities/cssUtils";

const styles = {
  handImage: {
    width: pxToVw(880),
    zIndex: 100,
    position: "relative",
    top: "-45vw",
    right: "-44vw",
  },
};

function Model() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.dark,
        display: "grid",
        placeSelf: "center",
        width: "100vw",
      }}
      p={7}
    >
      {/* <Box
        sx={{
          height: 0,
        }}
        display={{ xs: "none", sm: "none", md: "block" }}
      >
        <img src={heroHand} style={styles.handImage} alt="ai-doctor" />
      </Box> */}

      <ModelCardMobile />
      <ModelCardWeb />
    </Box>
  );
}

export default Model;
