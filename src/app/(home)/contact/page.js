import React from 'react';
import Image from 'next/image';
import banner from '../../asset/contact.jpg';
import './contact.css';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import ContactForm from '@/components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='container mx-auto'>
      <div className='banner'>
        <Image className='w-full h-[300] md:h-[600px]' src={banner} alt='banner' />
        <div className='overlay-text'>
          <h1 className='heading text-2xl mt-5 md:text-4xl lg:text-5xl font-bold mb-5'>Contact Us</h1>
          <p className='text text-md lg:text-2xl'>We are here to help and answer any questions you might have. We look forward to hearing from you.</p>
        </div>
      </div>
      <div className="info grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        <div className="phone rounded-lg">
          <div className="flex items-center justify-center text-center mb-3">
            <BsTelephone className='me-3 text-red-700 text-3xl'></BsTelephone>
            <p className='text-2xl'><span className='font-bold'>Phone:</span></p>
          </div>
          <div className='text-2xl text-center'>
            <p className='mb-2'>+880 1234 579</p>
            <p>+880 1234 579</p>
          </div>
        </div>

        <div className="mail">
          <div className="flex items-center justify-center text-center mb-3">
            <AiOutlineMail className='me-3 text-3xl text-red-700'></AiOutlineMail>
            <p className='text-2xl'><span className='font-bold'>Email:</span> </p>
          </div>
          <div className='text-2xl text-center'>
            <p className='mb-2'>bloodbond@gmail.com</p>
            <p>bloodbond@gmail.com</p>
          </div>
        </div>

        <div className="address">
          <div className="flex items-center justify-center mb-3">
            <MdOutlineLocationOn className='me-3 text-red-700 text-3xl'></MdOutlineLocationOn>
            <p className='text-2xl'><span className='font-bold'>Address:</span></p>
          </div>
          <div className='text-2xl text-center'>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;


