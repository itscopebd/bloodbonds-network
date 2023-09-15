import React from 'react';
import './HelpPoor.css'
import svg from '../../app/asset/svgPoor.svg'
import Image from 'next/image';
const HelpPoor = () => {
    return (
        <section className='mt-20'>
            <h1 className='font-bold text-5xl text-red-500 text-center'>Eliminate Helplessness</h1>
            <div className='h-full w-full bg-fixed poor mt-10'>
                <div className='donate'>
                    <div>
                    <h2 className='text-white font-bold'>Help Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias tenetur quis iste doloremque natus!</p>
                    </div>
                    <div>
                        <Image src={svg} alt='poor'></Image>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default HelpPoor;