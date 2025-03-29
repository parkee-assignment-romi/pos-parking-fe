import React, { useState } from 'react';

function CheckInPage() {
  const [plateNumber, setPlateNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckIn = async () => {
    setMessage(''); // reset pesan
    try {
      const response = await fetch('http://localhost:8080/api/tickets/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plateNumber: plateNumber })
      });
      const data = await response.json();

      if (data.error) {
        setMessage(`Error: ${data.error}`);
      } else {
        setMessage(`Check-In successful! Ticket ID: ${data.ticketId}, Time: ${data.checkInTime}`);
      }
    } catch (error) {
      setMessage('Terjadi kesalahan saat check-in');
    }
  };

  return (
    <div className="checkin-container">
      <h2>CHECK-IN</h2>
      <label>Vehicle Plate Number</label>
      <input
        type="text"
        value={plateNumber}
        onChange={(e) => setPlateNumber(e.target.value)}
        placeholder="Enter plate number"
      />
      <button onClick={handleCheckIn}>Submit</button>

      {message && <div className="message-box">{message}</div>}
    </div>
  );
}

export default CheckInPage;
