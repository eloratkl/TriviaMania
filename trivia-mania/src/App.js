import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import Leaderboard from "./pages/Leaderboard";
import QuizStart from "./pages/QuizStart";
import { AuthWrapper, AuthData } from "./auth/AuthWrapper";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthWrapper>
        <Container maxWidth="sm">
          <Box textAlign={"center"} mt="5">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <PrivateRoute path="/quizstart" element={<QuizStart />} />
              <PrivateRoute path="/settings" component={<Settings />} />
              <PrivateRoute path="/questions" component={<Questions />} />
              <PrivateRoute path="/score" component={<FinalScreen />} />
              <PrivateRoute path="/leaderboard" component={<Leaderboard />} />
            </Routes>
          </Box>
        </Container>
      </AuthWrapper>
    </Router>
  );
}

function PrivateRoute({ element, ...rest }) {
  const { user } = useContext(AuthData); // Get the user from the AuthData context

  return user.isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Typography>
      Please log in to view this page
      <Navigate to="/login" />
    </Typography>
  );
}

export default App;
