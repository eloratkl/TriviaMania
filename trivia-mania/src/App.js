import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import Leaderboard from "./pages/Leaderboard";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";


function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Typography variant="h2" fontWeight="bold">
        Trivia Mania
      </Typography>
      <Settings />
      {/* <Board /> */}
    </>
  );
}

export default App;
