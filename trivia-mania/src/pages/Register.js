import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/api"; // Import signup from your external module

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", // Add input for name
    email: "", // Add input for email
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    try {
      // Use the signup function from your external module
      const success = await signup(formData.name, formData.email, formData.password);

      if (success) {
        // If signup is successful, you can navigate to a different page (e.g., dashboard).
        navigate("/login");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
