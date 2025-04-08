import React from "react";

const Reviews = () => {
  return (
    <div className="p-5 lg:p-10">
      <h1 className="text-2xl font-bold text-center my-5">Our Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10  ">
        <div className="p-10 bg-green-400 hover:bg-[#CBFBF1] transition-all duration-200 text-center">
          <div className="mb-3">
            <img src="" alt="" />
            <h1>name:</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem enim
            vel similique, obcaecati incidunt labore numquam laborum dolorem
            exercitationem corporis!
          </p>
        </div>
        {/* card 2 */}
        <div className="p-10 bg-green-400 hover:bg-[#CBFBF1] transition-all duration-200 text-center">
          <div className="mb-3">
            <img src="" alt="" />
            <h1>name:</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem enim
            vel similique, obcaecati incidunt labore numquam laborum dolorem
            exercitationem corporis!
          </p>
        </div>
        {/* card 3 */}
        <div className="p-10 bg-green-400 hover:bg-[#CBFBF1] transition-all duration-200 text-center">
          <div className="mb-3">
            <img src="" alt="" />
            <h1>name:</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem enim
            vel similique, obcaecati incidunt labore numquam laborum dolorem
            exercitationem corporis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
