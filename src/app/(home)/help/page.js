import HelpBanner from '@/components/HelpBanner/HelpBanner';
import HelpCard from '@/components/HelpCard/HelpCard';
import React from 'react';

const HelpPage = () => {
    return (
        <div>
          <HelpBanner></HelpBanner>  
          <HelpCard></HelpCard>
        </div>
    );
};

export default HelpPage;