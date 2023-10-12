import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
