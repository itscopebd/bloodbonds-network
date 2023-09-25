import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar, FaUserAlt } from 'react-icons/fa';

const getallactive = async()=>{
    const baseUrl = process.env.Base_URL
    try {
        const res = await fetch(`${baseUrl}/api/activeblog`,{
            cache:"no-store"
        })
if (!res.ok) {
    throw new Error("error")
}
const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
const Blog = async() => {
    const activeBlog = await getallactive()
    return (
        <div className='p-16'>
             <div className='text-center pt-5  container mx-auto'>
      <h1 className="text-5xl text-center font-bold text-red-500 ">Our Blogs</h1>
      <hr className='w-44 mt-2 mb-4 rounded mx-auto border border-red-500' />
      <p className=' font-bold'>Let's all serve everyone by donating blood..</p></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
           {
            activeBlog?.map((b)=> (
                <div key={b._id}>
 <div className="card mx-w-sm h-full mt-4 mx-auto bg-base-100 shadow-xl rounded-none" key={b?._id}>
 <figure>
     <Image src={b?.image} width={400} height={400} alt="Food" className='p-2 w-screen h-[242px]' />
  </figure>
   <div className="card-body">
    <h1 className="card-title text-red-500 mx-auto">
     {b?.title}
     </h1>
     <div>
          <div dangerouslySetInnerHTML={{ __html: b?.content.slice(0,200)+'......' }} /> 
<Link href={`/blogdetail/${b?._id}`}> <span className=" text-red-500 ">Read full</span>  </Link> 
     </div>
  
   
    
    <hr className='border-red-400 border w-14 mx-auto my-2' />
    <div className="card-actions mx-auto text-slate-400">
    <p className='flex items-center'><FaRegCalendar className='mr-2' />{b?.date}</p>
      <span className='mx-3'>|</span>
    <p className='flex items-center'><FaUserAlt className='mr-2' />
     {b?.author}
      </p>
     </div>
   </div>
 </div>
                </div>
            ))
           } 
        </div></div>
    );
};

export default Blog;