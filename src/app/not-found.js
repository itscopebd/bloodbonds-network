import Link from 'next/link';
import React from 'react';
import img1 from '../app/asset/work/404-error.gif'
import Image from 'next/image';


const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div>
                    <div className='mb-8'>
                        <Image className='rounded lg:w-[800px] h-[500px]' src={img1} alt='image' />
                    </div>
                    <h1 className="text-5xl font-bold"> <span className='text-slate-500 hover:text-red-600'>Oops!!!</span> <br />Page not found</h1>
                    <p className="py-6">The page you are looking for could not be found. plz back to home....</p>
                    <Link className='btn btn-outline' href="/">Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;