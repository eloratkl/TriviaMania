import React from "react";
import { Link } from "react-router-dom";
// import { Container, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import "../components/style.css";


import Card from "../components/structure/Card";

function Homepage() {
  return (
    <Card>
      <h2 variant="h2" fontWeight="bold">
        Home 🏠
      </h2>
      <div variant="body1">
        Please <Link to="/login">log in</Link>.
      </div>
    </Card>
  );
}

export default Homepage;
