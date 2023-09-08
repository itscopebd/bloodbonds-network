import React from 'react';
import img1 from '../../app/asset/DonationProcess/DonationProcess.jpg'
import Image from 'next/image';
import { FaBriefcaseMedical } from "react-icons/fa6";
import { RxBlendingMode } from "react-icons/rx";
import { TiUserAddOutline } from "react-icons/ti";
import { PiPlusCircleBold } from "react-icons/pi";
import Link from 'next/link';

const DonationProcess = () => {
    return (
        <section className="container mx-auto rounded-2xl p-16 mt-20">
            <h1 className="text-5xl text-center font-bold text-red-500 ">Donation Process</h1>
            <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-10">

                <div className='lg:mt-6'>
                    <div>
                        <div className='flex content-center'>
                            <span className='mt-1 mr-4'><FaBriefcaseMedical color='red' /></span>
                            <h1 className='font-semibold'>Step-1: Registration and paperwork.</h1>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 ml-8 content-center'>&#x2022;</span>
                            <p>Provide your information and complete necessary forms.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex content-center'>
                            <span className='mt-1 mr-4'><PiPlusCircleBold color='red' /></span>
                            <h1 className='font-semibold'>Step-2: Health Check and Eligibility Screening.</h1>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 ml-8 content-center'>&#x2022;</span>
                            <p>A healthcare professional will assess your eligibility.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex content-center'>
                            <span className='mt-1 mr-4'><TiUserAddOutline color='red' /></span>
                            <h1 className='font-semibold'>Step-3: Post-Collection Care.</h1>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 ml-8 content-center'>&#x2022;</span>
                            <p>After the procedure, follow any post-collection guidelines provided <br /> by healthcare professionals.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex content-center'>
                            <span className='mt-1 mr-4'><RxBlendingMode color='red' /></span>
                            <h1 className='font-semibold'>Step-4: Plasma Collection.</h1>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 ml-8 content-center'>&#x2022;</span>
                            <p>Plasma is collected using a specialized machine.</p>
                        </div>
                        <div className='flex m-4'>
                            <span className='mr-3 ml-8 content-center'>&#x2022;</span>
                            <p>The process typically takes about 1-2 hours.</p>
                        </div>
                    </div>

                    <Link href="/login" className="btn btn-outline btn-error lg:mt-4">Donate Now</Link>

                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="md:order-last lg:order-last">
                    <Image className='rounded' src={img1} alt="image" />
                </div>

            </div>
        </section>


    );
};

export default DonationProcess;