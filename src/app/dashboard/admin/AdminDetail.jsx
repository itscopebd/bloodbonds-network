"use client";
import React, { useEffect, useState } from "react";
import img1 from "../../asset/DonationProcess/download.png";
import img2 from "../../asset/DonationProcess/download1.png";
import img3 from "../../asset/DonationProcess/download3.png";
import img4 from "../../asset/DonationProcess/download4.png";
import Image from "next/image";
const AdminDetail = () => {
  // all donor
  const [allDonor, setAllDonor] = useState([]);
  const [pendingDonor, setPendingDonor] = useState([]);
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const allDonorApprove = async () => {
      await fetch("/api/donor/approve")
        .then((res) => res.json())
        .then((data) => setAllDonor(data));
    };
    allDonorApprove();

    const allDonorPending = async () => {
      await fetch("/api/donor/pending")
        .then((res) => res.json())
        .then((data) => setPendingDonor(data));
    };
    allDonorPending();

   const allUser = async () => {
      await fetch("/api/user")
        .then((res) => res.json())
        .then((data) => setAllUser(data));
    };
    allUser();

  },[]);
  // all donor

  // useEffect(() => {
  
  // },[]);
  // useEffect(() => {
  //   const allUser = async () => {
  //     await fetch("/api/user")
  //       .then((res) => res.json())
  //       .then((data) => setAllUser(data));
  //   };
  //   allUser();
  // },[]);

  return (
    <div>
      <div className=" ">
        <div className="hero-content ">
          <div className="max-w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="card  bg-[#2196f3] text-white shadow-xl">
                <div className="card-body">
                  <h2 className="font-bold text-5xl">0</h2>
                  <p>Total blog</p>
                  <Image src={img4} width={180} height={120} alt=""></Image>
                </div>
              </div>
              <div className="card  bg-[#03045e] text-white shadow-xl">
                <div className="card-body">
                  <h2 className="font-bold text-5xl">{allDonor.length}</h2>
                  <p>Total Donor</p>
                  <Image src={img3} width={180} height={120} alt=""></Image>
                </div>
              </div>
              <div className="card  bg-[#03045e] text-white shadow-xl">
                <div className="card-body">
                  <h2 className="font-bold text-5xl">{pendingDonor.length}</h2>
                  <p>Applied Total Donor</p>
                  <Image src={img3} width={180} height={120} alt=""></Image>
                </div>
              </div>
              <div className="card  bg-[#ef233c] text-white shadow-xl">
                <div className="card-body">
                  <h2 className="font-bold text-5xl">{allUser.length}</h2>
                  <p>Total Users</p>
                  <Image src={img2} width={180} height={120} alt=""></Image>
                </div>
              </div>
              <div className="card  bg-[#34073d] text-white shadow-xl">
                <div className="card-body">
                  <h2 className="font-bold text-5xl">0</h2>
                  <p>Total donation</p>
                  <Image src={img1} width={180} height={120} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetail;
