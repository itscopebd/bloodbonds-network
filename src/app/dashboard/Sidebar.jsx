// "use client"

import Link from 'next/link';
import React from 'react';
import { FaBlog, FaDonate, FaHistory, FaInfoCircle, FaPen, FaSignOutAlt, FaUser, FaUserCheck, FaWpforms } from 'react-icons/fa';
import {  FaChartBar, FaHouse, FaTimeline } from 'react-icons/fa6';

const Sidebar = ({ data }) => {
  const role = data[0]?.role

  return (

    <aside className='  h-screen  bg-[#000000] text-white dark:text-white ' >
      <h1 className='font-extrabold p-10 text-center text-2xl uppercase'>Dahsboard</h1>
     
      <div>
        <ul className="  menu menu-vertical lg:min-w-max  rounded-box uppercase">
      
      <li>
        <Link href={'/dashboard'}> <FaHouse /> Dashboard Home</Link>
      </li>

{
  role && role === "admin" ?
    <>

      <li>
        <Link href={'/dashboard/admin'}> <FaChartBar /> Anylisis</Link>
      </li>

      <li>
        <Link href={'/dashboard/admin'}> <FaUser /> All user</Link>
      </li>

      <li>
        <Link href={'/dashboard/admin'}><FaTimeline /> All event</Link>
      </li>
      <li>
        <Link href={'/dashboard/admin/allblog'}><FaBlog /> All Blog</Link>
      </li>
      <li>
        <Link href={'/dashboard/admin/addblog'}><FaPen /> Add Blog</Link>
      </li>
      <li>
        <Link href={'/dashboard/admin/applieddonor'}><FaDonate/> Applied Donor</Link>
      </li>

    </>

    : role === "donar" ?
      <>
        <li>
          <Link href={'/dashboard/donar'}> <FaHouse /> Dashboard Donar</Link>
        </li>
        <li>
          <Link href={'/dashboard/donar'}> <FaHistory /> Track Donation </Link>
        </li>
        <li>
          <Link href={'/dashboard/donar'}> <FaInfoCircle /> Donor Info</Link>
        </li>
      </>
      :
      <>

        <li><Link href={'/dashboard/user'}> <FaUserCheck /> User Dashboard</Link></li>
        <li>
          <Link href={'/dashboard/user'}> <FaUserCheck /> User Info</Link>
        </li>
        <li>
          <Link href={'/dashboard/user/applydonor'}> <FaWpforms />Apply Donor</Link>
        </li>
      </>
}


<div className="divider "></div>
<li className='pb-5 '>
  <Link href={'/'}> <FaSignOutAlt /> Go to Home</Link>
</li>
</ul> 
      </div>
      
     

      




    </aside>

  );
};

export default Sidebar;