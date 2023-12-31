"use client";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { UserAuth } from "@/context/authContext";
import { useForm } from "react-hook-form";
import { ColorRing } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import CreateJWT from "@/utils/createJWT";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SignupItem = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [conshowPassword, setConShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setConShowPassword(!conshowPassword);
  };
  let { user, createUser, profileUpdate, googleLogin} =
    UserAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createUser(data.email, data.password);

      await profileUpdate({
        displayName: data.name,
      });

      const randomId = data.name + "_" + Math.floor(Math.random() * 100000);

      // user insert database
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          role: "user",
          userId: randomId,
        }),
      });
      if (response) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Registration Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setLoading(false);
        router.push("/login");
      }
    } catch (error) {
     
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User Already Exist!",
      });
      setLoading(false);
    }
  };

  let handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      const logInData = await googleLogin();

      CreateJWT({ email: logInData?.user?.email });
      // user insert database
      const randomId =
        logInData?.user?.displayName + "_" + Math.floor(Math.random() * 100000);
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: logInData?.user?.displayName,
          email: logInData?.user?.email,
          role: "user",
          userId: randomId,
        }),
      });
      if (response) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Registration Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        setGoogleLoading(false);
        router.push("/");
      }
    } catch (error) {
    
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your Login Not Success!",
      });
      setGoogleLoading(false);
    }
  };


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">Name</label>
              <input
                type="text"
                placeholder="Type here"
                {...register("name", { required: "name is required" })}
                className="input input-bordered w-full max-w-full lg:max-w-xl"
              />
              {errors.name && (
                <p className="text-sm pt-1">{errors.name.message}</p>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="py-2 text-xs md:text-sm">Email</label>
            <input
              type="email"
              placeholder="Type here"
              {...register("email", { required: " Email is required " })}
              className="input input-bordered w-full max-w-full lg:max-w-xl "
            />
            {errors.email && (
              <p className="text-sm pt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="lg:flex justify-between">

          <div className="relative">

         
             
        
         

            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Type here"
                {...register("password", {
                  required: "enter password",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="input input-bordered  w-full max-w-full lg:max-w-md"
              />
<span className='   absolute top-14 md:top-16  right-3 transform -translate-y-1/2 cursor-pointer ' onClick={togglePasswordVisibility}>
        {showPassword ?  <FaRegEyeSlash/>:<FaRegEye/>}
      </span> 
              {errors.password && (
                <p className=" text-sm lg:text-xs xl:text-sm pt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            </div>
<div className="relative">
            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">
                Confirm Password
              </label>
              <input
                type={conshowPassword ? 'text' : 'password'}
                placeholder="Type here"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="input input-bordered  w-full max-w-full lg:max-w-sm xl:max-w-md"
              />
<span className='   absolute top-14 md:top-16 right-3 transform -translate-y-1/2 cursor-pointer ' onClick={togglePasswordVisibility2}>
        {conshowPassword ?  <FaRegEyeSlash/>:<FaRegEye/>}
      </span> 
              {errors.confirmPassword && (
                <span className=" text-sm lg:text-xs xl:text-sm pt-1 block">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>


          </div>


          <div className="form-control">
            <label className="py-2 text-xs md:text-base ">
              <Link href={"/login"}>
                Already have account?
                <span className="font-extrabold"> Log In now</span>
              </Link>
            </label>
          </div>

          <div className="text-center py-2">
            <button className="btn btn-neutral md:w-full overflow-hidden ">
              {loading && loading ? (
                <ColorRing
                  visible={true}
                  height="40"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={["#F4F4F3", "#FFF", "#EB4249", "#abbd81", "#849b87"]}
                />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
        <div className=" divider  text-sm">OR Sign up with</div>
        <div className=" flex items-center justify-center py-1 ">
          <button
            className="btn btn-circle btn-outline btn-primary mx-2"
            onClick={handleGoogle}
          >
            {googleLoading && googleLoading ? (
              <ColorRing
                visible={true}
                height="40"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#F4F4F3", "#FFF", "#EB4249", "#abbd81", "#849b87"]}
              />
            ) : (
              <FaGoogle/>
            )}
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default SignupItem;
