import React, { useEffect, useState } from "react";
import CampaignsCard from "../components/CampaignsCard";
import CampaignTable from "../components/CampaignTable";
import Lotti from "../components/Lotti";

const AllCampaign = () => {
  const [loadedCampaigns, setLoadedCampaigns] = useState([]);
  const [orginalData, setOrginalData] = useState([])
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch("http://localhost:5000/allCampaign")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadedCampaigns(data);
        setOrginalData(data)
        setLoading(false);
      });
  }, []);

  const handleSorting =(e)=>{
    console.log(e.target.value)
    if(e.target.value == "All"){
      return setLoadedCampaigns(orginalData)
    }
    const data = orginalData.filter(item=> item?.amount <= Number(e.target.value))
    const sortingData = [...data].sort((a,b)=>a.amount - b.amount)
    setLoadedCampaigns(sortingData)
  }



  if (loading) {
    return <Lotti></Lotti>;
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold text-center my-5">All Campaign</h1>
      <div className="flex items-center justify-center bg-amber-300  ">
        <select onChange={handleSorting} defaultValue="Sorting" className="select select-success">
          <option disabled={true}>Sorting</option>
          <option>All</option>
          <option>5500</option>
          <option>150000</option>
          <option>302500</option>
        </select>
      </div>
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
                <th>Amount</th>
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
