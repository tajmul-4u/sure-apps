import { useEffect, useState } from "react";

const useApps = (url = "/allAppsData.json") => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }
        return res.json();
      })
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);  

  return { apps, loading, error };
};

export default useApps;
