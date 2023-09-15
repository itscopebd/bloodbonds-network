import React from 'react';
import './HelpPoor.css'
import svg from '../../app/asset/svgPoor.svg'
import Image from 'next/image';

import Link from 'next/link';
const HelpPoor = () => {
    return (
        <section className='mt-20'>
            <h1 className='font-bold text-5xl text-red-500 text-center'>Eliminate Helplessness</h1>
            <div className='h-full w-full bg-fixed poor mt-10'>
                <div className='donate lg:py-20 md:py-20'>
                    <div className='font2'>
                    <h2 className='text-white font-bold text-5xl'>Help Us</h2>
                    <p className='text-white pt-1'>Poverty remains one of the most pressing global challenges of our time, affecting millions of people worldwide.<br />While it may seem like an insurmountable issue,<br />there are concrete steps we can take as individuals and as a society to help remove the scourge of poverty.<br />In this short blog, we'll explore some key strategies for addressing poverty and working towards a more equitable world.</p>
                    <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl '><Link href='/help'>Help</Link></button>

                    </div>
                    <div className='svg2'>
                        <Image src={svg} alt='poor'></Image>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default HelpPoor;