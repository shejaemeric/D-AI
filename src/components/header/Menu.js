import { PropaneRounded } from "@mui/icons-material";
import { Stack, Grid, Link } from "@mui/material";
import React from "react";
import logo from "../../assets/icons/logo.svg";
import KCButton from "../reusable/form/KCButton";
import MenuPhone from "./MenuPhone";

function Menu(props) {
  const styles = { menu: { fontFamily: "Roboto", lineHeight: "19px" } };

  const menuItems = [
    { id: 1, label: "About us", link: "#about" },
    { id: 2, label: "AI Models", link: "#models" },
    { id: 3, label: "Contact us", link: "#contact" },
  ];

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ px: [2, 2, 3] }}
    >
      <Grid item sm={6} mt={2}>
        <img src={logo} alt="doctor-ai-logo" width="56px"></img>
      </Grid>
      <Grid item xs={6} justifyContent="flex-end" display={{ md: "none" }}>
        <MenuPhone />
      </Grid>

      <Grid
        item
        alignItems="baseline"
        justifyContent="space-around"
        display={{ xs: "none", md: "block" }}
        md={6}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ color: "#484848" }}
          alignItems="center"
          justifyContent="space-around"
        >
          {props.variant && (
            <Link href="./" color="inherit" underline="hover" sx={styles.menu}>
              Home
            </Link>
          )}
          {menuItems.map((item) => (
            <Link
              href={props.variant ? "./" + item.link : item.link}
              color="inherit"
              underline="hover"
              sx={styles.menu}
            >
              {item.label}
            </Link>
          ))}
          <Link href="#cta" sx={{ textDecoration: "none" }}>
            <KCButton>Get started</KCButton>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Menu;
