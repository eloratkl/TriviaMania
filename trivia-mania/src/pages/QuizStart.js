import Card from "../components/structure/Card";
import "../components/style.css";

export const QuizStart = () => {
  return (
    <div className="quiz-start-div">
      <Card>
        <h2 className="quiz-start-title">Cat Facts</h2>
        <div className="quiz-tracker-container">
          <div className="quiz-tracker">
            <div className="quiz-bold">Time Limit:</div>
            <div>3 Mins</div>
          </div>

          <div className="quiz-tracker">
            <div className="quiz-bold">Points:</div>
            <div>200 points</div>
          </div>
        </div>

        <img
          src="/images/history.jpg"
          alt="history.jpg"
          className="quiz-start-image"
        />

        <p className="quiz-start-p">
Hey! you there, with the hands funny little cat chirrup noise shaking upright tail when standing next to you yet cereal boxes make for five star accommodation yet cccccaaaaaatttttttttssssssss and my water bowl is clean and freshly replenished, so i'll drink from the toilet.
        </p>

        <button
          fullWidth
          variant="contained"
          type="submit"
          className="quiz-start-button"
        >
          Start!
        </button>
      </Card>
    </div>
  );
};
