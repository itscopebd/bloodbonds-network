"use client"

import Donorlist from "@/components/Donorlist/Donorlist";
import React, { useEffect, useState } from "react";

const AlldOnorList = () => {
  const [donor, setDonor] = useState([]);
const [filterDonor,setFilterDonor]=useState("A+")
  useEffect(() => {
    const getDonor = async () => {
      await fetch(`/api/donor/approve/${filterDonor}`,
      {
        cache:"no-store"
      })
        .then((res) => res.json())
        .then((data) => setDonor(data));
    };
    getDonor();
  },[filterDonor]);

  const getGroup = (value) => {
    setFilterDonor(value);
    
  };


  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/JnXWzXd/27577817-ravi24-may-7-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Blood Heroes: Find Your Lifesaver
            </h1>
            <p className="mb-5">
              Search Donors by Blood Type and Save Lives Today
            </p>
            <select onChange={(e)=>getGroup(e.target.value)} className="select select-secondary w-full max-w-xs text-black  dark:text-white">
              <option selected>Search your Blood</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>
      </div>

      <Donorlist donor={donor}></Donorlist>
    </div>
  );
};

export default AlldOnorList;