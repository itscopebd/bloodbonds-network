"use client"

import Donorlist from "@/components/Donorlist/Donorlist";
import React, { useEffect, useState } from "react";
import img from  '../../asset/DonationProcess/donorbanner.jpg'
import { Controller, useForm } from "react-hook-form";

const AlldOnorList = () => {
  const [donor, setDonor] = useState([]);
const [loading,setloading]=useState(false)
const { control, handleSubmit } = useForm();


const handleBloodGroupChange = async (selectedBloodGroup) => {
  try {
  setloading(true)

    const res = await fetch(`/api/donor/approve/${selectedBloodGroup}`, {
      cache: 'no-store',
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
    <div>
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

      { loading ? ( <div>loading...</div> ) : (<Donorlist donor={donor}></Donorlist>)}
    </div>
  );
};

export default AlldOnorList;
