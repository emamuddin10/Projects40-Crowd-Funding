import React from "react";
import ActiveCampaign from "../components/ActiveCampaign";
import Slider from "../components/Slider";
import HowItWorks from "../components/HowItWorks";
import CampaignCategories from "../components/CampaignCategories";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
        {/* banner */}
        <Slider></Slider>
        <HowItWorks></HowItWorks>

      {/* campaign section  */}
          <ActiveCampaign></ActiveCampaign>
          <CampaignCategories></CampaignCategories>
          <Reviews></Reviews>
    </div>
  );
};

export default Home;
