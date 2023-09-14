import React from 'react';
import volunteer1 from '../../app/asset/volunteer.jpg'
import volunteer2 from '../../app/asset/volunteer2.jpg'
import volunteer3 from '../../app/asset/volunteer4.jpg'
import Image from 'next/image';

const stories = [
    {
        id: 1,
        name: 'John Doe',
        role: 'Job Holder',
        img: volunteer1,
        content: 'I started donating plasma when a close friend needed plasma-based treatment. Seeing the immediate impact it had on their health motivated me to become a regular donor. BloodBond Network has made the process convenient, and I am honored to contribute to saving lives.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'University Student',
        img: volunteer2,
        content: 'Donating plasma through BloodBond Network has become a regular part of my life. Knowing that my plasma can help treat patients with critical illnesses is incredibly rewarding. It is a simple way to make a big difference, and I am proud to be a part of it.'
    },
    {
        id: 3,
        name: 'Mary Smith',
        role: 'University Student',
        img: volunteer3,
        content: 'I never realized how crucial plasma donations were until my own family member required a plasma transfusion. Thanks to BloodBond Network and generous donors, they received the treatment they needed. Now, I am committed to giving back and helping others in need.'
    }
];

const DonorStories = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-center text-2xl md:text-3xl text-red-700 font-bold mb-5'>Donor Stories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7 mx-auto justify-between'>
                {stories.map(story => (
                    <div key={story.id} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image src={story.img} alt="Image" className="rounded-xl" />
                        </figure>
                        
                        <div className="card-body ">
                        <div className="testimonial-icon-circle bg-red-200 h-11 w-11 rounded-full flex justify-center items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-center text-white mx-auto mt-2 ms-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                                </div>
                            <p className='text-justifyss items-center italic'>{story.content}</p>
                            <h2 className="font-semibold text-lg">{story.name}</h2>
                            <p>{story.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonorStories;
