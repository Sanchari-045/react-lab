import React, { useState } from "react";
export default function Registration() {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    return(
        <section>
        <div className="form-container">
            <h2>Registration Form</h2>
            <form className="form">
                <label className="name">Name:</label>
                <input type="text" placeholder="Enter your name" className="name2"/><br/><br/>
                <label className="mail">Email:</label>
                <input type="email" placeholder="Enter your email" className="mail2"/><br/><br/>
                <label className="pass">Password:</label>
                <input type="password" placeholder="Enter your password"className="pass2"/><br/><br/>
                <button type="submit" className="reg">Register</button>
            </form>
        </div>
        </section>
    )
}
