// Login.js
import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";

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
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLoginSubmit}>
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
