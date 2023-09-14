import React from 'react';
import img from '../../asset/DonationProcess/DonationProcess.jpg'
import emailimg from '../../asset/DonationProcess/email_552486.png'
import bloodimg from '../../asset/DonationProcess/blood-drop_893529.png'
import gebnderimg from '../../asset/DonationProcess/gender_7238259.png'
import hivimg from '../../asset/DonationProcess/hiv_6146355.png'
import Image from 'next/image';
import Link from 'next/link';



const DonorProfile = () => {
    return (
        <div className=' p-16 items-center justify-center mx-auto bg-base-200 min-h-screen hero-content'>
   <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

<div className='grid grid-cols-1 gap-2'>

<div className="card max-w-xl 2xl:max-w-full lg:card-side  place-items-center   bg-[#fffcf2] shadow-xl lg:h-40  text-black  ">
  
  <div className="avatar text-center lg:ps-5 pt-3 lg:pt-0 place-items-center">
  <div className=" w-24 ring rounded-xl">
      <Image src={img} width={100} height={100} alt='donor'/>

  </div>
</div>
  
  <div className="card-body justify-center">
    <h2 className="card-title ps-2">Your Name</h2>
    <div className='flex'>
      <Image src={emailimg} width={22} height={20} alt='email'/>
      <p className='px-1'> Youremail@gmail.com</p>
    </div>
    
  </div>
  
</div>



<div className="card max-w-xl  2xl:max-w-full h-full bg-[#ef233c] text-white  dark:text-white shadow-xl">
  
  <div className="card-body">
   <div>
    <p><span className='font-bold pe-1'>Date of Birth:</span>2/4/12</p>
    <p><span className='font-bold pe-1'>Prasent Adress:</span>1234 Elm Street
Anytown, USA
</p>
    <p><span className='font-bold pe-1'>Parmanent Adress:</span> 1234 Elm Street
Anytown, USA
</p>
    <p><span className='font-bold pe-1'>Phone:</span>0128237835</p>
   </div>
   
  </div>
</div>

</div>



<div className="card max-w-xl 2xl:max-w-full  bg-[#fffcf2] text-black shadow-xl">
  
  <div className="card-body">
  <div className='flex'>
        <span className='text-xl px-2 '><Image src={bloodimg} width={20} height={20} alt='email'/></span><p> AB+</p>
    </div>
  <div className='flex'>
        <span className='px-2 '><Image src={hivimg} width={20} height={20} alt='email'/></span><p> HIV False</p>
    </div>
  <div className='flex'>
        <span className='text-xl px-2 '><Image src={gebnderimg} width={20} height={20} alt='email'/></span><p> Male</p>
    </div>
    <p><span className='font-bold pe-5'>Recent illnesses:</span> 
    
    <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias qui illum assumenda aperiam,</span>
    </p>
    <div className="card-actions">
      
      <button className="btn ">
        {/* in this url wll update when we use real data.   */}
        <Link href={`/dashboard/donor/donorprofileupdate`}>Update your Info</Link>
      </button>
    </div>
  </div>
</div>

   </div>
        </div>
    );
};

export default DonorProfile;