"use client"
import { UserAuth } from '@/context/authContext';
import React from 'react';

const DashBoardHome = () => {
  let { user } = UserAuth();

  
  return (
    <div>
     <div className="hero-content my-5  text-center">
    <div className="max-w-full">
      <div className="card bg-base-100 shadow-xl">
 
  <div className="card-body items-center text-center">
    <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-52">
              <span className="text-5xl  uppercase">{user?.displayName.slice(0, 1)}</span>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold uppercase pt-3">{user?.displayName}</h1>
            <p >  {user?.email}</p>
          </div>
        
    
    <p className='w-96'>We're thrilled to have you on board! This is your central hub for managing and monitoring everything related to your project. </p>
   
  </div>
</div>
    </div>
    </div>
    </div>
  );
};

export default DashBoardHome;