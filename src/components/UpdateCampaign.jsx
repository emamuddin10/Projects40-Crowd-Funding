import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const UpdateCampaign = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

  const [formData, setFormData] = useState({
    name: loadedData?.name,
    description: loadedData?.description,
    type: loadedData?.type,
    photo: loadedData?.photo,
    userName: loadedData?.userName,
    email: loadedData?.email,
    date: loadedData?.date,
    amount: 5500,
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddCampaign = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch(`https://projects40-crowd-funding-server.onrender.com/update/${loadedData._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your Campaign have been updated.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <h1 className="text-green-900 text-center text-3xl font-semibold">
        Update a Campaign
      </h1>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleAddCampaign} className="fieldset w-full">
            <div className="flex gap-10">
              <div className="w-full space-y-2">
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Enter Campaign Name"
                />
                <label className="fieldset-label">Donation Amount</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="fieldset-label">Campaign Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Enter description"
                />
                <label className="fieldset-label">Campaign Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="input w-full"
                >
                  <option value="Personal Issue">Personal Issue</option>
                  <option value="Startup">Startup</option>
                  <option value="Business">Business</option>
                  <option value="Creative Ideas">Creative Ideas</option>
                </select>
              </div>
            </div>
            <div>
              <label className="fieldset-label">Photo</label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="input w-full"
                placeholder="Enter Photo Url"
              />
            </div>
            <div>
              <label className="fieldset-label">Deadline</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input w-full"
              />
            </div>
            <div>
              <label className="fieldset-label">User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                readOnly
                className="input w-full"
                placeholder="Enter Photo Url"
              />
            </div>
            <div>
              <label className="fieldset-label">User Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly
                className="input w-full"
                placeholder="Enter Photo Url"
              />
            </div>
            <div>
              <input
                type="submit"
                className="btn w-full bg-green-300 mt-4"
                value="Update Campaign"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCampaign;
