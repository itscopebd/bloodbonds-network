'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2'

const Emergency = () => {
  const [message, setMessage] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [urgencyLevel, setUrgencyLevel] = useState('high');
  const [notificationSent, setNotificationSent] = useState(false);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  const handleRecipientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setRecipients([...recipients, value]);
    } else {
      setRecipients(recipients.filter((recipient) => recipient !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send_notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, recipients, urgencyLevel }),
      });

      if (response.ok) {
        setNotificationSent(true);
      } else {
        console.error('Failed to send notification.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-2xl md:text-3xl text-red-700 font-bold mb-5 mt-10'>Emergency Notification Form</h1>
      {notificationSent ? (
        Swal.fire(
          'Sent!',
          'Emergency notification sent successfully!',
          'success'
        )
      ) : (
        <form onSubmit={handleSubmit} className='mt-10 justify-center mx-auto bg-red-50 p-10 card flex-shrink-0 w-full shadow-2xl max-w-4xl rounded-lg py-8 px-10'>
          <div className='flex'>
            <label htmlFor="message" className='text-md md:text-lg font-bold'>Message:</label>
            <textarea
              id="message"
              placeholder='Message'
              className='ms-2 p-2 border border-red-700'
              value={message}
              rows={4}
              cols={60}
              onChange={handleMessageChange}
              required
            />
          </div>
          <div className='flex mt-3'>
            <label className='text-md md:text-lg font-bold label cursor-pointer'>Recipients:</label>
            {bloodTypes.map((bloodType) => (
              <label className='label cursor-pointer'>
                <span key={bloodType}></span>
                <input
                  type="checkbox"
                  className='ms-2 me-2 checkbox'
                  value={bloodType}
                  checked={recipients.includes(bloodType)}
                  onChange={handleRecipientChange}
                />
                {bloodType}
              </label>
            ))}
          </div>
          <div className='w-full max-w-xs mt-3'>
            <label htmlFor="urgencyLevel" className='text-md md:text-lg font-bold'>Urgency Level:</label>
            <select
              id="urgencyLevel"
              value={urgencyLevel}
              className='ms-2 p-2 rounded'
              onChange={(e) => setUrgencyLevel(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className='flex mt-3'>
            <label className='text-md md:text-lg font-bold'>Message Preview:</label>
            <textarea className="message-preview border border-red-700 italic overflow-y-auto ms-2 p-2" placeholder='Preview Message' rows={4}
              cols={50}>{message}</textarea>
          </div>
          <button type="submit" className='mx-auto w-48 btn btn-error mt-5'>Send Notification</button>
        </form>
      )}
    </div>
  );
};

export default Emergency;
