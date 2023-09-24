import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const getSingleblog = async(id)=>{
    const baseUrl = process.env.Base_URL

    try {
        const res = await fetch(`${baseUrl}/api/blog/${id}`,{
            cache: 'no-store'
        })

if (!res.ok) {
    throw new Error("error")
}
return res.json()
    } catch (error) {
        console.log(error);
    }
}

const BlogDetailHome = async({ params }) => {
    const {id}= params
const blogDetail = await getSingleblog(id)

    return (
        <div className='p-24 container mx-auto'>
            <div className='p-5'>
                <button>
                   <Link href={'/homeblog'}> <FaArrowLeft/> </Link>
                </button>
            </div>
            <div className='card mx-auto'>


<div className='rounded avatar w-full h-96'>
       <Image  src={blogDetail?.image} width={1000} height={1000} alt='image' />
</div>
<h1 className='mt-4 text-5xl text-center font-bold'>{blogDetail.title}</h1>

<div className='pt-6'>
    <p className='text-2xl font-bold'>{blogDetail?.author}</p>
    <p className='text-sm'>{blogDetail?.date}</p>
    <p className='text-sm'>{blogDetail?.email}</p>
</div>

<div>
 <p className='mt-10'>{blogDetail?.content}</p>
</div>


</div>
        </div>
    );
};

export default BlogDetailHome;