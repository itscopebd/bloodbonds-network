'use client'

import BenefitsOfPlasma from "@/components/BenefitsOfPlasma/BenefitsOfPlasma";
import DonatePlasma from "@/components/DonatePlasma/DonatePlasma";
import DonationProcess from "@/components/DonationProcess/DonationProcess";
import DonorStories from "@/components/DonorStories/DonorStories";
import PlasmaBanner from "@/components/PlasmaBanner/PlasmaBanner";
import PlasmaFAQ from "@/components/PlasmaFAQ/PlasmaFAQ";
import WhoCanDonate from "@/components/WhoCanDonate/WhoCanDonate";


const PlasmaPage = () => {
    return (
        <div>
           <PlasmaBanner></PlasmaBanner>
           <DonatePlasma></DonatePlasma>
           <WhoCanDonate></WhoCanDonate>
           <DonationProcess></DonationProcess>
           <BenefitsOfPlasma></BenefitsOfPlasma>
           <DonorStories></DonorStories>
           <PlasmaFAQ></PlasmaFAQ>
        </div>
    );
};

export default PlasmaPage;