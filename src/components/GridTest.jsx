import { Grid, Typography } from "@mui/material";

export default function GridTest() {
  return (
    <Grid container spacing={5}>
      <Grid item md={6}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias,
          provident nihil incidunt aliquam quia fugiat cum ex similique nemo
          sint deserunt porro quisquam numquam eveniet illum delectus eaque aut.
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias,
          provident nihil incidunt aliquam quia fugiat cum ex similique nemo
          sint deserunt porro quisquam numquam eveniet illum delectus eaque aut.
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias,
          provident nihil incidunt aliquam quia fugiat cum ex similique nemo
          sint deserunt porro quisquam numquam eveniet illum delectus eaque aut.
        </Typography>
      </Grid>
    </Grid>
  );
}
