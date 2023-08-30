"use client"
import { UserAuth } from '@/context/authContext';
import React from 'react';

const DashBoardHome = () => {
  let { user } = UserAuth();

  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">

          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-52">
              <span className="text-5xl">{user?.displayName.slice(0, 1)}</span>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;