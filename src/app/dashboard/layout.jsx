"use client"

import React from 'react';
import Sidebar from './Sidebar';
import { useQuery } from '@tanstack/react-query';
import { UserAuth } from '@/context/authContext';
import Topnav from './Topnav';

const Dashboard = ({ children }) => {


  const { user,loading } = UserAuth();
  const { data: data = [], fefetch } = useQuery(['data'], async () => {
    const res = await fetch(`http://localhost:3000/api/user/${user?.email}`)
    return res.json()
  })

  if (loading) {

    return <span className="loading loading-bars loading-lg "></span>
    
}
  
  console.log(user)
  return (
    <div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
        <div className="w-full navbar  bg-[#d8ded6]   ">
     
      <div className="flex-1 lg:px-2 lg:mx-2 hidden lg:block font-bold uppercase dark:text-black">Welcome to DashBoard</div>
      <div className="flex-none block">
       <Topnav></Topnav>
      </div>
    </div>

          {children}

          <label htmlFor="my-drawer-2" className="btn btn-primary btn-sm drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <Sidebar data={data}></Sidebar>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;