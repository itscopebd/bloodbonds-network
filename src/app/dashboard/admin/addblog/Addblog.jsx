"use client"
import { UserAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Addblog = () => {
    let { user } = UserAuth()
    const router = useRouter();

    const { register, handleSubmit, control, formState: { errors },reset } = useForm()
    const onSubmit = async(data) => {
      console.log(data);
let {img,date,title,author,content}=data
       try {
        const result= await fetch('http://localhost:3000/api/blog',
        {
            method:"POST",
            headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({status:'pending',img,date,title,author,content})
        })
        if (result.ok) {
           Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Successfully created',
            showConfirmButton: false,
            timer: 1500
          })
          router.refresh()
          reset()
          }
          else{
            throw new Error("Failed to add");
          }
        
       } catch (error) {
        console.log(error);
       }

    }
    return (
        <div>
             <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold ">Become a Donor!</h1>
                        <p className="py-6">Thank you for considering becoming a donor and joining us in making a significant difference in the lives of those in need.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm md:max-w-full  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"  defaultValue={user?.email}  {...register("email")} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Author Name</span>
                                </label>
                                <input type="text" placeholder="author" defaultValue={user?.displayName} readOnly  {...register("author")} className="input input-bordered" />
                               


                            </div>
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date 
                                    </span>
                                </label>
                                <input type="date" placeholder="Date"  {...register("date", { required: "Please Fill up this feild" })} className="input input-bordered" />
                                {errors.date && <p className="text-error pt-1">{errors.date.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="title"  {...register("title", {
                                    required: "title is required",
                                })} className="input input-bordered" />
                                {errors.title && <p className="text-error pt-1">{errors.title.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Img url</span>
                                </label>
                                <input type="url" placeholder="img"  {...register("img", {
                                    required: "img is required",
                                })} className="input input-bordered" />
                                {errors.img && <p className="text-error pt-1">{errors.img.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                               
                                <textarea className="textarea textarea-secondary" placeholder="description"
                                 {...register("content",{
                                    required: "content is required",
                                 })}
                                
                                ></textarea>
{errors.content && <p className="text-error pt-1">{errors.content.message}</p>}
                            </div>
     

                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addblog;