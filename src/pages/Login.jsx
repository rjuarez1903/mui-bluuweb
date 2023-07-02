import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";

export default function Login() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h3" sx={{ mt: 5 }}>
          Login
        </Typography>
        {/* <Collapse in={open}>
          <Alert severity="error" onClose={() => {setOpen(false)}}>
            <AlertTitle>Error</AlertTitle>
            You're not logged in.
          </Alert>
        </Collapse> */}
        <Alert
          severity="warning"
          action={
            <>
              <Button color="inherit">Update</Button>
              <Button color="inherit">Delete</Button>
            </>
          }
          icon={<AddReactionIcon />}
          variant="outlined"
        >
          Are you sure?
        </Alert>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Snackbar
        </Button>
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity="error"
          onClose={() => {
            setOpen(false);
          }}
        >
          {/* <AlertTitle>Error</AlertTitle> */}
          You're not logged in.
        </Alert>
      </Snackbar>
    </>
  );
}
