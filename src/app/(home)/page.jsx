"use client";
import Banner from '@/components/Banner/Banner';
import BenefitsOfPlasma from '@/components/BenefitsOfPlasma/BenefitsOfPlasma';
import ContactUs from '@/components/ContactUs/ContactUs';
import DonationProcess from '@/components/DonationProcess/DonationProcess';
import EmpoweringDonors from '@/components/EmpoweringDonors/EmpoweringDonors';
import FaqSection from '@/components/FaqSection/FaqSection';
import GetInTouch from '@/components/GetInTouch/GetInTouch';
import HelpPoor from '@/components/HelpPoor/HelpPoor';
import JoinUs from '@/components/JoinUs/JoinUs';
import MedicalInsights from '@/components/MedicalInsights/MedicalInsights';
import DonorStoryHome from '@/components/DonorStoryHome/DonorStoryHome'
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
            <DonorStoryHome></DonorStoryHome>
            <HelpPoor></HelpPoor>
            <ContactUs></ContactUs>
            <FaqSection></FaqSection>
            <GetInTouch></GetInTouch>

        </div>
    );
};

export default BannerPage;