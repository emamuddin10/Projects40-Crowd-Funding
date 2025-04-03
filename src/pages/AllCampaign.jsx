import React from "react";
import { useLoaderData } from "react-router-dom";
import CampaignsCard from "../components/CampaignsCard";

const AllCampaign = () => {
  const loadedCampaigns = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-5xl text-green-800 py-5">Our Campaign</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-10">
        {loadedCampaigns.map((campaign) => (
          <CampaignsCard campaign={campaign}></CampaignsCard>
        ))}
      </div>
    </div>
  );
};

export default AllCampaign;
