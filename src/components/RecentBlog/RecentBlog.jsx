import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar, FaUserAlt } from 'react-icons/fa';
const getRecentblog = async ()=>{
    let baseURl=process.env.Base_URL;

    try {
      let res = await fetch(`${baseURl}/api/featureblog`,{
        cache:'no-store'
      })
      if (!res.ok) {
        throw  new Error("data load failed")
      }
 const fblog = await res.json()
      return fblog
     
  
    } catch (error) {
      console.log(error);
    }
}
const RecentBlog = async() => {
    const recentblogs= await getRecentblog()
    return (
        <div className='pt-5'>
            <div>
                <h1 className='text-base md:text-3xl pb-2 pt-2  uppercase'>Recent  articles</h1>
            </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
           {
            recentblogs?.slice(0,3).map((b)=> (
                <div key={b?._id}>
 <div className="card mx-w-md h-full mt-4 mx-auto bg-base-100 shadow-xl rounded-none hover:shadow-2xl " key={b?._id}>
 <figure>
 <div className="">
  <div className=" p-4 rounded">
    <Image src={b?.image} width={600} height={400} alt="Food" className=' max-w-full h-[200px]'   />
  </div>
</div>
  </figure>
   <div className="card-body">
    <h1 className="card-title text-red-500 mx-auto">
     {b?.title}
     </h1>
     <div>
          <div dangerouslySetInnerHTML={{ __html: b?.content.slice(0,200)+'......' }} /> 
<Link href={`/blogdetail/${b?._id}`}> <span className=" text-red-500 ">Read full</span>  </Link> 
     </div>
  
   <p></p>
    
    <hr className='border-red-400 border w-14 mx-auto my-2' />
    <div className="card-actions  mx-auto text-slate-400">
    <p className='flex items-center'><FaRegCalendar className='mr-2' />{b?.date}</p>
    <span>|</span>
    <p className='flex items-center'><FaUserAlt className='pr-1' />
     {b?.author}
      </p>
     </div>
   </div>
 </div>
                </div>
            ))
           } 
        </div>
        </div>
    );
};

export default RecentBlog;