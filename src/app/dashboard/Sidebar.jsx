// "use client"

import Link from 'next/link';
import React from 'react';
import { FaHistory, FaInfoCircle, FaSignOutAlt, FaUser, FaUserCheck, FaWpforms } from 'react-icons/fa';
import { FaGlassWaterDroplet, FaHouse, FaTimeline, FaWater } from 'react-icons/fa6';

const Sidebar = ({ data }) => {
  const role = data[0]?.role

  return (

    <aside className=' h-full bg-base-300 '>
      <h1 className='text-xs md:text-xl font-bold uppercase p-2 md:p-4 md:text-center'> BloodBond <br className='md:hidden' />Network </h1>
      <div className=''>
        <ul className="menu p-1 md:p-4 w-30 md:w-80  text-base-content">


          {
            role && role === "admin" ?
              <>

                <li>
                  <Link href={'/dashboard'}> <FaHouse /> Dashboard Admin</Link>
                </li>

                <li>
                  <Link href={'/dashboard/admin'}> <FaUser /> All user</Link>
                </li>

                <li>
                  <Link href={'/dashboard/admin'}><FaTimeline /> All event</Link>
                </li>

              </>

              : role === "donar" ?
                <>
                  <li>
                    <Link href={'/dashboard'}> <FaHouse /> Dashboard Donar</Link>
                  </li>
                  <li>
                    <Link href={'/dashboard'}> <FaHistory /> Track Donation </Link>
                  </li>
                  <li>
                    <Link href={'/dashboard'}> <FaInfoCircle /> Donor Info</Link>
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
          <li className='pb-5'>
            <Link href={'/'}> <FaSignOutAlt /> Go to Home</Link>
          </li>
        </ul>
      </div>




    </aside>

  );
};

export default Sidebar;