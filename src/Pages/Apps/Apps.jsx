import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';
import useApps from '../../Components/Hook/useApps';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';

const Apps = () => {
    const allApps=useLoaderData()

    const [search,setSearch]=useState('')
    const term=search.trim().toLowerCase();
const searchApp=term?allApps.filter(app=>app.title.toLowerCase().includes(term)): allApps
    // const searchApps=term?allApps.filter(app=>app.name.toLowerCase().includes(term)): allApps
    // console.log(searchApp)
      const {loading, error } = useApps();

      if (loading) return <LoadingSpinner></LoadingSpinner>;
      if (error) return toast("app not found");
    return (
       
        <div>
          <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1 text-center">
              <h1 className="text-xl md:text-2xl font-bold">
                <span>({searchApp.length})</span>Our All Applications
              </h1>
              <p className="text-gray-500">
                Explorer All Apps on the Market Development by us.We code for
                millions.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            {searchApp.map((appCard) => (
              <Link key={appCard.id} to={`/appDetails/${appCard.id}`}>
                <AppCard appCard={appCard}></AppCard>
              </Link>
            ))}
          </div>
        </div>
       
    );
};

export default Apps;