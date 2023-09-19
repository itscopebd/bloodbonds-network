"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const MakeDonor = ({ id, status,email }) => {

    const router= useRouter()
  const handleAppliedDonor = async (value) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This Donor is Approve!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then(async (response) => {
      if (response.isConfirmed) {
        const res = await fetch(`/api/donor/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(value),
        });
       const data = "donor";
       const res2= await fetch(`/api/user/${email}`,
    {   method: "PATCH",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(data),
    }
       )

        if (res.ok && res2.ok) {
          router.refresh();
          Swal.fire("Yes!", "This Donor is Approve.", "success");
        }
      }
    });
  };
  return (
    <select
      name=""
      id=""
      className="select select-bordered min-h-[2rem] h-[2rem]"
      onChange={(e) => handleAppliedDonor(e.target.value)}
    >
      <option value={status}>{status}</option>
      {status === "Pending" ? (
        <option value="Approve">Approve</option>
      ) : (
        <option value="Pending">Pending</option>
      )}
    </select>
  );
};
export default MakeDonor;
