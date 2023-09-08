"use client";
import Banner from '@/components/Banner/Banner';
import ContactUs from '@/components/ContactUs/ContactUs';
import EmpoweringDonors from '@/components/EmpoweringDonors/EmpoweringDonors';
import FaqSection from '@/components/FaqSection/FaqSection';
import GetInTouch from '@/components/GetInTouch/GetInTouch';
import JoinUs from '@/components/JoinUs/JoinUs';
import MedicalInsights from '@/components/MedicalInsights/MedicalInsights';
import Work from '@/components/Work/Work';
import React from 'react';


const BannerPage = () => {
    return (
        <div>
            <Banner></Banner>
            <MedicalInsights></MedicalInsights>
            <EmpoweringDonors></EmpoweringDonors>
            <Work></Work>
            <JoinUs></JoinUs>
            <ContactUs></ContactUs>
            <FaqSection></FaqSection>
            <GetInTouch></GetInTouch>

        </div>
    );
};

export default BannerPage;