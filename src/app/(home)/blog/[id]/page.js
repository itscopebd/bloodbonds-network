import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const getActiveOneBlog = async (id)=>{
    let baseURl=process.env.Base_URL;

    try {
        const res = await fetch(`${baseURl}/api/blog/${id}`,{
            cache:'no-store'
        })
        if (!res.ok) {
            throw  new Error("data load failed")
        }
        return res.json()
    } catch (error) {
        console.log(error);
    }
}

const page =  async({ params }) => {
    let {id}=params
let blogDetail = await getActiveOneBlog(id)
const{image,title,author,date,content,email}=blogDetail
    return (
        <div className='container mx-auto pt-16 px-10'>

<div className='p-5'>
                <button>
                   <Link href={'/blog'}> <FaArrowLeft/> </Link>
                </button>
            </div>


<div className='card mx-auto'>


            <div className='rounded avatar w-full h-96'>
                   <Image  src={image} width={1000} height={1000} alt='image' />
            </div>
            <h1 className='mt-4 text-5xl text-center font-bold'>{blogDetail.title}</h1>

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