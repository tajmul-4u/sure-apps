import React from 'react';
import useApps from '../../Components/Hook/useApps';

const Installation = () => {
    const data=useApps()
    console.log(data)
    return (
      <div>
        <div className='text-center mt-2 mb-3'>
          <h1 className="text-3xl font-bold">Your Installed Apps</h1>
          <p className="text-gray-400">
            Explore All Trending Apps on the Market Development by us.
          </p>
        </div>
      </div>
    );
};

export default Installation;