'use client'
import { UserAuth } from '@/context/authContext';
import React from 'react';

const Admininfo = () => {
    let { user } = UserAuth();
    return (
        <div>
           <div className="my-5  ">
  <div className="   text-start">
    <div className="max-w-full">
   <h1 className='font-bold uppercase px-10 text-4xl'>Top analysis</h1>
    
    </div>
  </div>
</div> 
        </div>
    );
};

export default Admininfo;