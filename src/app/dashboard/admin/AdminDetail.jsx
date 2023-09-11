
import React from 'react';
import img1 from '../../asset/DonationProcess/download.png'
import img2 from '../../asset/DonationProcess/download1.png'
import img3 from '../../asset/DonationProcess/download3.png'
import img4 from '../../asset/DonationProcess/download4.png'
import Image from 'next/image';
const AdminDetail = () => {
    return (
        <div>
            <div className=" ">
  <div className="hero-content ">
    <div className="max-w-full">
   <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
   <div className="card  bg-[#2196f3] text-white shadow-xl" >
  <div className="card-body">
    
    <h2 className="font-bold text-5xl">6</h2>
    <p>Total blog</p>
    <Image src={img4} width={180}height={120} alt=''></Image>

  </div>
</div>
<div className="card  bg-[#03045e] text-white shadow-xl">
  <div className="card-body">
    <h2 className="font-bold text-5xl">3</h2>
    <p>All Donor</p>
    <Image src={img3} width={180}height={120} alt=''></Image>

  </div>
</div>
<div className="card  bg-[#ef233c] text-white shadow-xl" >
  <div className="card-body">
   
    <h2 className="font-bold text-5xl">
        20</h2>
    <p>Users</p>
    <Image src={img2} width={180}height={120} alt=''></Image>

  </div>
</div>
<div className="card  bg-[#34073d] text-white shadow-xl">
  <div className="card-body">

    <h2 className="font-bold text-5xl">0</h2>
    <p >Total donation</p>
    <Image src={img1} width={180}height={120} alt=''></Image>
  </div>
</div>
   </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default AdminDetail;