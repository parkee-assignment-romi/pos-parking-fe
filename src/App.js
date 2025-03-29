import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CheckInPage from './pages/CheckInPage';
import CheckOutPage from './pages/CheckOutPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/checkin">Check-In</Link>
          <Link to="/checkout">Check-Out</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CheckInPage />} />
          <Route path="/checkin" element={<CheckInPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
