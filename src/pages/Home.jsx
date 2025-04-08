import React from "react";
import ActiveCampaign from "../components/ActiveCampaign";
import HowItWorks from "../components/HowItWorks";
import CampaignCategories from "../components/CampaignCategories";
import Reviews from "../components/Reviews";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <HowItWorks></HowItWorks>
          <ActiveCampaign></ActiveCampaign>
          <CampaignCategories></CampaignCategories>
          <Reviews></Reviews>
    </div>
  );
};

export default Home;
