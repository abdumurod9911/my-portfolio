import React from "react";

import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";


const Project = () => {
    return (
        <div>
          <Navbar />
          <HeroImg2 heading="LOYIXALAR." text="Eng so`ngi ishlarim" />
          <Work />
          <PricingCard />
          <Fotter />
        </div>
    )
}

export default Project;