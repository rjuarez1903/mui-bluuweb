import { Route, Routes } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import navLinks from "./constants/navLinks";

export default function App() {
  return (
    <>
      <NavBar navLinks={navLinks}/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Typography variant="h4" textAlign="center" color="primary">
        Hello MUI
      </Typography>
      <Typography variant="body1" textAlign="center" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus e arum
        recusandae sapiente, provident iusto consequatur veritatis excepturi id
        ducimus maiores!
      </Typography>
      <Button variant="contained" color="primary" startIcon={<AddTaskIcon />}>
        Mi primer Botón
      </Button>
      <Button variant="outlined" color="primary" startIcon={<AddTaskIcon />}>
        Mi segundo Botón
      </Button>
      <Box sx={{ border: "1px solid darkred", padding: "2rem", mt: "1rem" }}>
        <Typography variant="subtitle1" textAlign="center">
          Soy un subtítulo
        </Typography>
      </Box> */}
      </Container>
    </>
  );
}
