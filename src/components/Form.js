import "./FormStyles.css"

import React from "react"

const Form = () => {
    return <div className="form">
        <form action="">
            <label>Ismingiz</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Mavzu</label>
            <input type="text" />
            <label>Xabar</label>
            <textarea rows="6" placeholder="Xabaringizni shu yerga yozing" ></textarea>
            <button className="btn">Yuborish</button>

        </form>
    </div>
}

export default Form