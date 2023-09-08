import React from "react";
import Image from "next/image";
import pic1 from '../../app/asset/exp-1.jpg'
import pic2 from '../../app/asset/ex-2.jpg'
import pic3 from '../../app/asset/exp-3.jpg'

const MedicalInsights = () => {
  return (
    <section className="mt-20">
      <h1 className="text-5xl text-center font-bold text-red-500 ">
        Medical Insights
      </h1>
      <p className="text-gray-500 pt-10 text-center">
        Explore a handpicked collection of medical insights created by experts.
        <br />Gain deeper insights into <span className='font-bold text-red-500'>blood</span> donation and its effects.{" "}
      </p>
      <div className="grid  mx-auto gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 container ">
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <Image src={pic1}></Image>
            </div>
          </div>{" "}
          <div className="card-body">
          <h2 className="card-title">Understanding <span className='font-bold text-red-500'>Blood</span>Type.</h2>
            <p>Explore the fascinating world of <span className='font-bold text-red-500'>blood</span> type and their compatibility.
                Learn how matching <span className='font-bold text-red-500'>blood</span> types during transfusions can save lives ans ensure successful medical interventions
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error">Read more</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
          <Image src={pic2}></Image>    
        </div>
          </div>{" "}
          <div className="card-body">
          <h2 className="card-title">Understanding <span className='font-bold text-red-500'>Blood</span>Type.</h2>
            <p>Explore the fascinating world of <span className='font-bold text-red-500'>blood</span> type and their compatibility.
                Learn how matching <span className='font-bold text-red-500'>blood</span> types during transfusions can save lives ans ensure successful medical interventions
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error">Read more</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <Image src={pic3}></Image>
            </div>
          </div>{" "}
          <div className="card-body">
          <h2 className="card-title">Understanding <span className='font-bold text-red-500'>Blood</span>Type. </h2>
            <p>Explore the fascinating world of <span className='font-bold text-red-500'>blood</span> type and their compatibility.
                Learn how matching <span className='font-bold text-red-500'>blood</span> types during transfusions can save lives ans ensure successful medical interventions
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalInsights;
