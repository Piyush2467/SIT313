import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Assuming firebase.js is in ../firebase/
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../components/Home";

export default function AppRoutes() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listener to track user authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
  }

  return (
    <>
      {/* Pass the current user to the Navbar */}
      <Navbar currentUser={currentUser} />
      <Routes>
        {/* Unprotected Routes: If logged in, redirect to home */}
        <Route path="/" element={currentUser ? <Navigate to="/home" replace /> : <Login />} />
        <Route path="/login" element={currentUser ? <Navigate to="/home" replace /> : <Login />} />
        <Route path="/signup" element={currentUser ? <Navigate to="/home" replace /> : <SignUp />} />
        
        {/* Protected Routes: Require a logged-in user */}
        <Route 
          path="/home" 
          element={<ProtectedRoute currentUser={currentUser}><Home /></ProtectedRoute>} 
        />
        <Route 
          path="/post" 
          element={<ProtectedRoute currentUser={currentUser}><div style={{ textAlign: "center", marginTop: "50px" }}>Post Content</div></ProtectedRoute>} 
        />
        
        {/* Fallback for 404s */}
        <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

/**
 * Helper component: Redirects unauthenticated users to the Login page.
 */
const ProtectedRoute = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};