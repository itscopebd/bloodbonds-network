"use client";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { FcSearch } from "react-icons/fc";
import './Banner.css'


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
           
          animation="cubeAnimation"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div className=' h-full w-full  relative '>

        
          <img src= "https://i.ibb.co/Bn1j250/pic-99.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" />
        
          <div className='  flex justify-center items-center h-[70%] my-auto '>
            <div>

            <h1 className=' text-5xl font-light text-gray-300'>The bond of <span className='font-bold text-red-500'>blood</span> is stronger than anything.</h1>
            <p className='font-light text-center text-gray-300 text-xl pt-2   '>A <span className='font-bold text-red-500'>blood</span> bag in time saves a life. </p>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  relative '>

        
          <img src="https://i.ibb.co/GV7bvZ7/pic-4.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" />
        
          <div className='  flex justify-center items-center h-[70%] my-auto '>
            <div>

            <h1 className=' text-5xl font-light text-gray-300'>Donate <span className='font-bold text-red-500'>blood</span> and be the reason of someone's existence.</h1>
            <p className='font-light text-center text-gray-300 text-xl pt-2   '>Don't be "A negative" Be "O positive".</p>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  relative '>

        
          <img src= "https://i.ibb.co/zr85Nds/pic-2.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" />
        
          <div className='  flex justify-center items-center h-[70%] my-auto '>
            <div>

            <h1 className=' text-5xl font-light text-gray-300'>The gift of <span className='font-bold text-red-500'>blood</span> is a gift of someone life.</h1>
            <p className='font-light text-center text-gray-300 text-xl pt-2   '>You can became a super hero too.</p>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  relative '>

        
          <img src="https://i.ibb.co/gVQFp6d/pic-77.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay   lg:object-cover' alt="" />
        
          <div className='   flex justify-center items-center h-[70%] my-auto '>

           
            <div>

            <h1 className=' text-5xl font-light text-gray-300'>A single drop of <span className='font-bold text-red-500'>blood</span> can make huge difference.</h1>
            <p className='font-light text-center text-gray-300 text-xl pt-2 '> Donate <span className='font-bold text-red-500'>blood</span></p>
            </div>
           
            </div>
          </div>
          <div className=' h-full w-full  relative '>

        
          <img src="https://i.ibb.co/xJHkNCn/pic-33.jpg" className='absolute w-full h-full opacity-90 mix-blend-overlay object-cover' alt="" />
        
          <div className='flex justify-center items-center h-[70%] my-auto '>
            <div>

            <h1 className=' text-5xl font-light text-gray-300'>Be the reason for someone's <span className='font-bold text-red-500'>heartbeat</span>..</h1>
            <p className='font-light text-center text-gray-300 text-xl pt-2   '>Stay fit and eat right and donate <span className='font-bold text-red-500'>blood</span></p>
            </div>
          </div>
          </div>
          
        </AutoplaySlider>
      </section>

      {/* about section */}

      <section className="mt-16 w-[90%] grid lg:grid-cols-2 gap-5 mx-auto">
        
          <div className="avatar">
            <div className="w-auto rounded">
              <img src="https://i.ibb.co/3RRXjvG/about-1.jpg" />
            </div>
          </div>
        
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