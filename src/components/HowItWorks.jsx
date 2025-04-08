import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { LuPencilLine, LuShare2,LuHandHeart } from "react-icons/lu";


const steps = [
  {
    icon: <LuPencilLine className="h-8 w-8 text-green-700" />,
    title: "1. Create a Campaign",
    description: "Fill out a simple form to launch your fundraising campaign.",
  },
  {
    icon: <LuShare2 className="h-8 w-8 text-green-700" />,
    title: "2. Share with Friends",
    description: "Spread your campaign via social media, messages, or email.",
  },
  {
    icon: <LuHandHeart className="h-8 w-8 text-green-700" />,
    title: "3. Collect Donations",
    description: "Receive support and contributions from people who care.",
  },
  {
    icon: <FaRegLightbulb className="h-8 w-8 text-green-700" />,
    title: "4. Achieve Your Goal",
    description: "Use the funds to bring your project or cause to life!",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">How It Works</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Fundraising on our platform is simple and effective. Just follow these four easy steps to reach your goal.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#CBFBF1] p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
