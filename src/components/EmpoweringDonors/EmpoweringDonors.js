import Image from "next/image";
import React from "react";
import img1 from '../../app/asset/pic-44.jpg'

const EmpoweringDonors = () => {
  return (
    <>
      <section className="mt-20">
      <div className="h-96 p-24 w-full bg bg7  ">
      <h1 className="text-5xl text-center font-bold text-red-500 ">
          Empowering Donors
        </h1>
        <p className="text-white text-center py-10 ">
          Be the Hero of Your Story.Discover the remarkable impact of your{" "}
          <span className="font-bold text-red-500">blood</span>
          donation journey. <br /> And how your generosity saves lives and
          create bright future of others.
        </p> 
          </div>
       
      </section>
      
      <section>
        <div className="container px-[8%] mx-auto mt-10">
          <div className=" flex items-center    ">
            <div className="">
              <div className="cards cards1">
                <h3 className="text-white shadow-md">Donate Blood</h3>
                <p></p>
              </div>
              <div className="cards cards6">
                <h3 className="text-white shadow-md">Be Hero</h3>
                <p></p>
              </div>
              <div className="cards cards8">
                <h3 className="text-white shadow-md">Life Good</h3>
                <p></p>
              </div>
              <div className="cards cards12">
                <h3 className="text-white shadow-md">Sacrifice</h3>
                <p></p>
              </div>
            </div>

            <div className="">
              <h2 className="font-semibold text-xl">University Student</h2>
              <p>
                Explore the fascinating world of{" "}
                <span className="font-bold text-red-500">blood</span> type and
                their compatibility. Learn how matching{" "}
                <span className="font-bold text-red-500">blood</span> types
                during transfusions can save lives ans ensure successful medical
                interventions
              </p>
            </div>
          </div>
        </div>

        
     
      </section>
      <div className="flex justify-center mt-16">
          <button className="btn btn-outline btn-error">See more</button>
        </div>
    </>
  );
};

export default EmpoweringDonors;
