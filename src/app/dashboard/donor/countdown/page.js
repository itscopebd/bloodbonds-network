import React from 'react';

const page = () => {
    return (
        <div className='justify-center items-center '>
            <div className=' card  lg:max-w-full '>
                <div className='card-body justify-center items-center'>
                  <div className='uppercase'>
                    Donation CountDown
                  </div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}>15</span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}>10</span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}>24</span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":52}}>52</span>
    </span>
    sec
  </div>
</div>
                </div>
              
            </div>
        </div>
    );
};

export default page;