"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useRouter } from "next/router";

export default function MultiActionAreaCard({ animal, onCardClick }) {

    const handleClick = () => {
      console.log("clicked animal card");
      onCardClick(animal); // Pass animal ID to the callback
    };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          sx={{ height: 200, objectFit: "cover" }}
          image={`${animal.name}.jpg`}
          alt={animal.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {animal.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {animal.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          view animal
        </Button>
      </CardActions>
    </Card>
  );
}
