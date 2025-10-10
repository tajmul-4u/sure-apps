import React, { useState, useEffect, useMemo } from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";
import useApps from "../../Components/Hook/useApps";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import NotFound from "../NotFound/NotFound";

const Apps = () => {
  const loadedApps = useLoaderData();
  const allApps = useMemo(
    () => (Array.isArray(loadedApps) ? loadedApps : []),
    [loadedApps]
  );

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(allApps);

  const { loading, error } = useApps();

  // Show toast for loading error once
  useEffect(() => {
    if (error) toast.error("Failed to load apps!");
  }, [error]);

  //  Update searchResults when search or allApps change
  useEffect(() => {
    const term = search.trim().toLowerCase();

    const filtered = term
      ? allApps.filter((app) => app.title?.toLowerCase().includes(term))
      : allApps;

    // Only update state if different
    setSearchResults((prev) => {
      const prevIds = prev.map((a) => a.id).join(",");
      const newIds = filtered.map((a) => a.id).join(",");
      if (prevIds === newIds) return prev; // prevent unnecessary setState
      return filtered;
    });

    // Optional: show toast if nothing found
    if (term && filtered.length === 0) {
      toast.warn(`No app found for "${search}"`);
    }
  }, [search, allApps]);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 text-center">
          <h1 className="text-xl md:text-2xl font-bold">
            <span>({searchResults.length})</span> Our All Applications
          </h1>
          <p className="text-gray-500">
            Explore all apps developed by us. We code for millions.
          </p>
        </div>
        <div className="flex gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {searchResults.length > 0 ? (
          searchResults.map((appCard) => (
            <Link key={appCard.id} to={`/appDetails/${appCard.id}`}>
              <AppCard appCard={appCard} />
            </Link>
          ))
        ) : (
          <NotFound message={`No apps found for "${search}"`} />
        )}
      </div>
    </div>
  );
};

export default Apps;
