import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { PiStethoscopeBold } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";
import { MdOutlineFoodBank, MdOutlineFlood } from "react-icons/md";


const categories = [
  {
    icon: <LuBrainCircuit className="w-6 h-6 text-teal-700" />,
    title: "Technology",
    description: "Dummy text of the printing.",
  },
  {
    icon: <FaGraduationCap className="w-6 h-6 text-teal-700" />,
    title: "Education",
    description: "Dummy text of the printing.",
    bgIcon: "bg-teal-700 text-white",
  },
  {
    icon: <IoShirt className="w-6 h-6 text-teal-700" />,
    title: "Fashion",
    description: "Dummy text of the printing.",
  },
  {
    icon: <PiStethoscopeBold className="w-6 h-6 text-teal-700" />,
    title: "Medical",
    description: "Dummy text of the printing.",
  },
  {
    icon: <MdOutlineFoodBank className="w-6 h-6 text-teal-700" />,
    title: "Food Donation",
    description: "Dummy text of the printing.",
  },
  {
    icon: <MdOutlineFlood className="w-6 h-6 text-teal-700" />,
    title: "Flood",
    description: "Dummy text of the printing.",
  },
];

export default function CampaignCategories() {
  return (
    <section className="bg-blue-50 py-12">
      <h1 className="text-center text-5xl text-green-800 py-5 mb-5">Our Categories</h1>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-4 p-6 rounded-md shadow hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 `}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
