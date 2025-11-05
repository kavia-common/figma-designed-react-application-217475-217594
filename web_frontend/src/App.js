import React, { useState, useEffect } from 'react';
import './App.css';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header
        className="App-header"
        role="banner"
        style={{
          minHeight: 'auto',
          padding: '16px',
          gap: '16px',
          alignItems: 'center'
        }}
      >
        <nav
          className="navbar"
          role="navigation"
          aria-label="Primary"
          style={{ display: 'flex', gap: 16, alignItems: 'center' }}
        >
          <NavLink to="/home" className="App-link">Home</NavLink>
          <NavLink to="/sign-in" className="App-link">Sign In</NavLink>
        </nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>

      <main role="main" style={{ padding: 0 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/sign-in" element={<SignInScreen />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
