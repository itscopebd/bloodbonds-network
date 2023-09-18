import DonorBanner from '@/components/Donorlist/DonorBanner';
import Donorlist from '@/components/Donorlist/Donorlist';
import PlasmaBanner from '@/components/PlasmaBanner/PlasmaBanner';
import React from 'react';

const AlldOnorList = () => {
    return (
        <div>
          <DonorBanner></DonorBanner>
          <Donorlist></Donorlist>
        </div>
    );
};

export default AlldOnorList;