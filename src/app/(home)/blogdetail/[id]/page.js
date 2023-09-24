import React from 'react';

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
            {
                <h1>{blogDetail?.title}</h1>
            }
        </div>
    );
};

export default BlogDetailHome;