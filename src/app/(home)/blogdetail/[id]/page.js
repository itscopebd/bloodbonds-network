import Image from 'next/image';
import React from 'react';

const getSingleBLog = async (id) =>{
    const baseURl= process.env.Base_URL

    try {
        const res= await fetch (`${baseURl}/api/blog/${id}`,{
            cache:"no-store"
        })
        if (!res.ok) {
            throw new Error("data fetch error")
          }
            return res.json()
        
    } catch (error) {
        console.log(error);
    }
}

const page = async ({params}) => {
    const {id}= params;
    const blogDetail= await getSingleBLog(id)
    const {image,title,content,author,date,email}=blogDetail
    return (
        <div className='p-24 mx-auto container'>
            <div className='card mx-auto'>


<div className='rounded avatar w-full h-96'>
       <Image  src={image} width={1000} height={1000} alt='image' />
</div>
<h1 className='mt-4 text-sm md:text-5xl text-center font-bold'>{title}</h1>

<div className='pt-6'>
    <p className='text-2xl font-bold'>{author}</p>
    <p className='text-sm'>{date}</p>
    <p className='text-sm'>{email}</p>
</div>

<div>
 <p className='mt-10'>{content}</p>
</div>


</div>
        </div>
    );
};

export default page;