"use client";

import React, { useEffect, useState } from "react";
import { FaBeer, FaComments, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const AppliedDonor = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const appliedDonor = async () => {
      await fetch("/api/donor/pending")
        .then((res) => res.json())
        .then((data) => setDonors(data));
    };
    appliedDonor()
  }, []);

  // handle donor approve and pending

  const handleDonor = async (value, id) => {
    if (value == "Approve") {
      Swal.fire({
        title: "Are you sure?",
        text: "This Donor is Approve!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approved it!",
      }).then( async(result) => {
        if (result.isConfirmed) {
          await fetch(`/api/donor/${id}`, {
            method: "PATCH",
            body: JSON.stringify(value),
          })
            .then((res) => res.json())
            .then(async(data) => {
              await fetch("/api/donor/pending")
                .then((res) => res.json())
                .then((data) => setDonors(data));
            });

          Swal.fire("Approved!", "This Donor is Approved.", "success");
        }
      });
    } 
  };

  // handle delete donor

  const hamdleDeleteDonor = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This Donor is Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/api/donor/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            fetch("/api/donor/pending")
              .then((res) => res.json())
              .then((data) => setDonors(data));
          });

        Swal.fire("Yes!", "This Donor is Delete.", "success");
      }
    });
  };

  // if (donors.length === 0) {
  //   return (
  //     <div className="absolute top-1/2 left-1/2">
  //       <span className="loading loading-bars loading-lg"></span>
  //     </div>
  //   );
  // }
  return (
    <div className="p-4">
      <div className="">
        <h1 className="font-bold text-3xl uppercase py-4">All Aplied Donor</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs text-center">
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
            {donors.map((donor) => (
              <>
                <tr>
                  <td>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50px",
                      }}
                      src={donor?.image}
                      alt="donor image"
                    />
                  </td>
                  <td className="text-black font-bold">{donor?.name}</td>
                  <td className="text-black font-bold">{donor?.blood}</td>
                  <td className="text-black font-bold">{donor?.hivStatus}</td>
                  <td className="text-black font-bold">{donor?.gender}</td>
                  <td className="text-black font-bold">
                    {donor?.recent_illnesses}
                  </td>
                  <td className="text-black font-bold">
                    {donor?.date_of_birth}
                  </td>
                  <td className="text-black font-bold">{donor?.paddress}</td>
                  <td className="text-black font-bold">{donor?.paraddress}</td>
                  <td className="text-black font-bold">{donor?.phone}</td>
                  <td>
                    <select
                      name=""
                      id=""
                      className="select select-bordered min-h-[2rem] h-[2rem]"
                      onChange={(e) => handleDonor(e.target.value, donor._id)}
                    >
                      <option value={donor?.status}>{donor?.status}</option>
                      {donor.status === "Pending" ? (
                        <option value="Approve">Approve</option>
                      ) : (
                        <option value="Pending">Pending</option>
                      )}
                    </select>
                  </td>
                  <td>
                    <button className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor">
                      <FaComments className="w-full h-full p-2" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => hamdleDeleteDonor(donor._id)}
                      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
                    >
                      <FaTrash className="w-full h-full p-2" />
                    </button>
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
