
"use client"

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const PendingDonor = ({id,status,email}) => {
    const router= useRouter()
  const handlePendingDonor = async (value) => {
    try {
        
        Swal.fire({
            title: "Are you sure?",
            text: "This Donor is Pending!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Donor it!",
          }).then(async (response) => {
            if (response.isConfirmed) {
              const res = await fetch(`/api/donor/${id}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(value),
              });
              const data = "user";
              const res2= await fetch(`/api/user/${email}`,
           {   method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
           }
              )
              if (res.ok &&  res2.ok) {
                router.refresh();
                Swal.fire("Yes!", "This Donor is Pending.", "success");
              }
            }
          });
      
     
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <select
      name=""
      id=""
      className="select select-bordered min-h-[2rem] h-[2rem]"
      onChange={(e) => handlePendingDonor(e.target.value)}
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
export default PendingDonor;
