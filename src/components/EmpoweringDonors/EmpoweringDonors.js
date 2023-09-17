import React from "react";
import './EmpoweringDonors.css'
const EmpoweringDonors = () => {
  return (
    <>
      <section className="mt-20">
      <div className="h-full  w-full p2  ">
     <div className="d2 lg:py-36 md:py-36" >
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
          </div>
       
      </section>
      
      <section>
        <div className="container px-[8%] mx-auto mt-10">
          <div className=" flex items-center res   ">
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
              <p className="tx">
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
     
    </>
  );
};

export default EmpoweringDonors;
