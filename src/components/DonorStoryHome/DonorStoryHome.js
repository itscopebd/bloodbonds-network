import React from 'react';
import volunteer1 from '../../app/asset/volunteer.jpg'
import volunteer2 from '../../app/asset/volunteer2.jpg'
import volunteer3 from '../../app/asset/volunteer4.jpg'
import Image from 'next/image';

const stories = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Blood Donor',
        img: volunteer1,
        content: 'My journey as a blood donor began when I learned about the critical shortage of blood in our community. I realized that a simple act of donating blood could save lives. Every time I donate, I imagine the impact it has on patients and their families. It is a small sacrifice for me, but it can mean everything to someone in need.'
    },
    {
        id: 2,
        name: 'Michael Rodriguez',
        role: 'Blood Donor Advocate',
        img: volunteer2,
        content: 'I have been a regular blood donor for years, but my commitment deepened when my son was born prematurely and needed multiple blood transfusions to survive. It was a wake-up call for me. Now, I actively promote blood donation and encourage others to join this lifesaving cause. It is not just a donation; it is an act of love and compassion.'
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'First-Time Blood Donor',
        img: volunteer3,
        content: 'I was nervous about donating blood for the first time, but I knew it was the right thing to do. When I learned that one donation can save up to three lives, it motivated me to overcome my fear. The staff at BloodBond Network made the experience comfortable, and now I am a proud blood donor, knowing that I can make a difference.'
    }
];

const DonorStories = () => {
    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-center text-3xl md:text-5xl text-red-500 font-bold mb-5'>Donor Stories</h2>
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
