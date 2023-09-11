import React from 'react';
import UpdateBlogs from '../UpdateBlogs';

const getSingleBlog= async(id)=>{
    try {
        let res= await fetch(`http://localhost:3000/api/blog/${id}`,{
            cache:"no-cache"
        })
        if (!res.ok) {
            throw  new Error("data load failed")
        }
        return res.json()
      } catch (error) {
      
        console.log(error);
      }
}

const UpdateBlog = async({params}) => {
    let {id}=params;
    let Singleblog= await getSingleBlog(id)
    return (
        <div>
            <UpdateBlogs id={id} Singleblog={Singleblog} />
        </div>
    );
};

export default UpdateBlog;