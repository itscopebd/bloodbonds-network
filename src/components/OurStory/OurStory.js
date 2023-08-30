import React from 'react';
import Image from 'next/image';
import story from '@/app/asset/Our story.jpg';

const OurStory = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-center text-2xl md:text-3xl text-red-700 font-bold mb-5'>Our Story</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <Image src={story} alt='image' className='rounded-lg' width={680} height={500} />
                </div>
                <div className='text-md pt-2 md:text-lg mx-auto'>
                    <p className='w-11/12 md:w-10/12 text-justify'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ea laboriosam perferendis
                        maiores cupiditate quibusdam deleniti voluptas, vitae qui repudiandae sit, odit eveniet debitis
                        placeat, aliquam nemo suscipit quo omnis quos? Perspiciatis et modi magnam, cumque distinctio
                        repellat earum rem quibusdam, atque cupiditate nulla asperiores. Maiores ipsa qui obcaecati
                        perferendis similique error officiis ullam facere dolores, ea officia, quas quasi. Nobis rem ea
                        alias et eum maxime, atque, sed natus animi optio maiores repellendus! Voluptatibus excepturi
                        nostrum nisi! Consequatur, accusantium culpa. Id a sed velit? Odio accusamus pariatur labore?
                        Nam consequatur iste sint? Nam cum vel velit, doloremque magnam quas.
                    </p>
                    <p className='w-11/12 md:w-10/12 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique reiciendis est! Nulla obcaecati quasi assumenda, vitae qui corrupti sequi, tempore quos laudantium, perspiciatis similique distinctio voluptates. Totam numquam eius blanditiis. Rem architecto ad nesciunt voluptatum nemo tempore facilis minima aliquid minus odit sint accusamus, assumenda nobis atque quos voluptas?</p>
                    <p className='w-11/12 md:w-10/12 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique reiciendis est! Nulla obcaecati quasi assumenda, vitae qui corrupti sequi, tempore quos laudantium, perspiciatis similique distinctio voluptates. Totam numquam eius blanditiis. Rem architecto ad nesciunt voluptatum nemo tempore facilis minima aliquid minus odit sint accusamus, assumenda nobis atque quos voluptas?</p>
                </div>
            </div>
        </div>
    );
};

export default OurStory;

