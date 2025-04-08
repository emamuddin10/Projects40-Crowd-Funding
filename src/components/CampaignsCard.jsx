import React from "react";
import { Link } from "react-router-dom";

const CampaignsCard = ({ campaign }) => {
  const { _id, name, description,  photo } = campaign;
  return (
    <div className="card bg-green-300 w-96 shadow-sm">
      <figure>
        <img
          className="w-full h-60"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <div>
          <span className="bg-yellow-200 rounded-full py-1 px-3">{campaign?.date ? campaign?.date : "Date not available"} </span>
        </div>
        <div className="card-actions justify-start mt-3">
          <Link to={`/campaign-details/${_id}`}><button className="btn bg-green-500 text-white">Campaign Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignsCard;
