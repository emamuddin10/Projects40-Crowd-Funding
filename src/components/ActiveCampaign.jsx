import React, { useEffect, useState } from "react";
import CampaignsCard from "./CampaignsCard";

const ActiveCampaign = () => {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCampaign")
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl text-green-800 py-5">Our Campaign</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-10">
        {loadedData.map((campaign) => (
          <CampaignsCard campaign={campaign}></CampaignsCard>
        ))}
      </div>
    </div>
  );
};

export default ActiveCampaign;
