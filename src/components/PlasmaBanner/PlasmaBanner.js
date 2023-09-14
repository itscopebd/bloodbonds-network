import './PlasmaBanner.css'
import svg1 from '../../app/asset/svg1.svg'
import Image from 'next/image';
import { FcSearch } from "react-icons/fc";

import Link from 'next/link';


const PlasmaBanner = () => {
    return (
        <div className=' bg-fixed h-full w-full pbg '>
             <div className="field2 sm:w-auto py-20">
        <div className="headSearch ">
          <input
            type="text"
            placeholder="Search Your Location"
            className="search"
          />
        </div>

        <div className="btn-field">
          <button className="btn-search">
            <FcSearch className=" text-3xl"></FcSearch>
          </button>
        </div>
      </div>
            <div className='plasma'>

            <div className='font'>
               <h2 className='font-bold text-5xl text-white'>
                Donate Plasma
               </h2>
               <p className='text-white pt-1'>Welcome to our plasma Donation page. Your plasma donation can make a life saving difference.
                By donating plasma, <br />You're Playing a crucial role in saving lives and improving the health of those in need. </p>
                <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl '><Link href='/login'>Donate</Link> </button>
            </div>
            <div className='svg'>
                <Image src={svg1}></Image>
            </div>
            </div>
        </div>
    );
};

export default PlasmaBanner;