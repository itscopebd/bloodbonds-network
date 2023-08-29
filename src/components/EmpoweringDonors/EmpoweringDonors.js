import React from "react";

const EmpoweringDonors = () => {
  return (
    <section className="mt-20">
      <h1 className="text-5xl text-center font-bold text-red-500 ">
        Empowering Donors
      </h1>
      <p className="text-gray-500 py-10 text-center">
        Be the Hero of Your Story.Discover the remarkable impact of your blood
        donation journey. <br /> And how your generosity saves lives and create bright
        future of others.
      </p>
      <div className="relative z-10 h-full w-full mx-auto">
      <div className=' h-full w-full hover:bg-black  hover:bg-opacity-50  relative '>

        
<img src= "https://i.ibb.co/QdWFfpv/donate.jpg" className='absolute w-full h-full  hover:mix-blend-overlay lg:object-cover' alt="" />

<div className='  flex justify-center items-center'>
  <div className='py-96'>

  <h1 className=' text-6xl font-light text-slate-200 -400 -400'>The bond of blood is stronger than anything.</h1>
  <p className='font-light text-center text-gray-300 text-xl pt-2   '>A blood bag in time saves a life. </p>
  </div>
</div>
</div>
        

        <div className="flex     gap-20 relative z-20 justify-center bottom-10 ">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-auto rounded">
                <img src="https://i.ibb.co/Ch2b8QN/m-student.jpg"></img>
              </div>
            </div>{" "}
            <div className="card-body">
              <h2 className="card-title">
                University Student
              </h2>
              <p>Explore the fascinating world of blood type and their compatibility.
                Learn how matching blood types during transfusions can save lives ans ensure successful medical interventions
              </p>

            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-auto rounded">
                <img src="https://i.ibb.co/rv0swTx/doc-2.jpg"></img>
              </div>
            </div>{" "}
            <div className="card-body">
              <h2 className="card-title">
                University Student
              </h2>
              <p>Explore the fascinating world of blood type and their compatibility.
                Learn how matching blood types during transfusions can save lives ans ensure successful medical interventions
              </p>
            </div>
          </div>


        </div>
        <div className="flex justify-center">
          <button className="btn btn-outline btn-error">See more</button>

        </div>
      </div>
    </section>
  );
};

export default EmpoweringDonors;
