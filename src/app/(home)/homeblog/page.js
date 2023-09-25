
import Blog from '@/components/Blog/Blog';
import FeatureBlog from '@/components/FeatureBlog/FeatureBlog';
import React from 'react';

const HomeBLogs = async () => {
    return (
        <div className='container p-16 mx-auto'>
            <FeatureBlog></FeatureBlog>
            <Blog/>
        </div>
    );
};

export default HomeBLogs;