import React, { useEffect, useState } from 'react';
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import useApps from '../../Components/Hook/useApps';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installedList"));
    if (saveList) setInstalled(saveList);
  }, []);

  // const data=useApps()
  // console.log(data)

  const sortItem = () => {
    if (sortOrder === "downloads-asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-dsc") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  };
  // Uninstall apps
  // Uninstall apps
  const handleRemoveApp = (id) => {
    try {
      const stored = localStorage.getItem("installedList");
      const existingList = stored ? JSON.parse(stored) : [];

      if (!Array.isArray(existingList)) {
        console.warn(
          "Invalid data in localStorage. Resetting installed list..."
        );
        localStorage.removeItem("installedList");
        return;
      }

      const updatedList = existingList.filter((p) => p.id !== id);
      setInstalled(updatedList);

      localStorage.setItem("installedList", JSON.stringify(updatedList));
    } catch (error) {
      console.error("Error removing app:", error);
      localStorage.removeItem("installedList"); // clear corrupted data
    }
  };

  // spinner
  const { loading } = useApps();

  if (loading) return <LoadingSpinner></LoadingSpinner>;

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
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-border"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by downloads</option>
            <option value="downloads-asc">Low-&gt;High</option>
            <option value="downloads-dsc"> High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-6 px-4 md:px-8">
        {sortItem().map((p) => (
          <div
            key={p.id}
            className="card bg-base-100 shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
              {/* Image */}
              <figure className="flex-shrink-0">
                <img
                  className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-cover rounded-xl"
                  src={p.image}
                  alt={p.title}
                />
              </figure>

              {/* App Details */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-semibold text-gray-800">
                  {p.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {p.description}
                </p>

                {/* Stats */}
                <div className="flex justify-center md:justify-start items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <img className="w-5" src={downloadIcon} alt="downloads" />
                    <span className="font-medium">
                      {p.downloads.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img className="w-5" src={ratingIcon} alt="rating" />
                    <span className="font-medium">{p.ratingAvg} ★</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4 flex justify-center md:justify-end">
                  <button
                    onClick={() => handleRemoveApp(p.id)}
                    className="btn btn-error btn-sm md:btn-md text-white px-5 rounded-lg shadow hover:shadow-md hover:bg-red-600 transition-all duration-200"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;