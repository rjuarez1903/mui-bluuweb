import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function MyCard({ cardTitle, cardDescription, cardImage }) {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={cardImage}
          height="200"
          alt="Card Image"
        />
        <CardContent>
          <Typography variant="h5">{cardTitle}</Typography>
          <Typography variant="body1">{cardDescription}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ mt: "auto" }}>
        <Button variant="contained" color="primary">
          Add
        </Button>
        <Button variant="outlined" color="error">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
