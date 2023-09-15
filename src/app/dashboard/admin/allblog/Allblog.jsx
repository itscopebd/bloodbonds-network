
import Image from 'next/image';
import React from 'react';
import DeletButton from './DeletButton';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

let getallblog=async()=>{
  let baseURl=process.env.Base_URL;

  try {
    let res = await fetch(`${baseURl}/api/blog`,{
      cache:'no-store'
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
let allblogs= await getallblog()

    return (
        <div >
             <div className='ps-10 pb-5 pt-5 '>
                <h1 className='text-4xl uppercase font-semibold'>
                All Blog Posts
                </h1>
            </div>
            <div className='place-items-center'>

{
  allblogs.map( ({date,title,author,content,email,status,img,_id}) => (
    <div className="alert shadow-lg mb-4 mx-auto" key={_id}>
    <div className="avatar">
      <div className="w-8 rounded">
        <Image src={img} width={50} height={50} alt='blogs'></Image>
      </div>
    </div>
      <div>
    <h3 className="font-bold">{title}</h3>
    <div className="text-xs">{content.slice(0,120)}....</div>
      <div className="text-xs">{author}</div>
          <div className="text-xs">{email}</div>
      <div className={`text-xs ${status=== 'active'? 'text-green-400':'text-red-500'}`}>{status}</div>
  
  </div>
  <button className="btn btn-sm">
    <DeletButton id={_id}></DeletButton>
  </button>
  <button className="btn btn-sm">
    <Link href={`/dashboard/admin/updateblog/${_id}`}>
      <FaEdit/>
    </Link>
  </button>
           
    </div>
            
  ))
}              
 

      </div>  </div>
    );
};

export default Allblog;