// "use client";

import Image from "next/image"
import CommentPendingDonor from "./CommentPendingDonor"
import DeletePendingDonor from "./DeletePendingDonor"
import MakeDonor from "./MakeDonor"

// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { FaBeer, FaComments, FaTrash } from "react-icons/fa";
// import Swal from "sweetalert2";
const baseUrl= process.env.Base_URL
const getAllAppliedDonor= async()=>{

  try {
    const res= await fetch(`${baseUrl}/api/donor/pending`,{cache:"no-store"})
    if (!res.ok) {
      throw Error("Data no loading")
    }

    const data = await res.json()
    return data;

  } catch (error) {
    console.log(error)
  }

}



const AppliedDonor = async() => {

const applyDonors= await getAllAppliedDonor()

  if (applyDonors.length === 0) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="p-4">
      <div className="">
        <h1 className="font-bold text-3xl uppercase py-4">All Aplied Donor</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs text-center overflow-x-scroll ">
          <thead>
            <tr>
              <th className="font-bold text-md text-black">Image</th>
              <th className="text-md text-black">Name</th>
              <th className="text-md text-black">Blood Group</th>
              <th className="text-md text-black">HivStatus</th>
              <th className="text-md text-black">Gender</th>
              <th className="text-md text-black">Recent Illnesses</th>
              <th className="text-md text-black">BirthDay</th>
              <th className="text-md text-black">Present Address</th>
              <th className="text-md text-black">Parmanent Address</th>
              <th className="text-md text-black">Phone</th>
              <th className="text-md text-black">Status</th>
              <th className="text-md text-black">Comment</th>
              <th className="text-md text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {applyDonors.map((applyDonor) => (
              <>
                <tr>
                  <td>
                   
                    <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src={applyDonor?.image} width={50} height={50} alt="donor  image"></Image>
  </div>
</div>
                  </td>
                  <td className="text-black font-bold">{applyDonor?.name}</td>
                  <td className="text-black font-bold">{applyDonor?.blood}</td>
                  <td className="text-black font-bold">{applyDonor?.hivStatus}</td>
                  <td className="text-black font-bold">{applyDonor?.gender}</td>
                  <td className="text-black font-bold">
                    {applyDonor?.recent_illnesses}
                  </td>
                  <td className="text-black font-bold">
                    {applyDonor?.date_of_birth}
                  </td>
                  <td className="text-black font-bold">{applyDonor?.paddress}</td>
                  <td className="text-black font-bold">{applyDonor?.paraddress}</td>
                  <td className="text-black font-bold">{applyDonor?.phone}</td>
                  <td>
                    <MakeDonor id={applyDonor?._id} status={applyDonor?.status} email={applyDonor?.email} ></MakeDonor>
                  </td>
                  
                  <td>
                   <CommentPendingDonor></CommentPendingDonor>
                  </td>
                  <td>
                   <DeletePendingDonor id={applyDonor?._id}  email={applyDonor?.email}></DeletePendingDonor>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedDonor;
