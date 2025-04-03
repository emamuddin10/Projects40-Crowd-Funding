import React from "react";
import { Link } from "react-router-dom";

const CampaignsCard = ({ campaign }) => {
  const { _id, name, description,  photo } = campaign;
  return (
    <div className="card bg-green-200 w-96 shadow-sm">
      <figure>
        <img
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/campaign-details/${_id}`}><button className="btn bg-green-300">Campaign Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignsCard;
