import React from 'react';
import Image from 'next/image';
import volunteer from '../../app/asset/volunteer.jpg';
import volunteer2 from '../../app/asset/volunteer2.jpg';
import doctor from '../../app/asset/doctor.jpg';
import doctor2 from '../../app/asset/doctor2.jpg';

const MeetTheTeam = () => {

    // const [showAllCards, setShowAllCards] = useState(false);

    // const toggleShowAllCards = () => {
    //     setShowAllCards(!showAllCards);
    // };
   

    return (
        <div className='mt-10 container mx-auto'>
            <h2 className='text-2xl lg:text-3xl font-bold text-red-700 text-center lg:mb-5'>Meet Our Team</h2>
            <div className='flex justify-center '>
            <div className="cards grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-7 mx-auto justify-between">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Joe Keith</h2>
                <p>Director</p>
                <p>He is the director of our team. He is the one who first came up with this idea to create a team from where we can help people who needs blood</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Manager</p>
                <p>She is the manager of our team. Managing the team very dedicatedly from the beginning.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={doctor} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">John Keith</h2>
                <p>Medical Advisor</p>
                <p>She is a docrtor who gives all the medical advise to the team.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={doctor2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Medical Consultant</p>
                <p>He is a doctor who gives all the medical supports to the team.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Joe Keith</h2>
                <p>Donor</p>
                <p>Donating blood since 3 years and saved life of a lot of patiets.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Donor</p>
                <p>Donating blood since 3 years and saved life of a lot of patiets.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">John Keith</h2>
                <p>Donor</p>
                <p>Donating blood since 3 years and saved life of a lot of patiets.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Donor</p>
                <p>Donating blood since 3 years and saved life of a lot of patiets.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={doctor2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Volunteer</p>
                <p>A university student.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Joe Keith</h2>
                <p>Volunteer</p>
                <p>A university student.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer2} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rosy Watson</h2>
                <p>Volunteer</p>
                <p>A college student.</p>
         </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image className='rounded' src={volunteer} alt='volunteer'></Image>
                </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">John Keith</h2>
                <p>Volunteer</p>
                <p>A job holder</p>
         </div>
            </div>
            </div>
            </div>
                <div className='flex justify-center mt-5'>
                <button className='btn btn-error'>See More</button>
                </div>
            
            
        </div>
    );
};

export default MeetTheTeam;




