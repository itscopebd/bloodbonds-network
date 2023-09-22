'use client'

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // You need to import the icons

const PlasmaFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      question: 'Who can donate plasma?',
      answer: 'Eligibility criteria include age, weight, health, and travel history.',
    },
    {
      question: 'How long does the plasma donation process take?',
      answer: 'Typically, the process takes about 1-2 hours.',
    },
    {
      question: 'Are there health benefits to donating plasma?',
      answer: 'Yes, donating plasma can have several health benefits.',
    },
    {
      question: 'Is plasma donation safe?',
      answer: 'Yes, plasma donation is a safe and regulated process.',
    },
    {
      question: 'Do donors receive any rewards or compensation?',
      answer: 'Yes, donors may receive gift cards or monetary compensation.',
    },
  ];

  return (
    <div className='container mx-auto mt-20'>
      <h2 className='text-center text-2xl md:text-3xl text-red-700 font-bold mb-5'>
        Frequently Asked Questions
      </h2>
      <div className='join join-vertical w-full'>
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`collapse collapse-arrow join-item border border-base-300 ${
              activeIndex === index ? 'open' : ''
            }`}
          >
            <input
              type='radio'
              name='my-accordion-4'
              checked={activeIndex === index}
              onChange={() => toggleAccordion(index)}
            />
            <div className='collapse-title text-xl font-medium'>
              {item.question}
            </div>
            <div className='collapse-content'>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlasmaFAQ;
