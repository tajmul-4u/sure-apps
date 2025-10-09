import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { useParams } from "react-router";
import useApps from "../../Components/Hook/useApps";
import ReviewChart from "../ChartRating/ReviewChart";

const AppDetails = () => {
  
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  // console.log(params)
  const app = apps.find((p) => String(p.id) === id);
  // console.log(app)

  if (loading) return <p>Loading...</p>;
  if (error) return alert("app not found");
  const { title, image, description, downloads, ratingAvg, companyName } = app;
  // console.log("Ratings data:", app.ratings, Array.isArray(app.ratings));
 const formattedRatings = Object.entries(app.ratings).map(([name, count]) => ({
   name,
   count,
 }));

console.log(formattedRatings)

//   add to installed
const handleInstalledList = () => {
  try {
     
    const stored = localStorage.getItem("installedList");
    let existingList = [];

    if (stored) {
      const parsed = JSON.parse(stored);
       
      if (Array.isArray(parsed)) {
        existingList = parsed;
      } else {
        console.warn("installedList was not an array, resetting...");
        existingList = [];
      }
    }

    //duplicates
    const isAlreadyInstalled = existingList.some((item) => item.id === app.id);

    if (isAlreadyInstalled) {
      alert("App is already installed!");
      return;
    }

    // Add new app
    const updatedList = [...existingList, app];
    localStorage.setItem("installedList", JSON.stringify(updatedList));

    alert(`${app.title} installed successfully!`);
  } catch (error) {
    console.error("Error handling installed list:", error);
    localStorage.removeItem("installedList"); 
  }
};

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 bg-base-100 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
      {/* Top card section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Image */}
        <figure className="flex-shrink-0">
          <img
            className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-cover rounded-xl"
            src={image}
            alt={title}
          />
        </figure>

        {/* Content */}
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
              <p className="text-gray-500">{companyName}</p>
            </div>
            <button
              onClick={handleInstalledList}
              className="btn btn-primary btn-sm md:btn-md"
            >
              Install Now
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
            <div className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              <p className="text-sm text-gray-500">Total Downloads</p>
              <img className="w-8 mx-auto mt-2" src={downloadIcon} alt="" />
              <h1 className="text-lg font-bold mt-2">{downloads}</h1>
              <p className="text-xs text-green-600 mt-1">
                ↑ 23% more than last month
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              <p className="text-sm text-gray-500">Total Reviews</p>
              <img className="w-8 mx-auto mt-2" src={ratingIcon} alt="" />
              <h1 className="text-lg font-bold mt-2">906K</h1>
              <p className="text-xs text-green-600 mt-1">
                ↑ 43% more than last month
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              <p className="text-sm text-gray-500">Rating Avg</p>
              <h1 className="text-lg font-bold mt-2">{ratingAvg}</h1>
              <p className="text-xs text-green-600 mt-1">
                ↑ 53% more than last month
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bar chart */}
      <div className="mt-6">
        <ReviewChart ratings={formattedRatings}></ReviewChart>
      </div>
      {/* Description */}
      <div className="border-t pt-4">
        <h1 className="text-lg font-semibold mb-1">Description</h1>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
