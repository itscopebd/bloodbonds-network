"use client";
import Banner from '@/components/Banner/Banner';
import ContactUs from '@/components/ContactUs/ContactUs';
import EmpoweringDonors from '@/components/EmpoweringDonors/EmpoweringDonors';
import GetInTouch from '@/components/GetInTouch/GetInTouch';
import MedicalInsights from '@/components/MedicalInsights/MedicalInsights';
import React from 'react';

const BannerPage = () => {
    return (
        <div>
              <Banner></Banner>
              <MedicalInsights></MedicalInsights> 
              <EmpoweringDonors></EmpoweringDonors>
              <ContactUs></ContactUs>
              <GetInTouch></GetInTouch>
        </div>
    );
};

export default BannerPage;