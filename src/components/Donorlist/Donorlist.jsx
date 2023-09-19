import Image from 'next/image';
import React from 'react';


const getApproveDonor = async()=>{
    let baseURl=process.env.Base_URL;
    try {
        const res= await fetch(`${baseURl}/api/donor/approve`,{
            cache:'no-cache'
        })
        if (!res.ok) {
            throw new Error('faild to fetch')
        }

        return res.json()
    } catch (error) {
        console.log(error);
    }
}

const Donorlist = async () => {
const alldonor= await getApproveDonor();

    return (
        <div className='my-10 container mx-auto'>
            <div>
                <h1 className='px-12 font-medium uppercase py-5 text-xl'>All Donor</h1>
            </div>
            <div className='grid grid-cols-1    lg:grid-cols-3  gap-3 mx-auto justify-center p-5'>
{
    alldonor.map(ad =>(
        <div className="card xl:card-side max-w-full h-full bg-base-100 shadow-2xl" key={ad._id}>
 
  <div className="avatar">
  <div className="w-48  lg:w-36 rounded-br-full  ">
     <Image src={ad.image} width={300} height={300} alt='donor image' />
  </div>
</div>

  <div className="card-body  mt-0 md:-mt-20 lg:mt-0 text-start md:text-center lg:text-center xl:text-start ">
    <h2 className="font-bold text-2xl">{ad.name}</h2>
   
    <div className='card text-sm h-full'>
        <p>{ad.paraddress}</p>
        <p> {ad.blood}</p>
        <p> {ad.gender}</p>
       <p className='text-xs md:text-sm'> {ad.email}</p>
    </div>
    <div className="text-start md:text-center  lg:text-center xl:text-start ">
       <button className="btn btn-secondary  btn-sm  ">Contact Now</button>
    </div>
  </div>
</div>
    ))
}
            </div>
        </div>
    );
};

export default Donorlist;