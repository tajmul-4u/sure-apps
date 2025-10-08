import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import { Link } from 'react-router';

const TrendingApps = ({ homeData }) => {
  // console.log(homeData)
   

  return (
    <div className="text-center mt-4">
      <div>
        <h1 className="text-3xl font-bold  mb-2">Trending Apps</h1>
        <p className="text-gray-500 mb-4">
          Explore All Trending Apps on the Market Development us
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-fr gap-4">
          {homeData.map((appCard) => (
            <Link key={appCard.id} to={`/appDetails/${appCard.id}`}>
              <SingleCard appCard={appCard}></SingleCard>
            </Link>
          ))}
        </div>
      </div>
      <button className="btn bg-[#632EE3] text-xl text-white rounded-2xl mt-6 mb-4">
        Show All
      </button>
    </div>
  );
};

export default TrendingApps;