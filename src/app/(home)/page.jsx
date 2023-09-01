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



const BannerPage = () => {
    return (
        <div>
              <Banner></Banner>
              <AutoImageGallery></AutoImageGallery>
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