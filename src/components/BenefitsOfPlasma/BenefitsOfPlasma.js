import React from 'react';
import img1 from '../../app/asset/work/bloode.jpeg'
import Image from 'next/image';
import { FaBriefcaseMedical } from "react-icons/fa6";
import { TbHeartPlus } from "react-icons/tb";
import { MdOutlineLocalHospital } from "react-icons/md";

const BenefitsOfPlasma = () => {
    return (
        <section className="container mx-auto rounded-2xl p-16 mt-20">
            <h1 className="text-5xl text-center font-bold text-red-500 ">Benefits of Plasma Donation</h1>
            <div className="lg:grid-cols-2 grid grid-cols-1 gap-10 mt-10">

                <div>
                    <div>
                        <span><TbHeartPlus color='red' size='50px' /></span>
                        <h1 className='font-semibold mt-2'>Health Benefits: </h1>
                        <div className='flex m-4'>
                            <span className='mr-3 content-center'>&#x2022;</span>
                            <p>Donating plasma helps maintain healthy blood viscosity.</p>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 content-center'>&#x2022;</span>
                            <p>It can reduce the risk of certain chronic diseases.</p>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 content-center'>&#x2022;</span>
                            <p>Regular donation may lead to improved cardiovascular health.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <span><MdOutlineLocalHospital color='red' size='50px' /></span>
                        <h1 className='font-semibold mt-2'>Incentives and Rewards:</h1>
                        <div className='flex m-4'>
                            <span className='mr-3 content-center'>&#x2022;</span>
                            <p>Receive gift cards or monetary compensation for your time.</p>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 content-center'>&#x2022;</span>
                            <p>Enjoy refreshments and snacks during and after the donation.</p>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 content-center'>&#x2022;</span>
                            <p>Become part of a supportive donor community.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    );
};

export default BenefitsOfPlasma;