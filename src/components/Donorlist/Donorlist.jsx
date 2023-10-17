"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import img from  '../../app/asset/DonationProcess/donorbanner.jpg'

const Donorlist = () => {

  const [donor, setDonor] = useState([]);
  const [loading,setloading]=useState(false)
  const { control, handleSubmit } = useForm();
  
  
  const handleBloodGroupChange = async (selectedBloodGroup) => {
    try {
    setloading(true)
  
      const res = await fetch(`/api/donor/approve/${selectedBloodGroup}`, {
        cache: 'no-store',
        next: {
          tags: ['donor'] 
        }
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await res.json();
      setDonor(result);
      setloading(false)
    } catch (error) {
      console.log(error);
      setloading(false)
    }
  };
  
  useEffect(() => {
    
    handleBloodGroupChange(' ');
    
  }, []);



  return (
    <div className="">

<div
        className="hero h-full mb-5 "  style={{
          backgroundImage: `url(${img.src})`, 
        }}
      >
       
        <div className="hero-overlay bg-opacity-60">
        </div>
        <div className="hero-content p-24 text-center text-white ">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl md:text-5xl font-bold">
              Blood Heroes: Find Your Lifesaver
            </h1>
            <p className="mb-5">
              Search Donors by Blood Type and Save Lives Today
            </p>
            <form >
              <Controller
                name="filterDonor"
                control={control}
                defaultValue=" "
                render={({ field }) => (
                  <select
                    {...field}
                    className="select select-secondary w-full max-w-xs text-black  dark:text-white"
                    onChange={(e) => {
                      field.onChange(e);
                      handleBloodGroupChange(e.target.value);
                    }}
                  >
                    <option value=''>Search your Blood</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                )}
              />
            </form>
          </div>
        </div>
      </div>
      <div>
        <h1 className="px-12 font-medium uppercase py-5 text-xl">All Donor</h1>
      </div>
   <div className="mx-auto container">
   { loading ? (
        <div className="text-center">Loading...</div>
      ) :  
    donor.length === 0 ? (
      <div>no data</div>
    ) : (
      <div className="grid grid-cols-1    lg:grid-cols-3  gap-3 mx-auto justify-center p-5">
        { 
        donor?.map((ad) => (
          <div
            className="card xl:card-side max-w-full h-full bg-base-100 shadow-2xl"
            key={ad?._id}
          >
            <div className="avatar">
              <div className="w-48  lg:w-36 rounded-br-full  ">
                <Image
                  src={ad?.image}
                  width={300}
                  height={300}
                  alt="donor image"
                />
              </div>
            </div>

            <div className="card-body  mt-0 md:-mt-20 lg:mt-0 text-start md:text-center lg:text-center xl:text-start ">
              <h2 className="font-bold text-2xl">{ad?.name}</h2>

              <div className="card text-sm h-full">
                <p>{ad?.paraddress}</p>
                <p> {ad?.blood}</p>
                <p> {ad?.gender}</p>
                <p className="text-xs md:text-sm"> {ad?.email}</p>
              </div>
              <div className="text-start md:text-center  lg:text-center xl:text-start ">
                <button className="btn btn-secondary  btn-sm  ">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      ) }
   </div>
    </div>
  );
};

export default Donorlist;
