import React from "react";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Biz bilan bog`lanish" text="Keling suhbatlashamiz" />
            <Form />
            <Fotter />
        </div>
    )
}

export default Contact;