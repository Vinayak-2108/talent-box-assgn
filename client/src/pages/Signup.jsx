import React, { useState } from "react";
import "../styles/signup.css";
import Navbar from "../components/Navbar";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <>
            <Navbar />
            <div className="h-full flex flex-col items-center justify-center">

            <div className="signup-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            className="signup-inputs"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            className="signup-inputs"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            className="signup-inputs"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                    <br />
                    <button className="signup-button" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
            </div>
        </>
    );
}

export default SignUp;
