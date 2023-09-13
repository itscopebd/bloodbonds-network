"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
const AllAdminPage = () => {
  const [allAdmin, setAllAdmin] = useState([]);
  const router = useRouter();

  useEffect(() => {
 
    fetch("/api/admin")
    .then(res=> res.json())
    .then(data=>setAllAdmin(data))
  
   
  }, [allAdmin]);
  // handle delete donor

  const hamdleDeleteAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This Admin is Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/admin/${id}`, {
          cache: "no-store",
          method: "DELETE",
        });
        Swal.fire("Yes!", "This Admin is Delete.", "success");
        console.log(res);
        if (res.ok) {
          router.refresh();
        }
      }
    });
  };

  //   make admin
  const hamdleMakeUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This Admin is User!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, User it!",
    }).then(async (response) => {
      if (response.isConfirmed) {
        const data = "user";
        const res = await fetch(`/api/admin/${id}`, {
          cache: "no-store",
          method: "PUT",
          body: JSON.stringify(data),
        });
        Swal.fire("Yes!", "This Admin is User.", "success");

        if (res.ok) {
          router.refresh();
        }
      }
    });
  };
  if (allAdmin.length === 0) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="">
        <h1 className="font-bold text-3xl uppercase py-4">All Admin</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs text-center">
          <thead>
            <tr>
              <th className="font-bold text-md text-black">Image</th>
              <th className="text-md text-black">Name</th>
              <th className="text-md text-black">Email</th>
              <th className="text-md text-black">User Id</th>
              <th className="text-md text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {allAdmin.map((admin, index) => (
              <>
                <tr key={index}>
                  <td className="flex items-center">
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50px",
                      }}
                      src={admin?.image}
                      alt="User image not found!"
                    />
                  </td>
                  <td className="text-black font-bold">{admin?.name}</td>
                  <td className="text-black font-bold">{admin?.email}</td>
                  <td className="text-black font-bold">{admin?.userId}</td>
                  <td className="">
                    <button
                      onClick={() => hamdleDeleteAdmin(admin._id)}
                      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
                    >
                      <FaTrash className="w-full h-full p-2" />
                    </button>{" "}
                    <span className="text-black font-bold">Or</span>
                    <button
                      onClick={() => hamdleMakeUser(admin._id)}
                      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
                      title="Make a user"
                    >
                      <FaUser className="w-full h-full p-2" />
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

export default AllAdminPage;
