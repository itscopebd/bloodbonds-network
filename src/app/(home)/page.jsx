"use client";
import AutoImageGallery from '@/components/AutoImage/AutoImageGallery';
import ImageGallery from '@/components/AutoImage/AutoImageGallery';
import Banner from '@/components/Banner/Banner';
import ContactUs from '@/components/ContactUs/ContactUs';
import EmpoweringDonors from '@/components/EmpoweringDonors/EmpoweringDonors';
import GetInTouch from '@/components/GetInTouch/GetInTouch';
import MedicalInsights from '@/components/MedicalInsights/MedicalInsights';
import React from 'react';

const images =[
"https://i.ibb.co/9ZvZr5r/pic-3.jpg",
"https://i.ibb.co/GV7bvZ7/pic-4.jpg",
"https://i.ibb.co/zr85Nds/pic-2.jpg",
"https://i.ibb.co/zm0HPrZ/pic-1.jpg",
"https://i.ibb.co/rkbNpFV/pic-5.jpg"
];

const BannerPage = () => {
    return (
        <div>
              <Banner></Banner>
              <AutoImageGallery images={images}></AutoImageGallery>
              <MedicalInsights></MedicalInsights> 
              <EmpoweringDonors></EmpoweringDonors>
              <ContactUs></ContactUs>
              <GetInTouch></GetInTouch>
        </div>
    );
};

export default BannerPage;