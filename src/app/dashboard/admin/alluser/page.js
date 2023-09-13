"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTrash, FaUserGraduate } from "react-icons/fa";
import Swal from "sweetalert2";
const AllUserPage = () => {
  const [allUser, setAllUser] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const allUser = async () => {
      await fetch("/api/user")
        .then((res) => res.json())
        .then((data) => setAllUser(data));
    };
    allUser();
  }, [allUser]);

  // handle delete donor

  const hamdleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This User is Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/user/${id}`, {
          cache: "no-store",
          method: "DELETE",
        });
        Swal.fire("Yes!", "This User is Delete.", "success");
        console.log(res);
        if (res.ok) {
          router.refresh();
        }
      }
    });
  };

//   make admin 
const hamdleMakeAdmin=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "This User is Admin!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Admin it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
            const data="admin"
          const res = await fetch(`/api/user/${id}`, {
            cache: "no-store",
            method: "PUT",
            body:JSON.stringify(data)
          });
          Swal.fire("Yes!", "This User is Admin.", "success");
          if (res.ok) {
            router.refresh();
          }
        }
      });  
}

if (allUser.length===0) {
  return (
    <div className="absolute top-1/2 left-1/2">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
}

  return (
    <div className="p-4">
      <div className="">
        <h1 className="font-bold text-3xl uppercase py-4">All User</h1>
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
            {allUser.map((user, index) => (
              <>
                <tr key={index}>
                  <td className="flex items-center">
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50px",
                      }}
                      src={user?.image}
                      alt="User image not found!"
                    />
                  </td>
                  <td className="text-black font-bold">{user?.name}</td>
                  <td className="text-black font-bold">{user?.email}</td>
                  <td className="text-black font-bold">{user?.userId}</td>
                  <td className="">
                    <button
                      onClick={() => hamdleDeleteUser(user._id)}
                      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
                    >
                      <FaTrash className="w-full h-full p-2" />
                    </button> <span className="text-black font-bold">Or</span>
                    <button
                      onClick={() => hamdleMakeAdmin(user._id)}
                      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
                    title="Make a admin">
                      <FaUserGraduate className="w-full h-full p-2" />
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

export default AllUserPage;
