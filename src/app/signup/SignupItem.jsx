"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Swal from 'sweetalert2';
import { UserAuth } from '@/context/authContext';
import { useForm } from 'react-hook-form';

const SignupItem = () => {
    let { user, createUser, profileUpdate, googleLogin, facebookLogin } = UserAuth()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  
  const onSubmit = async (data) => {
  
    try {
      await createUser(data.email, data.password)

      await profileUpdate({
        displayName: data.name
      })

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Registration Success!',
          showConfirmButton: false,
          timer: 1500
        })
        
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Registration Not Success!',

      })

    }

    reset()
  }


  let handleGoogle = async () => {
    try {
      await googleLogin()
      
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Registration Success!',
              showConfirmButton: false,
              timer: 1500
            })
        

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Login Not Success!',

      })
    }

  }
  let handleFacebook = async () => {
    try {
      await facebookLogin()
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sign in SuccessFull',
        showConfirmButton: false,
        timer: 1500
      })
    

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Login Not Success!',

      })
    }

  }

    return (
        <div>
          <div>
              <form onSubmit={handleSubmit(onSubmit)} >
                <div >
                  <div className='form-control'>
                    <label className='py-2 text-xs md:text-sm' >Name</label>
                    <input type="text" placeholder="Type here" {...register("name",{required:"name is required"})} className="input input-bordered w-full max-w-xl lg:max-w-xl" />
                    {errors.name && <p className='text-sm pt-1'>{errors.name.message}</p>}

                  </div>
                </div>
                <div className='form-control'>
                  <label className='py-2 text-xs md:text-sm' >Email</label>
                  <input type="email" placeholder="Type here" {...register("email",{required:" Email is required "})} className="input input-bordered w-full max-w-xl lg:max-w-xl "  />
                  {errors.email && <p className='text-sm pt-1'>{errors.email.message}</p>}

                </div>
                <div className='lg:flex justify-between'>
                  <div className='form-control'>
                    <label className='py-2 text-xs md:text-sm' >Password</label>
                    <input type="password" placeholder="Type here" {...register("password",{required:"enter password", minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },})} className="input input-bordered  w-full max-w-xl lg:max-w-md"   />

                    {errors.password && <p className=' text-sm lg:text-xs xl:text-sm pt-1'>{errors.password.message}</p>}
                  </div>
                  <div className='form-control'>
                    <label className='py-2 text-xs md:text-sm' >Confirm Password</label>
                    <input type="password" placeholder="Type here" {...register("confirmPassword",{ required: 'Confirm Password is required',validate: (value) =>
        value === watch('password') || 'Passwords do not match',})} className="input input-bordered  w-full max-w-xl lg:max-w-sm xl:max-w-md"  />
          {errors.confirmPassword && <p className=' text-sm lg:text-xs xl:text-sm pt-1'>{errors.confirmPassword.message}</p>}

                  </div>
                </div>

                <div className='form-control'>
                  <label className='py-2 text-xs md:text-base ' >
                    <Link href={'/login'}>
                      Already have account?<span className='font-extrabold'>  Log In now</span>
                    </Link>
                  </label>

                </div>


                <div className='text-center py-2'>

                <button className='btn btn-neutral md:w-full overflow-hidden '>
                    Register
</button>
                </div>

              </form>
              <div className=" divider  text-sm">OR Sign up with</div>
              <div className=' flex items-center justify-center py-1 '>
                <button className='btn btn-circle btn-outline btn-primary mx-2' onClick={handleGoogle}>
               G
                </button>
                <button className='btn btn-circle btn-outline btn-primary mx-2'>
                  in
                </button>
                <button className='btn btn-circle btn-outline mx-2 btn-primary ' onClick={handleFacebook}>
                  F
                </button>
              </div>


            </div>
        </div>
    );
};

export default SignupItem;