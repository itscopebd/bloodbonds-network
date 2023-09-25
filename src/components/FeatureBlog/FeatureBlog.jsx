import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getFeatureblog = async ()=>{
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

const FeatureBlog = async() => {
    const featureblogs= await getFeatureblog()
    return (
        <div className='bg-base-100  mx-auto py-14'>
            <div>
                <h1 className='text-base md:text-3xl py-5'>Discover latest  articles</h1>
            </div>
   {
    featureblogs?.slice(0,1).map((fb) =>(
        <div className="card max-w-full h-96 shadow-sm image-full" key={fb?._id}>
        <figure>
          <Image src={fb?.image} width={1600} height={400} alt='fb'></Image>
        </figure>
        <div className="card-body justify-center">
       
          <div className="pt-10">
            <h2 className='card-title md:text-5xl'>{fb?.title}</h2>
            <div>
          <div dangerouslySetInnerHTML={{ __html: fb?.content.slice(0,200)+'......' }} /> 
<Link href={`/blogdetail/${fb?._id}`}> <span className=" text-red-500 ">Read full</span>  </Link> 
     </div>
          </div>
        </div>
      </div>
    ))
   }
        </div>
    );
};

export default FeatureBlog;