import React from 'react';
import img1 from '../../asset/blog/image.jpeg'
import img2 from '../../asset/blog/image (1).jpeg'
import img3 from '../../asset/blog/image (2).jpeg'
import { FaRegCalendar, FaRegComment } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';


const Blogs = () => {
  return (
    // The bloge page section 
    <div className='text-center py-20 container mx-auto'>
      <h1 className="text-5xl text-center font-bold text-red-500 ">Our Blogs</h1>
      <hr className='w-44 mt-2 mb-4 rounded mx-auto border border-red-500' />
      <p className='py-2 font-bold'>Let's all serve everyone by donating blood..</p>

      <div className='lg:flex lg:justify-center gap-6'>

        <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
          <figure>
            <Image src={img1} alt="Food" className='p-2 w-screen h-[242px]' />
          </figure>
          <div className="card-body">
            <Link href="" className="card-title text-red-500 mx-auto">
              A Comprehensive Guide to Blood Donation
            </Link>
            <p>We cover everything you need to know about blood donation, from the science behind it to the step-by-step process of donating. Discover the health benefits for you as a donor and how your generosity can impact the lives of patients in need....</p>
            <hr className='border-red-400 border w-14 mx-auto my-2' />
            <div className="card-actions mx-auto text-slate-400">
              <p className='flex items-center'><FaRegCalendar className='mr-2' />May 28 2020</p>
              <span className='mx-3'>|</span>
              <p className='flex items-center'><FaRegComment className='mr-2' />No Comments</p>
            </div>
          </div>
        </div>
{/* second card  */}
        <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
          <figure>
            <Image src={img2} alt="Food" className='p-2 w-screen h-[242px]' />
          </figure>
          <div className="card-body">
            <Link href="" className="card-title text-red-500 mx-auto">
              How Donating Blood Benefits You
            </Link>
            <p>We'll explore the psychological rewards of altruism and the sense of fulfillment that comes with knowing you've played a Whether you're a first-time donor or a seasoned contributor, this article will shed light on the valuable advantages of giving the gift of life. ....</p>
            <hr className='border-red-400 border w-14 mx-auto my-2' />
            <div className="card-actions mx-auto text-slate-400">
              <p className='flex items-center'><FaRegCalendar className='mr-2' />Jun 04 2020</p>
              <span className='mx-3'>|</span>
              <p className='flex items-center'><FaRegComment className='mr-2' />No Comments</p>
            </div>
          </div>
        </div>
{/* third card  */}
        <div className="card w-96 mt-4 mx-auto bg-base-100 shadow-xl rounded-none">
          <figure>
            <Image src={img3} alt="Food" className='p-2 w-screen h-[242px]' />
          </figure>
          <div className="card-body">
            <Link href="" className="card-title text-red-500 mx-auto">
              Successful Blood Donation Experience
            </Link>
            <p>We'll also address common concerns and uncertainties, providing you with the knowledge and confidence you need to become a regular blood donor. Whether you're a first-timer or looking to enhance your donation experience, this article is your go-to resource for ensuring ...</p>
            <hr className='border-red-400 border w-14 mx-auto my-2' />
            <div className="card-actions mx-auto text-slate-400">
              <p className='flex items-center'><FaRegCalendar className='mr-2' />Oct 31 2020</p>
              <span className='mx-3'>|</span>
              <p className='flex items-center'><FaRegComment className='mr-2' />No Comments</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blogs;