"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";

export default function MultiActionAreaCard({ animal }) {
  return (
    <Link href={`/animal/${animal.name}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 200, objectFit: "cover" }}
            image={`/${animal.name}.jpg`}
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
    </Link>
  );
}
