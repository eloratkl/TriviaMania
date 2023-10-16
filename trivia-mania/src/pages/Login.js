import { Link } from "react-router-dom";
import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import styles from "./LoginSignUp.module.css";

import Card from "../components/structure/Card";

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
        navigate("/account");
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
    <Card>
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

        {error && <p className={ styles.loginError}>{error}</p>}

        <button
          className="buttonLight"
          type="button"
          onClick={handleLoginSubmit}
        >
          Log In
        </button>
        <p className={styles.info}>
          Don’t have an account? <Link to="/register">Sign up</Link> instead!
        </p>
      </form>
    </Card>
  );
};
