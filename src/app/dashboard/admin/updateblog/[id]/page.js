import React from 'react';
import UpdateBlogs from '../UpdateBlogs';



const UpdateBlog = async({params}) => {
    let {id}=params;
   
    return (
        <div>
            <UpdateBlogs id={id} />
        </div>
    );
};

export default UpdateBlog;