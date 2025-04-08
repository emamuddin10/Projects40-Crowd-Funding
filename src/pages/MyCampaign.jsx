import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import CampaignTable from "../components/CampaignTable";
import MyCampaignTable from "../components/MyCampaignTable/MyCampaignTable";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [myCampaign, setMyCampaign] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-campaign/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyCampaign(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto my-5">
      <h1 className="text-2xl font-bold text-center my-5">My Campaign</h1>
      
      {
        myCampaign?.length > 0 ? (
          <div className="mx-5 lg:mx-20">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myCampaign.map((campaign,inx) => (
              <MyCampaignTable key={inx} index={inx} campaign={campaign}></MyCampaignTable>
            ))}
          </tbody>
        </table>
      </div>
        ) 
        : 
        (
          <div className="flex items-center justify-center ">
            You have no Campaign
          </div>
        )
      }
    </div>
  );
};

export default MyCampaign;
