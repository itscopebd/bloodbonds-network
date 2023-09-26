import React from "react";
import './HelpCard.css'
import poor1 from '../../app/asset/poor22.jpg'
import poor2 from '../../app/asset/poor33.jpg'
import poor3 from '../../app/asset/poor11.jpg'
import poor4 from '../../app/asset/poorbg1.jpg'
import Link from "next/link";
import Image from "next/image";
const HelpCard = () => {
  return (
    <section className="mt-20 container mx-auto gap-8 grid lg:grid-cols-2 md:grid-cols-2">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-3/4  mx-auto  rounded">
            <Image src={poor1} alt="poor1"></Image>
          </div>
        </div>{" "}
        <div className="card-body">
          <h2 className="card-title">Help Poor</h2>
          <p>Sustainable economic growth plays a crucial role in poverty reduction. Encouraging job creation through policies that support small and medium-sized enterprises (SMEs), promoting entrepreneurship, and investing in infrastructure can stimulate economic development in impoverished areas. Moreover, providing vocational training and enhancing employability skills can empower people to access decent work.</p>
          <div className="card-actions justify-end">
          <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl '><Link href='/donateForm'>Donate</Link> </button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-3/4  mx-auto  rounded">
            <Image src={poor2} alt="poor1"></Image>
          </div>
        </div>{" "}
        <div className="card-body">
          <h2 className="card-title">Help Poor</h2>
          <p>Sustainable economic growth plays a crucial role in poverty reduction. Encouraging job creation through policies that support small and medium-sized enterprises (SMEs), promoting entrepreneurship, and investing in infrastructure can stimulate economic development in impoverished areas. Moreover, providing vocational training and enhancing employability skills can empower people to access decent work.</p>
          <div className="card-actions justify-end">
          <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl '><Link href='/donateForm'>Donate</Link> </button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-3/4  mx-auto  rounded">
            <Image src={poor3} alt="poor1"></Image>
          </div>
        </div>{" "}
        <div className="card-body">
          <h2 className="card-title">Help Poor</h2>
          <p>Sustainable economic growth plays a crucial role in poverty reduction. Encouraging job creation through policies that support small and medium-sized enterprises (SMEs), promoting entrepreneurship, and investing in infrastructure can stimulate economic development in impoverished areas. Moreover, providing vocational training and enhancing employability skills can empower people to access decent work.</p>
          <div className="card-actions justify-end">
          <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl '><Link href='/donateForm'>Donate</Link> </button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-3/4  mx-auto  rounded">
            <Image src={poor4} alt="poor1"></Image>
          </div>
        </div>{" "}
        <div className="card-body">
          <h2 className="card-title">Help Poor</h2>
          <p>Sustainable economic growth plays a crucial role in poverty reduction. Encouraging job creation through policies that support small and medium-sized enterprises (SMEs), promoting entrepreneurship, and investing in infrastructure can stimulate economic development in impoverished areas. Moreover, providing vocational training and enhancing employability skills can empower people to access decent work.</p>
          <div className="card-actions justify-end">
          <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl '><Link href='/donateForm'>Donate</Link> </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCard;
