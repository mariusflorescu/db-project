import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";

const Actors = () => {
  const router = useRouter();

  const [actors, setActors] = useState(null);

  const getActorsList = async () => {
    const res = await axios.get("/api/actors");

    if (res.data) {
      setActors(res.data);
    }
  };

  useEffect(() => {
    getActorsList();
  }, []);

  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography variant="h4">List of actors</Typography>
      <Grid container spacing={3} sx={{ py: "24px" }}>
        {actors &&
          actors.map((actor: any) => (
            <Grid
              key={actor.id}
              item
              md={4}
              sx={{ cursor: "pointer" }}
              onClick={(e: any) => router.push(`/actors/${actor.id}`)}
            >
              <ActorCard actor={actor} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

const ActorCard = ({ actor }: any) => {
  return (
    <Card sx={{ px: "12px", py: "8px" }} variant="outlined">
      <Typography variant="body1" sx={{ fontWeight: 650 }}>
        {actor.firstname + " " + actor.lastname}
      </Typography>
      <Typography variant="body2">Played in {actor.count} movies</Typography>
    </Card>
  );
};

export default Actors;
