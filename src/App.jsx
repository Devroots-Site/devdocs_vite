import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DevRootsNavbar from './components/Navbar/Navbar'; // Importiere die Navbar
import Rechtliches from './page/rechtliches'; // Importiere die Rechtliches Seite
import Body from './components/body/Body';

function App() {
  return (
    <Router>
      <DevRootsNavbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/rechtliches" element={<Rechtliches />} />
        {/* Weitere Routen können hier hinzugefügt werden */}
      </Routes>
    </Router>
  );
}

export default App;
