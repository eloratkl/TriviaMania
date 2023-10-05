import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../components/style.css";

function Homepage() {
  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2" fontWeight="bold">
          Home 🏠
        </Typography>
        <Typography variant="body1">
          Please log in.
        </Typography>
      </Box>
    </Container>
  );
}

export default Homepage;
