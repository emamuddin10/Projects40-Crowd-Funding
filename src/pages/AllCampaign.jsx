import React, { useEffect, useState } from "react";
import CampaignsCard from "../components/CampaignsCard";
import CampaignTable from "../components/CampaignTable";

const AllCampaign = () => {
  const [loadedCampaigns, setLoadedCampaigns] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/allCampaign")
      .then((res) => res.json())
      .then((data) => {
        setLoadedCampaigns(data);
        setLoading(true)
      });
  }, []);

  if(loading){
    return <div className="flex text-center justify-center">Data is loading..... </div>
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold text-center my-5">All Campaign</h1>
      <div className="mx-5 lg:mx-20">
        {loadedCampaigns?.length > 0 ? (
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
              {loadedCampaigns.map((campaign) => (
                <CampaignTable campaign={campaign}></CampaignTable>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center">
            <h1>No data Fount</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCampaign;
