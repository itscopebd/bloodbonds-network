import React from 'react';

import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";              

const ContactUs = () => {
    
    return (
        <section className='my-20 '>
            <h1 className="text-5xl text-center font-bold text-red-500 ">Contact Us</h1>
                <p className="text-gray-500 pt-10 text-center">Connect with us easily through our contact information or send us a message via our user-friendly contact form. 
                   <br /> We are here to help and look forward to hearing from you.
                </p>
                <div className='mt-10 w-[90%] mx-auto grid lg:grid-cols-3 gap-3 justify-items-center container'>
                    <div className='text-justify border-2 border-yellow-200 text-orange-500   px-24 py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 rounded '>
                         <span className='text-5xl pb-2'><FaPhoneVolume></FaPhoneVolume></span>
                        <h1 className='font-bold py-2'>Contact Phone</h1>
                        <p className=''>01*********</p>
                        <p  className=''>01*********</p>
                    </div>
                    <div  className='text-justify border-2 border-yellow-200 text-orange-500   px-20 py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 rounded ' >
                        <div>
                        <span className='text-5xl  pb-2 '><AiOutlineMail></AiOutlineMail></span>

                        </div>
                        <h1  className='font-bold py-2'>
                            Email
                        </h1>
                        <p className=''>demo@gmail.com</p>
                        <p className=''>demo2@gmail.com</p>
                    </div>
                    <div className='text-justify border-2 border-yellow-200 text-orange-500   px-20 py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 rounded  '>
                    <span className='text-5xl  pb-2'><FaLocationDot></FaLocationDot></span>

                        <h1 className='font-bold py-2'>Address</h1>
                        <p className=''>Dhaka, Bangladesh</p>
                    </div>
                </div>
            
        </section>
    );
};

export default ContactUs;