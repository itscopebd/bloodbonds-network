'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import member1 from '../../app/asset/person2.jpg'
import member2 from '../../app/asset/volunteer5.jpg'
import member3 from '../../app/asset/doctor.jpg'
import member4 from '../../app/asset/doctor2.jpg'
import member5 from '../../app/asset/volunteer.jpg'
import member6 from '../../app/asset/volunteer2.jpg'
import member7 from '../../app/asset/person5.jpg'
import member8 from '../../app/asset/person4.jpg'
import member9 from '../../app/asset/person.png'


const initialData = [
    {
        "name": "Joe Keith",
        "role": "Director",
        "description": "He is the director of our team. He is the one who first came up with this idea to create a team from where we can help people who needs blood.",
        "imageSrc": member1,
        "type": "Donor"
    },
    {
        "name": "Rosy Watson",
        "role": "Manager",
        "description": "She is the manager of our team. Managing the team very dedicatedly from the beginning.",
        "imageSrc": member2,
        "type": "Donor"
    },
    {
        "name": "John Keith",
        "role": "Medical Advisor",
        "description": "She is a doctor who gives all the medical advice to the team.",
        "imageSrc": member3,
        "type": "Donor"
    },
    {
        "name": "Rosy Watson",
        "role": "Medical Consultant",
        "description": "He is a doctor who gives all the medical supports to the team.",
        "imageSrc": member4,
        "type": "Donor"
    },
    {
        "name": "Joe Keith",
        "role": "Donor",
        "description": "Donating blood since 3 years and saved life of a lot of patients.",
        "imageSrc": member5,
        "type": "Donor"
    },
    {
        "name": "Rosy Watson",
        "role": "Donor",
        "description": "Donating blood since 3 years and saved life of a lot of patients.",
        "imageSrc": member6,
        "type": "Donor"
    },
    {
        "name": "John Keith",
        "role": "Donor",
        "description": "Donating blood since 3 years and saved life of a lot of patients.",
        "imageSrc": member7,
        "type": "Donor"
    },
    {
        "name": "Rosy Watson",
        "role": "Volunteer",
        "description": "Donating blood since 3 years and saved life of a lot of patients.",
        "imageSrc": member8,
        "type": "Donor"
    },
    {
        "name": "Rosy Watson",
        "role": "Volunteer",
        "description": "A university student.",
        "imageSrc": member9,
        "type": "Volunteer"
    }
];

const MeetTheTeam = () => {
    const [items, setItems] = useState(initialData);
    const [visible, setVisible] = useState(3);[]

    const showMore = () => {
        setVisible(visible + 3);
    };
    

    return (
        <div>
            <div className='mt-10 container mx-auto'>
                <h2 className='text-2xl lg:text-3xl font-bold text-red-700 text-center lg:mb-5'>Meet Our Team</h2>
                <div className='flex justify-center'>
                    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7 mx-auto justify-between">
                        {items.slice(0, visible).map((item, index) => (
                            <div className="card bg-base-100 shadow-xl" key={index}>
                                <figure className="px-10 pt-10">
                                    <Image className='rounded' src={item.imageSrc} alt={item.name}></Image>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.role}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {visible < items.length && (
                    <div className='flex justify-center mt-5'>
                        <button className='btn btn-outline btn-error' onClick={showMore}>See More</button>
                    </div>
                   
                    
                )}
            </div>
        </div>
    );
};

export default MeetTheTeam;

