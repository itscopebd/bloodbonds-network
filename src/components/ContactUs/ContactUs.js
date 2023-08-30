import React from 'react';

import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";              

const ContactUs = () => {
    
    return (
        <section className='my-20'>
            <h1 className="text-5xl text-center font-bold text-red-500 ">Contact Us</h1>
                <p className="text-gray-500 pt-10 text-center">Connect with us easily through our contact information or send us a message via our user-friendly contact form. 
                   <br /> We are here to help and look forward to hearing from you.
                </p>
                <div className='mt-10 grid lg:grid-cols-3 gap-5 justify-items-center '>
                    <div className='text-justify px-20 py-5 transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 rounded '>
                         <span className='text-5xl text-blue-400 pb-2'><FaPhoneVolume></FaPhoneVolume></span>
                        <h1 className='font-semibold py-2'>Contact Phone</h1>
                        <p className='text-gray-400'>01*********</p>
                        <p  className='text-gray-400'>01*********</p>
                    </div>
                    <div  className='text-justify px-16 py-5 transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 rounded ' >
                        <div>
                        <span className='text-5xl text-blue-400 pb-2 text-center'><AiOutlineMail></AiOutlineMail></span>

                        </div>
                        <h1  className='font-semibold py-2'>
                            Email
                        </h1>
                        <p className='text-gray-400'>demo@gmail.com</p>
                        <p className='text-gray-400'>demo2@gmail.com</p>
                    </div>
                    <div className='text-justify px-16 py-5 transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 rounded '>
                    <span className='text-5xl text-blue-400 pb-2'><FaLocationDot></FaLocationDot></span>

                        <h1 className='font-semibold py-2'>Address</h1>
                        <p className='text-gray-400'>Dhaka, Bangladesh</p>
                    </div>
                </div>
        </section>
    );
};

export default ContactUs;