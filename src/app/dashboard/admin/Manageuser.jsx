
import React from 'react';

const getAlluser= async()=>{
try {
  let res= await fetch("http://localhost:3000/api/user",{
    cache:'no-cache'
  })
if (!res.ok) {
  throw  new Error("data load failed")
}
return res.json()
} catch (error) {
  console.log(error);
}

}

const Manageuser = async() => {
let alluser= await getAlluser();

    return (
        <div >
          <div  >
                       <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
   
     {
      alluser.map(al => (
          
      <tr key={al._id}>
      <th>{al.name}</th>
      <td>Brice Swyre</td>
      <td>Tax Accountant</td>
      <td>{al.role}</td>
    </tr>
      ))
     }
  
    </tbody>
  </table>
</div>
          </div>
    
        </div>
    );
};

export default Manageuser;