import React from "react";
import { Link } from "react-router-dom";
// import { Container, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import "../components/style.css";

import Card from "../components/structure/Card";

function Homepage() {
  return (
    <div className="homepage-div">
      <Link to="/" className="homepage-logo-link">
        <img
          src="/images/logo.png"
          alt="Trivia Mania Logo"
          className="homepage-logo"
        />
      </Link>

      <Card>
        <h2
          style={{ fontSize: "1.7rem", fontWeight: "bold", color: "#9644C6" }}
        >
          Pick a Topic to begin!
        </h2>
        <div className="homepage-topics-container">
          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">General</div>
            <img
              src="/images/general-knowledge.jpg"
              alt="general-knowledge.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">Mythology</div>
            <img
              src="/images/mythology.jpg"
              alt="mythology.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">Sports</div>
            <img
              src="/images/sports.jpg"
              alt="sports.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">Geography</div>
            <img
              src="/images/geography.jpg"
              alt="geography.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">History</div>
            <img
              src="/images/history.jpg"
              alt="history.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">Politics</div>
            <img
              src="/images/politics.jpg"
              alt="politics.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">Art</div>
            <img
              src="/images/art.jpg"
              alt="art.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">Celebrities</div>
            <img
              src="/images/celebrities.jpg"
              alt="celebrities.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">Animals</div>
            <img
              src="/images/animals.jpg"
              alt="animals.jpg"
              className="homepage-image"
            />
          </Link>

          <Link to="/target-route" className="homepage-image-link">
            {" "}
            <div className="homepage-topics-title">Vehicles</div>
            <img
              src="/images/vehicles.jpg"
              alt="vehicles.jpg"
              className="homepage-image"
            />
          </Link>
        </div>
      </Card>

      <button
        fullWidth
        variant="contained"
        type="submit"
        className="homepage-button"
        style={{cursor: "pointer"}}
      >
        <span
          style={{
            background:
              "-webkit-linear-gradient(90deg, rgba(150, 68, 198, 1) 0%, rgba(142, 242, 255, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Start a random Quiz
        </span>
      </button>
    </div>
  );
}

export default Homepage;

// <Card>
//   <h2 variant="h2" fontWeight="bold">
//     Begin by logging in!
//   </h2>
//   <div variant="body1">
//     Please <Link to="/login">log in</Link>.
//   </div>
// </Card>;
