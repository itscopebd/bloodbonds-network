'use client'
import { UserAuth } from '@/context/authContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';

const UpdateBlogs = ({id ,singleblog}) => {
    let {user}=UserAuth()
    const router = useRouter();
    let {title,content,author,date,img,status,email}=singleblog;
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const onSubmit = async(data) => {

let {Newstatus,Newimg,Newdate,Newauthor,Newcontent,Newtitle,Newemail}=data


    }


    return (
        <div>

            <div className='p-5'>
                <button>
                   <Link href={'/dashboard/admin/allblog'}> <FaArrowLeft/> </Link>
                </button>
            </div>
              <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-start ">
                        <h1 className="text-5xl font-bold ">Update Your Blog</h1>
                        <p className="py-6">Welcome back to the blog editing interface! This is where you have the power to keep your content fresh,<br></br> engaging, and up-to-date. </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm md:max-w-full  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" defaultValue={title} placeholder="product name" className="input input-bordered"  {...register("Newtitle")}  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input type="text" defaultValue={email? email : user?.email} placeholder="email" className="input input-bordered"  {...register("Newemail")}  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image url</span>
                                </label>
                                <input type="text" placeholder="author"  {...register("Newimg")} className="input input-bordered" />
                             
                            </div>
                     
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Author</span>
                                </label>
                                <input type="text" defaultValue={author} placeholder="author"  {...register("Newauthor")} className="input input-bordered" />
                             
                            </div>

                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">stock_quantity</span>
                                </label>
                                <input type="date" defaultValue={date} placeholder="stock_quantity"  {...register("Newdate")} className="input input-bordered" />
                               
                            </div>
                            <div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Select Category</span>
                                    </label>
                                    <select className="select select-bordered w-full  "  defaultValue={status} {...register("Newstatus")}>
                <option value="" selected>Select Category</option>
  <option value="pending">pending</option>
  <option value="active">active</option>
  
                                    </select>
                        
                                </div>
                            </div>
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                               
                                <textarea className="textarea textarea-secondary" placeholder="description"
                                 {...register("Newcontent")}
                                defaultValue={content}
                                ></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Save change</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default UpdateBlogs;