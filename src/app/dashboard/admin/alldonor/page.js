// "use client";

import AllDonor from "./AllDonor";

// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { FaBeer, FaComments, FaTrash } from "react-icons/fa";
// import Swal from "sweetalert2";
const DonorPage = () => {
  // const [approveDonor, setApproveDonor] = useState([]);
  // const router= useRouter()
  // useEffect(() => {
  // const allApproveDonor= async()=>{
  //   await fetch("/api/donor/approve")
  //   .then((res) => res.json())
  //   .then((data) => setApproveDonor(data));
  // }
  // allApproveDonor()
  // }, []);

  // // handle donor approve and pending

  // const handleDonor = async (value, id) => {
  //   if (value == "Pending") {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "This Donor is Approve!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, Approved it!",
  //     }).then( async(result) => {
  //       if (result.isConfirmed) {
  //        const res= await fetch(`/api/donor/${id}`, {
  //           cache: 'no-store',
  //           method: "PUT",
  //           body: JSON.stringify(value),
  //         })
  //         Swal.fire("Approved!", "This Donor is Approved.", "success");
  //         if (res.ok) {

  //           router.refresh()
  //         }

  //       }
  //     });
  //   }
  // };

  // // handle delete donor

  // const hamdleDeleteDonor = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "This Donor is Delete!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, Delete it!",
  //   }).then( async(result) => {
  //     if (result.isConfirmed) {
  //       const res=fetch(`/api/donor/${id}`, {
  //         cache:"no-store",
  //         method: "DELETE",
  //       })
  //       Swal.fire("Yes!", "This Donor is Delete.", "success");
  //         if (res.ok) {

  //           router.refresh()
  //         }

  //     }
  //   });
  // };

  return <AllDonor></AllDonor>;
};

export default DonorPage;
