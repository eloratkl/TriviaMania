import React, { createContext, useContext, useState } from 'react';
// import { RenderHeader } from "../components/structure/Header";
import {
  RenderMenu,
  RenderRoutes,
} from '../components/structure/RenderNavigation';

import mockUsers from '../data/mockUsers';

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: '', isAuthenticated: false });
  const [loginError, setLoginError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      // Simulate user login in the mock API
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setUser({ name: user.name, isAuthenticated: true });
        setLoginError(null);
        return true;
      } else {
        setUser({ name: '', isAuthenticated: false });
        setLoginError('Login failed. Invalid email or password.');
        return false;
      }
    } catch (error) {
      setUser({ name: '', isAuthenticated: false });
      setLoginError('An error occurred during login. Please try again.');
      return false;
    }
  };

  const handleSignup = async (name, email, password) => {
    try {
      // Simulate user registration in the mock API
      const newUser = {
        id: mockUsers.length + 1,
        name,
        email,
        password,
      };
      mockUsers.push(newUser);
      setUser({ name: newUser.name, isAuthenticated: true });
      setRegistrationError(null);
      return true;
    } catch (error) {
      setUser({ name: '', isAuthenticated: false });
      setRegistrationError(
        'An error occurred during registration. Please try again.'
      );
      return false;
    }
  };

  const logout = () => {
    setUser({ name: '', isAuthenticated: false });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleSignup,
        logout,
        loginError,
        registrationError,
      }}
    >
      <>
        {/* <RenderHeader /> */}
        <RenderMenu />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
