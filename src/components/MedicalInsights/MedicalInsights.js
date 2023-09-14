import React, { useState } from "react";
import Image from "next/image";
import pic1 from '../../app/asset/exp-1.jpg'
import pic2 from '../../app/asset/ex-2.jpg'
import pic3 from '../../app/asset/exp-3.jpg'

const MedicalInsights = () => {
  const initialSliceLength = 100; 
  
  const fullText = 'Explore the fascinating world of blood type and their compatibility.Learn how matching blood types during transfusions can save lives ans ensure successful medical interventions' ;
  const fullText2 = 'Blood is a vital bodily fluid that circulates through our cardiovascular system, serving several essential functions. It is a thick, red fluid composed of red blood cells, white blood cells, platelets, and plasma. Red blood cells carry oxygen from the lungs to body tissues and return carbon dioxide to the lungs for removal. White blood cells are crucial for the immune system, defending against infections. Platelets aid in blood clotting to prevent excessive bleeding. Plasma is the liquid component that carries blood cells, nutrients, hormones, and waste products throughout the body. Blood plays a pivotal role in maintaining overall health and homeostasis.'
 const fullText3= 'Blood groups, also known as blood types, refer to the classification of blood based on specific antigens present on the surface of red blood cells. The most well-known blood group system is the ABO system, which categorizes blood into four main types: A, B, AB, and O. These blood types are determined by the presence or absence of two antigens, A and B, on the red blood cell surface. Additionally, blood is categorized as either Rh-positive or Rh-negative based on the presence or absence of the Rh factor (also called the Rh antigen).'
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);
  const [isFullTextVisible2, setIsFullTextVisible2] = useState(false);
  const [isFullTextVisible3, setIsFullTextVisible3] = useState(false);

  const toggleFullText = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };
  const toggleFullText2 = () => {
    setIsFullTextVisible2(!isFullTextVisible2);
  };
  const toggleFullText3 = () => {
    setIsFullTextVisible3(!isFullTextVisible3);
  };
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
            <div className="w-3/4 rounded mx-auto">
              <Image src={pic1}></Image>
            </div>
          </div>{" "}
          <div className="card-body">
          <h2 className="card-title"><span className='font-bold text-red-500'>Blood</span>Curriculum.</h2>
          <div>
      {isFullTextVisible ? (
        <p>{fullText}</p>
      ) : (
        <p>{fullText.slice(0, initialSliceLength)}...</p>
      )}
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error" onClick={toggleFullText}>
        {isFullTextVisible ? 'Show Less' : 'Show More'}</button>
            </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-3/4 rounded mx-auto">
          <Image src={pic2}></Image>    
        </div>
          </div>{" "}
          <div className="card-body">
          <h2 className="card-title">Understanding <span className='font-bold text-red-500'>Blood</span></h2>
          <div>
      {isFullTextVisible2 ? (
        <p>{fullText2}</p>
      ) : (
        <p>{fullText2.slice(0, initialSliceLength)}...</p>
      )}
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error" onClick={toggleFullText2}>
        {isFullTextVisible2 ? 'Show Less' : 'Show More'}</button>
            </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-3/4  mx-auto  rounded">
              <Image src={pic3}></Image>
            </div>
          </div>{" "}
          <div className="card-body ">
          <h2 className="card-title"><span className='font-bold text-red-500'>Blood</span>Group. </h2>
          <div>
      {isFullTextVisible3 ? (
        <p>{fullText3}</p>
      ) : (
        <p>{fullText3.slice(0, initialSliceLength)}...</p>
      )}
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-error" onClick={toggleFullText3}>
        {isFullTextVisible3 ? 'Show Less' : 'Show More'}</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalInsights;
