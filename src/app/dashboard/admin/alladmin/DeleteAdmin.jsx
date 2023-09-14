"use client";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const DeleteAdmin = ({ id }) => {
  const router = useRouter();
  let hamdleDeleteAdmin = async () => {
    try {
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
          const res = await fetch(`/api/admin?id=${id}`, {
            method: "DELETE",
          });

          if (res.ok) {
            router.refresh();
            Swal.fire("Yes!", "This Admin is Delete.", "success");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={hamdleDeleteAdmin}
      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
    title="Delete a Admin">
      <FaTrash className="w-full h-full p-2" />
    </button>
  );
};
export default DeleteAdmin;
