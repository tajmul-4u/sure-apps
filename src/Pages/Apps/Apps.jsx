import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';

const Apps = () => {
    const allApps=useLoaderData()
    // console.log(allApps)
    return (
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1 text-center">
            <h1 className="text-xl md:text-2xl font-bold">
              <span>({allApps.length})</span>Our All Applications
            </h1>
            <p className="text-gray-500">
              Explorer All Apps on the Market Development by us.We code for
              millions.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>
          {allApps.map((appCard) => (
            <AppCard key={appCard.id} appCard={appCard}></AppCard>
          ))}
        </div>
      </div>
    );
};

export default Apps;