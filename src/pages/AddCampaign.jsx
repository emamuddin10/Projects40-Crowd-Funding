import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddCampaign = () => {
  const {user}=useContext(AuthContext)
  console.log(user)
 
  const [formData, setFormData] = useState({
    name: "Winter Clothes Drive",
    description: "Donate warm clothes to those in need",
    type: "Personal Issue",
    photo: "https://example.com/photo.jpg",
    userName:user?.displayName,
    email:user.email,
    date:'01.01.2005'
  });
  

  const handleChange = (event) => {
    console.log(event.target.name)
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddCampaign = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/addCampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  console.log(formData)

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-green-900 text-center text-3xl font-semibold">Add a Campaign</h1>
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
                <input type="text" name="chef" className="input w-full" placeholder="Enter Amount" />
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
              <input type="submit" className="btn w-full bg-green-300 mt-4" value="Add Campaign" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCampaign;
 