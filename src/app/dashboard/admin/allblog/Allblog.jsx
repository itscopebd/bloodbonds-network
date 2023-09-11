import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeletButton from './DeletButton';
import { FaEdit } from 'react-icons/fa';

const getAllblog= async ()=>{
    try {
        let res= await fetch("http://localhost:3000/api/blog",{
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

const Allblog = async() => {
let allblogdata= await getAllblog()

    return (
        <div >
             <div className='ps-10 pb-5 pt-5 '>
                <h1 className='text-4xl uppercase font-semibold'>
                All Blog Posts
                </h1>
            </div>
            <div className='place-items-center'>

            
                      
 {
  allblogdata.map(i =>(
    <div key={i._id}  >
<div className="alert shadow-lg mb-4 mx-auto">
<div className="avatar">
  <div className="w-8 rounded">
   <Image src={i.img} width={50} height={50} alt='blogs'></Image>
  </div>
</div>
  <div>
    <h3 className="font-bold">{i.title}</h3>
    <div className="text-xs">Author:{i.author}</div>
  </div>
  <DeletButton id={i._id}></DeletButton>
      
      <button className='btn md:btn-xs'>
          <Link href={`/dashboard/admin/updateblog/${i._id}`}> 
          <FaEdit/>
          </Link>
       </button>
       <button>{i.status}</button>
</div>
    </div>
  ))
 }

      </div>  </div>
    );
};

export default Allblog;