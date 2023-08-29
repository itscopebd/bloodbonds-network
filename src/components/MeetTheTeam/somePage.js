// pages/somepage.js
import React from 'react';
import { useClient } from 'react-server-dom/client';
import MeetTheTeam from './MeetTheTeam';

function SomePage() {
  useClient(); // Ensure the client context is used

  return (
    <div>
      {/* Other content */}
      <MeetTheTeam />
    </div>
  );
}

export default SomePage;
