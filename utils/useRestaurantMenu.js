import React,{ useState, useEffect } from "react";

const useRestaurantMenu = (id) => {

  const [data, setData] = useState(null); // Initialize state as null or empty array
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    getUserData();
  }, []); // Empty dependency array means this runs only once after the component mounts

  return { data, loading }; 
};

export default useRestaurantMenu;
