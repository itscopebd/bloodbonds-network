"use client"
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const DeleteDonor = ({id ,email}) => {
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
                const data = "user";
                const res2= await fetch(`/api/user/${email}`,
             {   method: "PATCH",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(data),
             })
                if (res.ok && res2.ok) {
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
