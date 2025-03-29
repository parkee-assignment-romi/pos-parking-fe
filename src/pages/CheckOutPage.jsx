import React, { useState } from 'react';

function CheckOutPage() {
  const [plateNumber, setPlateNumber] = useState('');
  const [message, setMessage] = useState('');
  const [checkoutData, setCheckoutData] = useState(null);

  const handleCheckOut = async () => {
    setMessage('');
    setCheckoutData(null);
    try {
      const response = await fetch('http://localhost:8080/api/tickets/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plateNumber: plateNumber })
      });
      const data = await response.json();

      if (data.error) {
        setMessage(`Error: ${data.error}`);
      } else {
        // Tampilkan data detail
        setCheckoutData({
          ticketId: data.ticketId,
          checkInTime: data.checkInTime,
          checkOutTime: data.checkOutTime,
          totalPrice: data.totalPrice
        });
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Terjadi kesalahan saat check-out');
    }
  };

  return (
    <div className="checkout-container">
      <h2>CHECK-OUT</h2>
      <label>Vehicle Plate Number</label>
      <input
        type="text"
        value={plateNumber}
        onChange={(e) => setPlateNumber(e.target.value)}
        placeholder="Enter plate number"
      />
      <button onClick={handleCheckOut}>Submit</button>

      {message && <div className="message-box">{message}</div>}

      {checkoutData && (
        <div className="checkout-result">
          <p>Ticket ID: {checkoutData.ticketId}</p>
          <p>Check-In Time: {checkoutData.checkInTime}</p>
          <p>Check-Out Time: {checkoutData.checkOutTime}</p>
          <p>Total Price: {checkoutData.totalPrice}</p>
        </div>
      )}
    </div>
  );
}

export default CheckOutPage;
