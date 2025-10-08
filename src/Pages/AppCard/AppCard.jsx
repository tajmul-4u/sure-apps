import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

const AppCard = ({ appCard }) => {
    // console.log(appCard)
    const {image,title,description,downloads,ratingAvg}=appCard
  return (
    <div>
      <div className="card bg-base-100  shadow-sm w-full h-[500px] p-6">
              <figure>
                <img src={image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                   {description}
                </p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">
                    <img className="w-[15px]" src={downloadIcon} alt="" />
                    {downloads}
                  </div>
                  <div className="badge badge-outline">
                    <img className="w-[15px]" src={ratingIcon} alt="" />
                    {ratingAvg}
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default AppCard;