"use client"
import React, { useEffect, useState } from 'react';
import { UserAuth } from '@/context/authContext';
import { useQuery } from '@tanstack/react-query';

const Userpage = () => {
    const { user,loading } = UserAuth();
    if (loading) {

        return <span className="loading loading-bars loading-lg"></span>
        
    }
    const { data: data = [], fefetch } = useQuery(['data'], async () => {
        const res = await fetch(`/api/user/${user?.email}`)
        return res.json()
    })

    return (
        <div className='flex justify-center items-center mt-20'>
           
                <h3> <span className='font-bold'>Your UserId:</span> {data[0]?.userId}</h3>
            
        </div>
    );
};

export default Userpage
    ;