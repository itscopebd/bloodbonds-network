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

        
          <img src= "https://i.ibb.co/9ZvZr5r/pic-3.jpg" className='absolute w-full h-full hover:opacity-90 hover:mix-blend-overlay object-cover' alt="" />
        
          <div className='  flex justify-center items-center'>
            <div className='py-96'>

            <h1 className=' text-6xl font-light text-gray-300'>The bond of blood is stronger than anything.</h1>
            <p className='font-light text-center text-gray-300 text-xl pt-2   '>A blood bag in time saves a life. </p>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  relative '>

        
          <img src="https://i.ibb.co/GV7bvZ7/pic-4.jpg" className='absolute w-full h-full hover:opacity-90 hover:mix-blend-overlay object-cover' alt="" />
        
          <div className='  flex justify-center items-center'>
            <div className='py-96'>

            <h1 className=' text-6xl font-light text-gray-300'>Donate blood and be the reason of someone's existence.</h1>
            <p className='font-light text-center text-gray-300 text-xl pt-2   '>Don't be "A negative" Be "O positive".</p>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  relative '>

        
          <img src= "https://i.ibb.co/zr85Nds/pic-2.jpg" className='absolute w-full h-full hover:opacity-90 hover:mix-blend-overlay object-cover' alt="" />
        
          <div className='  flex justify-center items-center'>
            <div className='py-96'>

            <h1 className=' text-6xl font-light text-gray-500'>The gift of blood is a gift of someone life.</h1>
            <p className='font-light text-center text-gray-500 text-xl pt-2   '>You can became a super hero too.</p>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  relative '>

        
          <img src="https://i.ibb.co/zm0HPrZ/pic-1.jpg" className='absolute w-full h-full hover:opacity-90 hover:mix-blend-overlay object-cover' alt="" />
        
          <div className='   flex justify-center items-center'>
            <div className='py-96'>

            <h1 className=' text-6xl font-light text-gray-300'>A single drop of blood can make huge difference.</h1>
            <p className='font-light text-center text-gray-300 text-xl pt-2 '> Donate blood</p>
            </div>
          </div>
          </div>
          <div className=' h-full w-full  relative '>

        
          <img src="https://i.ibb.co/rkbNpFV/pic-5.jpg" className='absolute w-full h-full hover:opacity-90 hover:mix-blend-overlay object-cover' alt="" />
        
          <div className=' flex justify-center items-center'>
            <div className='py-96'>

            <h1 className=' text-6xl font-light text-gray-500'>Be the reason for someone's heartbeat..</h1>
            <p className='font-light text-center text-gray-500 text-xl pt-2   '>Stay fit and eat right and donate blood</p>
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
            Safe blood saves lives. Blood is needed by women with complications
            during pregnancy and childbirth, children with severe anaemia, often
            resulting from malaria or malnutrition, accident victims and
            surgical and cancer patients. There is a constant need for a regular
            supply of blood because it can be stored only for a limited period
            of time before use. Regular blood donation by a sufficient number of
            healthy people is needed to ensure that blood will always be
            available whenever and wherever it is needed. Blood is the most
            precious gift that anyone can give to another person – the gift of
            life. A decision to donate your blood can save a life, or even
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