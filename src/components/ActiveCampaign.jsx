import React, { useEffect, useState } from "react";
import CampaignsCard from "./CampaignsCard";

const ActiveCampaign = () => {
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch("https://projects40-croud-funding-server.vercel.app/allCampaign")
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-center text-5xl text-green-800 py-5">Our Campaign</h1>
      <div>
        {
          loadedData?.length > 0 ? 
          (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-5 lg:w-11/12 mx-auto my-5 lg:my-10">
            {loadedData?.slice(0,6).map((campaign) => (
              <CampaignsCard campaign={campaign}></CampaignsCard>
            ))}
          </div>
          )

          : 
           
         (
           <div className="flex items-center justify-center">
             <h1> You have no any campaign data</h1>
           </div> 
         )
        }
      </div>
    </div>
  );
};

export default ActiveCampaign;
