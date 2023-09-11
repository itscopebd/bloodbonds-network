
import { UserAuth } from '@/context/authContext';
import Image from 'next/image';
import React from 'react';
import { FaBell } from 'react-icons/fa';
import imgs from  '../asset/DonationProcess/user_1144709.png'
const Topnav = () => {
let {user}=UserAuth()
    return (
        <div>
             <ul className="menu menu-horizontal items-center dark:text-black">
        
  
 
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      Inbox
      <span className="badge badge-sm">99+</span>
    </a>
  </li>
  <li className='pe-2'>
    <a>
    <FaBell></FaBell>
      Notification
    </a>
  </li>

    
         <div className="dropdown dropdown-end dark:text-black">
      <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm avatar ">
      <div className="w-10 rounded-full">
       {  user?.photoURL ? <Image src={user?.photoURL} alt='user' width={20} height={20}></Image>
      : <Image src={imgs} width={20} height={20} alt='user img' ></Image> 
      }
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-white">
       
        <li><a>Logout</a></li>
      </ul>
    </div>
     
     

   
      </ul>
        </div>
    );
};

export default Topnav;