import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

export default function NavBar({ navLinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        color="secondary"
      >
        <Toolbar>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={() => setOpen(true)} color="inherit">
              <MenuIcon></MenuIcon>
            </IconButton>
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navLinks.map((navlink) => (
              <Button
                key={navlink.title}
                color="inherit"
                component={NavLink}
                to={navlink.path}
              >
                {navlink.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
}
