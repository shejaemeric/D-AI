import React from "react";
import KCCard from "../../components/reusable/KCCard";
import visionIcon from "../../assets/icons/visionIcon.svg";
import missionIcon from "../../assets/icons/missionIcon.svg";
import valuesIcon from "../../assets/icons/valuesIcon.svg";
import { Grid } from "@mui/material";

function Cards() {
  const data = [
    {
      id: 0,
      title: "Our Vision",
      icon: visionIcon,
      description: "Modernize healthcare",
    },
    {
      id: 1,
      title: "Our Mission",
      icon: missionIcon,
      description:
        "Leverage groundbreaking technologies to elevate community well-being",
    },
    {
      id: 2,
      title: "Our Values",
      icon: valuesIcon,
      description: "Privacy – Reliability – Innovation.",
    },
  ];
  return (
    <Grid
      container
      justifyContent="space-around"
      py={10}
      px={4}
      mt={8}
      spacing={2}
      sx={{ bgcolor: "#F8F8F8", pl: [4, 4, "100px"], pr: [4, 4, "100px"] }}
    >
      {data.map((item) => (
        <Grid item md={3.5} sm={12} key={item.id} sx={{ width: "100%" }}>
          <KCCard
            icon={item.icon}
            title={item.title}
            sx={{ textShadow: "5px 5px 16px rgb(0 0 0 / 24%)" }}
          >
            {item.description}
          </KCCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
