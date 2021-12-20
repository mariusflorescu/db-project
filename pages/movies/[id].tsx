import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Button, Grid, TextField, Card } from "@mui/material";

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState(null);
  const [actors, setActors] = useState(null);

  //form related
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchMovieById = async () => {
    const res = await axios.get(`/api/movies/${id}`);
    console.log(res.data);

    setMovie(res.data);
  };

  const handleSubmitReview = async () => {
    await axios.post("/api/reviews", {
      firstname,
      lastname,
      title,
      description,
      movie_id: movie?.id,
    });

    fetchMovieById();
  };

  useEffect(() => {
    if (id) {
      fetchMovieById();
    }
  }, [id]);

  useEffect(() => {
    if (movie) {
      const genresNames = movie.genres.map((genre: any) => genre.genre.name);
      setGenres(genresNames.join(", "));

      const actorNames = movie.actors.map(
        (actor: any) => `${actor.actor.firstname} ${actor.actor.lastname}`
      );
      setActors(actorNames.join(", "));
    }
  }, [movie]);

  return (
    <Box sx={{ padding: "2rem" }}>
      {movie && (
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            {movie.title}
          </Typography>
          <Typography component="p">Genres: {genres}</Typography>
          <Typography component="p">
            Directed by:{" "}
            {movie.director.firstname + " " + movie.director.lastname}
          </Typography>

          <Typography sx={{ paddingTop: "24px" }}>
            Description: {movie.description}
          </Typography>
          <Typography sx={{ padding: "12px 0" }}>Actors: {actors}</Typography>
        </Box>
      )}

      <Divider sx={{ margin: "24px 0" }} />

      <Typography variant="h5" sx={{ fontWeight: 600, paddingY: "24px" }}>
        Leave your review
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item md={6}>
          <TextField
            value={firstname}
            onChange={(e: any) => setFirstname(e.target.value)}
            label="Firstname..."
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            value={lastname}
            onChange={(e: any) => setLastname(e.target.value)}
            label="Lastname..."
            fullWidth
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            label="Title..."
            fullWidth
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            label="Description..."
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            fullWidth
            multiline
            minRows={3}
            maxRows={4}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingY: "12px",
        }}
      >
        <Button onClick={handleSubmitReview}>Submit your review</Button>
      </Box>

      <Divider sx={{ margin: "24px 0" }} />

      <Typography variant="h5" sx={{ fontWeight: 600, paddingY: "24px" }}>
        {movie && movie.reviews.length} reviews
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {movie &&
          movie.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </Box>
    </Box>
  );
};

const ReviewCard = ({ review }: any) => {
  return (
    <Card variant="outlined" sx={{ paddingY: "6px", paddingX: "16px" }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {review.title}
      </Typography>
      <Typography variant="subtitle1">
        by {review.firstname + " " + review.lastname}
      </Typography>
      <Divider sx={{ marginY: "8px" }} />
      <Typography variant="body1">{review.description}</Typography>
    </Card>
  );
};

export default Movie;
