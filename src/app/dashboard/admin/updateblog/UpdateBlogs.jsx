'use client'
import { UserAuth } from '@/context/authContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
const image_secrect__key= process.env.NEXT_PUBLIC_image_host;

const UpdateBlogs = ({id ,singleblog}) => {
    let {user}=UserAuth()

    const [isUpdatingImage, setIsUpdatingImage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toggleImageUpdate = () => {
      setIsUpdatingImage(!isUpdatingImage);
    };
    const router = useRouter();
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    let {title,content,author,date,image,status,email}=singleblog;
    const [editorContent, setEditorContent] = useState(content);

    const hostUrl = `https://api.imgbb.com/1/upload?key=${image_secrect__key}`;
 const { register, handleSubmit, control, formState: { errors } ,setValue} = useForm()
   
    const onSubmit = async(data) => {
       setIsSubmitting(true)
try {
  let imgUrl = image; 

    if (isUpdatingImage) {
      const formData = new FormData();
      formData.append("image", data.Nimage[0]);
      const imgResponse = await fetch(hostUrl, {
        method: "POST",
        body: formData,
      });

      if (!imgResponse.ok) {
        throw new Error("Image upload failed");
      }

      const imgData = await imgResponse.json();
      imgUrl = imgData?.data?.display_url;
    }
    
    const udateinfo ={
        image: imgUrl,
        Newstatus:data.Newstatus,
        Newdate:date ,
        Newauthor:data.Newauthor
        ,Newcontent:editorContent
        ,Newtitle:data.Newtitle 
        ,Newemail:email?email: user?.email
    }

    const res = await fetch(`/api/blog/${id}`,{
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(udateinfo),
})
if (!res.ok) {
     setIsSubmitting(false)
    throw new Error("Failed to update topic");
 
  }
  else{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully updated',
        showConfirmButton: false,
        timer: 1500
      })
  }
  setIsSubmitting(false)
router.refresh()

} catch (error) {
console.log(error);
setIsSubmitting(false)
}



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
                    <div className="card flex-shrink-0 w-full max-w-sm md:max-w-full  bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                         
                           
<div>
                 {isUpdatingImage ? (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Upload</span>
                  </label>
                  <input
                    type="file"
                    {...register("Nimage", {
                      required: "Image is required",
                    })}
                  placeholder='upload '
                    className="file-input  file-input-ghost w-full max-w-full"
                 
                  />
                 <div className='text-start mt-2'>
                 <button
                   className='btn btn-sm'
                    onClick={toggleImageUpdate}
                  >
                   cancel
                  </button>
                 </div>
                </div>
              ) : (
                <div className="form-control">
                <div className='avatar  h-96'>
               
                    <Image src={image} width={500} height={300} alt='blog '></Image>
                 
                
                </div>
                 <div className='text-start mt-2'>
                 <button
                   className='btn btn-sm'
                    onClick={toggleImageUpdate}
                  >
                    Change Image
                  </button>
                 </div>
                </div>
              )} 
</div>
             
            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" defaultValue={title} placeholder="product name" className="input input-bordered"  {...register("Newtitle")}  />
                            </div>            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Author</span>
                                </label>
                                <input type="text" defaultValue={author} placeholder="author"  {...register("Newauthor")} className="input input-bordered" />
                             
                            </div>

                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" defaultValue={date?date:formattedDate}  className="input input-bordered" readOnly/>
                               
                            </div>
                            <div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Select status</span>
                                     
                                    </label>
                                    <select className="select select-bordered w-full  "  defaultValue={status}  {...register("Newstatus")}>
                                   
  <option value="pending">pending</option>
  <option value="active">active</option>
  
                                    </select>
                        
                                </div>
                            </div>
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                               
                                <ReactQuill
                  value={editorContent}
                  onChange={setEditorContent}
                  theme="snow"
                  className="h-96 textarea-secondary"
                  modules={{ toolbar: true }}
                  placeholder="Description"
                />

                            </div>
                            <div className="form-control mt-10  ">
                                <button className="bg-black  text-white text-base py-3 px-4 rounded-md w-52 uppercase  flex justify-center items-center">
                                {
                                  isSubmitting ? (
                                    <div className='flex items-center'>

                                       <ThreeDots 
height="20" 
width="50" 
radius="9"
color="#ffff" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
visible={true}
 />
                              
                                    </div>
                                       ):
                                  "save change"
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

export default UpdateBlogs;