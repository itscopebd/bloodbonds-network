import React from 'react';

const JoinUs = () => {
    return (
        <div className='my-20'>
            <h1 className="text-5xl text-center font-bold text-red-500 ">Join Us</h1>
            <p className="text-gray-500 pt-10 text-center">Connect with us easily through our contact information or send us a message via our user-friendly contact form.
                <br /> We are here to help and look forward to hearing from you.
            </p>



            <div className="hero lg:w-full h-[900px] mx-auto mt-10 rounded" style={{ backgroundImage: 'url(https://shorturl.at/egEG4)' }}>
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