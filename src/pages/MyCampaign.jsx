import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import CampaignTable from "../components/CampaignTable";
import MyCampaignTable from "../components/MyCampaignTable/MyCampaignTable";
import Lotti from "../components/Lotti";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [myCampaign, setMyCampaign] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://projects40-crowd-funding-server.onrender.com/my-campaign/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyCampaign(data);
        setLoading(false)
      });
  }, [user]);

  if(loading){
    return <Lotti></Lotti>
  }

  const handleDelete = (id)=>{
    fetch(`https://projects40-crowd-funding-server.onrender.com/delete-campaign/${id}`,{
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data)
      const remaining = myCampaign.filter(item=> item._id !== id)
      setMyCampaign(remaining)
      if(data.deletedCount > 0){
        Swal.fire({
          title: "The Campaign deleted successfully!",
          icon: "success",
          draggable: true
        });
      }
    })

  }

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
              <MyCampaignTable key={inx} index={inx} campaign={campaign} handleDelete={handleDelete}></MyCampaignTable>
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
