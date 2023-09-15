import React from 'react';
import UpdateBlogs from '../UpdateBlogs';

const getOneBlog = async (id)=>{
    let baseURl=process.env.Base_URL;

    try {
        const res = await fetch(`${baseURl}/api/blog/${id}`)
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
   let singleblog= await getOneBlog(id)
    return (
        <div>
            <UpdateBlogs id={id} singleblog={singleblog} />
        </div>
    );
};

export default UpdateBlog;