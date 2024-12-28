import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Set loading to true on fetch start
    fetch(`https://v6.exchangerate-api.com/v6/d80999989e64529a691540d5/latest/USD/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency] || {}); // Handle missing data gracefully
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.error('Error fetching currency data:', err);
        setLoading(false); // Set loading to false on error
      });
  }, [currency]);

  return { data, loading }; // Return both data and loading state
}

export default useCurrencyInfo;
