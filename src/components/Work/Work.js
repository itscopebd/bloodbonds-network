import React from 'react';
import img1 from '../../app/asset/work/1.jpg'
import img2 from '../../app/asset/work/2.jpg'
import img3 from '../../app/asset/work/3.jpg'
import img4 from '../../app/asset/work/4.jpg'
import Image from 'next/image';

const Work = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <h1 className='text-5xl text-center font-bold text-red-500 pt-12'>Our Works</h1>
        <p className='text-gray-500 pt-10 text-center '>Discover the lives transformed and communities strengthened through our dedicated blood donation <br /> <br /> efforts. Explore our impactful stories, statistics, and partnerships that drive positive change.</p>

        <div className='lg:flex justify-center mt-10'>



          <div className='flex'>
            <Image className='rounded w-[800px] h-[600px] hover:scale-110 transition duration-500 cursor-pointer object-cover' src={img1} alt='image' />
          </div>
          <div>
            <div>
              <Image className='rounded w-[800px] h-[300px] hover:scale-110 transition duration-500 cursor-pointer object-cover' src={img2} alt='image' />
            </div>
            <div className='lg:flex'>
              <Image className='rounded lg:w-[385px] h-[300px] hover:scale-110 transition duration-500 cursor-pointer object-cover' src={img3} alt='image' />

              <Image className='rounded lg:w-[385px] h-[300px] hover:scale-110 transition duration-500 cursor-pointer object-cover' src={img4} alt='image' />
            </div>
          </div>

        </div>
      </div>
    </section>

  );
};

export default Work;
