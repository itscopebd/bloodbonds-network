
import DeleteAdmin from "./DeleteAdmin";
import MakeUser from "./MakeUser";
const getAllAdmin = async () => {
  let base_url = process.env.Base_URL;
  try {
    let res = await fetch(`${base_url}/api/admin`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("data load failed");
     
    }
   return res.json();
  } catch (error) {
    console.log(error.toString());
  }
};

const AllAdmin = async () => {
  let allAdmins = await getAllAdmin();

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
            {allAdmins.map((admin, index) => (
              <tr key={admin._id}>
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

                <td>
             <DeleteAdmin id={admin?._id}></DeleteAdmin>
                <span className="text-black font-bold">Or</span>
               <MakeUser id={admin?._id}></MakeUser>
              </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdmin;
