import React from 'react';
import img1 from '../../app/asset/work/bloode.jpeg'
import Image from 'next/image';

const FaqSection = () => {
  return (
    <section className="container mx-auto rounded-2xl p-16 mt-20">
      <h1 className="text-5xl text-center font-bold text-red-500 ">FAQ</h1>
      <p className="text-gray-500 pt-10 text-center">We understand that you may have questions about the blood donation <br /> process, its importance, and how you can get involved.
      </p>
      <div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-10">
        <div data-aos="fade-up" data-aos-duration="1000" className="md:order-last lg:order-first">
          <Image className='rounded' src={img1} alt="Solutions image" />
        </div>


        <div>
          <div>
            <h1 className="lg:text-3xl text-sky-950 my-6 text-3xl font-bold">FAQs for Blood Donation</h1>
          </div>


          <div tabIndex={0} className="collapse collapse-plus border-base-300 mt-2 bg-white border">
            <div className="collapse-title text-[14px] text-slate-600 font-semibold">How long does the appointment last?</div>
            <div className="collapse-content">
              <p className="text-[#5A7795]">
                Please allow one hour for your first appointment, and 45-min for appointments thereafter.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus border-base-300 mt-2 bg-white border">
            <div className="collapse-title text-[14px] text-slate-600 font-semibold">Is a doctor's order required?</div>
            <div className="collapse-content">
              <p className="text-[#5A7795]">
                No. For this type of donation, simply call our Blood Donor Center for an appointment and let us know the name of the patient. We do the rest.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus border-base-300 mt-2 bg-white border">
            <div className="collapse-title text-[14px] text-slate-600 font-semibold">Once a donation is made when will the blood be available for the patient?</div>
            <div className="collapse-content">
              <p className="text-[#5A7795]">
                Three business days. We require three business days for testing purposes.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus border-base-300 mt-2 bg-white border">
            <div className="collapse-title text-[14px] text-slate-600 font-semibold">Does the donor need to know their blood type or the patient's blood type?</div>
            <div className="collapse-content">
              <p className="text-[#5A7795]">
                No. All the blood typing is done by labs at the medical centers. Our lab specialists will determine if the blood is a match and designate it for the patient.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus border-base-300 mt-2 bg-white border">
            <div className="collapse-title text-[14px] text-slate-600 font-semibold">What if the blood type does not match?</div>
            <div className="collapse-content">
              <p className="text-[#5A7795]">
                The blood is placed into the blood bank for replenishment of blood used. The patient is ALWAYS guaranteed to get the blood he/she needs and the donated blood will be used for other patients.
              </p>
            </div>
          </div>





        </div>
      </div>
    </section>


  );
};

export default FaqSection;