'use client'
import React from 'react';
import Image from 'next/image';
// import banner from "@/app/asset/AboutPage Banner.jpg";
import banner from '../../asset/AboutPage Banner.jpg'
import './about.css'
import MeetTheTeam from '@/components/MeetTheTeam/MeetTheTeam';
import TestimonialSection from '@/components/Testimonial/Testimonial';
import OurStory from '@/components/OurStory/OurStory';

const AboutUs = () => {
    return (
        <div className='w-full about'>
            <div className='banner'>
                <Image className='w-full h-[300] md:h-[600px]' src={banner} alt="banner"/>
                <div className='overlay-text'>
                    <h1 className='heading text-2xl mt-5 md:text-4xl lg:text-5xl font-bold mb-5'>Our Commitment to Saving Lives</h1>
                    <p className='text text-md lg:text-2xl'>At BloodBond Network, we are on a mission to make a difference in the world of healthcare and well-being.</p>
                </div>
            </div>
            <div className="mission-vision container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4	mt-10">
                <div className="mission px-5" data-aos="fade-right">
                    <h2 className='text-center text-2xl lg:text-3xl text-red-700 font-bold mb-2'>Our Mission</h2>
                    <p className='italic text-md lg:text-xl text-center w-4/4 mx-auto px-8 border border-red-700 py-12 rounded-2xl'>Empowering Lives Through Lifesaving Blood Donations. Our mission is to bridge hope with action, advocating for and facilitating lifesaving blood donations that impact countless lives. At the heart of our purpose lies the commitment to provide a lifeline of donated blood, driving positive change and saving lives.</p>
                </div>
                <div className="vision px-5" data-aos="fade-left">
                    <h2 className='text-center text-2xl lg:text-3xl text-red-700 font-bold mb-2'>Our Vision</h2>
                    <p className='italic text-center w-4/4 mx-auto border py-12 border-red-700 px-8 rounded-xl text-md lg:text-xl'>Empowering Lives Through Lifesaving Blood Donations. Our mission is to bridge hope with action, advocating for and facilitating lifesaving blood donations that impact countless lives. At the heart of our purpose lies the commitment to provide a lifeline of donated blood, driving positive change and saving lives.</p>
                </div>
            </div>

     
            <OurStory></OurStory>
            <MeetTheTeam></MeetTheTeam>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default AboutUs;
