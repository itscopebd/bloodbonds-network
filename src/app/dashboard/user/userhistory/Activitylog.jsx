'use client'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import imgs from '../../../asset/DonationProcess/user_1144709.png'
import Image from 'next/image';


const Activitylog = () => {
    return (
        <div>
           <div className='p-10 shadow-xl '>
           <Tabs>
    <TabList>
      <Tab>Blood Recieved </Tab>
      <Tab>Money Donation</Tab>
      <Tab>All Event </Tab>
    </TabList>

    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2'>
    <div className="card max-w-lg md:max-w-sm bg-base-100 shadow-xl">
  <div className="card-body">
  <Image src={imgs}alt='d' width={50} height={50}></Image>

   <h1 className='card-title'>Donor name</h1>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
            <div className="card  max-w-lg md:max-w-sm  bg-base-100 shadow-xl">
  <div className="card-body">
    <Image src={imgs}alt='d' width={50} height={50}></Image>
   <h1 className='card-title'>Donor name</h1>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
            <div className="card  max-w-lg md:max-w-sm  bg-base-100 shadow-xl">
  <div className="card-body">
  <Image src={imgs}alt='d' width={50} height={50}></Image>

   <h1 className='card-title'>Donor name</h1>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
            <div className="card  max-w-lg md:max-w-sm  bg-base-100 shadow-xl">
  <div className="card-body">
  <Image src={imgs}alt='d' width={50} height={50}></Image>

   <h1 className='card-title'>Donor name</h1>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
            <div className="card  max-w-lg md:max-w-sm  bg-base-100 shadow-xl">
  <div className="card-body">
  <Image src={imgs}alt='d' width={50} height={50}></Image>

   <h1 className='card-title'>Donor name</h1>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
    </div>
  
    </TabPanel>
    <TabPanel>
 <div className='card h-full'>
 <div className="overflow-x-auto h-80">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
  </table>
</div>
 </div>
    </TabPanel>
    <TabPanel>


      events
    </TabPanel>
  </Tabs>
           </div>
        </div>
    );
};

export default Activitylog;