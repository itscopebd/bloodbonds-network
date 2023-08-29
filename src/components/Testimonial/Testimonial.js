// import React from 'react';
// import person from '@/app/asset/Volunteer.jpg';
// import Image from 'next/image';

// const TestimonialSection = () => {
//     const testimonials = [
//         {
//             id: 1,
//             name: 'John Doe',
//             role: 'CEO, Company A',
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem sed velit efficitur, ut elementum nisi tristique.'
//         },
//         {
//             id: 2,
//             name: 'Jane Smith',
//             role: 'Designer, Company B',
//             content: 'Pellentesque commodo arcu non ante tincidunt, ut ultricies nisl finibus. Morbi scelerisque nibh ac tortor lacinia, non bibendum enim facilisis.'
//         },
//         // Add more testimonials
//     ];

//     return (
//         <section className="testimonial-section bg-gray-100 py-10">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl font-bold text-center mb-5">What People Say</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {testimonials.map(testimonial => (
//                         <div key={testimonial.id} className="testimonial-card bg-white shadow-md p-6 rounded-md">
//                             <p className="text-gray-600 mb-4">{testimonial.content}</p>
//                             <div className="flex items-center">
//                                 <div className="flex-shrink-0">
//                                     <Image className="h-20 w-20 rounded-full" src={person} alt={testimonial.name} />
//                                 </div>
//                                 <div className="ml-3">
//                                     <p className="text-sm font-medium text-gray-800">{testimonial.name}</p>
//                                     <p className="text-sm text-gray-500">{testimonial.role}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TestimonialSection;


import React from 'react';
import person from '@/app/asset/Volunteer.jpg';
import Image from 'next/image';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            role: 'CEO, Company A',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem sed velit efficitur, ut elementum nisi tristique.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Designer, Company B',
            content: 'Pellentesque commodo arcu non ante tincidunt, ut ultricies nisl finibus. Morbi scelerisque nibh ac tortor lacinia, non bibendum enim facilisis.'
        },
        {
            id: 3,
            name: 'Mary Smith',
            role: 'Designer, Company B',
            content: 'Pellentesque commodo arcu non ante tincidunt, ut ultricies nisl finibus. Morbi scelerisque nibh ac tortor lacinia, non bibendum enim facilisis.'
        },
        // Add more testimonials
    ];

    return (
        <section className="testimonial-section bg-red-50 py-10 mt-10">
            <div className="container mx-auto">
                <h2 className="text-2xl lg:text-3xl font-bold text-center mb-5 text-red-700">What People Say</h2>
                <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card bg-white shadow-md p-6 rounded-md">
                            <div className="mb-4">
                            <div className="testimonial-icon-circle bg-red-200 h-11 w-11 rounded-full flex justify-center items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-center text-white mx-auto mt-2 ms-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                                </div>
                                
                                <p className="text-gray-600">{testimonial.content}</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image className="h-10 w-10 rounded-full" src={person} alt={testimonial.name} />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-800">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

