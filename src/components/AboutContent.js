import "./AboutContentStyles.css"

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import Project4 from "../assets/project4.png";




const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Men kimman</h1>
                <p>Men React Front-End dasturchiman.Men mijozlarim uchun javob beruvchi havfsiz wep-sayt yarataman.</p>
                <Link to="/contact">
                    <button className="btn">Aloqa</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={Project4} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;