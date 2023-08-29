import React from 'react';

const Work = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <h1 className='text-5xl text-center font-bold text-red-500 pt-12'>Our Works</h1>
                <p className='text-gray-500 pt-10 text-center '>Discover the lives transformed and communities strengthened through our dedicated blood donation <br /> <br /> efforts. Explore our impactful stories, statistics, and partnerships that drive positive change.</p>

                <div className='lg:flex justify-center mt-10'>



                    <div className='flex'>
                        <img className='rounded w-[600px] h-[600px]' src="https://i.ibb.co/Wy6zd03/1.jpg" alt="" />
                    </div>
                    <div>
                        <div>
                            <img className='rounded w-[600px] h-[300px]' src="https://i.ibb.co/X3zzVQx/5.jpg" alt="" />
                        </div>
                        <div className='lg:flex'>
                            <img className='rounded lg:w-[300px] h-[300px]' src="https://i.ibb.co/6ZZ5FX4/2.jpg" alt="" />
                            <img className='rounded lg:w-[300px] h-[300px]' src="https://i.ibb.co/nwVYFYF/6.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Work;
