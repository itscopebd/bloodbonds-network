"use client"
import { UserAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2';
  const image_secrect__key= process.env.NEXT_PUBLIC_image_host;
const Addblog = () => {
    let { user } = UserAuth()
    const router = useRouter();
       const hostUrl = `https://api.imgbb.com/1/upload?key=${image_secrect__key}`;

       let [isSbmited, setIsSubmitting]= useState(false)
       const today = new Date();
       const formattedDate = today.toISOString().split('T')[0];

    const { register, handleSubmit, control, formState: { errors },reset } = useForm()
    const onSubmit = async(data) => {
      console.log(data);
      setIsSubmitting(true)

       try {
 

        const formData = new FormData();
  formData.append("image", data.image[0]);

  // Upload the image to ImgBB
  const imgResponse = await fetch(hostUrl, {
    method: "POST",
    body: formData,
  });

  if (!imgResponse.ok) {
    setIsSubmitting(false)
    throw new Error("Image upload failed");

  }

  const imgData = await imgResponse.json();

  const imgUrl = imgData?.data?.display_url;
  
// let blogdata={
//     status:'pending',
//     image:imgUrl,
//     date:data.date,
//     title:data.title,
//     author:data.author,
//     content:data.content
// }

        const result= await fetch('/api/blog',
        {
            method:"POST",
            headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ status:'pending',
              image:imgUrl,
              date:data.date,
              title:data.title,
              author:data.author,
              content:data.content,
            email:data.email})
        }
        )

        const allBlogData = await result.json();

        if (allBlogData) {
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
        setIsSubmitting(false)
       } catch (error) {
        console.log(error);
       }

    }
    return (
        <div>
             <div className=" min-h-screen ">
                <h1 className="text-5xl font-bold py-5 px-4 ">Post a Blog</h1>  

                <div className=" hero-content mx-auto ">
                    <div className="card  w-full max-w-2xl 2xl:max-w-full shadow-2xl bg-base-100">
                          

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
                                <input type="text" placeholder="author" defaultValue={user?.displayName}   {...register("author")} className="input input-bordered" />
                               


                            </div>
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date 
                                    </span>
                                </label>
                                <input type="date" placeholder="Date" defaultValue={formattedDate} {...register("date", { required: "Please Fill up this feild" })} className="input input-bordered" />
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
                               
                                <input type="file"  placeholder="img"  {...register("image", {
                                    required: "img is required",
                                })}  className="file-input file-input-bordered w-full max-w-full" />

                                 {errors.img && <p className="text-error pt-1">{errors.img.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                               
                                <textarea className="textarea h-48 textarea-secondary" placeholder="description"
                                 {...register("content",{
                                    required: "content is required",
                                 })}
                                
                                ></textarea>
{errors.content && <p className="text-error pt-1">{errors.content.message}</p>}
                            </div>
     

                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">
                                    
                                  {
                                    isSbmited ?(
                                        <ThreeDots 
                                        height="20" 
                                        width="50" 
                                        radius="9"
                                        color="#ffff" 
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        visible={true}
                                         />
                                    ):   "Submit"
                                  }
                                    
                                    </button>
                            </div>
                        </form>
                    </div> 
                  
                </div>
            </div>
        </div>
    );
};

export default Addblog;