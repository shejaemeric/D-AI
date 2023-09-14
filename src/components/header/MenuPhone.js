import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";

function MenuPhone() {
  const theme = useTheme();
  const [selected, setSelected] = useState(null);
  const menu = [
    { id: 1, label: "About us", link: "#about" },
    { id: 2, label: "AI Models", link: "#models" },
    { id: 3, label: "Contact us", link: "#contact" },
  ];
  const styles = {
    menuItem: {
      width: "100vw",
      "&:hover": {
        color: "white",
        bgcolor: theme.palette.primary.light,
      },
    },
    selected: {
      color: "white",
      bgcolor: theme.palette.primary.light,
      "&:hover": {
        color: "white",
        bgcolor: theme.palette.primary.light,
      },
    },
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (item) => {
    window.location.hash = item.link;
    setSelected(item);
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#fff0",
          boxShadow: "none",
          width: "fit-content",
          mt: 2,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{
              fontSize: "44px",
              float: "left",
              color: "white",
              backgroundColor: "#08A399",
              "&:hover": {
                bgcolor: "#08A399",
              },
            }}
            onClick={handleMenu}
          >
            <MenuIcon sx={{ width: 24, height: 24 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        sx={{ width: "100vw" }}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={open}
        onClose={handleSelect}
      >
        {menu.map((item) => (
          <MenuItem
            sx={
              item.label === selected?.label ? styles.selected : styles.menuItem
            }
            onClick={() => handleSelect(item)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MenuPhone;
