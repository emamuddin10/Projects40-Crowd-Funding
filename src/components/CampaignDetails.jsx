import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CampaignDetails = () => {
  const detailsCampaign = useLoaderData();
  const {user}= useContext(AuthContext)

  // console.log(detailsCampaign);
  const { name, description, type, photo} = detailsCampaign;
  const deadline = new Date(detailsCampaign?.date)
  const today = new Date()

  const handleDonation = ()=>{
    const donateCampaign = {
       name: detailsCampaign?.name,
       type: detailsCampaign?.type,
       photo: detailsCampaign?.photo,
       description: detailsCampaign.description,
       date: detailsCampaign?.date,
       amount: detailsCampaign?.amount,
       owenerEmail: detailsCampaign?.email,
       owenerName: detailsCampaign?.userName,
       userName:user?.displayName, userEmail: user?.email }
       console.log(deadline)

    if(deadline < today ){
      console.log(deadline,today)
      return toast.error("Sorry! The deadline for this campaign is over.")
    }
    
    fetch('https://projects40-crowd-funding-server.onrender.com/add-donation',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(donateCampaign)
    })
    .then(res=>res.json())
    .then(data => {
      // console.log(data)
      if(data.insertedId){
        Swal.fire({
                    title: "Success!",
                    text: "Thank you for your donation",
                    icon: "success"
                  });
      }
    })

  }
  return (
    <div className="flex justify-center items-center w-full min-h-fit bg-gray-100 p-4">
      <div className="w-full max-w-full shadow-lg rounded-2xl overflow-hidden bg-white">
        <img src={photo} alt={name} className="w-full h-[600px] object-cover" />
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mt-4">
            Campaign-Type : {type}
          </span>
          <span className="inline-block bg-blue-100 text-black ml-2 px-3 py-1 rounded-full text-sm font-medium mt-4">
            amount: {detailsCampaign?.amount}
          </span>
          
          <div className="mt-6">
            <button onClick={handleDonation} className="w-full btn bg-green-300">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
