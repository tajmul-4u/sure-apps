import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import TrendingApps from "../TrendingApps/TrendingApps";
import useApps from "../../Components/Hook/useApps";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Home = () => {
  const { apps, loading, error } = useApps(); // fetches app data

  if (loading) return <LoadingSpinner />; // show spinner while loading
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <Banner />
      <Suspense fallback={<span>Loading data...</span>}>
        <TrendingApps homeData={apps} />
      </Suspense>
    </div>
  );
};

export default Home;
