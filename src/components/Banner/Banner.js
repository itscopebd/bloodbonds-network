"use client";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { FcSearch } from "react-icons/fc";
import './Banner.css'
import pic1 from '../../app/asset/pic-99.jpg';
import pic2 from '../../app/asset/pic-77.jpg';
import pic3 from '../../app/asset/pic-33.jpg';
import pic4 from '../../app/asset/pic-44.jpg';
import pic5 from '../../app/asset/pic-4.jpg';
import pic6 from '../../app/asset/about-1.jpg'
import Image from 'next/image';


// import required modules
const AutoplaySlider = withAutoplay(AwesomeSlider)


const Banner = () => {
  return (
    <>
      <div className="field sm:w-auto ">
        <div className='headSearch '>
          <input
            type="text"
            placeholder="Search Your Location"
            className="search"
          />
        </div>

        
        <div className='btn-field'>
        <button className="btn-search">
       <FcSearch className=" text-3xl"></FcSearch>
        </button>
      </div>
      </div>


      {/* banner section */}
     
      
     
      
      <section className=" pt-12 ">
        <AutoplaySlider
           
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div className='  bg-fixed w-full h-full   bg bg1'>

          {/* <Image src={pic1} width={800} className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" ></Image>  */}
          
          {/* <img src= "https://i.ibb.co/Bn1j250/pic-99.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" /> */}
        
          <div className=' flex items-center h-[88%]'>
            <div className=''>

            <h1 className=' text-5xl font-bold text-white'>Donate <span className='font-bold text-red-500'>blood</span>.</h1>
            <p className=' text-white   '>The bond of <span className='font-bold text-red-500'>blood</span> is stronger than anything. </p>
            <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] mt-8 rounded-xl '>Donate</button>
            </div>
            <div className=''>
              <div className='cards cards1'>
                <h3 className='text-white shadow-md'>Donate Blood</h3>
                <p></p>
              </div>
              <div className='cards cards2'>
                <h3 className='text-white shadow-md'>Be Hero</h3>
                <p></p>
              </div>
              <div className='cards cards11'>
                <h3 className='text-white shadow-md'>Life Good</h3>
                <p></p>
              </div>
              <div className='cards cards6'>
                <h3 className='text-white shadow-md'>Sacrifice</h3>
                <p></p>
              </div>
            </div>
          </div>
          </div>
          <div className=' h-full w-full bg-fixed  bg bg2 '>

          {/* <Image src={pic2} width={800} className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" ></Image>  */}

        
          {/* <img src="https://i.ibb.co/GV7bvZ7/pic-4.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" /> */}
        
          <div className=' flex items-center h-[88%] '>
            <div className=''>

            <h1 className=' text-5xl font-light text-white'>Donate <span className='font-bold text-red-500'>blood</span>.</h1>
            <p className=' text-white     '>Don't be "A negative" Be "O positive".</p>
            <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] mt-8 rounded-xl '>Donate</button>

            </div>
            <div className=''>
              <div className='cards cards10'>
                <h3 className='text-white shadow-md'>Donate Blood</h3>
                <p></p>
              </div>
              <div className='cards cards2'>
                <h3 className='text-white shadow-md'>Be Hero</h3>
                <p></p>
              </div>
              <div className='cards cards5'>
                <h3 className='text-white shadow-md'>Life Good</h3>
                <p></p>
              </div>
              <div className='cards cards8'>
                <h3 className='text-white shadow-md'>Sacrifice</h3>
                <p></p>
              </div>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  bg bg3 bg-fixed '>

          {/* <Image src={pic3} width={800} className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" ></Image>  */}

        
          {/* <img src= "https://i.ibb.co/zr85Nds/pic-2.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" /> */}
        
          <div className='  flex items-center h-[88%]'>
            <div className=''>

            <h1 className=' text-5xl font-bold text-white'>Donate <span className='font-bold text-red-500'>blood</span>.</h1>
            <p className=' text-white '>You can became a super hero too.</p>
            <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] mt-8 rounded-xl '>Donate</button>

            </div>
            <div className=''>
              <div className='cards cards12'>
                <h3 className='text-white shadow-md'>Donate Blood</h3>
                <p></p>
              </div>
              <div className='cards cards9'>
                <h3 className='text-white shadow-md'>Be Hero</h3>
                <p></p>
              </div>
              <div className='cards cards7'>
                <h3 className='text-white shadow-md'>Life Good</h3>
                <p></p>
              </div>
              <div className='cards cards4'>
                <h3 className='text-white shadow-md'>Sacrifice</h3>
                <p></p>
              </div>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  bg bg4 bg-fixed '>

          {/* <Image src={pic4} width={800} className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" ></Image>  */}

        
          {/* <img src="https://i.ibb.co/gVQFp6d/pic-77.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay   lg:object-cover' alt="" /> */}
        
          <div className='   flex items-center h-[88%]'>

           
            <div className=''>

            <h1 className=' text-5xl font-bold text-white'>Donate <span className='font-bold text-red-500'>blood</span></h1>
            <p className=' text-white'> A single drop of <span className='font-bold text-red-500'>blood</span> can make huge difference.</p>
            <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] mt-8 rounded-xl '>Donate</button>

            </div>
            <div className=''>
              <div className='cards cards1'>
                <h3 className='text-white shadow-md'>Donate Blood</h3>
                <p></p>
              </div>
              <div className='cards cards6'>
                <h3 className='text-white shadow-md'>Be Hero</h3>
                <p></p>
              </div>
              <div className='cards cards3'>
                <h3 className='text-white shadow-md'>Life Good</h3>
                <p></p>
              </div>
              <div className='cards cards5'>
                <h3 className='text-white shadow-md'>Sacrifice</h3>
                <p></p>
              </div>
            </div>
            </div>
          </div>
          <div className=' h-full w-full  bg bg5 bg-fixed  '>

          {/* <Image src={pic5} width={800} className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" ></Image>  */}

        
          {/* <img src="https://i.ibb.co/xJHkNCn/pic-33.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" /> */}
        
          <div className='flex items-center h-[88%] '>
            <div className=''>

            <h1 className=' text-5xl font-bold text-white'>Donate <span className='font-bold text-red-500'>blood</span></h1>
            <p className=' text-white  '>Stay fit and eat right and donate <span className='font-bold text-red-500'>blood</span></p>
            <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] mt-8 rounded-xl '>Donate</button>

            </div>
            <div className=''>
              <div className='cards cards11'>
                <h3 className='text-white shadow-md'>Donate Blood</h3>
                <p></p>
              </div>
              <div className='cards cards2'>
                <h3 className='text-white shadow-md'>Be Hero</h3>
                <p></p>
              </div>
              <div className='cards cards3'>
                <h3 className='text-white shadow-md'>Life Good</h3>
                <p></p>
              </div>
              <div className='cards cards7'>
                <h3 className='text-white shadow-md'>Sacrifice</h3>
                <p></p>
              </div>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  bg bg6 bg-fixed  '>

          {/* <Image src={pic5} width={800} className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" ></Image>  */}

        
          {/* <img src="https://i.ibb.co/xJHkNCn/pic-33.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" /> */}
        
          <div className='flex items-center h-[88%] '>
            <div className=''>

            <h1 className=' text-5xl font-bold text-white'>Donate <span className='font-bold text-red-500'>blood</span></h1>
            <p className=' text-white  '>Stay fit and eat right and donate <span className='font-bold text-red-500'>blood</span></p>
            <button className='w-[180px] text-red-400 font-semibold bg-white py-[5px] px-[12px] mt-8 rounded-xl '>Donate</button>

            </div>
            <div className=''>
              <div className='cards cards10'>
                <h3 className='text-white shadow-md'>Donate Blood</h3>
                <p></p>
              </div>
              <div className='cards cards3'>
                <h3 className='text-white shadow-md'>Be Hero</h3>
                <p></p>
              </div>
              <div className='cards cards5'>
                <h3 className='text-white shadow-md'>Life Good</h3>
                <p></p>
              </div>
              <div className='cards cards9'>
                <h3 className='text-white shadow-md'>Sacrifice</h3>
                <p></p>
              </div>
            </div>
          </div>
          </div>
          
        </AutoplaySlider>
      </section>

      {/* about section */}

      <section className="mt-20  grid lg:grid-cols-2 gap-3 justify-items-center  container">
        
          {/* <div className="avatar">
            <div className="w-auto rounded"> */}
                <div className='w-1/2'>

              <Image src={pic6} width='' ></Image>
                </div>
              {/* <img src="https://i.ibb.co/3RRXjvG/about-1.jpg" /> */}
            {/* </div>
          </div> */}
        
        <div className='my-auto '>
          <h1 className="text-5xl text-center font-bold text-red-500 pt-12">
            About Us
          </h1>
          <p className="text-gray-500 pt-10">
            Safe <span className='font-bold text-red-500'>blood</span> saves lives. Blood is needed by women with complications
            during pregnancy and childbirth, children with severe anaemia, often
            resulting from malaria or malnutrition, accident victims and
            surgical and cancer patients. There is a constant need for a regular
            supply of <span className='font-bold text-red-500'>blood</span> because it can be stored only for a limited period
            of time before use. Regular <span className='font-bold text-red-500'>blood</span> donation by a sufficient number of
            healthy people is needed to ensure that <span className='font-bold text-red-500'>blood</span> will always be
            available whenever and wherever it is needed. <span className='font-bold text-red-500'>Blood</span> is the most
            precious gift that anyone can give to another person – the gift of
            life. A decision to donate your <span className='font-bold text-red-500'>blood</span> can save a life, or even
            several if your blood is separated into its components – red cells,
            platelets and plasma – which can be used individually for patients
            with specific conditions and support. <button className="btn btn-outline btn-error btn-xs">see more</button>
          </p>
        </div>
      </section>
    </>
  );
};
export default Banner;