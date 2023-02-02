import "./FotterStayles.css"

import React from "react"

import { FaHome, 
        FaPhone, 
        FaMailBulk, 
        FaFacebook, 
        FaTwitter,
        FaLinkedin } from "react-icons/fa";

const Fotter = () => {
    return (
        <div className="fotter" >
            <div className="fotter-container" >
                <div className="left" >
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Toshkent viloyati</p>
                            <p>Olmaliq shahar</p>
                        </div>
                        </div>
                        <div className="phone">
                            <h4>
                                <FaPhone 
                                size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                +99894-444-40-00</h4>

                        </div>

                        <div className="email">
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                futuredesign@mail.com</h4>
                        </div>
                    
                </div>

                <div className="right">
                    <h4>Kompaniya haqida</h4>
                    <p className="">Bu men Khasanboyev Abdumurod.Men yangi loyiha va dizayn muammolarini muhokama qilishdan zavqlanaman</p>
                    <div className="social">
                    <FaFacebook 
                    size={30}
                     style={{ color: "#fff", marginRight: "1rem" }} 
                     />
                    <FaTwitter 
                    size={30}
                     style={{ color: "#fff", marginRight: "1rem" }} 
                     />
                    <FaLinkedin 
                    size={30}
                     style={{ color: "#fff", marginRight: "1rem" }} 
                     />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter