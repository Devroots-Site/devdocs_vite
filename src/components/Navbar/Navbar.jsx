import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';  // Importiere die CSS-Datei

const DevRootsNavbar = () => {
  const navigate = useNavigate(); // useNavigate Hook initialisieren

  return (
    <nav className="navbar">
      <h1 className="title">DevRoots Forum</h1>
      <button className="nav-item" onClick={() => navigate('/rechtliches')}>
        Rechtliches
      </button>
    </nav>
  );
};

export default DevRootsNavbar;
