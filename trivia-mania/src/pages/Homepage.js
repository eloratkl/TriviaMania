import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/style.css";
import Card from "../components/structure/Card";

function Homepage() {
  const topics = [
    {
      title: "Books",
      startQuizParagraph:
        "Welcome to our Books Quiz, where the enchanting world of literature awaits your exploration! From timeless classics to contemporary bestsellers, we'll journey through the pages of imagination and storytelling. Whether you're a bookworm, a casual reader, or an aspiring bibliophile, this quiz is your opportunity to test your knowledge of characters, authors, and literary landscapes. Are you ready to flip through the chapters, decode the plots, and reveal your bookish expertise? Let's embark on this literary adventure and discover the enchanting tales that have captured hearts and minds for generations!",
      startQuizImage: "/images/books.jpg",
      startQuizAlt: "books.jpg",
    },
    {
      title: "Mythology",
      startQuizParagraph:
        "Step into the mystical world of gods, heroes, and ancient legends in our Mythology Quiz! Prepare to journey through the realms of Greek, Norse, Egyptian, and more mythologies. From epic battles to timeless tales, test your knowledge of these ancient narratives that have shaped cultures and beliefs. Are you ready to uncover the secrets of the gods and prove your mastery of myth? Let the adventure begin!",
      startQuizImage: "/images/mythology.jpg",
      startQuizAlt: "mythology.jpg",
    },
    {
      title: "Sports",
      startQuizParagraph:
        "Get your game face on because it's time to dive into the exhilarating world of sports with our Sports Quiz! Whether you're a die-hard fan or a casual observer, this quiz is your chance to prove your sports savvy. From legendary athletes to iconic moments, we've got a wide range of questions to challenge your sports knowledge. So, grab your jersey, warm up those mental muscles, and get ready to hit the field of trivia. Are you prepared to be the MVP of this sports quiz? Let's kick off the game!",
      startQuizImage: "/images/sports.jpg",
      startQuizAlt: "sports.jpg",
    },
    {
      title: "Geography",
      startQuizParagraph:
        "Welcome to our Geography Quiz, a thrilling journey around the globe! From towering mountain ranges to the deepest ocean trenches, we'll explore the incredible diversity of our planet. Whether you're a geography whiz or simply curious about the world, this quiz is designed for everyone. Test your knowledge of countries, capitals, landmarks, and natural wonders. Get ready to navigate through continents and oceans, and prove you're a true geography aficionado. Are you prepared to embark on this adventure and showcase your geographical prowess? Let's set sail and discover the world together!",
      startQuizImage: "/images/geography.jpg",
      startQuizAlt: "geography.jpg",
    },
    {
      title: "History",
      startQuizParagraph:
        "Welcome to our History Quiz, where we'll journey through the annals of time and explore the captivating stories that have shaped our world. From ancient civilizations to modern revolutions, we'll test your knowledge of pivotal moments, remarkable figures, and world-changing events. Whether you're a history enthusiast or just curious about the past, this quiz is your chance to discover and learn from the lessons of history. Are you ready to step into the shoes of those who came before us and prove your historical acumen? Let's embark on a thrilling adventure through the pages of our shared human story!",
      startQuizImage: "/images/history.jpg",
      startQuizAlt: "history.jpg",
    },
    {
      title: "Politics",
      startQuizParagraph:
        "Welcome to our Politics Quiz, where we'll dive into the complex world of governance, policies, and the people who shape our societies. From international relations to the intricacies of domestic politics, we'll test your knowledge of the forces that drive our world's political landscape. Whether you're a political aficionado or just curious about the decisions that affect us all, this quiz is your opportunity to explore and expand your understanding of the political realm. Are you prepared to dissect the issues, explore the ideologies, and prove your political insight? Let's embark on this journey through the corridors of power and decision-making!",
      startQuizImage: "/images/politics.jpg",
      startQuizAlt: "politics.jpg",
    },
    {
      title: "Art",
      startQuizParagraph:
        "Welcome to our Art Quiz, a vibrant canvas of creativity and culture! Prepare to immerse yourself in the world of artistic masterpieces, renowned artists, and the many facets of creative expression. From classic paintings to contemporary installations, we'll explore the captivating realm of visual arts. Whether you're an art connoisseur or just curious about the beauty of human creativity, this quiz offers a colorful journey for all. Are you ready to decipher the strokes, unravel the symbolism, and reveal your artistic knowledge? Let's step into the gallery of questions and discover the world of art together!",
      startQuizImage: "/images/art.jpg",
      startQuizAlt: "art.jpg",
    },
    {
      title: "Celebrities",
      startQuizParagraph:
        "Welcome to our Art Quiz, a vibrant canvas of creativity and culture! Prepare to immerse yourself in the world of artistic masterpieces, renowned artists, and the many facets of creative expression. From classic paintings to contemporary installations, we'll explore the captivating realm of visual arts. Whether you're an art connoisseur or just curious about the beauty of human creativity, this quiz offers a colorful journey for all. Are you ready to decipher the strokes, unravel the symbolism, and reveal your artistic knowledge? Let's step into the gallery of questions and discover the world of art together!",
      startQuizImage: "/images/celebrities.jpg",
      startQuizAlt: "celebrities.jpg",
    },
    {
      title: "Animals",
      startQuizParagraph:
        "Welcome to our Animals Quiz, where we'll embark on a wild adventure through the captivating world of the animal kingdom! From the depths of the oceans to the heights of the sky, we'll explore the fascinating creatures that share our planet. Whether you're a zoology enthusiast or simply love all things furry, feathered, and finned, this quiz is designed for everyone. Test your knowledge of diverse species, habitats, and remarkable behaviors. Are you ready to uncover the mysteries of the natural world, showcase your love for animals, and prove you're a true animal aficionado? Let's begin this exciting journey through the wild and wonderful!",
      startQuizImage: "/images/Animals.jpg",
      startQuizAlt: "animals.jpg",
    },
    {
      title: "Vehicles",
      startQuizParagraph:
        "Rev up your engines and fasten your seatbelts because it's time to explore the exhilarating world of vehicles in our Vehicles Quiz! From sleek sports cars to powerful trucks, we'll navigate through the fascinating evolution of transportation. Whether you're a motorhead, an aviation enthusiast, or simply curious about the machines that move us, this quiz is designed for everyone. Test your knowledge of iconic vehicles, cutting-edge technology, and the pioneers who shaped the industry. Are you ready to shift into gear, accelerate your vehicle expertise, and prove your mastery of the road and sky? Let's kick-start this thrilling ride!",
      startQuizImage: "/images/vehicles.jpg",
      startQuizAlt: "vehicles.jpg",
    },
  ];

  const navigate = useNavigate();

  // State to hold the error message
  const [errorMessage, setErrorMessage] = React.useState(null);

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated");
  };

  // Function to handle the randomizer button click
  const handleRandomizerClick = () => {
    if (!isAuthenticated()) {
      // Set the error message
      setErrorMessage(
        "Please log in. If you don't have an account, sign up for one instead!"
      );
    } else {
      // If the user is authenticated, clear the error message
      setErrorMessage(null);
      // Proceed with starting a random quiz
      const randomIndex = Math.floor(Math.random() * topics.length);
      const selectedTopic = topics[randomIndex];
      navigate("/quizstart", { state: selectedTopic });
    }
  };

  // Function to handle category image clicks
  const handleCategoryImageClick = (selectedTopic) => {
    if (!isAuthenticated()) {
      // Set the error message
      setErrorMessage(
        "Please log in. If you don't have an account, sign up for one instead!"
      );
    } else {
      // If the user is authenticated, clear the error message
      setErrorMessage(null);
      // Proceed with starting the selected category quiz
      navigate("/quizstart", { state: selectedTopic });
    }
  };

  return (
    <div className="homepage-div">
      <Link to="/" className="homepage-logo-link">
        <img
          src="/images/logo.png"
          alt="Trivia Mania Logo"
          className="homepage-logo"
        />
      </Link>

      <Card className="cardContainerHome">
        {errorMessage ? (
          <h3 style={{ fontSize: "1.7rem", fontWeight: "bold", color: "red" }}>{errorMessage}</h3>
        ) : (
          <h3
            style={{ fontSize: "1.7rem", fontWeight: "bold", color: "#9644C6" }}
          >
            Pick a Topic to begin!
          </h3>
        )}

        <div className="homepage-topics-container">
          {topics.map((topic, index) => (
            <div
              className="homepage-image-link"
              onClick={() => handleCategoryImageClick(topic)} // Call the new function
              key={topic.title}
            >
              <div className="homepage-topics-title">{topic.title}</div>
              <img
                src={topic.startQuizImage}
                alt={topic.startQuizAlt}
                className="homepage-image"
              />
            </div>
          ))}
        </div>
      </Card>

      <button
        fullWidth
        variant="contained"
        type="submit"
        className="homepage-button"
        style={{ cursor: "pointer" }}
        onClick={handleRandomizerClick}
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
