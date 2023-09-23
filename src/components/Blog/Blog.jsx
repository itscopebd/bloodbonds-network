
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';

const getActiveBlog = async()=>{
  let base_url = process.env.Base_URL;
try {
  let res= await fetch(`${base_url}/api/blog/active`,{
    cache:"no-store"
  })
  if (!res.ok) {
    throw  new Error("data load failed")
  }
  return res.json()
} catch (error) {
  console.log(error);
}


}

const Blog = async() => {

  let activeblog= await getActiveBlog()

  return (
    // The bloge page section 
    <div className='text-center py-20 container mx-auto'>
      <h1 className="text-5xl text-center font-bold text-red-500 ">Our Blogs</h1>
      <hr className='w-44 mt-2 mb-4 rounded mx-auto border border-red-500' />
      <p className='py-2 font-bold'>Let's all serve everyone by donating blood..</p>

      <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3'>

     {
activeblog.map((blg) => (
  <div className="card w-96 h-full mt-4 mx-auto bg-base-100 shadow-xl rounded-none" key={blg._id}>
  <figure>
    <Image src={blg.image} width={400} height={400} alt="Food" className='p-2 w-screen h-[242px]' />
  </figure>
  <div className="card-body">
    <h1 className="card-title text-red-500 mx-auto">
      {blg.title}
    </h1>
    <p>{blg.content.slice(0,150)}
    <Link href={`/blogdetail/${blg._id}`}> <span className=" text-red-500 ">Read full</span>  </Link>
    </p>
    <hr className='border-red-400 border w-14 mx-auto my-2' />
    <div className="card-actions mx-auto text-slate-400">
      <p className='flex items-center'><FaRegCalendar className='mr-2' />{blg.date}</p>
      <span className='mx-3'>|</span>
      <p className='flex items-center'><FaUserAlt className='mr-2' />
      {blg.author}
      </p>
    </div>
  </div>
</div>
))
     }


      </div>
    </div>
  );
};

export default Blog;