"use client"
import React, { useEffect, useState } from 'react';
import { UserAuth } from '@/context/authContext';
import Image from 'next/image';
import userImg from '../../asset/DonationProcess/user_1144709.png'
import { FaEdit,  } from 'react-icons/fa';
const Userpage = () => {
    const { user,loading } = UserAuth();
    const [data,setData]= useState([])
  
    useEffect(() => {
        fetch(`/api/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
          setData(data)
        })
    }, []);

    if (loading) {
        return <div className='absolute top-1/2 left-1/2'><span className="loading loading-bars loading-lg"></span></div>
    }


    return (
        <div className='p-10 '>
         

    <div className=' bg-base-200 grid grid-cols-1 xl:grid-cols-2  place-item-center  md:p-20 rounded-xl gap-3  2xl:gap-2'>




<div className="card max-w-full xl:max-w-md 2xl:max-w-full bg-[#ffffff] text-black shadow-xl">

  <figure className="px-10 pt-10">
 <Image src={userImg} alt='user' width={100} height={100}/>
  
 
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data[0]?.name}</h2>
    <div>
 <p>{data[0]?.email}</p>
 <p className='text-sm'>{data[0]?.userId}</p>
    <div className="badge badge-outline"> {data[0]?.role}</div> 
     
    </div>
   
    <div className="card-actions my-1">
      <button className="btn btn-primary" > <FaEdit/>  Edit profile</button>
    </div>
  </div>
</div>
<div className='grid grid-cols-1 2xl:grid-cols-2 gap-y-3 2xl:gap-2 '>
<div className="card max-w-full xl:max-w-sm bg-[#e63946] text-primary-content">
  <div className="card-body">
  <h2 className="text-4xl">20$ </h2>
    <h2 className="card-title">Total Money Donation</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
<div className="card  max-w-full xl:max-w-sm bg-[#0081a7] text-white shadow-xl">
  <div className="card-body ">
  <h2 className="text-4xl">20 </h2>
    <h2 className="card-title">Total Blod Recieved</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
</div>
   
   
                </div>

                
        </div>
    );
};

export default Userpage
    ;