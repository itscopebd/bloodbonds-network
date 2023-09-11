"use client"
import React, { useEffect, useState } from 'react';
import { UserAuth } from '@/context/authContext';

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
        <div className='flex justify-center items-center mt-20'>
           
                <h3> <span className='font-bold'>Your UserId:</span> {data[0]?.userId}</h3>
            
        </div>
    );
};

export default Userpage
    ;