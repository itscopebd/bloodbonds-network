import React from 'react';
import Image from 'next/image';
import img1 from '../../../asset/blog/image (1).jpeg'

const page = ({ parms }) => {
  return (
    <div className='container mx-auto mt-12'>
      {/* tittle */}
      <h1 className='mt-4 text-5xl text-center font-bold'>A Comprehensive Guide to Blood Donation</h1>
      <p className='mt-4 text-center'>Learn everything you need to know about the lifesaving act of blood donation, from eligibility requirements</p>
      {/* bloge images */}
      <Image className='rounded w-[800px] h-[600px] mt-10 mx-auto' src={img1} alt='image' />
      <p className='mt-10 text-center'>In a world where countless lives depend on the kindness and generosity of strangers, there exists a noble and selfless act that can make a profound impact – blood donation. "A Comprehensive Guide to Blood Donation" is your all-encompassing resource for understanding this vital, life-saving process. <br />

        This comprehensive guide goes beyond the surface to provide you with a deep understanding of the entire blood donation journey. Whether you are a potential donor or simply curious about the process, this guide offers a wealth of information to help you navigate this important aspect of healthcare.
        <br />

        Inside the pages of this guide, you will discover:
        <br />
        1. The Basics of Blood Donation:
        <br />
        Learn about the fundamental principles of blood donation, including why it's so crucial for healthcare and who can donate.
        2. Eligibility Requirements:
        <br />
        Find out if you are eligible to donate blood, as we delve into factors like age, weight, and health considerations.
        3. Preparation Tips:
        <br />
        Discover valuable insights on how to prepare for your donation, including dietary recommendations and lifestyle choices.
        4. The Donation Process:
        <br />
        Gain a step-by-step understanding of what happens during a blood donation, from registration to post-donation care.</p>
    </div>
  );
};

export default page;