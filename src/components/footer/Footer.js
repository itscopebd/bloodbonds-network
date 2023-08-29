import React from 'react';
import Image from 'next/image';
import logo from '@/app/asset/Blood (2).png'

const Footer = () => {
    return (
     <div className='bg-tertiaryColor'>
          <div className='container mx-auto'>
      <footer className="footer mt-5 py-10 text-white">
  <div>
    <div className="logo flex justify-center items-center">
    <Image className='justify-center' src={logo} width={50} height={20} alt='logo'></Image>
    <p className='text-xl font-bold text-primaryColor'>BloodBond Network</p>
    </div>
    <p className=' w-56 ms-5 '>Empowering lives through blood donation, one heartbeat at a time. Explore our mission to promote blood donation, share stories of impact, and inspire a community of positive change.</p>
  </div> 
  <div>
    <span className="title text-base font-semibold  text-white  uppercase mb-2">About</span> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Donors</a> 
    <a className="link link-hover">Contact Us</a> 
    <a className="link link-hover">Join Us</a>
    <a className="link link-hover">Dashboard</a>
  </div> 
  <div>
    <span className="title text-base font-semibold  text-white  uppercase mb-2">Contact Us</span> 
    <a className="link link-hover">01234 567 891</a> 
    <a className="link link-hover mb-3">01234 567 891</a> 
    <a className="link link-hover">blood@gmail.com</a> 
    <a className="link link-hover">blood@gmail.com</a>
  </div> 
  <div>
    <span className="title text-base font-semibold  text-white  uppercase mb-2">Follow Us</span> 
    <p className='mb-3'>Join us on social media</p>
    <div className="grid grid-flow-col gap-4">
  <a href="your_facebook_url_here">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
    </svg>
  </a>
  <a href="your_twitter_url_here">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
    </svg>
  </a>
  <a href="your_linkedin_url_here">
    <svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" viewBox="0 0 448 512" className='fill-current'><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
  </a>
  <a href="your_linkedin_url_here">
    <svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" viewBox="0 0 448 512" className='fill-current'><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
  </a>
</div>


  </div>
</footer>
</div>
</div>
    );
};

export default Footer;