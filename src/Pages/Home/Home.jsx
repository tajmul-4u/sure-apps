import React, { Suspense} from 'react';
import Banner from '../Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const homeData=useLoaderData();
    // console.log(homeData)

    
    return (
      <div>
        <Banner></Banner>
        <Suspense fallback={<span>Loading data...</span>}>
          <TrendingApps homeData={homeData}></TrendingApps>
        </Suspense>
      </div>
    );
};

export default Home;