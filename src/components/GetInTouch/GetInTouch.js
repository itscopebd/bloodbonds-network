import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './GetInTouch.css'
const GetInTouch = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1crdyv9', 'template_xdjndfk', form.current, 'EPpJd9tqcDCGo1gO7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section className='my-20'>
            <h1 className="text-5xl text-center font-bold text-red-500 ">Get In Touch</h1>
            <form ref={form} onSubmit={sendEmail} className=' pt-10 text-center'>
            <div className='flex justify-center gap-5 pb-5'>
                  
      <input type="text" placeholder='Type Your Name' className="input input-bordered w-full  max-w-xs" name="user_name" />
      
      <input type="email" placeholder='Type Your Email'  className="input input-bordered w-full  max-w-xs " name="user_email" />
            </div>
      
      <textarea name="message" className="textarea textarea-bordered textarea-lg w-auto " placeholder='message' /><br />
      <input type="submit" className="btn btn-outline btn-error" value="Send" />
    </form>
        </section>
    );
};

export default GetInTouch;