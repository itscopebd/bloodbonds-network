"use client";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const MakeUser = ({ id }) => {
    const router= useRouter()
  const handleMakeUser = async () => {
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
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          router.refresh();
          Swal.fire("Yes!", "This Admin is User.", "success");
        }
      }
    });
  };
  return (
    <button
      onClick={handleMakeUser}
      className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor"
      title="Make a user"
    >
      <FaUser className="w-full" />
    </button>
  );
};
export default MakeUser;
