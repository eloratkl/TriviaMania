import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/api"; // Import signup from your external module
import styles from "./Register.module.css"; // Import your CSS file

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    try {
      const success = await signup(
        formData.name,
        formData.email,
        formData.password
      );

      if (success) {
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
    <div className={styles.registerContainer}>
      <h2 className={styles.header}>Be Trivia Maniac!</h2>
      <form>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className={styles.inputField}
            placeholder="Your Name"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={styles.inputField}
            placeholder="Your Email Address"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            Password*
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className={styles.inputField}
            placeholder="Your Password"
          />
        </div>
        <button type="button" onClick={handleSignup} className={styles.signupButton}>
          Sign Up
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
