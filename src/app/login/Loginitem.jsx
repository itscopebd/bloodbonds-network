"use client"
import { UserAuth } from '@/context/authContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ColorRing } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const Loginitem = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  let { user, googleLogin, signIn, facebookLogin } = UserAuth()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await signIn(data.email, data.password)
      if (response) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Login Success!',
          showConfirmButton: false,
          timer: 1500
        })
        setLoading(false)
        router.push("/")
      }




    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User Already Exist!',

      })
      setLoading(false)
    }

    reset()
  }

  let handleGoogle = async () => {
    setGoogleLoading(true)
    try {
      await googleLogin()

      // user insert database 
      const randomId = logInData?.user?.displayName + "_" + Math.floor(Math.random() * 100000)
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ name: logInData?.user?.displayName, email: logInData?.user?.email, role: "user", userId: randomId })
      })

      if (response) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Registration Success!',
          showConfirmButton: false,
          timer: 1500
        })
        setGoogleLoading(false)
        router.push("/")
      }




    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User Already Exist!',

      })
      setGoogleLoading(false)
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
      <div className='justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='form-control'>
            <label className='py-2 text-xs md:text-sm' >Email</label>
            <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl lg:max-w-md" required  {...register("email")} />
          </div>
          <div className='form-control'>
            <label className='py-2 text-xs md:text-sm' >Password</label>
            <input type="password" placeholder="Type here" className="input input-bordered  w-full max-w-xl lg:max-w-md"  {...register("password")} />
          </div>
          <div className='form-control'>
            <label className='py-2 text-xs md:text-sm font-extrabold' >
              <Link href={'/signup'}>
                Create New Account
              </Link>
            </label>

          </div>


          <div className='text-center py-2'>
            <button className='btn btn-neutral md:w-full overflow-hidden '>

              {loading && loading ? <ColorRing
                visible={true}
                height="40"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#F4F4F3', '#FFF', '#EB4249', '#abbd81', '#849b87']}
              /> : "Log in"


              }

            </button>


          </div>

        </form>
        <div className=" divider  text-sm">OR LogIn with </div>
        <div className=' flex items-center justify-center py-1 '>
          <button className='btn btn-circle btn-outline btn-primary mx-2' onClick={handleGoogle} >

            {googleLoading && googleLoading ? <ColorRing
              visible={true}
              height="40"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#F4F4F3', '#FFF', '#EB4249', '#abbd81', '#849b87']}
            /> : "G"


            }


          </button>
          <button className='btn btn-circle btn-outline btn-primary mx-2'>
            in
          </button>
          <button className='btn btn-circle btn-outline mx-2 btn-primary '>
            F
          </button>
        </div>


      </div>
    </div>
  );
};

export default Loginitem;