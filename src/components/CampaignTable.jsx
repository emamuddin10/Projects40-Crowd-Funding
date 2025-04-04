import { Link } from "react-router-dom";

const CampaignTable = ({ campaign }) => {
  const { _id, name, type, photo } = campaign;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={
                  campaign.photo
                    ? photo
                    : "https://img.daisyui.com/images/profile/demo/2@94.webp"
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
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <th>
        <Link to={`/campaign-details/${_id}`}>
          <button className="btn btn-success btn-xs">Campaign Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default CampaignTable;
