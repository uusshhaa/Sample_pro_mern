/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const loggedInUser = localStorage.getItem('user');
    return loggedInUser ? JSON.parse(loggedInUser) : null;
  });
  const [loading] = useState(false);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
        setUser(res.data);
        return true;
      }
    } catch (error) {
      console.error('Login error', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const register = async (name, email, password, role) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
        setUser(res.data);
        return true;
      }
    } catch (error) {
      console.error('Register error', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
