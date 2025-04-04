import React from "react";
import { useLoaderData } from "react-router-dom";
import CampaignsCard from "../components/CampaignsCard";
import CampaignTable from "../components/CampaignTable";

const AllCampaign = () => {
  const loadedCampaigns = useLoaderData();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Campaign Info</th>
            <th>Campaign Type</th>
            <th>Deadline</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            loadedCampaigns.map(campaign => <CampaignTable campaign={campaign}></CampaignTable> )
          }
          
        </tbody>
       
      </table>
    </div>
  );
};

export default AllCampaign;
