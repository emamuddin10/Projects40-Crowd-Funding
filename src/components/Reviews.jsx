import React from "react";

const Reviews = () => {

  const reviews = [
    {
      name: "Tania Rahman",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Amazing platform! Great for launching new ideas. User-friendly and highly supportive environment for beginners and creators alike.",
    },
    {
      name: "Hasibul Islam",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Got my first project funded here. Excellent experience with helpful support. Highly recommended for early-stage startups.",
    },
    {
      name: "Nusrat Jahan",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Very clean and easy-to-use interface. Loved how smooth the process was. A great place for creators.",
    },
  ];


  return (
    <div className="p-5 lg:p-10">
      <h1 className="text-2xl font-bold text-center my-5">Our Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10  ">
        {
          reviews?.map(item=><div key={item?.name} className="p-10 bg-green-400 hover:bg-[#CBFBF1] transition-all duration-200 text-center">
            <div className="mb-3">
              <img className="mx-auto size-28 rounded-full" src={item?.image} alt="" />
              <h1 className="text-xl">{item.name} </h1>
            </div>
            <p>
              {item?.text}
            </p>
          </div>)
        }
        
      </div>
    </div>
  );
};

export default Reviews;
