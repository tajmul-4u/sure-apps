import React from "react";
import notFound from "../../assets/error-404.png";

const ErrorPages = () => {
  return (
    <div className="flex  items-center flex-col">
      <div>
        <img src={notFound} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-3xl">Oops Page Not Found!</h1>
        <p className="text-gray-400">
          The page you are looking for is not available
        </p>
      </div>
      <button className="btn bg-[#632EE3] text-xl text-white mt-3">Go Back</button>
    </div>
  );
};

export default ErrorPages;
