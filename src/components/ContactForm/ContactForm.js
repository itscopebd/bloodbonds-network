import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 px-5 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-red-700 text-center md:mb-5">
        Get In Touch
      </h2>

      <form className="mx-auto w-full md:w-3/4 lg:w-1/2">
        <div className="mb-3 md:flex md:flex-row">
          <div className="mb-3 md:mb-0 me-0 md:me-10 w-full md:w-1/2">
            <label htmlFor="name" className="block text-gray-600">
              Your Name
            </label>
            <input
              className="p-3 rounded-md border border-red-500 w-full"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-3 me-0 md:me-10 w-full md:w-1/2">
            <label htmlFor="email" className="block text-gray-600">
              Your Email
            </label>
            <input
              className="p-3 rounded-md border border-red-500 w-full"
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="Message" className="block text-gray-600">
            Message
          </label>
          <textarea
            className="p-3 rounded border border-red-500 w-full md:w-11/12"
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button className="btn btn-outline btn-error mx-auto" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
