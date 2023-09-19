import React from 'react';

import pic6 from "../../app/asset/about-11.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <section className="mt-20  grid md:grid-cols-1 lg:grid-cols-2 gap-3 justify-items-center  mx-auto  container">
        {/* <div className="avatar">
            <div className="w-auto rounded"> */}
        <div className="w-1/2 lg:w-1/2 md:w-3/4">
          <Image src={pic6} width="" alt="about"></Image>
        </div>
        {/* <img src="https://i.ibb.co/3RRXjvG/about-1.jpg" /> */}
        {/* </div>
          </div> */}

        <div className="lg:my-auto  ">
          <h1 className="text-5xl text-center font-bold text-red-500 pt-12">
            About Us
          </h1>
          <p className="text-gray-500 pt-10">
            Safe <span className="font-bold text-red-500">blood</span> saves
            lives. Blood is needed by women with complications during pregnancy
            and childbirth, children with severe anaemia, often resulting from
            malaria or malnutrition, accident victims and surgical and cancer
            patients. There is a constant need for a regular supply of{" "}
            <span className="font-bold text-red-500">blood</span> because it can
            be stored only for a limited period of time before use. Regular{" "}
            <span className="font-bold text-red-500">blood</span> donation by a
            sufficient number of healthy people is needed to ensure that{" "}
            <span className="font-bold text-red-500">blood</span> will always be
            available whenever and wherever it is needed.{" "}
            <span className="font-bold text-red-500">Blood</span> is the most
            precious gift that anyone can give to another person – the gift of
            life. A decision to donate your{" "}
            <span className="font-bold text-red-500">blood</span> can save a
            life, or even several if your blood is separated into its components
            – red cells, platelets and plasma – which can be used individually
            for patients with specific conditions and support.{" "}
            <button className="btn btn-outline btn-error btn-xs">
              <Link href='/about'>see more</Link>
              
            </button>
          </p>
        </div>
      </section>
    );
};

export default About;