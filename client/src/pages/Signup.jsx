import React, { useState } from "react";
import "../styles/signup.css";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { register_user } from "../controllers/user";

function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            user_name: name,
            user_email: email,
            user_password: password,
        };
        console.log(obj);
        console.log("hi");
        register_user(obj).then((data) => {
            alert(data.message);
            console.log(data);
        });
        navigate("/login");
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
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                className="signup-inputs"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                className="signup-inputs"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </label>
                        <br />
                        <button className="signup-button" type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
                <Link to="/login">Already have an accout? Login Here</Link>
            </div>
        </>
    );
}

export default SignUp;
