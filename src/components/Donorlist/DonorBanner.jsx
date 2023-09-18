import React from 'react';

const DonorBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JnXWzXd/27577817-ravi24-may-7-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Blood Heroes: Find Your Lifesaver</h1>
      <p className="mb-5">Search Donors by Blood Type and Save Lives Today</p>
      <select className="select select-secondary w-full max-w-xs text-black ">
  <option  selected>Search your  Blood</option>
  <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
</select>
    </div>
  </div>
</div>
        </div>
    );
};

export default DonorBanner;