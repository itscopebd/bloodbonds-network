import DeleteUser from "./DeleteUser";
import MakeAdmin from "./MakeAdmin";
import imgs from "../../../asset/DonationProcess/user_1144709.png";
import Image from "next/image";
const getAllUser = async () => {
  const baseUrl = process.env.Base_URL;
  try {
    const res = await fetch(`${baseUrl}/api/user`, { cache: "no-store" });
    if (!res.ok) {
      throw Error("User is no load");
    }
    return res.json();
  } catch (error) {
    console.log(error)
  }
};

const AllUser = async() => {
    const allUser= await getAllUser()
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
              <tr key={index}>
                <td className="flex items-center justify-center">
                {user?.image ? (
                    <Image
                      src={user?.image}
                      alt="user"
                      width={80}
                      height={80}
                      style={{ borderRadius: "40px" }}
                    ></Image>
                  ) : (
                    <Image
                      src={imgs}
                      width={80}
                      height={80}
                      style={{ borderRadius: "40px" }}
                      alt="user img"
                    ></Image>
                  )}
                </td>
                <td className="text-black font-bold">{user?.name}</td>
                <td className="text-black font-bold">{user?.email}</td>
                <td className="text-black font-bold">{user?.userId}</td>
                 <td className="">
                  <DeleteUser id={user?._id}></DeleteUser>
                  <span className="text-black font-bold">Or</span>
                <MakeAdmin id={user?._id}></MakeAdmin>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllUser;
