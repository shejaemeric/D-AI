import { useTheme } from "@emotion/react";
import { Typography, Stack, Grid, Divider } from "@mui/material";
import React, { useState } from "react";
import KCImage from "../../reusable/KCImage";
import KCButton from "../../reusable/form/KCButton";
import options from "../../../utilities/modelOptions";

function ModelCardMobile() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const styles = {
    button: {
      background: theme.palette.primary.light,
      borderRadius: "7px",
      width: "fit-content",
    },
    container: {
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
      borderRadius: "20px",
      color: "#fff",
      border: "1px solid #25736f5e",
      paddingBottom: "10px",
    },
    divider: { bgcolor: "white", width: "30%", border: "2px solid #fff" },
  };
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      sx={styles.container}
      wrap="wrap-reverse"
      p={3}
      display={{ md: "none" }}
    >
      <Grid item md={8} sx={{ paddingLeft: "0px !important" }}>
        <KCImage
          sx={{ width: "70vw" }}
          alt={options[selected].label}
          src={options[selected].image}
        ></KCImage>
        <Stack spacing={2} mt={1}>
          {selected === 0 ? (
            <Stack justifyContent="center" gap={3}>
              <Typography sx={{ textAlign: "center" }} variant="h5">
                {options[selected].label}
              </Typography>
              <KCButton sx={{ ...styles.button, textAlign: "center" }}>
                DoctorAI Assistant
              </KCButton>
              <Typography px={2}>{options[selected].description}</Typography>
            </Stack>
          ) : (
            <div>
              <Typography variant="h2" my={1}>
                {options[selected].accuracy} AI Model ACCURACY (%)
              </Typography>
              <KCButton sx={styles.button}>{options[selected].label}</KCButton>
            </div>
          )}
        </Stack>
      </Grid>
      <Grid item md={3} spacing={2} sx={{ paddingLeft: "0px !important" }}>
        <Stack mb={1.5}>
          <Typography variant="h2" my={1}>
            DoctorAI AI models
          </Typography>

          <Divider sx={styles.divider}></Divider>
        </Stack>
        <Stack gap={1.4}>
          {options.map((item) => (
            <Typography
              key={item.id}
              sx={{ fontWeight: selected === item.id ? 600 : 300 }}
              onClick={() => setSelected(item.id)}
            >
              {item.value}
            </Typography>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ModelCardMobile;
