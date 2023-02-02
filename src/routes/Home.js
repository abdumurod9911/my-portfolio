import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Work from "../components/Work"
import Fotter from "../components/Fotter";


const Home  = () => {
    return <div>
        <Navbar/>
        <Heroimg />
        <Work />
        <Fotter />
    </div>; 
};

export default Home;