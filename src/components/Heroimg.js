import "./HeroimgStyles.css";

import React from "react";
import Introimg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
    return <div className="hero">
        <div className="mask">
          <img className="into-img" src={Introimg} alt="Introimg" />
        </div>
        <div className="content">
            <p>Salom, Men Frilanserman.</p>
            <h1>React Dasturchi</h1>
            <div>
                <Link to="/project" className="btn">loyixalar</Link>
                <Link to="/contact" className="btn btn-light" >murojat</Link>
            </div>
        </div>
    </div>
    
};

export default HeroImg;