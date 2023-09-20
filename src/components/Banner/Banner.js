"use client";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { FcSearch } from "react-icons/fc";
import "./Banner.css";

import Link from "next/link";

// import required modules
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <>
      

      {/* banner section */}

      <section className=" ">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          {/* banner section */}
          <div className="   w-full h-full   bg bg1">
      
            <div className=" contain">
              <div className="sm:mt-5">
                <h1 className=" text-5xl font-bold text-white">
                  Donate <span className="font-bold text-red-500">blood</span>.
                </h1>
                <p className=" text-white   ">
                  The bond of{" "}
                  <span className="font-bold text-red-500">blood</span> is
                  stronger than anything.{" "}
                </p>
                <button className="w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl ">
                  <Link href="/dashboard/user/applydonor">Donate</Link>
                </button>
              </div>
              <div className="mod">
                <div className="cards cards1">
                  <h3 className="text-white shadow-md">Donate Blood</h3>
                  <p></p>
                </div>
                <div className="cards cards2">
                  <h3 className="text-white shadow-md">Be Hero</h3>
                  <p></p>
                </div>
                <div className="cards cards11">
                  <h3 className="text-white shadow-md">Life Good</h3>
                  <p></p>
                </div>
                <div className="cards cards6">
                  <h3 className="text-white shadow-md">Sacrifice</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-full   bg bg2 ">
        
           
            <div className=" contain">
              <div className="sm:mt-5">
                <h1 className=" text-5xl font-bold text-white">
                  Donate <span className="font-bold text-red-500">blood</span>.
                </h1>
                <p className=" text-white     ">
                  Don't be "A negative" Be "O positive".
                </p>
                <button className="w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl ">
                  <Link href="/dashboard/user/applydonor">Donate</Link>
                </button>
              </div>
              <div className="mod">
                <div className="cards cards10">
                  <h3 className="text-white shadow-md">Donate Blood</h3>
                  <p></p>
                </div>
                <div className="cards cards2">
                  <h3 className="text-white shadow-md">Be Hero</h3>
                  <p></p>
                </div>
                <div className="cards cards5">
                  <h3 className="text-white shadow-md">Life Good</h3>
                  <p></p>
                </div>
                <div className="cards cards8">
                  <h3 className="text-white shadow-md">Sacrifice</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-full  bg bg3  ">
       
         
            <div className=" contain">
              <div className="sm:mt-5">
                <h1 className=" text-5xl font-bold text-white">
                  Donate <span className="font-bold text-red-500">blood</span>.
                </h1>
                <p className=" text-white ">You can became a super hero too.</p>
                <button className="w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl ">
                  <Link href="/dashboard/user/applydonor">Donate</Link>
                </button>
              </div>
              <div className="mod">
                <div className="cards cards12">
                  <h3 className="text-white shadow-md">Donate Blood</h3>
                  <p></p>
                </div>
                <div className="cards cards9">
                  <h3 className="text-white shadow-md">Be Hero</h3>
                  <p></p>
                </div>
                <div className="cards cards7">
                  <h3 className="text-white shadow-md">Life Good</h3>
                  <p></p>
                </div>
                <div className="cards cards4">
                  <h3 className="text-white shadow-md">Sacrifice</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
         
                <div className=" h-full w-full  bg bg4  ">
        
        
            <div className=" contain">
              <div className="sm:mt-5">
                <h1 className=" text-5xl font-bold text-white">
                  Donate <span className="font-bold text-red-500">blood</span>.
                </h1>
                <p className=" text-white ">You can became a super hero too.</p>
                <button className="w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl ">
                  <Link href="/dashboard/user/applydonor">Donate</Link>
                </button>
              </div>
              <div className="mod">
                <div className="cards cards6">
                  <h3 className="text-white shadow-md">Donate Blood</h3>
                  <p></p>
                </div>
                <div className="cards cards3">
                  <h3 className="text-white shadow-md">Be Hero</h3>
                  <p></p>
                </div>
                <div className="cards cards11">
                  <h3 className="text-white shadow-md">Life Good</h3>
                  <p></p>
                </div>
                <div className="cards cards8">
                  <h3 className="text-white shadow-md">Sacrifice</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-full  bg bg5   ">
        
          
            <div className="contain">
              <div className="sm:mt-5">
                <h1 className=" text-5xl font-bold text-white">
                  Donate <span className="font-bold text-red-500">blood</span>.
                </h1>
                <p className=" text-white  ">
                  Stay fit and eat right and donate{" "}
                  <span className="font-bold text-red-500">blood</span>
                </p>
                <button className="w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl ">
                  <Link href="/dashboard/user/applydonor">Donate</Link>
                </button>
              </div>
              <div className="mod">
                <div className="cards cards11">
                  <h3 className="text-white shadow-md">Donate Blood</h3>
                  <p></p>
                </div>
                <div className="cards cards2">
                  <h3 className="text-white shadow-md">Be Hero</h3>
                  <p></p>
                </div>
                <div className="cards cards3">
                  <h3 className="text-white shadow-md">Life Good</h3>
                  <p></p>
                </div>
                <div className="cards cards7">
                  <h3 className="text-white shadow-md">Sacrifice</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-full  bg bg6   ">
      
          
            <div className="contain">
              <div className="sm:mt-5">
                <h1 className=" text-5xl font-bold text-white">
                  Donate <span className="font-bold text-red-500">blood</span>.
                </h1>
                <p className=" text-white  ">
                  Stay fit and eat right and donate{" "}
                  <span className="font-bold text-red-500">blood</span>
                </p>
                <button className="w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] my-8 rounded-xl ">
                  <Link href="/dashboard/user/applydonor">Donate</Link>
                </button>
              </div>
              <div className="mod">
                <div className="cards cards10">
                  <h3 className="text-white shadow-md">Donate Blood</h3>
                  <p></p>
                </div>
                <div className="cards cards3">
                  <h3 className="text-white shadow-md">Be Hero</h3>
                  <p></p>
                </div>
                <div className="cards cards5">
                  <h3 className="text-white shadow-md">Life Good</h3>
                  <p></p>
                </div>
                <div className="cards cards9">
                  <h3 className="text-white shadow-md">Sacrifice</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </AutoplaySlider>
      </section>

     

     
    </>
  );
};
export default Banner;
