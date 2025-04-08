import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaignTable = ({index,campaign,handleDelete}) => {
    const { _id, name, type, date } = campaign;
   
   
    return (
        <tr>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={
                    campaign.photo
                      ? campaign?.photo
                      : "https://i.ibb.co.com/Q345g2mX/ea-cover-photo-cumilla-unit-img-6921-1-01-0.jpg"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>
          {type}
          <br />
          <span className="badge badge-ghost badge-sm">
             Support our campaign
          </span>
        </td>
        <td>{campaign?.date ? date : <p>2021-04-04</p>} </td>
        <th>
            <button onClick={()=>handleDelete(_id)}  className="btn btn-success btn-xs">Delete</button>
        </th>
        <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-success btn-xs">Update</button>
        </Link>
      </th>
      </tr>
    );
};

export default MyCampaignTable;