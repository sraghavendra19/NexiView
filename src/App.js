import React from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './login/Login';
import './App.css';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />, // This will be the Home page
    },
    {
      path: '/login',
      element: <Login />, // Login page
    },
    {
      path: '/signup',
      element: <Signup />, // Signup page
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

// Home page component
const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to My Website</h1>
        <p>Learn more about the website you are going to build!</p>
        {/* Signin/Signup links at the top corner */}
        <div className="auth-links">
          <Link to="/login" className="btn btn-primary">
            Sign In
          </Link>
          <Link to="/signup" className="btn btn-success">
            Sign Up
          </Link>
        </div>
      </header>

      <main>
        <section className="info-section">
          <h2>What is this Website?</h2>
          <p>
            This website will help you manage your login and sign-up system
            securely. It will allow you to build, test, and authenticate users
            with a simple yet powerful interface.
          </p>
          <p>Keep reading to get started with creating an account!</p>
        </section>
      </main>
    </div>
  );
};

export default App;
