import Comment from "./Comment";
import DeleteDonor from "./DeleteDonor";
import PendingDonor from "./PendingDonor";

const getAllDonor = async () => {
 
  const baseUrl = process.env.Base_URL;
  try {
    const res = await fetch(`${baseUrl}/api/donor/approve`, { cache: "no-store" });
    if (!res.ok) {
      throw Error("Donor is no load");
    }
     const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
};

const AllDonor = async () => {
  let allDonor = await getAllDonor();

  if (allDonor?.length === 0) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="p-4">
      <div className="">
        <h1 className="font-bold text-3xl uppercase py-4">All Donor</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs text-center overflow-x-scroll h-2/4 overflow-y-auto">
          <thead>
            <tr>
              <th className="font-bold text-md text-black">Image</th>
              <th className="text-md text-black">Name</th>
              <th className="text-md text-black">Blood Group</th>
              <th className="text-md text-black">HivStatus</th>
              <th className="text-md text-black">Gender</th>
              <th className="text-md text-black">Recent Illnesses</th>
              <th className="text-md text-black">BirthDay</th>
              <th className="text-md text-black">Present Address</th>
              <th className="text-md text-black">Parmanent Address</th>
              <th className="text-md text-black">Phone</th>
              <th className="text-md text-black">Status</th>
              <th className="text-md text-black">Comment</th>
              <th className="text-md text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {allDonor?.map((donor) => (
              <tr key={donor?._id}>
                <td>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50px",
                    }}
                    src={donor?.image}
                    alt="donor image"
                  />
                </td>
                <td className="text-black font-bold">{donor?.name}</td>
                <td className="text-black font-bold">{donor?.blood}</td>
                <td className="text-black font-bold">{donor?.hivStatus}</td>
                <td className="text-black font-bold">{donor?.gender}</td>
                <td className="text-black font-bold">
                  {donor?.recent_illnesses}
                </td>
                <td className="text-black font-bold">{donor?.date_of_birth}</td>
                <td className="text-black font-bold">{donor?.paddress}</td>
                <td className="text-black font-bold">{donor?.paraddress}</td>
                <td className="text-black font-bold">{donor?.phone}</td>
                <td>
                  <PendingDonor
                    id={donor?._id}
                    status={donor?.status}
                  ></PendingDonor>
                </td>
                <td>
                  <Comment></Comment>
                </td>
                <td>
                  <DeleteDonor id={donor?._id}></DeleteDonor>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllDonor;
