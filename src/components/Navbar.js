import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export const NAVBAR_HEIGHT = 64; // Export this constant

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: NAVBAR_HEIGHT,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {"<"}CodePath{" />"}
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Learning Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/how-to-use">
          How to Use
        </Button>
        <Button
          color="inherit"
          href="https://github.com/syedsaadh/codepath"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
