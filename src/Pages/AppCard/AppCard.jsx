import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import { useNavigate } from 'react-router';

const AppCard = ({ appCard }) => {
    // console.log(appCard)
    const navigate=useNavigate()
    const {image,title,description,downloads,ratingAvg}=appCard
  return (
    <div>
      <div
        onClick={() => navigate(`/appDetails/${appCard.id}`)}
        className="card bg-base-100  shadow-sm w-full h-[500px] p-6 transition ease-in-out hover:scale-110"
      >
        <figure>
          <img className="w-[150px]" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
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