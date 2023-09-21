import React from 'react';
import './HelpBanner.css';
import { FcSearch } from "react-icons/fc";

import Image from 'next/image';
import svg3 from '../../app/asset/svgPoor2.svg'
const HelpBanner = () => {
    return (
       <section>
        <div className='poor2 h-full w-full bg-fixed'>
        {/* <div className="field2 sm:w-auto py-20">
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
      </div> */}

        <div className='donate2'>
            <div>
                <h2 className='text-5xl font-bold text-white'>
                    Help Poor
                </h2>
                <p className='text-white pt-1'>Poverty remains one of the most pressing global challenges of our time, affecting millions of people worldwide.<br />While it may seem like an insurmountable issue,<br />there are concrete steps we can take as individuals and as a society to help remove the scourge of poverty.<br />In this short blog, we'll explore some key strategies for addressing poverty and working towards a more equitable world.</p>

            </div>
            <div>
                <Image src={svg3} alt='banner'></Image>
            </div>

        </div>
        </div>
       </section>
    );
};

export default HelpBanner;