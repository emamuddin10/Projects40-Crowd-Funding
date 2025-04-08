import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import CampaignsCard from "../components/CampaignsCard";
import Lotti from "../components/Lotti";

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [donation, setDonation] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://projects40-croud-funding-server.vercel.app/myDonation/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {

        console.log(data);
        setDonation(data);
        setLoading(false)
      });
  }, [user]);

  if(loading){
    return <Lotti></Lotti>
  }

  return (
    <div className="p-5 lg:p-10">
      <h1 className="text-2xl font-bold text-center my-5">My Donation</h1>
      {donation?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {donation?.map((item) => (
            <CampaignsCard key={item?._id} campaign={item}></CampaignsCard>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1>you have no added any donation</h1>
        </div>
      )}
    </div>
  );
};

export default MyDonation;
