import React from 'react';
import appError from '../../assets/App-Error.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <img
          src={appError}
          alt="App Not Found"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="mt-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Oops! Apps Not Found!
        </h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
          Try searching with a different keyword.
        </p>
      </div>
      <button
        onClick={() => window.history.back()}
        className="mt-8 px-6 py-2.5 sm:px-8 sm:py-3 bg-[#632EE3] text-white font-medium text-base sm:text-lg rounded-lg shadow-md hover:bg-[#4b1fc9] focus:ring-4 focus:ring-[#632EE3]/50 active:scale-95 transition-all duration-200 ease-in-out"
        aria-label="Go back to previous page"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
