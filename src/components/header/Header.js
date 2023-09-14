import React from "react";
import { Stack } from "@mui/material";
import backgroundImage from "../../assets/hero-background.webp";
import backgroundImagePhone from "../../assets/hero-background-phone.webp";
import Menu from "./Menu";
import Hero from "./Hero";
import Model from "./Model";

function Header() {
  return (
    <Stack>
      <Stack
        sx={{
          backgroundImage: [
            `url(${backgroundImagePhone})`,
            `url(${backgroundImagePhone})`,
            `url(${backgroundImage})`,
          ],
          backgroundSize: "cover",
          overflow: "clip",
        }}
        px={5}
        py={1}
        spacing={5}
      >
        <Menu></Menu>
        <Hero></Hero>
        <Model />
      </Stack>
    </Stack>
  );
}

export default Header;
