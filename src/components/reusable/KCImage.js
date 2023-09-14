import { useTheme } from "@emotion/react";
import React from "react";
import { Box, IconButton } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useMediaQuery } from "@mui/material";

function KCImage(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const styles = {
    image: {
      objectFit: "cover",
      objectPosition: "center",
      border: isSmallScreen ? "1.5vw solid" : "0.8vw solid",
      width: "inherit",
      borderRadius: "14%",
      maxWidth: "100%",
      height: "auto",
    },
  };
  return (
    <Box
      sx={{
        width: ["100%", "40vw", "40vw"],
        height: "auto",
        ...props.sx,
        ...props.style,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {props.displayIcon && (
        <IconButton
          sx={{
            position: "absolute",
            top: ["18%", "14%", "12%"],
            right: "6%",
            transform: "translate(0, -50%)",
            zIndex: 1,
          }}
          id="download-doc"
        >
          <FileDownloadIcon
            sx={{
              fontSize: ["25px", "30px", "2.3vw"],
              color: "#383737",
              background: theme.palette.primary.light,
              transition: "transform 0.2s ease-in-out",
              opacity: 1,
              "&:hover": {
                transform: "scale(1.1)",
                opacity: 1,
              },
              padding: 0.5,
              borderRadius: "inherit",
            }}
          />
        </IconButton>
      )}
      <img
        alt={props.alt}
        src={props.src}
        style={{
          ...styles.image,
          borderColor: `${theme.palette.primary.light}66`,
          filter: props.blur ? "blur(5.3794px)" : "none",
        }}
      />
    </Box>
  );
}

export default KCImage;
