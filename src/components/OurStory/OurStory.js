import React from 'react';
import Image from 'next/image';
import story from '../../app/asset/Our story.jpg';

const OurStory = () => {
    return (
        <div className='mt-10 container mx-auto'>
            <h2 className='text-center text-2xl md:text-3xl text-red-700 font-bold mb-5'>Our Story</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                <div className='flex justify-center items-center'>
                    <Image src={story} alt='image' className='rounded-lg px-0 w-full' height={500} />
                </div>
                <div className='text-md pt-2 md:text-lg mx-auto px-5 md:px-0'>
                    <p className='w-12/12 md:w-12/12 text-justify text-md md:text-lg'>
                    BloodBond Network is the result of a dedicated team united by a common purpose – saving lives through the gift of blood. Our journey began when a group of passionate individuals came together, inspired by the incredible impact of blood donations. <br />
                    Since our humble beginnings, BloodBond Network has grown beyond our wildest dreams. We've partnered with hospitals, communities, and dedicated volunteers to organize countless blood drives, saving countless lives in the process. We've faced challenges along the way, but each obstacle only strengthened our resolve.
                    </p>
                    <p className='w-12/12 md:w-12/12 text-justify'>But we're not just a network; we're a family. Our team and community of donors and supporters are the lifeblood of our organization, and together, we're making a difference.</p>
                    <p className='w-12/12 md:w-12/12 text-justify'>We've witnessed countless moments of hope and resilience on this journey. From patients who survived critical surgeries to donors who found purpose in giving, the stories of impact continue to inspire us every day. <br />
                    As a team, we share a vision of a world where the act of giving blood transcends boundaries and prejudices. Our collective dream is a world where no one ever suffers due to a shortage of blood, where compassion knows no bounds, and where the BloodBond Network continues to grow and impact lives. <br />
                    We invite you to become a part of our story. Your support, whether through donating, volunteering, or spreading awareness, is a vital chapter in our journey to make the world a healthier and more compassionate place.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurStory;