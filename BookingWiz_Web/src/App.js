import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hotels from './components/Hotels';
import Flights from './components/Flights';
import Reservation from './components/Reservation';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
};

export default App;