import React from 'react';

const PlasmaFAQ = () => {
  return (
    <div className='container mx-auto mt-20'>
      {/* The faq section  */}
      <h2 className='text-center text-2xl md:text-3xl text-red-700 font-bold mb-5'>Frequently Asked Questions</h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Who can donate plasma?
          </div>
          <div className="collapse-content">
            <p>Eligibility criteria include age, weight, health, and travel history.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How long does the plasma donation process take?
          </div>
          <div className="collapse-content">
            <p>Typically, the process takes about 1-2 hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are there health benefits to donating plasma?    </div>
          <div className="collapse-content">
            <p>Yes, donating plasma can have several health benefits.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is plasma donation safe?   </div>
          <div className="collapse-content">
            <p>Yes, plasma donation is a safe and regulated process.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do donors receive any rewards or compensation?   </div>
          <div className="collapse-content">
            <p>Yes, donors may receive gift cards or monetary compensation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlasmaFAQ;

