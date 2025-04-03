import React from "react";
import ActiveCampaign from "../components/ActiveCampaign";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
        {/* banner */}
      <section>
        <Slider></Slider>
      </section>

      {/* campaign section  */}
      <section>
          <ActiveCampaign></ActiveCampaign>
      </section>
    </div>
  );
};

export default Home;
