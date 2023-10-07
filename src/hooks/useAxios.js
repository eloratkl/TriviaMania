import axios from "axios"; // Import the axios library for making HTTP requests
import { useEffect, useState } from "react"; // Import React hooks for managing component state

axios.defaults.baseURL = "https://opentdb.com"; // Set the default base URL for axios requests

const useAxios = ({ url }) => {
  // Define a custom React hook called useAxios that accepts a URL as a parameter
  const [response, setResponse] = useState(null); // Initialize a state variable response to store the API response data
  const [error, setError] = useState(""); // Initialize a state variable error to store any API request errors
  const [loading, setLoading] = useState(true); // Initialize a state variable loading to track the loading state of the API request

  useEffect(() => {
    // Use the useEffect hook to fetch data when the URL changes
    const fetchData = () => {
      axios
        .get(url) // Send a GET request to the specified URL using axios
        .then((res) => setResponse(res.data)) // If the request is successful, set the response data to the state
        .catch((err) => setError(err)) // If there's an error, set the error message to the state
        .finally(() => setLoading(false)); // Set loading to false once the request is completed (whether success or failure)
    };

    fetchData(); // Call the fetchData function to initiate the API request
  }, [url]); // The useEffect hook will run whenever the URL changes

  // Return an object containing the response, error, and loading state
  return { response, error, loading };
};

export default useAxios; // Export the useAxios custom hook for use in other components
