import Link from 'next/link';
import React from 'react';
import img from '../asset/login.png'
import Image from 'next/image';
import Loginitem from './Loginitem';

const LoginPage = () => {
    return (
        <div className='bg-base-200'>
          <div className='px-5 pt-1 '>
     <button className='btn w-30'>
        <Link  href={'/'} >  <span className='ps-1'>Back To Home</span></Link>
      </button>
     </div>
             <div className="hero min-h-screen  ">
      
      <div className="hero-content flex-col lg:flex-row card dark:text-white  ">
        <div className='w-3/6 '>
          <Image src={img} alt='login' width={700} />
        </div>
        <div className=' w-full md:w-3/6 bg-gradient-to-r from-[#ef709b] to-[#fa9372] card-body  rounded-e-lg '>
          <h1 className="text-2xl text-center font-bold py-5">Log in Now</h1>
         <Loginitem></Loginitem>


        </div>
      </div>
    </div>

        </div>
    );
};

export default LoginPage;