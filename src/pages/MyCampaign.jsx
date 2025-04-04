import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import CampaignTable from "../components/CampaignTable";

const MyCampaign = () => {
    const {user}=useContext(AuthContext)
    const [myCampaign,setMyCampaign]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/my-campaign/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setMyCampaign(data)
        })
    },[])
   
    return (
        <div className="overflow-x-auto">
            <h1>My Campaign</h1>
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
              myCampaign.map(campaign => <CampaignTable campaign={campaign}></CampaignTable> )
            }
            
          </tbody>
         
        </table>
      </div>
    );
};

export default MyCampaign;