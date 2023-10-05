import axios from 'axios';
import mockUsers from '../data/mockUsers';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

/**
 * Register a user, either on the mock server or the actual server.
 * @param {string} name - The user's name.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @param {boolean} useMock - Set to true to use the mock registration.
 * @returns {Object} - An object indicating success and the registered user.
 */
export const signup = async (name, email, password, useMock = true) => {
  try {
    if (useMock) {
      // Simulate user registration in the mock API
      const newUser = {
        id: mockUsers.length + 1,
        name,
        email,
        password,
      };
      mockUsers.push(newUser);
      // Return a success response with the newly registered user
      return { success: true, user: newUser };
    } else {
      // Make an API call to register a user on the actual server
      const response = await api.post('/signup', { name, email, password });
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

/**
 * Log in a user, either on the mock server or the actual server.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @param {boolean} useMock - Set to true to use the mock login.
 * @returns {Object} - An object indicating success and the logged-in user.
 */
export const login = async (email, password, useMock = true) => {
  try {
    if (useMock) {
      // Simulate user login in the mock API
      const user = mockUsers.find((u) => u.email === email && u.password === password);
      if (user) {
        // Return a success response with the logged-in user
        return { success: true, user };
      } else {
        // Return an error response if login fails
        return { success: false, message: 'Login failed. Invalid email or password.' };
      }
    } else {
      // Make an API call to log in the user on the actual server
      const response = await api.post('/login', { email, password });
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export default api;
