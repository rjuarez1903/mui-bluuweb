import { NavLink } from "react-router-dom";
import {
  Box,
  // Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DrafstIcon from "@mui/icons-material/Drafts";

export default function NavListDrawer({ navLinks, setOpen }) {
  return (
    <Box sx={{ width: 250 }}>
      {/* <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DrafstIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </nav>
      <Divider /> */}
      <nav>
        <List>
          {navLinks.map((navlink) => (
            <ListItem disablePadding key={navlink.title}>
              <ListItemButton component={NavLink} to={navlink.path} onClick={() => setOpen(false)}>
                <ListItemIcon>{navlink.icon}</ListItemIcon>
                <ListItemText primary={navlink.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
