import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#4F46E5" size={60} />
    </div>
  );
};

export default LoadingSpinner;
