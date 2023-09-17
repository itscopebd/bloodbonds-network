"use client";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const DeleteUser = ({ id }) => {
    const router= useRouter()
  const handleDeleteUser = async () => {
    try {
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
                method: "DELETE",
              });
    
              if (res.ok) {
                router.refresh();
                Swal.fire("Yes!", "This User is Delete.", "success");
              }
            }
          });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleDeleteUser}
      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
    >
      <FaTrash className="w-full" />
    </button>
  );
};
export default DeleteUser;
