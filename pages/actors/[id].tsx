import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Actor = () => {
  const router = useRouter();
  const { id } = router.query;

  const [actor, setActor] = useState(null);

  const getActorById = async () => {
    const res = await axios.get(`/api/actors/${id}`);

    if (res.data) {
      setActor(res.data);
    }
  };

  useEffect(() => {
    if (id) {
      getActorById();
    }
  }, [id]);

  console.log(actor);

  return (
    <Box sx={{ padding: "1rem" }}>
      {actor && (
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {actor.firstname + " " + actor.lastname}
          </Typography>
          <Typography variant="h6">
            {moment(actor.birth_date).fromNow().replace("ago", "old")}
          </Typography>
          <Typography>
            Born in {moment(actor.birth_date).format("DD/MM/YYYY")}
          </Typography>

          <Divider sx={{ my: "12px" }} />

          <Typography variant="h6" sx={{ fontWeight: 650, pt: "16px" }}>
            Played in the following movies:
          </Typography>

          <ul>
            {actor.movies.map((movie: any) => (
              <li key={movie.id}>
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ cursor: "pointer" }}
                  onClick={() => router.push(`/movies/${movie.id}`)}
                >
                  {movie.title}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default Actor;
