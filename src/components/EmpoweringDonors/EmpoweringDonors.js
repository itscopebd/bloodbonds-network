import Image from "next/image";
import React from "react";
import pic1 from "../../app/asset/pic-44.jpg";

const EmpoweringDonors = () => {
  return (
    <section className="mt-20">
      <h1 className="text-5xl text-center font-bold text-red-500 ">
        Empowering Donors
      </h1>
      <p className="text-gray-500 py-10 text-center">
        Be the Hero of Your Story.Discover the remarkable impact of your{" "}
        <span className="font-bold text-red-500">blood</span>
        donation journey. <br /> And how your generosity saves lives and create
        bright future of others.
      </p>
      <div className="relative z-10 h-full w-full mx-auto">
        <div className=" h-full w-full bg-black  bg-opacity-50  relative ">
          <Image
            src={pic1}
            width={800}
            className="absolute w-full h-full  mix-blend-overlay lg:object-cover"
            alt=""
          ></Image>

          <div className="  flex justify-center items-center">
            <div className="py-96">
              <h1 className=" text-6xl font-light text-slate-200 -400 -400">
                The bond of{" "}
                <span className="font-bold text-red-500">blood</span> is
                stronger than anything.
              </h1>
              <p className="font-light text-center text-gray-300 text-xl pt-2   ">
                A <span className="font-bold text-red-500">blood</span> bag in
                time saves a life.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-[8%] mt-10">
        <div className=" contain  ">
          <div className="text">
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

          <div className="text">
            <h2 className="font-semibold text-xl">University Student</h2>
            <p>
              Explore the fascinating world of{" "}
              <span className="font-bold text-red-500">blood</span> type and
              their compatibility. Learn how matching{" "}
              <span className="font-bold text-red-500">blood</span> types during
              transfusions can save lives ans ensure successful medical
              interventions
            </p>
          </div>
        </div>
      </div>

      <div className="container px-[8%] mt-10">
        <div className=" contain  ">
          <div className="text">
            <h2 className="font-semibold text-xl">University Student</h2>
            <p>
              Explore the fascinating world of{" "}
              <span className="font-bold text-red-500">blood</span> type and
              their compatibility. Learn how matching{" "}
              <span className="font-bold text-red-500">blood</span> types during
              transfusions can save lives ans ensure successful medical
              interventions
            </p>
          </div>

          <div className="text">
            <div className="cards cards10">
              <h3 className="text-white shadow-md">Donate Blood</h3>
              <p></p>
            </div>
            <div className="cards cards12">
              <h3 className="text-white shadow-md">Be Hero</h3>
              <p></p>
            </div>
            <div className="cards cards3">
              <h3 className="text-white shadow-md">Life Good</h3>
              <p></p>
            </div>
            <div className="cards cards5">
              <h3 className="text-white shadow-md">Sacrifice</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <button className="btn btn-outline btn-error">See more</button>
      </div>
    </section>
  );
};

export default EmpoweringDonors;
