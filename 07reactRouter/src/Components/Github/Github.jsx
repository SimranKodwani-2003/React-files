import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData(); // Fetch data from loader

  // const [data, setData] = useState(null); // Initialize with null to handle loading state

  // useEffect(() => {
  //   fetch("https://api.github.com/users/SimranKodwani-2003")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data"); // Handle API errors
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data); // Set the fetched data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {data ? (
        <>
          <p>Github Followers: {data.followers}</p>
          <img
            src={data.avatar_url}
            alt="GitHub avatar"
            width={200}
            style={{ borderRadius: "0%" }} // Optional: make the image circular
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Github;

export const githubinfoloader=async()=>{
  const response=await fetch("https://api.github.com/users/SimranKodwani-2003")
  return response.json()
}
