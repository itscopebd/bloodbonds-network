"use client";
import AutoImageGallery from '@/components/AutoImage/AutoImageGallery';
import Banner from '@/components/Banner/Banner';
import ContactUs from '@/components/ContactUs/ContactUs';
import EmpoweringDonors from '@/components/EmpoweringDonors/EmpoweringDonors';
import GetInTouch from '@/components/GetInTouch/GetInTouch';
import JoinUs from '@/components/JoinUs/JoinUs';
import MedicalInsights from '@/components/MedicalInsights/MedicalInsights';
import Work from '@/components/Work/Work';
import React from 'react';

const images =[
"https://i.ibb.co/9ZvZr5r/pic-3.jpg",
"https://i.ibb.co/GV7bvZ7/pic-4.jpg",
"https://i.ibb.co/zr85Nds/pic-2.jpg",
"https://i.ibb.co/zm0HPrZ/pic-1.jpg",
"https://i.ibb.co/rkbNpFV/pic-5.jpg",
"https://i.ibb.co/M6b44VM/pic-22.jpg",
"https://i.ibb.co/FYVny6V/pic-11.jpg",
"https://i.ibb.co/xJHkNCn/pic-33.jpg",
"https://i.ibb.co/XyPhXkz/pic-44.jpg",
"https://i.ibb.co/wWzLbpz/pic-66.jpg",
"https://i.ibb.co/gVQFp6d/pic-77.jpg",
"https://i.ibb.co/VYmCwt1/pic-88.jpg" ,
"https://i.ibb.co/Bn1j250/pic-99.jpg",
"https://i.ibb.co/Qj7NJhB/pic-10.jpg" 
];

const BannerPage = () => {
    return (
        <div>
              <Banner></Banner>
              <AutoImageGallery images={images}></AutoImageGallery>
              <MedicalInsights></MedicalInsights> 
              <EmpoweringDonors></EmpoweringDonors>
              <Work></Work>
              <JoinUs></JoinUs>
              <ContactUs></ContactUs>
              <GetInTouch></GetInTouch>
           
           
            
        </div>
    );
};

export default BannerPage;