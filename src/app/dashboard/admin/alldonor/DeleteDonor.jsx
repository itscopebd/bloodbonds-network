"use client"
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const DeleteDonor = ({id}) => {
    const router= useRouter()
    const handleDeleteDonor= async()=>{
        try {
            Swal.fire({
              title: "Are you sure?",
              text: "This Donor is Delete!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, Delete it!",
            }).then(async (result) => {
              if (result.isConfirmed) {
                const res = await fetch(`/api/donor/${id}`, {
                  method: "DELETE",
                });
      
                if (res.ok) {
                  router.refresh();
                  Swal.fire("Yes!", "This Donor is Delete.", "success");
                }
              }
            });
          } catch (error) {
            console.log(error);
          }
    }
  return (
    <button
      onClick={handleDeleteDonor}
      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
    >
      <FaTrash className="w-full" />
    </button>
  );
};
export default DeleteDonor;
