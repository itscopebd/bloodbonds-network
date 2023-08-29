import React from 'react';
import SignupItem from './SignupItem';
import Image from 'next/image';
import img from '../asset/signup.png'

const SignupPage = () => {
    return (
        <div>
                 <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row card dark:text-white ">
          <div className='w-3/6 '>
            <Image src={img} alt='signup' width={700} />
          </div>
          <div className=' w-full md:w-3/6 bg-gradient-to-r from-[#ef709b] to-[#fa9372] card-body  rounded-e-lg'>
            <h1 className="text-2xl text-center font-bold py-2">Register Now</h1>
           <SignupItem></SignupItem>


          </div>
        </div>
      </div>
        </div>
    );
};

export default SignupPage;