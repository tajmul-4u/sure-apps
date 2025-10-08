import React from 'react';
import heroImg from '../../assets/hero.png'
import playStoreImg from '../../assets/playStore.png'
import appStoreImg from '../../assets/App_Store_(iOS).svg.png'
import BannerCard from '../BannerCard/BannerCard';

const Banner = () => {
     
    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-col">
            <div>
              <h1 className="text-5xl font-bold text-center">
                We Build <br />{" "}
                <span className="text-[#632EE3]">Productive </span>
                Apps
              </h1>
              <p className="py-6 text-center">
                SureApps: Empowering your business with seamless digital
                solutions. Innovative, reliable, and tailored apps designed to
                elevate your success. Boost productivity and connect
                effortlessly with our cutting-edge technology. Experience
                intuitive design and unmatched support every step of the way.
                SureApps — where your vision meets our expertise to create the
                future.
              </p>
              <div className='flex items-center gap-4 flex-col'>
                <button className="btn">
                  {" "}
                  <img className="w-[20px]" src={playStoreImg} alt="" />
                  Google Play
                </button>
                <button className="btn">
                  {" "}
                  <img className="w-[20px]" src={appStoreImg} alt="" />
                  Apps Store
                </button>
                <img src={heroImg} />
              </div>
            </div>
          </div>
        </div>
        <BannerCard></BannerCard>
      </div>
    );
};

export default Banner;