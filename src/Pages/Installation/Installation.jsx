import React, { useEffect, useState } from 'react';
import useApps from '../../Components/Hook/useApps';

const Installation = () => {
const [installed,setInstalled]=useState([])
const [sortOrder,setSortOrder]=useState('none')
useEffect(()=>{
  const saveList = JSON.parse(localStorage.getItem("installedList"));
  if(saveList) setInstalled(saveList)
},[])

    // const data=useApps()
    // console.log(data)

    const sortItem=()=>{
      if(sortOrder==='price=asc'){
        return [...installed].sort((a,b)=>a.price-b.price)
      }
      else if(sortOrder==='price-dsc'){
        return[...installed].sort((a,b)=>b.price-a.price)
      }
      else{
        installed
      }
    }

    return (
      <div>
        <div className="text-center mt-2 mb-3">
          <h1 className="text-3xl font-bold">Your Installed Apps</h1>
          <p className="text-gray-400">
            Explore All Trending Apps on the Market Development by us.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h1>Apps Found({installed.length})</h1>
          <label className='form-control w-full max-w-xs'>
            <select className='select select-border'
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by price</option>
              <option value="price-asc">Low-&gt;High</option>
              <option value="price-dsc"> High-&gt;Low</option>
            </select>
          </label>
        </div>
        <div className="space-y-6">
          {installed.map((p) => (
            <div className="card card-side bg-base-100 shadow-sm ">
              <figure>
                <img
                  className="w-[100px] h-[100px] object-cover"
                  src={p.image}
                  alt="image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.title}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end items-center">
                  <button className="btn btn-primary">Installed</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Installation;