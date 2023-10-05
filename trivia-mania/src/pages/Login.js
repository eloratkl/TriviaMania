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
        <div className={styles.inputContainer}>
          <div className={styles.inputHeader}>
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputHeader}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handlePasswordChange}
            className={styles.inputField}
          />
        </div>
        <button type="button" onClick={handleLoginSubmit} className={styles.loginButton}>
          Log In
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
