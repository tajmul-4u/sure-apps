import React from 'react';
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { useNavigate } from 'react-router';


 /* 

 {
    "image": "https://example.com/images/chatconnect.png",
    "title": "ChatConnect",
    "companyName": "NovaTech Labs",
    "id": 1,
    "description": "A modern chat and collaboration app for teams and individuals with secure messaging and video calls.",
    "size": 120,
    "reviews": 12400,
    "ratingAvg": 4.5,
    "downloads": 5000000,
    "ratings": [
      { "name": "1 star", "count": 500 },
      { "name": "2 star", "count": 800 },
      { "name": "3 star", "count": 2000 },
      { "name": "4 star", "count": 4000 },
      { "name": "5 star", "count": 7100 }
    ]
  },


*/
const SingleCard = ({ appCard }) => {
  const navigate=useNavigate();
    // console.log(appCard)
  const { title, image, description, downloads, ratingAvg } = appCard;
  return (
    <div>
      <div
        onClick={() => navigate(`/appDetails/${appCard.id}`)}
        className="card bg-base-100  shadow-sm w-full h-[500px] p-6 hover:scale-105 transition ease-in-out"
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

export default SingleCard;