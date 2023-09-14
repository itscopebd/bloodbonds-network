import React from 'react';

const donationHistory = [
  {
    date: '2023-09-01',
    location: 'Community Blood Center',
    bloodTypeDonated: 'A+',
    specialNotes: 'Regular donation, no issues.'
  },
  {
    date: '2023-08-15',
    location: 'City Hospital Blood Bank',
    bloodTypeDonated: 'O-',
    specialNotes: 'Emergency donation for accident victim.'
  },
  {
    date: '2023-07-20',
    location: 'Red Cross Blood Drive',
    bloodTypeDonated: 'B+',
    specialNotes: 'Annual blood drive participation.'
  },
 
];



const Trackhistory = () => {
    return (
        <div className='px-16 pt-10'>
            <div className='grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2'>
            <div className="card max-w-full lg:max-w-sm 2xl:max-w-full bg-[#fffcf2]  shadow-xl">
  <div className="card-body justify-center">
  <div className="stat">
    <div className="stat-figure text-secondary  hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title  text-black">Total blood <br className='hidden md:block' /> Donation</div>
    <div className="stat-value py-2">{donationHistory.length}</div>
    <div className="stat-desc  text-black">last donate -Jan 1st</div>
  </div>
  </div>
</div>
<div className="card max-w-full lg:max-w-sm bg-[#ef233c] 2xl:max-w-full  shadow-xl">
  <div className="card-body">
  <div className="stat ">
    <div className="stat-figure text-white  hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title text-white">Health status</div>
    <div className="py-2 text-white">
    <div className="radial-progress" style={{"--value":80}}>80%</div>
    </div>
    <div className="stat-desc text-white">21% more than last month</div>
  </div>
  </div>
</div>
<div className="card   max-w-full lg:max-w-sm bg-[#fffcf2] 2xl:max-w-full shadow-xl">
  <div className="card-body justify-center">
  <div className="stat">
    <div className="stat-figure text-secondary  hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title text-black ">Rewords Count </div>
    <div className="stat-value text-secondary py-2">2.6</div>
    <div className="stat-desc  text-black">Donate blood and get <br />more than last month</div>
  </div>
  </div>
</div>
            </div>

            <div className='card pt-5'>
              <h1>ACTIVITES</h1>
<div className='card-body gap-3'>
{/* this  dummy object data is only for testing. it will remove when we use real data */}
{
  donationHistory.map(dh => (

    <div className="alert shadow-lg" key={dh.id}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div>
    <h3 className="font-bold">{dh.location}!</h3>
    <p>{dh.date}</p>
    <div className="text-xs">{dh.specialNotes}</div>
  </div>
  <button className="btn btn-sm">See</button>
</div>
  ))
}

</div>
            </div>
        </div>
    );
};

export default Trackhistory;