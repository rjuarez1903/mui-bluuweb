import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Product() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt: 5,
        }}
      >
        <Img src="https://via.placeholder.com/200" alt="Imagen 200x200" />
        <Box sx={{ flexgrow: 1, display: "grid", gap: 4 }}>
          <Typography variant="h4" gutterBottom>
            Product name
          </Typography>
          <Typography variant="body1" gutterBottom>
            Product description
          </Typography>
          <Button variant="outlined">Add to cart</Button>
        </Box>
        <Box sx={{ mr: 2 }} component="p">
          19.90
        </Box>
      </Paper>
    </>
  );
}
