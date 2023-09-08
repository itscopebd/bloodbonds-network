import React from 'react';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { FaWeightHanging } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { GiHealthNormal } from 'react-icons/gi';
import { BiSolidPlaneAlt } from 'react-icons/bi';
const WhoCanDonate = () => {
    return (
        <div >
            <section className='mt-20 container  mx-auto '>
            <h1  className='text-5xl flex justify-center font-bold text-red-500 text center'>Who Can Donate Plasma?</h1>

                <div className='flex px-20 mt-10'>
                <span className='text-red-500 pe-3 text-xl'><BsFillCalendarEventFill></BsFillCalendarEventFill></span> <p><span className='font-semibold'>Age</span>: You must be at least 18 years old to donate plasma.</p>

                </div>
                <div className='flex px-20 '>
                <span className='text-red-500 pe-3 text-xl'><FaWeightHanging></FaWeightHanging></span> <p><span className='font-semibold'>Weight</span>: Donor should meet a minimum weight requirement(e.g., 100 pounds)</p>

                </div>
                <div className='flex px-20 '>
                <span className='text-red-500 pe-3 text-xl'><MdHealthAndSafety></MdHealthAndSafety></span> <p><span className='font-semibold'>Health</span>: You should be a good overall health with no acute illness.</p>

                </div>
                <div className='flex px-20 '>
                <span className='text-red-500 pe-3 text-xl'><GiHealthNormal></GiHealthNormal></span> <p><span className='font-semibold'>Medical History</span>: Certain medical conditions or medications may affect eligibility</p>

                </div>
                <div className='flex px-20 '>
                <span className='text-red-500 pe-3 text-xl'><BiSolidPlaneAlt></BiSolidPlaneAlt></span> <p><span className='font-semibold'>Travel and Risk Factor</span>: Recent International travel or specific risk factor may temporarily defer donations.</p>

                </div>
                
            </section>
        
        </div>
    );
};

export default WhoCanDonate;