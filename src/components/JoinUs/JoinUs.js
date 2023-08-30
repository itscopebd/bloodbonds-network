import React from 'react';

const JoinUs = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl text-center font-bold text-red-500 pt-12'>Join US</h1>
            <p className='text-gray-500 pt-10 text-center '>Join our volunteer team and play a vital role in supporting our blood donation mission. <br /> <br /> Together, we can create a meaningful impact and inspire positive change in our community.</p>


            <div className="hero lg:w-[1100px] h-[500px] mx-auto mt-10 rounded" style={{ backgroundImage: 'url(https://shorturl.at/egEG4)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h2 className="mb-5 text-3xl font-bold">Make A Difference</h2>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-outline btn-error">Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;