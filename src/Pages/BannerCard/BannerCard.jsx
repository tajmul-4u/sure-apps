import React from "react";

const BannerCard = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-6 text-white">
        <h1 className="text-4xl font-bold text-center">
          Trusted By Millions,Build for You
        </h1>
        <div className="flex flex-wrap md:flex-nowrap justify-between text-center mt-8 gap-8">
          <div className="w-full md:w-1/3 p-4">
            <p>Total Downloads</p>
            <h1 className="text-6xl font-bold mt-4 mb-4">29.6 M</h1>
            <p>23% More Then Last Month</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <p>Total Reviews</p>
            <h1 className="text-6xl font-bold mt-4 mb-4">906 K</h1>
            <p>43% More Then Last Month</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <p>Active Apps</p>
            <h1 className="text-6xl font-bold mt-4 mb-4">296 +</h1>
            <p>53% More Then Last Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
