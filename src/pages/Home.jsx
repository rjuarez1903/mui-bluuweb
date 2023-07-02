import { Box, Button, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import cards from "../constants/cards";
import React from "react";
import MyCard from "../components/CustomCard/CustomCard";
import camera from "../assets/camera.png";

export default function Home() {
  const Img = styled("img")({
    width: "100%",
    height: "auto",
    objectFit: "cover",
    objectPosition: "center",
  });
  return (
    <>
      <Typography variant="h3" sx={{ mt: 5 }}>
        Home
      </Typography>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Grid container sx={{ gap: { xs: 2, md: 0 } }}>
        <Grid item md={6}>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis
            aliquid aspernatur nobis maiores voluptates exercitationem. Sapiente
            exercitationem velit quibusdam sunt odio modi quam nulla sit
            aspernatur necessitatibus minima cum quaerat tenetur veniam fugit
            vel iure, commodi quisquam architecto qui nobis fugiat voluptate?
            Beatae dolorem fugit modi perferendis repellat reprehenderit.
          </Typography>
          <Button variant="contained" size="large">Tell me more</Button>
          <Button variant="outlined" size="large" sx={{ml: 1}}>Lorem</Button>
        </Grid>
        <Grid item md={6}>
          <Img src={camera} alt="camera" />
        </Grid>
      </Grid>
      <Grid
        container
        // spacing={5}
        sx={{
          gap: 2,
          justifyContent: {xs: "center", lg: "space-between"},
          mt: 5,
          mb: 5,
        }}
      >
        {cards.map((card) => (
          <MyCard
            key={card.id}
            cardTitle={card.cardTitle}
            cardDescription={card.cardDescription}
            cardImage={card.img}
          />
        ))}
      </Grid>
    </>
  );
}
