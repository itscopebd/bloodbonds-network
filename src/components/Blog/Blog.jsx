import React from 'react';

const getallactive = async()=>{
    const baseUrl = process.env.Base_URL
    try {
        const res = await fetch(`${baseUrl}/api/activeblog`,{
            cache:"no-store"
        })
if (!res.ok) {
    throw new Error("error")
}
        return res.json()
    } catch (error) {
        console.log(error);
    }
}
const Blog = async() => {
    const activeBlog = await getallactive()
    return (
        <div>
           {
            activeBlog?.map((b)=> (
                <div key={b._id}>
<h1>{b.title}</h1>
                </div>
            ))
           } 
        </div>
    );
};

export default Blog;