import { Link } from "react-router-dom";
import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import styles from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = AuthData();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { email: "", password: "" }
  );
  const [error, setError] = useState(null);

  const handleLoginSubmit = async () => {
    try {
      const success = await handleLogin(formData.email, formData.password);

      if (success) {
        navigate("/settings");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  return (
    <div className={styles.loginContainer}>
      <form>
        <h2>Welcome Back Champ!</h2>

        <div className={styles.inputContainer}>
          <p>
            <label htmlFor="email" className={styles.label}>
              Email address*:
            </label>
          </p>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            className={styles.inputField}
            placeholder="stacysmom@gmail.com"
          />

          <p>
            <label htmlFor="password" className={styles.label}>
              Enter Password*:
            </label>
          </p>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handlePasswordChange}
            className={styles.inputField}
            placeholder="Password"
          />
        </div>

        <button className={styles.button_light} type="button" onClick={handleLoginSubmit}>
          Log In
        </button>
        <p className={styles.info}>
          Don’t have an account? <Link to="/register">Sign up</Link> instead!
        </p>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
