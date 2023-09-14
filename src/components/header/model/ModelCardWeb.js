import { useTheme } from "@emotion/react";
import { Typography, Stack, Grid, Divider } from "@mui/material";
import React, { useState } from "react";
import KCImage from "../../reusable/KCImage";
import KCButton from "../../reusable/form/KCButton";
import options from "../../../utilities/modelOptions";

function ModelCardWeb() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const styles = {
    button: {
      background: theme.palette.primary.light,
      borderRadius: "7px",
      "&:hover": {
        background: "#07A499",
      },
    },
    container: {
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
      borderRadius: "20px",
      color: "#fff",
      border: "1px solid #0b738463",
      paddingBottom: "50px",
    },
    divider: { bgcolor: "white", width: "30%", border: "2px solid #fff" },
  };

  return (
    <Grid display={{ xs: "none", md: "block" }} px={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={styles.container}
        p={3}
      >
        <Stack spacing={2} sx={{ width: "30%" }}>
          <Typography variant="h4">DoctorAI AI models</Typography>

          <Divider sx={styles.divider}></Divider>
          <Stack gap={1.4}>
            {options.map((item) => (
              <Typography
                key={item.id}
                sx={{
                  fontWeight: item?.id === selected ? 600 : 300,
                  textTransform: "capitalize",
                }}
                onClick={() => setSelected(item.id)}
              >
                {item.value}
              </Typography>
            ))}
          </Stack>
        </Stack>
        <Stack sx={{ width: "35%" }}>
          <KCImage
            sx={{ width: "24vw" }}
            alt={options[selected].label}
            src={options[selected].image}
          ></KCImage>
        </Stack>

        <Stack spacing={3} sx={{ width: "33%" }}>
          {selected === 0 ? (
            <Stack justifyContent="center" gap={1}>
              <Typography variant="h5">{options[selected].label}</Typography>
              <KCButton sx={styles.button}>DoctorAI Assistant</KCButton>
              <Typography px={2}>
                DoctorAI Assistant is the cornerstone of our AI-powered
                healthcare solutions, encompassing a suite of specialized
                sub-models that aid medical professionals in decision-making and
                error reduction.
              </Typography>
            </Stack>
          ) : (
            <div>
              {options[selected]?.showAccuracy && (
                <>
                  <Typography variant="h4">AI MODEL ACCURACY (%)</Typography>
                  <KCButton sx={styles.button}>
                    {options[selected].label}
                  </KCButton>
                  <Typography variant="h1">
                    {options[selected].accuracy}
                  </Typography>
                </>
              )}
            </div>
          )}
        </Stack>
      </Stack>
    </Grid>
  );
}

export default ModelCardWeb;
