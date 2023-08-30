"use client"

import React from 'react';
import Sidebar from './Sidebar';
import { useQuery } from '@tanstack/react-query';
import { UserAuth } from '@/context/authContext';

const Dashboard = ({ children }) => {
  

  const { user } = UserAuth();


  const { data: data = [], fefetch } = useQuery(['data'], async () => {
      const res = await fetch(`http://localhost:3000/api/user/${user?.email}`)
      return res.json()
  })
  console.log(data)
  return (
    <div>
      
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">


            {children}

            <label htmlFor="my-drawer-2" className="btn btn-primary btn-sm drawer-button lg:hidden">Open drawer</label>

          </div>
          <div className="drawer-side  ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

            <Sidebar></Sidebar>
          </div>
        </div>
     
    </div>
  );
};

export default Dashboard;