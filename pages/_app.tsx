import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Box";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          py: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <Button onClick={() => router.push("/")}>Movies</Button>
        <Button onClick={() => router.push("/actors")}>Actors</Button>
      </Box>
      <Divider sx={{ marginY: "8px" }} />
      <Component {...pageProps} />
    </Box>
  );
}

export default MyApp;
