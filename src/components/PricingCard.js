import "./PricingCardStyles.css"

import React from "react"
import { Link } from "react-router-dom";

const PricingCard = () => {
    return  <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Asosiy -</h3>
                <span className="bar"></span>
                <p className="btc">Bepul</p>
                <p>- 3 Kun -</p>
                <p>- 3 Sahifa -</p>
                <p>- Tanlangan -</p>
                <p>- Mukammal Dizayn -</p>
                <Link to="/contact" className="btn">
                    HOZIR SOTIB OLISH
                </Link>
            </div>

            <div className="card">
                <h3>- Boshlang`ich daraja -</h3>
                <span className="bar"></span>
                <p className="btc">4900 sum</p>
                <p>- 2 Kun -</p>
                <p>- 5 Sahifa -</p>
                <p>- Tanlangan -</p>
                <p>- Mukammal Dizayn -</p>
                <Link to="/contact" className="btn">
                    HOZIR SOTIB OLISH
                </Link>
            </div>

            <div className="card">
                <h3>- Yuqori daraja -</h3>
                <span className="bar"></span>
                <p className="btc">5600 sum</p>
                <p>- 5 Kun -</p>
                <p>- 8 Sahifa -</p>
                <p>- Tanlangan -</p>
                <p>- Mukammal Dizayn -</p>
                <Link to="/contact" className="btn">
                    HOZIR SOTIB OLISH
                </Link>
            </div>

        </div>
    </div>
    
}

export default PricingCard