import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(null);
  const [movies, setMovies] = useState([]);

  const getMetaData = async () => {
    const res = await axios.get(`/api/movies/metaData?title=${search}`);

    if (!res.data) return;

    if (maxPages !== res.data) {
      setMaxPages(res.data);
    }
  };

  const getMovieList = async () => {
    const res = await axios.get(
      `/api/movies/search?page=${page}&title=${search}`
    );

    setMovies(res.data);
  };

  const handleSearchChange = (e: any) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const onPageChange = (_: any, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getMetaData();
    getMovieList();
  }, [page, search]);

  return (
    <Grid container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "36px",
        }}
      >
        <TextField
          sx={{ minWidth: "375px" }}
          name="search"
          value={search}
          onChange={handleSearchChange}
          label="Search by movie title"
        />
      </Box>

      <Grid container spacing={2} sx={{ padding: "2rem" }}>
        {movies &&
          movies.map((movie: any) => (
            <Grid item md={6}>
              <Movie key={movie.id} movie={movie} />
            </Grid>
          ))}
      </Grid>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "12px 0px",
        }}
      >
        {maxPages && (
          <Pagination
            count={maxPages}
            page={page}
            onChange={onPageChange}
            variant="outlined"
            shape="rounded"
          />
        )}
      </Box>
    </Grid>
  );
};

const Movie = ({ movie }: any) => {
  const router = useRouter();
  const { genres } = movie;

  return (
    <Card sx={{ minWidth: "320px" }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {movie.title}
        </Typography>
        <Box sx={{ display: "flex", gap: "4px" }}>
          {genres &&
            genres.map(({ genre }: any) => <Chip label={genre.name} />)}
        </Box>
        <Typography variant="body2" sx={{ paddingTop: "16px" }}>
          {movie.description.slice(0, 100) + " ..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => router.push(`/movies/${movie.id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Home;
