import Image from 'next/image';
import React from 'react';
import img1 from '../../app/asset/work/faqblad.png'

const FaqSection = () => {
  return (

    <div className='container mx-auto lg:flex justify-center content-center'>
      <div>
        <Image className='w-[800px] h-[600px]' src={img1} alt='image' />
      </div>


      <div className='flex items-center'>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <br />
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <br />
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <br />
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <br />
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <br />
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default FaqSection;