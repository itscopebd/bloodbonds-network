import React from "react";

const MedicalInsights = () => {
  return (
    <section className="mt-20">
      <h1 className="text-5xl text-center font-bold text-red-500 ">
        Medical Insights
      </h1>
      <p className="text-gray-500 pt-10 text-center">
        Explore a handpicked collection of medical insights created by experts.
        <br />Gain deeper insights into blood donation and its effects.{" "}
      </p>
      <div className="grid w-[90%] mx-auto gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 container ">
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src="https://i.ibb.co/51kRCJT/ex-2.jpg" />
            </div>
          </div>{" "}
          <div className="card-body">
          <h2 className="card-title">Understanding Blood Type Compatibility</h2>
            <p>Explore the fascinating world of blood type and their compatibility.
                Learn how matching blood types during transfusions can save lives ans ensure successful medical interventions
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error">Read more</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src="https://i.ibb.co/wWws4fq/exp-3.jpg" />
            </div>
          </div>{" "}
          <div className="card-body">
            <h2 className="card-title">Understanding Blood Type Compatibility</h2>
            <p>Explore the fascinating world od blood type and their compatibility.
                Learn how matching blood types during transfusions can save lives ans ensure successful medical interventions
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error">Read More</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src="https://i.ibb.co/HzRWJsj/exp-1.jpg" />
            </div>
          </div>{" "}
          <div className="card-body">
          <h2 className="card-title">Understanding Blood Type Compatibility</h2>
            <p>Explore the fascinating world od blood type and their compatibility.
                Learn how matching blood types during transfusions can save lives ans ensure successful medical interventions
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalInsights;
