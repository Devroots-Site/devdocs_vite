import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';  // Importiere die CSS-Datei
import { Typography, Box } from '@mui/material';

const DevRootsNavbar = () => {
  const navigate = useNavigate(); // useNavigate Hook initialisieren

  return (
    <nav className="navbar">
      <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
        <Typography variant="h5" fontWeight={700} className="title">
          DevRoots Forum
        </Typography>
      </Box>
      <button className="nav-item" onClick={() => navigate('/rechtliches')}>
        Rechtliches
      </button>
    </nav>
  );
};

export default DevRootsNavbar;
