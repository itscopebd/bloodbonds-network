import './PlasmaBanner.css'
import svg1 from '../../app/asset/svg1.svg'
import Image from 'next/image';
import Link from 'next/link';


const PlasmaBanner = () => {
    return (
        <div className=' bg-fixed h-full w-full pbg '>
            <div className='flex h-[88%] items-center'>

            <div>
               <h2 className='font-bold text-5xl text-white'>
                Donate Plasma
               </h2>
               <p className='text-white pt-1'>Welcome to our plasma Donation page. Your plasma donation can make a life saving difference.
                By donating plasma, <br />You're Playing a crucial role in saving lives and improving the health of those in need. </p>
                <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] mt-8 rounded-xl '><Link href='/login'>Donate</Link> </button>
            </div>
            <div>
                <Image src={svg1}></Image>
            </div>
            </div>
        </div>
    );
};

export default PlasmaBanner;